import { View, Text } from 'react-native'
import React, { useState } from 'react'
import useTheme from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

const TodoInput = () => {
const {colors} = useTheme();

const homeStyles = createHomeStyles(colors);
const [newTodo , setNewTodo] = useState("");
const addTodo = useMutation(api.todos.addTodos);

const handleAddTodo = async ()=>{
  
}

return (
    <View>
        <Text>TodoInput</Text>
    </View>
  )
}

export default TodoInput