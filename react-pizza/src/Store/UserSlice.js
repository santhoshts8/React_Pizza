import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  userName:''
}
const UserSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    updateName(state,action){
       state.userName = action.payload
    }
  }
})


export const{updateName} = UserSlice.actions;

export default UserSlice.reducer