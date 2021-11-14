const { domainToUnicode } = require("url");

let ajax = new XMLHttpRequest();

ajax.open('GET', 'https://api.hnpwa.com/v0/news/1.json', false);
ajax.send();

const newsFeed = JSON.parse(ajax.response);
const ulEl = document.createElement('ul');

for (let i = 0; i < 10; i++) {
  const liEl = document.createElement('li');
  liEl.innerHTML = newsFeed[i].title;
  ulEl.appendChild(liEl);
}

document.getElementById('root').appendChild(ulEl);