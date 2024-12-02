import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../types';

interface UserState {
  username: string;
  credits: number,
  avatar: number,
  connected: boolean
}

const initialState: UserState = {
  username: "",
  credits: 0,
  avatar: 1,
  connected: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setCredits: (state, action: PayloadAction<number>) => {
      state.credits = action.payload;
    },
    setAvatar: (state, action: PayloadAction<number>) => {
      state.avatar = action.payload;
    },
    updateCredits: (state, action: PayloadAction<number>) => {
      state.credits += action.payload;
    },
    resetUser: (state) => {
      state.username = "";
      state.credits = 0;
      state.avatar = 0;
    },
    updateConnection: (state, action: PayloadAction<boolean>) => {
      state.connected = action.payload;
    },
  }
});

export const { setUsername, setCredits, setAvatar, updateCredits, resetUser, updateConnection } = userSlice.actions;
export default userSlice.reducer;
