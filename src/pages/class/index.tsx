import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { inject, observer } from '@tarojs/mobx'

@inject('counterStore')
@observer
export default class Index extends Component<any> {

  componentWillReact() {
    const { counterStore: { counter } } = this.props
    console.log('mobx store changed', counter)
  }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render() {
    const { counterStore: { counter } } = this.props
    return (
      <View>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
      </View>
    )
  }
}