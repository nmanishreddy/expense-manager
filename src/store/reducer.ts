import * as actionTypes from "./actionTypes"

const initialState: TransactionState = {
  transactions: [
    {
      id: 1,
      title: "item 1",
      amount: 10
    },
    {
      id: 2,
      title: "item 2",
      amount: 10
    },
  ],
}

const reducer = (
    state: TransactionState = initialState,
    action: TransactionAction
  ): TransactionState => {
    switch (action.type) {
      case actionTypes.ADD_TRANSACTION:
        const newTransaction: ITransaction = {
          id: Math.random(), // not really unique
          title: action.transaction.title,
          amount: action.transaction.amount,
        }
        return {
          ...state,
          transactions: state.transactions.concat(newTransaction),
        }
      case actionTypes.REMOVE_TRANSACTION:
        const updatedTransactions: ITransaction[] = state.transactions.filter(
          transaction => transaction.id !== action.transaction.id
        )
        return {
          ...state,
          transactions: updatedTransactions,
        }
    }
    return state
  }
  

  export default reducer;