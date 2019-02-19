const Observable = {
  fromPromise: promise => ({
    subscribe: observer => promise.then(response => observer(response)),
  }),
};

export default Observable;
