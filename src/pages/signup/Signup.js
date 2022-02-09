import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
import styles from './Signup.module.css'

export default function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (event) => {
    event.preventDefault()
    signup(email, password, displayName)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type='email'
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          type='password'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          type='text'
          onChange={(event) => setDisplayName(event.target.value)}
          value={displayName}
        />
      </label>
      { isPending ? <button className="btn" disabled>Loading...</button> : <button className="btn">Signup</button> }
      { error ? <p>{error}</p> : null }
    </form>
  )
}
