import {createSlice} from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        add (state, {payload}) {
            state.push(payload)
        },
        del(state, {payload}) {
            const index = state.findIndex(item => item.id === payload)
            state.splice(index, 1)
        }
    }
})

// export const selectTodos = ({todos}) => todos
export function selectTodos({todos}) {
    return todos
}
export const {add, del} = todosSlice.actions
export default todosSlice.reducer
