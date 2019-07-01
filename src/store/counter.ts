import { observable, action } from 'mobx'

class CounterStore {
  @observable counter = 0

  @action.bound
  increment() {
    this.counter++
  }

  @action.bound
  decrement() {
    this.counter--
  }

  @action.bound
  incrementAsync() {
    setTimeout(() => this.counter++, 1000)
  }
}

export default new CounterStore()