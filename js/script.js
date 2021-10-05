// Task #1 

// Создание пустого объекта
let user = {};
// Добавление свойства name со значением John и surname со значением Smith
user.name = `John`;
user.surname = `Smith`;
console.log(user);
// Изменение значения свойства name на Pete.
user.name = `Pete`;
console.log(user);
// Удаление свойства name из объекта.
delete user.name;
console.log(user);

// Task #2

const user1 = {
name: `John`,
};
// это будет работать?
user1.name = `Pete`;
console.log(user1);
// Объект, объявленный как константа, может быть изменён.
// Объявление константы защищает от изменений саму переменную user1, а не её содержимое.

// Task #3

let salaries = {
John: 100,  
Ann: 160,  
Pete: 130  
};

let sum;
function sumSalaries( hui ) {
    let allSalary = 0;
for ( let salary of Object.values( hui ) ) {
    allSalary += salary;
};
sum = allSalary;
};
sumSalaries(salaries);
console.log(sum);

   
  
  