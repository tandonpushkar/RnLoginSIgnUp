import {createSlice, createSelector} from '@reduxjs/toolkit';
import {ScreenNames, reducers} from '@constants';

interface LoginSlice {
  signUpData: {};
  loginData: {};
}

const initialState = {
  signUpData: {},
  loginData: {},
} as LoginSlice;

export const loginSlice = createSlice({
  name: reducers.LOGIN,
  initialState,
  reducers: {
    setSignUpData(state, action) {
      let signUpDataCopy = {
        ...state.signUpData,
        [action?.payload?.email]: action.payload,
      };
      console.log('!!@@ cehck reduz sign up', signUpDataCopy);
      state.signUpData = signUpDataCopy;
      state.loginData = action.payload;
    },
    setLoginData(state, action) {
      state.loginData = action.payload;
    },
  },
});

export const selectLoginSlice = createSelector(
  (state: any) => ({
    signUpData: state[reducers.LOGIN].signUpData,
    loginData: state[reducers.LOGIN].loginData,
  }),
  state => state,
);

export const {setSignUpData, setLoginData} = loginSlice.actions;
