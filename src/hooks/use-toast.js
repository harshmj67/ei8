import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 5000

let count = 0
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map()

export const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }
    case "DISMISS_TOAST": {
      const { toastId } = action
      if (toastId) {
        const timeout = setTimeout(() => {
          toastTimeouts.delete(toastId)
          dispatch({ type: "REMOVE_TOAST", toastId: toastId })
        }, TOAST_REMOVE_DELAY)
        toastTimeouts.set(toastId, timeout)
      }
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined ? { ...t, open: false } : t
        ),
      }
    }
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners = []
let memoryState = { toasts: [] }

function dispatch(action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => listener(memoryState))
}

function toast({ ...props }) {
  const id = genId()
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })
  
  dispatch({
    type: "ADD_TOAST",
    toast: { ...props, id, open: true, onOpenChange: (open) => { if (!open) dismiss() } },
  })
  
  return { id, dismiss }
}

function useToast() {
  const [state, setState] = React.useState(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) listeners.splice(index, 1)
    }
  }, [state])

  return { ...state, toast, dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }) }
}

export { useToast, toast }