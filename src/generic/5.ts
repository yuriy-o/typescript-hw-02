/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

export {};

// Приклади використання
const stringNumberPair: KeyValuePair<string, number> = { key: 'age', value: 25 };
const stringBooleanPair: KeyValuePair<string, boolean> = { key: 'isActive', value: true };
const numberArrayPair: KeyValuePair<number, string[]> = { key: 1, value: ['apple', 'banana'] };