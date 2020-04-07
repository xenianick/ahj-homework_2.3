function sortUpByProp(array, prop) {
  let arraySorted = [];
  if (prop === 'title') {
    const collator = new Intl.Collator();
    arraySorted = array.slice().sort((a, b) => collator.compare(a[prop], b[prop]));
  } else {
    arraySorted = array.slice().sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  }
  return arraySorted;
}

function sortDownByProp(array, prop) {
  let arraySorted = [];
  if (prop === 'title') {
    const collator = new Intl.Collator();
    arraySorted = array.slice().sort((a, b) => collator.compare(b[prop], a[prop]));
  } else {
    arraySorted = array.slice().sort((a, b) => (a[prop] > b[prop] ? -1 : 1));
  }
  return arraySorted;
}

export { sortUpByProp, sortDownByProp };
