"use strict"
//Функции урок№8
function showName(){
   console.log('Вася!');

}
setTimeout(showName,0);
console.log('Коля!');

let showMessage;
if (2>1){
   showMessage = function (){
      console.log('Сообщение');
   };
}
showMessage();


//Массивы Урок№12
//Задача 1.
let arr =['Ваня','Иштван','Оля'];
let newArr= arr;
newArr.push('Петя');
console.log(arr);
//Задача 2.
let users =['Ваня','Иштван'];
users.push('Оля');
console.log(users);
users.splice(1,1,"Петя");
console.log(users);
let removed=users.splice(0,1);
console.log(removed);
users.unshift('Маша','Паша');
console.log(users);
//Задача 3.
let newArray=['Ваня','Иштван','Оля',];
let remove = newArray.splice(1,1);
console.log(remove);
//Задача 4.
let str= "Ваня,Иштван,Оля";
let array = ['Ваня','Иштван','Оля',];
console.log(array);

//DOM Урок №13
//Задача 1
const lessonText= document.querySelector('div[data-say-hi="yes"]');
console.log (lessonText.dataset.sayHi);
//Задача 2
const element = document.getElementsByTagName('li')[1];
console.log(element);
//Задача 3
const listItems=document.querySelectorAll('.like');
console.log(listItems);
//Задача 4
const listElement = document.querySelector('ul');
listElement.insertAdjacentHTML(
 'beforeend',
 `<li>Текст</li>`
);
//Размеры прокрутка координаты урок №14.
//Задача 1.
const mainElement=document.documentElement;
const mainElementWidth=mainElement.clientWidth;
const windowWidth=window.innerWidth;
const different= windowWidth-mainElementWidth;
console.log(different);
//Задача 2
function setScrollToOptions(){
   window.scrollTo({
      top:100,
      left:0,
      behavior:"smooth"
   });
}
setTimeout(setScrollToOptions,1000);
//Задача 3
const item1 = document.querySelector('.main');
const getItemCoords1 = item1.getBoundingClientRect();
console.log(getItemCoords1);

const item2 = document.querySelector('li');
const getItemCoords2 = item2.getBoundingClientRect();
console.log(getItemCoords2);

const item3 = document.querySelector('.lesson__text');
const getItemCoords3 = item3.getBoundingClientRect();
console.log(getItemCoords3);
