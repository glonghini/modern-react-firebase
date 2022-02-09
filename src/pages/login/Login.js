import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import styles from './Login.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isPending } = useLogin()

  const handleSubmit = (event) => {
    event.preventDefault()
    login(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>
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
      { isPending ? <button className="btn" disabled>Loading...</button> : <button className="btn">Login</button> }
      { error ? <p>{ error }</p> : null }
    </form>
  )
}
