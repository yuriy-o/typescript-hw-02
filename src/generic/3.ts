/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

//? v1 →  Об'єднуємо objB в objA, але не повертаємо результат цієї операції. 
//? Це може бути корисним, якщо ми хочемо змінити objA без створення нового об'єкта.
function merge1<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

//? v2 → Об'єднуємо objA і objB.
//? Отримаємо об'єкт, що містить всі властивості як objA, так і objB.
//? Це корисно, коли ми хочемо зберегти властивості обох об'єктів і ми впевнені, що вони не конфліктують.
function merge2<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

export {};
