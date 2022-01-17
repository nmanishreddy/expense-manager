import * as actionTypes from "./actionTypes"

export const addTransaction = (transaction : ITransaction): TransactionAction => ({
  type: actionTypes.ADD_TRANSACTION,
  transaction
})

export const removeTransaction = (transaction : ITransaction): TransactionAction => ({
  type: actionTypes.REMOVE_TRANSACTION,
  transaction
})
