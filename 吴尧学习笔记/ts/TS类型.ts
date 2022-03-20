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

// 泛型 T 定义的时候不规定类型 用的时候规定类型
function dome<T> (valve: T): T {
  return valve
}

dome<number>(1)
dome<string>('')

interface Demo<T> {
  value: T;
}

const _obj: Demo<number> = {
  value: 1
}

const _arr: Array<number> = []

// 泛型的约束
type Demo1 = number | string;

function dome1<T extends Demo1> (valve: T): T {
  return valve
}

interface Dome2<T> {
  value: T;
}

function dome2<P, T extends Dome2<Demo1>> (valve: T): T {
  return valve
}

dome2<Demo1, Dome2<Demo1>>({ value: 111 })

// class
// public指定成员是可见的 成员都默认为 public
// 当成员被标记成 private时，它就不能在声明它的类的外部访问
// protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问
// 你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化
class P<T> {
  value: T

  static a () {
  }

  constructor (value: T) {
    this.value = value
  }

  add () {

  }
}

// 类 类型
const _p: P<number> = new P(1)
const nextP: P<number> = _p

// class 的继承
class A<T> {
  value: T

  constructor (value: T) {
    this.value = value
  }
}

class B extends A<number> {
  constructor () {
    super(1)
  }
}

// class 实现接口
interface Padder {
  add (): void;
}

class SpaceRepeating implements Padder {
  private numSpaces: number

  constructor (numSpaces: number) {
  }

  add (): void {

  }
}

// 类型别名
type NextType = Padder;

// 对象冒充继承 原型链
// function _A () {
//
// }
// _A.add = function () {
//
// }
// function _B () {
//   _A.call(this, 1)
// }
//
// function _new () {
//
// }


// keyof
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: '小明',
  age: 18
}

let personKey: keyof Person = 'name'

personKey = 'age'

console.log(person[personKey])


// key
interface Abc<T, P> {
  [key: string]: P;
}

const abc: Abc<string, number> = {
  'qwe_qqw': 1,
  'aa': 1
}


// P in string | number | symbol
// type Record<K extends keyof any, T> = {
//   [P in K]: T;
// }

const A2: Record<string, number> = {
  qwe: 1,
  a: 2
}


// in











