import { Box, Checkbox, Text } from '@chakra-ui/react';
import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions';

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  const dispatach = useDispatch();

  const handleCheck = () => dispatach(toggleTodo(todo.id))
  return (
    <Box mb={1} bgColor='lightcoral' p={2}>
      <Checkbox colorScheme='teal' isChecked={checked} onChange={handleCheck}>
        <Text as={todo.completed && 'del'}>{todo.content}</Text>
      </Checkbox>
    </Box>
  )
}

export default Todo;