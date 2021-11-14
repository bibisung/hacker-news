const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

function getData(URL) {
  ajax.open("GET", URL, false);
  ajax.send();
  return JSON.parse(ajax.response);
}

const newsFeed = getData(NEWS_URL);
const ul = document.createElement("ul");

window.addEventListener("hashchange", () => {
  const id = location.hash.substr(1);
  const newsContent = getData(CONTENT_URL.replace("@id", id));
  const title = document.createElement("h1");

  title.innerHTML = newsContent.title;
  content.appendChild(title);
});

for (let i = 0; i < 10; i++) {
  /* DOM API를 최소화한 코드 */
  const div = document.createElement("div");

  div.innerHTML = `
    <li>
      <a href="#${newsFeed[i].id}">
        ${newsFeed[i].title} [${newsFeed[i].comments_count}]
      </a>
    </li>
  `;

  ul.appendChild(div.firstElementChild);

  // const li = document.createElement("li");
  // const a = document.createElement("a");
  // a.href = `#${newsFeed[i].id}`;
  // a.innerHTML = `${newsFeed[i].title} [${newsFeed[i].comments_count}]`;
  // li.appendChild(a);
  // ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);