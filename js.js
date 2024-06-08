const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");
let para = document.querySelector("p");

const access_key = "XKhhVwVpnbxt4JqRbaesFbg0_IdJmhwmhaYfFZI0toc";

let page = 1;
let keyword = "";

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${access_key}&per_page=12`;
  const respone = await fetch(url);
  const data = await respone.json();
  console.log(data);

  data.results.map((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    searchResult.appendChild(img);
  });

  if ((page = 1)) {
    searchBox.innerHTML = "";
  }

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
