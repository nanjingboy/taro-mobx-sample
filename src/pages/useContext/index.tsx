import React, { useContext } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { observer } from 'mobx-react'
import Store from '../../store/todo'
import './index.scss'

function Index() {
  const { todos, toggle, add, completedCount, total } = useContext(Store) as any
  const list = todos.map((todo, index) => {
    const { title, id, completed } = todo
    return (
      <View
        key={id}
        onClick={() => toggle(index)}
        className={completed ? 'completed' : 'un-completed' }
        >
        <Text>{title}</Text>
      </View>
    )
  })
  return (
    <View>
      {list}
      <Text> 已完成：{ completedCount } / {total}</Text>
      <Button onClick={add}>添加</Button>
    </View>
  )
}

export default observer(Index);