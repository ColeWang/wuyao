// 1.每个构造函数都有一个 prototype 称之为显式原型
// 2.每个对象都有一个 __proto__ 称之为隐式原型
// 3.引用类型的隐式原型 指向构造函数的显式原型
// 4.当访问一个对象的属性或方法时 如果这个对象没有 会去__proto__中寻找 也就是去构造函数的prototype中寻找
// prototype 也是个对象


function Dome () {
  this.value = 1
}

Dome.prototype = {
  add () {
    this.value += 1
  }
}

function NextDome () {
  // 对象冒充继承
  Dome.call(this)
}

// 原型链继承
NextDome.prototype = Dome.prototype

// 修改Dome.prototype 会影响 NextDome.prototype
Dome.prototype.add = function () {}

// 深拷贝 prototype 循环拷贝
for (const key in Dome.prototype) {
  NextDome.prototype[key] = Dome.prototype[key]
}


// new
function _new (func, ...arg) {
  const obj = {}
  func.call(obj, ...arg)
  obj.__proto__ = func.prototype
  return obj
}






