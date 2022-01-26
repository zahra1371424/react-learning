export const ADD_USER = 'ADD_USER';

export const initialState = {
  userInfo: [],
};

export const addUser = (userInfo) => ({
  type: ADD_USER,
  userInfo,
});


export const addUserReducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return {
      ...state,
      userInfo: state.userInfo.concat(action.userInfo),
    };
  }
};