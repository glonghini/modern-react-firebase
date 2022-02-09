import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    // resetting the error
    setError(null)
    setIsPending(true)

    // sign the user in
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })

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

  return { login, error, isPending }
}