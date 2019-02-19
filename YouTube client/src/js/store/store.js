import withAsync from './reducers/withAsync';
import commonReducer from './reducers/index';

function createStore(initialDate = {}, reducer, storeModifier) {
  let state = initialDate;
  let listeners = [];

  return storeModifier({
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(elem => elem(state));
    },
    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(elem => elem !== listener);
      };
    },
  });
}

export default createStore({}, commonReducer, withAsync);
