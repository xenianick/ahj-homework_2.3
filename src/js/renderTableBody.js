/* eslint-disable no-param-reassign */
export default function renderTableBody(array, body) {
  body.innerHTML = '';
  for (let i = 0; i < array.length; i += 1) {
    const row = document.createElement('tr');
    const imdbNumberWithFloat = array[i].imdb.toFixed(2);
    row.innerHTML = `<td>${array[i].id}</td><td>${array[i].title}</td><td>(${array[i].year})</td><td>imdb: ${imdbNumberWithFloat}</td>`;
    body.appendChild(row);
  }
}
