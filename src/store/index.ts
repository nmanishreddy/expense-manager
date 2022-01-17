import * as React from "react"

import { createStore, applyMiddleware, Store } from "redux"



import reducer from "./reducer"

const store: Store<TransactionState, TransactionAction>  = createStore(reducer)

export default store;