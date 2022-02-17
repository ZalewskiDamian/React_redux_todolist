import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useSelector(state => state.todos);
  console.log(todos)
  return (
    <Box my={3}>
      {todos.length ? todos.map(todo => (
        <Todo 
          key={todo.id}
          todo={todo} 
        />
      )) : (
        <Box textAlign='center' my='4'>
          No Todos Yay!
        </Box>
      )}
    </Box>
  )
}

export default TodoList