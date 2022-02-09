import { useState, useEffect } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')

  const handleSubmit = (event) => {
    event.preventDefault()
    addDocument({
      uid,
      name,
      amount
    })
  }

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('')
      setAmount('')
    }
  }, [response.success])

  return (
    <>
      <h3>Add a transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Transaction name:</span>
          <input
            type='text'
            required
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Amount ($):</span>
          <input
            type='number'
            required
            onChange={(event) => setAmount(event.target.value)}
            value={amount}
          />
        </label>
        <button>Add transaction</button>
      </form>
    </>
  )
}
