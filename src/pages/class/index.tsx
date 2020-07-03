import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { inject, observer } from 'mobx-react'

@inject('counterStore')
@observer
export default class Index extends Component<any> {
  render() {
    return (
      <View>
        <Button onClick={this.props.counterStore.increment}>+</Button>
        <Button onClick={this.props.counterStore.decrement}>-</Button>
        <Button onClick={this.props.counterStore.incrementAsync}>Add Async</Button>
        <Text>{this.props.counterStore.counter}</Text>
      </View>
    )
  }
}