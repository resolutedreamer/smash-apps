import RECEIVE_POOL_ITEM from '../actions/pool_actions';

const poolReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POOL_ITEM:
      let newState = Object.assign([], state);
      newState.push(action.item);
      return newState;
    default:
      return state;
  }
}