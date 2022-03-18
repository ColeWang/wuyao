// 基本类型
const a: number = 1
const b: string = 's'
const c: boolean = false
const n: null = null
const u: undefined = undefined

// let const

// 联合类型
const e: number | string = 1
const f: '1' | '2' = '1'

// console.log(n, u)

// 引用类型

// 接口 interface (只能赋值为引用类型)
// Object Array Function Date

// Object
interface Obj {
  value?: number; // (number | undefined)
}

const obj: Obj = { value: 1 }

// Array 泛型Array
const arr: [] = []
const arr1: string[] = ['']
const arr2: (string | number)[] = ['', 1]
const arr3: Array<number> = []
const arr4: Array<number | string> = []

// Function
interface Func {
  (value: number): void;
}

function main (func: Func) {
  func(1)
}

// 箭头函数 Arrow Function
interface Arrow {
  add: () => void;
}

const arrow: Arrow = {
  add: () => {
  }
}

function arrowFunc (func: (value: number) => void): void {
  func(1)
}

//js 扩展 IIFE (自执行函数)
~function () {

}()
;(function () {

})()

!function () {
  return false
}()

!!function () {
  return false
}()

void function () {

}()

// 扩展
enum Type {
  A = 1, // 1
  B = 1 << 1, // 2
  C = 1 << 2, // 4
  D = 1 << 3 // 8
}

// vue3
const type: number = Type.A + Type.C

console.log(type & Type.B) // 大于0 表示有   0 表示没有
console.log(type & Type.C)
console.log(type & Type.A)
console.log(type & Type.D)

// 类型 type      (可以赋值为基本类型)

type NewObj = {
  value: number;
}

type NewNumber = number;

// 继承 interface type (吴尧说懂了 要求不用讲)

// 泛型 T

// 泛型的约束

// class

// class 的继承

// class 类型接口
