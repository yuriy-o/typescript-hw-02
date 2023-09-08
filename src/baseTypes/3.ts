// Однозначної відповіді нема, бо є декілька варіантів

// 1) Зробити однаковими типи та забити

// let some: unknown;
// some = 'Text';
// let str: unknown;
// str = some;


// 2) Додати перевірку

let some:unknown;
some = 'Text';
let str: string;
if (typeof some === 'string') {
    str = some;
}

export {};