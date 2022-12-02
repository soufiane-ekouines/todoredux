import {createSlice} from '@reduxjs/toolkit';

import {usersData} from '../FakeData';
export const userSlice = createSlice({
    name: "users",
    initialState: { value:usersData },

    reducers:{ adduser: (state, action) =>{
        //write code gor adding user

    }}
});