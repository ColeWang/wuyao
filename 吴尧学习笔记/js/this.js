// const obj = {
//   value: 1,
//   a: {
//     value: 2,
//     add () {
//       this.value += 1
//     }
//   }
// }
//
// // 谁调用的 this就指向谁
// obj.a.add()

// Object.prototype.isThis = function () {
//   console.log(this)
// }
//
// const obj = {
//   value: 11
// }
// obj.isThis()
//
// Array.prototype.isThis = function () {
//   console.log(this)
// }
//
// const arr = [1, 2]
// arr.isThis()
//
// Function.prototype.isThis = function () {
//   console.log(this)
// }
//
// function func () {}
//
// func.isThis()


// @todo call
// function func () {}
// func.call(obj, 1 ,2, 3)
// function func () {}
//
// const ctx = {
//   fn: func
// }

Function.prototype.newCall = function (ctx, ...arg) {
  ctx = ctx || window
  const fn = this
  ctx.fn = fn
  const result = ctx.fn(...arg)
  delete ctx.fn
  return result
}

// @todo apply
// function func () {}
// func.call(obj, [1 ,2, 3])
Function.prototype.newApply = function (ctx, args) {
  ctx = ctx || window
  const fn = this
  ctx.fn = fn
  const result = ctx.fn(...args)
  delete ctx.fn
  return result
}
// function func (a, b, c) {
//   console.log(a, b, c)
// }
//
// const ctx = {}
//
// func.newApply(ctx, [1, 2, 3])

// @todo bind
Function.prototype.newBind = function (ctx, ...arg1) {
  const fn = this
  return function (...arg2) {
    fn.newApply(ctx, [...arg1, ...arg2])
  }
}

// function test (a, b) {
//   console.log(a, b)
//   this.value += 1
// }
//
// const obj = {
//   value: 1
// }
//
// const nextTest = test.newBind(obj, 2)
// nextTest(3)
// console.log(obj)






// ---------------------    ------------------- //
// a调用箭头函数 产生游离的this 没有作用域 指向window
const obj = {
  value: 1,
  a: {
    value: 2,
    add: () => {
      console.log(this)
      this.value += 1
    }
  }
}

const nextA = obj.a
nextA.add()

// 箭头函数的this指向他的上级作用域
function test () {
  this.value = 1
  this.a = {
    value: 2
  }
  this.a.add = () => {
    console.log(this)
    this.value += 1
  }
}

const nextTest = new test()
nextTest.a.add()

const add = nextTest.a.add
add()






















