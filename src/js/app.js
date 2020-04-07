import data from './data.js';
import renderTableBody from './renderTableBody.js';
import changeState from './changeState.js';

const body = document.querySelector('body');
const table = document.createElement('table');
const thead = document.createElement('thead');
thead.innerHTML = '<tr><td class="id sort_up">id</td><td class="title sort_up">title</td><td class="year sort_up">year</td><td class="imdb sort_up">imdb</td></tr>';
const tbody = document.createElement('tbody');

renderTableBody(data, tbody);
table.appendChild(thead);
table.appendChild(tbody);
body.insertBefore(table, body.firstChild);

const id = document.querySelector('.id');
const title = document.querySelector('.title');
const year = document.querySelector('.year');
const imdb = document.querySelector('.imdb');

function removeArrow() {
  id.innerText = 'id';
  title.innerText = 'title';
  year.innerText = 'year';
  imdb.innerText = 'imdb';
}

id.addEventListener('click', () => {
  removeArrow();
  changeState(id, 'id', tbody);
});

title.addEventListener('click', () => {
  removeArrow();
  changeState(title, 'title', tbody);
});

year.addEventListener('click', () => {
  removeArrow();
  changeState(year, 'year', tbody);
});

imdb.addEventListener('click', () => {
  removeArrow();
  changeState(imdb, 'imdb', tbody);
});
