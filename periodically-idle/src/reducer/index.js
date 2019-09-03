const mainReducer = (state = {}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, num: ++state.num};
      default:
        return state;
    }
  };

  export default mainReducer