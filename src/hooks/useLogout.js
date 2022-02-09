import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const logout = async () => {
    // resetting the error
    setError(null)
    setIsPending(true)

    // sign the user out
    try {
      await projectAuth.signOut()

      // dispatch logout action
      dispatch({ type: 'LOGOUT' })

      // update state
      if (!isCancelled) {
        // checking if the component was unmounted before the state update
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      if (!isCancelled) {
        // checking if the component was unmounted before the state update
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  // cleanup function
  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { logout, error, isPending }
}