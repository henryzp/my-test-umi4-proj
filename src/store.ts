import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const middleware: any[] = [];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware({ immutableCheck: false }), ...middleware],
});

const typeStore = configureStore({
  reducer: reducers,
});

sagaMiddleware.run(sagas);

export type TStore = typeof store;

export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof typeStore.dispatch;

export default store;
