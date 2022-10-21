'use strict';

const adv = document.querySelectorAll('.adv'),
    body = document.querySelector('body'),
    book = document.querySelectorAll('.book'),
    title = document.querySelectorAll('a'),
    ul = document.querySelectorAll('ul'),
    li = document.querySelectorAll('li'),
    liTag = document.createElement('li');

adv[0].remove();

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[1].after(book[0]);
book[4].after(book[3]);
book[5].after(book[2]);

title[4].innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';

ul[0].append(li[7]);
ul[0].append(li[9]);
ul[0].append(li[2]);
ul[0].append(li[10]);

ul[0].prepend(li[5]);
ul[0].prepend(li[4]);
ul[0].prepend(li[8]);
ul[0].prepend(li[6]);
ul[0].prepend(li[3]);
ul[0].prepend(li[1]);
ul[0].prepend(li[0]);

li[47].after(li[55]);
li[55].after(li[49]);
li[49].after(li[50]);
li[48].after(li[52]);
li[52].after(li[53]);

liTag.textContent = ('Глава 8: За пределами ES6');
li[25].after(liTag);