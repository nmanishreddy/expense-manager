import * as actionTypes from "./actionTypes"

// export const  addTransaction = (transaction: ITransaction) => {
//   const action: TransactionAction = {
//     type: actionTypes.ADD_TRANSACTION,
//     payload : transaction,
//   }

//   return simulateHttpRequest(action)
// }
export const addTransaction = (transaction : ITransaction): TransactionAction => ({
  type: actionTypes.ADD_TRANSACTION,
  transaction
})

export const removeTransaction = (transaction : ITransaction): TransactionAction => ({
  type: actionTypes.REMOVE_TRANSACTION,
  transaction
})

// export function removeTransaction(transaction: ITransaction) {
//   const action: TransactionAction = {
//     type: actionTypes.REMOVE_TRANSACTION,
//     transaction,
//   }
//   return simulateHttpRequest(action)
// }

// export function simulateHttpRequest(action: TransactionAction) {
//   return (dispatch: DispatchType) => {
//     setTimeout(() => {
//       dispatch(action)
//     }, 500)
//   }
// }