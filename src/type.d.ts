interface ITransaction {
    id: number
    title: string
    amount: number
  }
  
  type TransactionState = {
    transactions: ITransaction[]
  }
  
  type TransactionAction = {
    type: string
    transaction: ITransaction
  }
  
  type DispatchType = (args: TransactionAction) => TransactionAction