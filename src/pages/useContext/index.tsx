import Taro, { useContext } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import { observer } from '@tarojs/mobx'
import Store from '../../store/todo'
import './index.scss'

function Index() {
  const { todos, toggle, add, completedCount, total } = useContext(Store) as any;
  const list = todos.map((todo, index) => {
    const { title, key, completed } = todo;
    return (
      <View
        key={key}
        onClick={() => toggle(index)}
        className={completed ? 'completed' : 'un-completed' }
        >
        {title}
      </View>
    )
  })
  return (
    <View>
      <View>{list}</View>
      <View> 已完成：{ completedCount } / {total}</View>
      <Button onClick={add}>添加</Button>
    </View>
  )
}

export default observer(Index);