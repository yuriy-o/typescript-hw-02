/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

//! V1 → TS показує помилку

// function getPromise<T>() {
//   return new Promise<T>((resolve) => {
//     resolve(['Text', 50]);
//   });
// }


// getPromise<[string, number]>()
//   .then((data) => {
//     console.log(data); 
//   });


//? V2 → помилки нема, але під сумнивом вірність вирішення завдання

  function getPromise() {
  return new Promise<[string, number]>((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise()
  .then((data) => {
    console.log(data);
  });





export { };

