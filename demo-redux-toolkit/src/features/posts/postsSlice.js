import {createSlice} from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        status: null
    },
    reducers: {
        add(state, {payload}) {
            state.list.push(payload)
        },
        del(state, {payload}) {

        }
    }
})

export default postsSlice.reducer
