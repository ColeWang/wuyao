// ES6


// promise
// 高阶函数
// 1 参数是函数的函数 叫高阶函数
// 2 返回值是函数的函数 叫高阶函数
// 3   1 && 2 参数是函数 返回值也是函数的函数 叫高阶函数

// 状态
// 初始状态 Pending
// 已完成 Resolved Fulfilled
// 已失败 Rejected


// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('111'))
//   }, 100)
// })
//
// p
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

function NewPromise (func) {
  this.state = 'pending' // resolved rejected
  this.resolvedCallback = []
  this.rejectedCallback = []

  const that = this

  function resolve (res) {
    setTimeout(() => {
      if (that.state === 'pending') {
        that.state = 'resolved'
        that.resolvedCallback.forEach((resolved) => {
          resolved(res)
        })
      }
    })
  }

  function reject (err) {
    setTimeout(() => {
      if (that.state === 'pending') {
        that.state = 'rejected'
        that.rejectedCallback.forEach((rejected) => {
          rejected(err)
        })
      }
    })
  }

  func(resolve, reject)
}

NewPromise.prototype.then = function (resolved) {
  this.resolvedCallback.push(resolved)
}

NewPromise.prototype.catch = function (rejected) {
  this.rejectedCallback.push(rejected)
}


const p = new NewPromise((resolve, reject) => {
  resolve(1)
  console.log(111)
})

p.then((res) => {
  console.log(res)
})







