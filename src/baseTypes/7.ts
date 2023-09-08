/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay {
  Mon = 'monday',
  Tue = 'tuesday',
  Wed = 'wednesday',
  Thu = 'thursday',
  Fri = 'friday',
  Sat = 'saturday',
  Sun = 'sunday',
}

function isWeekend(day: weekDay): boolean {
  return day === weekDay.Sat || day === weekDay.Sun;
}
