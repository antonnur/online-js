// Event Loop
// Пример 1:
/* setTimeout(function () {
  console.log(1)
}, 1000)

setTimeout(function () {
  console.log(2)
}, 1000)

setTimeout(function () {
  console.log(3)
}, 1000) */

// Пример 2:
/* setTimeout(function () {
  console.log(4)
}, 1000)

function a() {
  setTimeout(() => {
    console.log('a')
  })
}
function b() {
  console.log('b')
}

a()

new Promise(function (res, rej) {
  console.log('create promise')
  res()
}).then(() => {
  setTimeout(function timer() {
    console.log('timeout')
  }, 0)
})

b() */

// Пример 3:
/* console.log(1)

setTimeout(() => {
  console.log(2)
  Promise.resolve().then(() => {
    console.log(3)
  })
})

new Promise((res, rej) => {
  console.log(4)
  res(5)
}).then((data) => {
  console.log(data)

  Promise.resolve()
    .then(() => {
      console.log(6)
    })
    .then(() => {
      console.log(7)

      setTimeout(() => {
        console.log(8)
      }, 0)
    })
})

setTimeout(() => {
  console.log(9)
})

console.log(10) */

// Пример 4:
/* setTimeout(() => {
  console.log('1')
}, 0)

setTimeout(() => {
  console.log('2')
}, 1000)

new Promise(function (res, rej) {
  console.log('3')
  res()
  console.log('4')
}).then(() => {
  console.log('5')
})

console.log('6')

async function test1() {
  console.log('7')
  await test2()
  console.log('8')
}

async function test2() {
  console.log('9')
}

test1()

console.log('10') */

// Пример 5:
async function first() {
  console.log(9)
  await Promise.resolve(2).then((r) => console.log(r))
  console.log(0)
  await Promise.resolve(3).then((r) => console.log(r))
}

async function second() {
  console.log(10)
  await Promise.resolve(4).then((r) => console.log(r))
  console.log(11)
  await Promise.resolve(5).then((r) => console.log(r))
}

first()
second()

const promises = Promise.resolve('new Promise')
promises.then((str) => console.log(str))
