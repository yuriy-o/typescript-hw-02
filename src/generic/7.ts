/*
  У вас є перелік UserRole, який використовується для класифікації користувачів у вашому додатку.
  Ви хочете створити об'єкт RoleDescription, який зіставлятиме кожну роль користувача з її описом.
*/

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

//? Ця версія не вірна??
// const RoleDescription: Record<UserRole, string> = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };

//! v2 → з додатковою зміною (і схоже треба теж брати дані з об'єкта UserRole)
// type RoleDescription = Record<UserRole, string>;

// const roleDescription: RoleDescription = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };

export {};
