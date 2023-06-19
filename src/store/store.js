import { applyMiddleware, combineReducers, createStore } from "redux"
import ArticlesReducers from "./reducers/articles/index.js"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export const rootReducer = combineReducers({
    articles: ArticlesReducers
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
