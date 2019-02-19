export default function(store) {
  const dispatch = store.dispatch;
  store.dispatch = function(action) {
    if (action.payload.subscribe) {
      action.payload.subscribe(data => dispatch({ ...action, payload: data }));
    } else {
      dispatch(action);
    }
  };
  return store;
}
