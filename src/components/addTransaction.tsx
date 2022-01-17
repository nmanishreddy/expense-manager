

import * as React from "react"

type Props = {
  saveTransaction: (transaction : ITransaction | any) => void
}

export const AddTransaction: React.FC<Props> = ({ saveTransaction }) => {
  const [transaction , setTransaction] = React.useState<ITransaction | {}>()

  const handleTransactionData = (e: React.FormEvent<HTMLInputElement>) => {
    setTransaction({
      ...transaction,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    saveTransaction(transaction)
  }

  return (
      
    <form onSubmit={addNewTransaction} >
       <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleTransactionData}
      />
      <input
        type="number"
        id="amount"
        placeholder="Amount"
        onChange={handleTransactionData}
      />
      <button disabled={transaction === undefined ? true : false}>
        Add Transaction
      </button>
    </form>
  )
}