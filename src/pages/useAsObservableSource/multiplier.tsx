import React from 'react';
import { View, Button, Text } from '@tarojs/components'
import { useAsObservableSource, useLocalStore, observer } from 'mobx-react'

function Multiplier(props) {
  const observableProps = useAsObservableSource(props)
  const store = useLocalStore(() => ({
    counter: 1,
    get multiplied() {
      return observableProps.multiplier * store.counter
    },
    increment() {
      store.counter += 1
    }
  }))

  const { multiplier } = observableProps
  const { multiplied, counter, increment } = store
  return (
    <View>
      <Text>multiplier({multiplier}) * counter({counter}) = {multiplied}</Text>
      <Button onClick={increment}>Increment Counter</Button>
    </View>
  )
}

export default observer(Multiplier)