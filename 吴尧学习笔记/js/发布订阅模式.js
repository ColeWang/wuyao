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

// 浏览器 也是发布订阅模式
// <div onclick="onClick()"></div>
//
// function onClick () {
//
// }

// 策略模式
// 单例模式
// 工厂模式
// 装饰器模式 装饰函数 类 参数 （注解 + 反射）

// 切片编程
const oldArrayPush = Array.prototype.push

// 更新视图
function upDataView () {
  console.log('isPush')
}

// window
Array.prototype.push = function (...arg) {
  upDataView() // 切片
  oldArrayPush.apply(this, arg)
}

const arr = []
arr.push(1)

// vue 是不是不能监听数组方法 length

// 重写数组方法
let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype);
['push', 'shift', 'unshift'].forEach((met) => {
  proto[met] = function () { // 函数劫持 （重写函数 继续调用旧方法）
    upDataView() // 切片编程
    oldArrayPrototype[met].call(this, ...arguments)
  }
})

