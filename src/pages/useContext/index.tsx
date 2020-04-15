import Taro, { useContext } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
import Store from '../../store/todo'
import './index.scss'

function Index() {
  const { todos, toggle, add, completedCount, total } = useContext(Store) as any;
  const list = todos.map((todo, index) => {
    const { title, key, completed } = todo;
    return (
      <Text
        key={key}
        onClick={() => toggle(index)}
        className={completed ? 'completed' : 'un-completed' }
        >
        {title}
      </Text>
    )
  })
  return (
    <View>
      <Text>{list}</Text>
      <Text> 已完成：{ completedCount } / {total}</Text>
      <Button onClick={add}>添加</Button>
    </View>
  )
}

export default observer(Index);