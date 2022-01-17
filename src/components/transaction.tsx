import * as React from "react"
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"

type Props = {
  transaction : ITransaction
  removeTransaction: (transaction : ITransaction) => void
}

export const Transaction: React.FC<Props> = ({ transaction, removeTransaction }) => {
  const dispatch: Dispatch<any> = useDispatch()

  const deleteTransaction = React.useCallback(
    (transaction : ITransaction) => dispatch(removeTransaction(transaction)),
    [dispatch, removeTransaction]
  )

  return (
    <div className="Article">
      <div>
        <h1>{transaction.title}</h1>
        <p>{transaction.amount}</p>
      </div>
      <button onClick={() => deleteTransaction(transaction)}>Delete</button>
    </div>
  )}