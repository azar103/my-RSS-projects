const count = () => {
  if (window.innerWidth < 1100 && window.innerWidth > 880) {
    return 3;
  } else if (window.innerWidth < 880 && window.innerWidth > 620) {
    return 2;
  } else if (window.innerWidth < 620) {
    return 1;
  } else {
    return 4;
  }
};

export default function commonReducer(store = {}, action) {
  switch (action.type) {
    case 'MAKE_REQUEST': {
      return {
        ...store,
        ...{
          videosInfo: action.payload[0],
          isLoading: false,
          nextToken: action.payload[1],
          search: action.payload[2],
          countElements: count(),
          curentPosition: 0,
          indicatorsNumber: [1, 2, 3, 4],
        },
      };
    }
    case 'SPINNER_LOADING': {
      return { ...store, isLoading: action.payload };
    }
    case 'CHANGE_LIST': {
      if (action.payload > 0) {
        store.curentPosition += 1;
      } else if (action.payload < 0) {
        store.curentPosition = store.curentPosition
          ? store.curentPosition - 1
          : store.curentPosition;
      }

      if (store.curentPosition === store.indicatorsNumber[3]) {
        for (let i = 0; i < 4; i += 1) {
          store.indicatorsNumber[i] = store.indicatorsNumber[i] + 4;
        }
      } else if (store.curentPosition === store.indicatorsNumber[0] - 2) {
        for (let i = 0; i < 4; i += 1) {
          store.indicatorsNumber[i] = store.indicatorsNumber[i] - 4;
        }
      }
      return store;
    }
    case 'LOAD_MORE_VIDEOS': {
      store.videosInfo = store.videosInfo.concat(action.payload[0]);
      store.isLoading = false;
      store.nextToken = action.payload[1];
      return store;
    }
    case 'RESIZE_PAGE': {
      if (store.countElements > 0) {
        store.countElements = action.payload;
        store.indicatorsNumber = [1, 2, 3, 4].slice();
        store.curentPosition = 0;
      }
      return store;
    }
    case 'SWITCH_VIDEOS': {
      store.curentPosition = action.payload;
      return store;
    }
  }
}
