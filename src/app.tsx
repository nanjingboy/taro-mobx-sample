import Taro, { Component, Config } from '@tarojs/taro'
import { onError, Provider } from '@tarojs/mobx'
import counterStore from './store/counter'
import Index from './pages/home/index'

import './app.scss'

onError(error => {
  console.log('mobx global error listener:', error)
})

const store = {
  counterStore
}
class App extends Component {

  config: Config = {
    pages: [
      'pages/home/index',
      'pages/class/index',
      'pages/useContext/index',
      'pages/useLocalStore/index',
      'pages/useAsObservableSource/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>

    )
  }
}

Taro.render(<App />, document.getElementById('app'))
