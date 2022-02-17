import { Box, Checkbox, Text } from '@chakra-ui/react';
import React, { useState} from 'react'

const Todo = ({ todo }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Box mb={1} bgColor='lightcoral' p={2}>
      <Checkbox colorScheme='teal' isChecked={checked}>
        <Text as={todo.completed && 'del'}>{todo.content}</Text>
      </Checkbox>
    </Box>
  )
}

export default Todo;