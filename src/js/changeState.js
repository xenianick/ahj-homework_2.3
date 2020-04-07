/* eslint-disable no-param-reassign */
import data from './data.js';
import { sortUpByProp, sortDownByProp } from './sortByProp.js';
import renderTableBody from './renderTableBody.js';

export default function changeState(element, nameOfElement, body) {
  let dataSorted = [];
  if (element.classList.contains('sort_up')) {
    dataSorted = sortUpByProp(data, nameOfElement);
    element.innerHTML = `<td class="${nameOfElement} sort_up">${nameOfElement} &darr;</td>`;
  } else {
    dataSorted = sortDownByProp(data, nameOfElement);
    element.innerHTML = `<td class="${nameOfElement}">${nameOfElement} &uarr;</td>`;
  }
  renderTableBody(dataSorted, body);
  element.classList.toggle('sort_up');
}
