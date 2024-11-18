import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState:{
    credit:0
  },
  reducers: {
    UpdateCredits:(state,action)=>{
        state.credit=action.payload
    }
  }
});

export const {UpdateCredits} = userSlice.actions;
export default userSlice;
