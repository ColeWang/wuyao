// 类型守护
function run (value?: number) {
  if (typeof value === 'number') {
    // type number
    console.log(value)
  }
}

// 类型断言
function add (value?: number): void {
  // 跳过类型检查 并不跳过runtime 仍有可能报错
  (value as number).toString()
}

add()


// ? !
interface IDemo {
  x?: number
}

let y: number

const demo = (parma: IDemo) => {
  y = parma.x!
  return y
}

interface A {
  b?: number;
}

interface Obj {
  a?: A
}

const obj: Obj = {
  a: {
    b: 1
  }
}

console.log(obj.a?.b)

console.log(obj.a && obj.a.b)

console.log(obj.a?.b || obj.a)

if (obj && obj.a && obj.a.b) {
  obj.a.b
}

// is
function isNumber (value: unknown): value is number {
  const oldObjectToString = Object.prototype.toString
  return oldObjectToString.call(value) === '[Object Number]'
}

