import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Game } from '../../types';

interface UserState {
  username: string;
  credits: number,
  avatar: number,
  favGames: Game[]
}

const initialState: UserState = {
  username: "",
  credits: 0,
  avatar: 1,
  favGames: []
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
    setFavGames: (state, action: PayloadAction<Game[]>) => {
      state.favGames = action.payload; // Ensure it's type-safe with Game[]
    },
  }
});

export const { setUsername, setCredits, setAvatar, updateCredits, resetUser } = userSlice.actions;
export default userSlice.reducer;
