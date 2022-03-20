// interface Cache {
//   [key: string]: Function[]
// }
// 发布订阅模式
class Observer {
  cache = {}

  // 订阅
  subscribe (key, callback) {
    if (!this.cache[key]) {
      this.cache[key] = []
    }
    this.cache[key].push(callback)
  }

  // 发布
  publish (key, value) {
    if (!this.cache[key]) {
      console.warn('key 不存在 请先 $on')
    } else {
      this.cache[key].forEach((callback) => {
        callback(value)
      })
    }
  }
}

const observer = new Observer()

observer.subscribe('test', (value) => {
  console.log(value)
})

setTimeout(() => {
  observer.publish('test', 100)
}, 1000)

// const func = function (value) {
//   console.log(value)
// }
//
// const arr = [func]
//
// arr.forEach((func) => {
//   func(11)
// })

const vue = new Observer()


// vue.$emit('test', 111)
//
// <div @test="onTest"></div>
//
// v-on:test="onTest"
//
// // 解析成js文件
// // 组件示例 会注册$on
// Com.$on('test', this.onTest)
//
// function onTest (value) {
//   console.log(value)
// }
