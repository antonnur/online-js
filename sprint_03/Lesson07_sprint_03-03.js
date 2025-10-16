/* const promise = new Promise((res, rej) => {
  setTimeout(() => {
    // res('Some response')
    rej('Some Error')
  }, 2000)
})

promise
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  }) */

/* fetch('https://bing.com').then((data) => {
  console.log('data from bing', data.url)
})
fetch('https://yahoo.com').then((data) => {
  console.log('data from yahoo', data.url)
})
fetch('https://google.com').then((data) => {
  console.log('data from google', data.url)
}) */

//   Паследовательное выполнение
/* fetch('https://bing.com')
  .then((data) => {
    console.log('data from bing', data.url)
    return fetch('https://yahoo.com')
  })
  .then((data) => {
    console.log('data from yahoo', data.url)
    return fetch('https://google.com')
  })
  .then((data) => {
    console.log('data from google', data.url)
  }).catch((err)=>{
    console.log('err', err)
  }).finally(()=>{
  console.log('finally')
  }) */

//Будет работать синхронно если добавить "await" асинхронно
/* const asyncFoo = async () => {
  try {
    const yahooData = await fetch('https://222yahoo.com')
    console.log('yahooData', yahooData.url)
    const googleData = await fetch('https://google.com')
    console.log('googleDta', googleData.url)
    const bingData = await fetch('https://bing.com')
    console.log('bingDta', bingData.url)
  } catch (error) {
    console.log('ERROR', error)
  } finally {
    console.log('finally')
  }
}
asyncFoo() */

/* const prom1 = fetch('https://yahoo.com')
const prom2 = fetch('https://google.com')
const prom3 = fetch('https://bing.com')

const bigPromise = Promise.all([prom1, prom2, prom3])

bigPromise
  .then((bigData) => {
    console.log('bigData', bigData)
  })
  .catch((err) => {
    console.log('Error', err)
  }) */

//Коротчкая запись
/* Promise.all([fetch('https://yahoo.com'), fetch('https://google.com'), fetch('https://bing.com')])
  .then((bigData) => {
    console.log('bigData', bigData)
  })
  .catch((err) => {
    console.log('Error', err)
  }) */

/* Promise.any([fetch('https://yahoo.com'), fetch('https://google.com'), fetch('https://bing.com')])
  .then((data) => {
    console.log('data', data.url)
  })
  .catch((err) => {
    console.log('Error', err)
  }) */

//Вернет любое изменение Promis сразу
Promise.race([fetch('https://yahoo.com'), fetch('https://google.com'), fetch('https://bing.com')])
  .then((data) => {
    console.log('data', data.url)
  })
  .catch((err) => {
    console.log('Error', err)
  })
