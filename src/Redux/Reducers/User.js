import { SET_USER } from '../Constants';

const initialState = {
  user: [],
  status: null,
};

const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: payload,
        status: 'fulfilled',
      };
    default: return state;
  }
}

export default user;