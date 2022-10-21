'use strict';

const adv = document.querySelector('.adv'),
    body = document.querySelector('body'),
    book = document.querySelectorAll('.book'),
    bookNumber = document.querySelectorAll('a'),
    ulOfTheSecondBook = document.querySelector('ul'),
    liOfTheSecondBook = ulOfTheSecondBook.querySelectorAll('li'),
    ulOfTheFifthBook = document.querySelectorAll('ul')[5],
    liOfTheFifthBook = ulOfTheFifthBook.querySelectorAll('li'),
    liTag = document.createElement('li'),
    ulOfTheSixthBook = document.querySelectorAll('ul')[2],
    liOfTheSixthBook = ulOfTheSixthBook.querySelectorAll('li');

adv.remove();

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

book[1].after(book[0]);
book[4].after(book[3]);
book[5].after(book[2]);

bookNumber[4].innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';

liOfTheSecondBook[3].after(liOfTheSecondBook[6]);
liOfTheSecondBook[6].after(liOfTheSecondBook[8]);
liOfTheSecondBook[9].after(liOfTheSecondBook[2]);

liOfTheFifthBook[1].after(liOfTheFifthBook[9]);
liOfTheFifthBook[4].after(liOfTheFifthBook[2]);
liOfTheFifthBook[7].after(liOfTheFifthBook[5]);

liTag.textContent = ('Глава 8: За пределами ES6');
liOfTheSixthBook[8].after(liTag);