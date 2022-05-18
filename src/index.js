import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createLogger } from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MaterialUIControllerProvider } from "./context";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const queryClient = new QueryClient();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MaterialUIControllerProvider>
          <App />
        </MaterialUIControllerProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
