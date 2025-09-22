
// let prom = new Promise((resolve, reject) => {
//    setTimeout((response) => {
//       if (response.httpStatus >= 200 && response.httpStatus < 400) {
//          resolve(response.data)
//          console.log('2', prom);
//       } else {
//          reject(response.error)
//       }
//    }, 2000, { httpStatus: 200, data: { userName: 'Yo', id: 'd45vg5', status: 'activ' }, error: {} })
// });

// prom
//    .then(
//       res => {
//          console.log('res', res);

//       }
//    )

// console.log('1', prom);


// Пример из видео урока !!!

// import axios from 'axios'
// import { useState } from 'react'

// const api = {
//   getTodolist() {
//     return axios.get('https://jsonplaceholder.typicode.com/todos/1')
//       .then((res) => res.data)
//   }
// }

// const App = () => {

//   const [todos, setTodos] = useState([])
//   const [error, setError] = useState(null)
//   const [isLoading, setIsLoading] = useState(false)

//   const onClick = () => {
//     setIsLoading(true)
//     api.getTodolist()
//       .then((todolist) => {
//         setTodos([...todos, todolist])
//       })
//       .catch(e => {
//         console.log(e);
//         setError('Something went wrong')
//       })
//       .finally(() => {
//         setIsLoading(false)
//       })
//   }

//   return isLoading ? (<div>isLoading...</div>) : (
//     <div>
//     <button onClick= { onClick } > load todolist </button>
//     {error && <div>{error}</div>}
//     {
//       todos.map(t => (
//         <div>{t.title}</div>
//       ))
//     }
//       </div>
//   )

// }

// export default App


// В конце урока давайте попробуем порешать 2 задачки:
// 1)
// Напишите функцию delay(ms), которая возвращает промис, 
// переходящий в состояние resolved через ms миллисекунд.
function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// Пример использования:
delay(1000).then(() => console.log('Hello!'));


// 2)
const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    // res("reject1");
    rej("reject1");
  }, 1000);
});


promise1
  .catch((t) => t + "catch1")
  .catch((t) => t + "catch2")
  .then((t) => t + "then1")
  .finally((t) => t + "finally")
  .then((t) => console.log(t)); /// ??