import * as React from "react"
import './App.css';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import { Transaction } from "./components/transaction"
import { AddTransaction } from "./components/addTransaction"

import { addTransaction, removeTransaction } from "./store/actionCreators"


const App: React.FC = () => {
  const transactions: readonly ITransaction[] = useSelector(
    (state: TransactionState) => state.transactions,
    shallowEqual
  )

  const dispatch = useDispatch();

  const saveTransaction = (transaction: ITransaction) => dispatch(addTransaction(transaction))
    
  

  return (
    <main className="App">
      <h1>My Transactions</h1>
      <AddTransaction saveTransaction={saveTransaction} />
      {transactions.map((transaction: ITransaction) => (
        <Transaction
          key={transaction.id}
          transaction={transaction}
          removeTransaction={removeTransaction}
        />
      ))}
    </main>
  )
}

export default App