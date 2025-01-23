//-- Статические свойства --
const user = {
  name: "John",
  age: 25,
  'user name': 'Alex',
  '12years': true
}
console.log('-- Статические свойства --')
console.log(user['user name']) //невалидный идентификатор
console.log(user.age)

//-- Вычисляемые (динамические) свойства --
function getObject(key, value) {
  // 1
  const obj = {}
  obj[key] = value;
  return obj;

  // 2
  // return (
  //   {[key]: value}
  // )
}

console.log('-- Вычисляемые (динамические) свойства (bracket notation) --')
console.log(getObject('name', 'Tony'))
console.log(getObject('car', 'AUDI'))

// -- Ассоциативные массивы (объект - разновидность ассоциативного массива) --
const todolistId_1 = crypto.randomUUID()
const todolistId_2 = crypto.randomUUID()

const todolist = [
  {
    id: todolistId_1,
    title: 'What to learn',
  },
  {
    id: todolistId_2,
    title: 'What to buy',
  },
]

const tasks = {
  [todolistId_1]: [
    {id: 12, todolistId: 1, title: 'HTML'},
    {id: 13, todolistId: 1, title: 'JS'},
    {id: 14, todolistId: 1, title: 'React'},
  ],
  [todolistId_2]: [
    {id: 22, todolistId: 2, title: 'Course 1'},
    {id: 23, todolistId: 2, title: 'Course 2'},
    {id: 24, todolistId: 2, title: 'Course 3'},
  ]
}

//Object => объекты key => only string
//Map => коллекции  key => any type

const map = new Map() // new Object()
map.set(true, 100)
console.log('--- Map => коллекции ---')
console.log(map.get(true))

function myFunction(params) {

}

map.set(myFunction, [1, 2, 3])
console.log(map.get(myFunction))
console.log(map.has(myFunction))
console.log(map.size)

console.log(Object.keys(user)) // user - в самом начале
console.log(Object.values(user))
console.log(Object.entries(user))