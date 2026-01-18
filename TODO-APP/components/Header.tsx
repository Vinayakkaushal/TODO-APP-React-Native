import { View, Text } from 'react-native'
import React from 'react'
import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'

const Header = () => {
  const { colors } = useTheme()
  const homeStyles = createHomeStyles(colors)

  const todos = useQuery(api.todos.getTodos)

  if (todos === undefined) return null
  const completedCount = todos ? todos.filter((todo)=>todo.isCompleted).length :0;
  const totalCount = todos ? todos.length:0;
  const progressPercentage = totalCount > 0? (completedCount /totalCount)*100 :0
  return (
    <View >
      <Text>Header</Text>
    </View>
  )
}

export default Header
