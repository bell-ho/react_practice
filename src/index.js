import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createLogger } from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import rootReducer, { rootSaga } from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { Hydrate, QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { MaterialUIControllerProvider } from "./context";
import Routes from "./routes";
import SignIn from "./layouts/authentication/sign-in";

const logger = createLogger();
const root = ReactDOM.createRoot(document.getElementById("root"));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <MaterialUIControllerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MaterialUIControllerProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>
);

reportWebVitals();
