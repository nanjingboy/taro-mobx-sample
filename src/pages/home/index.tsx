import React from 'react';
import Taro from '@tarojs/taro'
import { Button, View } from '@tarojs/components'

function Index() {
  const goPage = (page) => {
    Taro.navigateTo({
      url: `/pages/${page}/index`
    })
  }

  return (
    <View>
      <Button onClick={() => goPage('useContext')}>useContext 示例</Button>
      <Button onClick={() => goPage('useLocalStore')}>useLocalStore 示例</Button>
      <Button onClick={() => goPage('useAsObservableSource')}>useAsObservableSource 示例</Button>
      <Button onClick={() => goPage('class')}>类组件示例</Button>
    </View>
  )
}

export default Index;