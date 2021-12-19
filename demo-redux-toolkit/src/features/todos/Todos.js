import {useSelector, useDispatch} from 'react-redux'
import {selectTodos, del} from './todosSlice'
import {List} from 'rsuite'

export default function Todos() {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    const handleDel = (id) => {
       dispatch(del(id))
    }
    return (
        <List bordered>
            {todos.map(({id, value}) => (
                <List.Item key={id} index={id}>
                    {value}
                    <button
                        onClick={() => handleDel(id)}
                        style={{border: 'none', marginLeft: '15px',
                            position: 'fixed', right: '20%'}}>
                        &times;
                    </button>
                </List.Item>
            ))}
        </List>
    )
}
