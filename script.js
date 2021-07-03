const text = document.getElementById("input");
const search = document.getElementById("search");
const apiKey = "be925f32-b992-41b3-a3fb-57036e339bd3";
const result = document.getElementById("results");
const loading = document.getElementById("loading");
const notFound = document.getElementById('not__found');

function returnApiKey(keyword) {
  const apivariable = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${keyword}?key=${apiKey}`;
  return apivariable;
}

search.addEventListener("click", async () => {
  const keyord = text.value;
  const apiString = returnApiKey(keyord);
  result.innerHTML = "";
  loading.style.display = "block";

  const data = await fetch(apiString)
    .then((res) => res.json())
    .then((data) => {
      return data[0];
    });

  if (typeof data[0] === 'string') {
    console.log(data);
    loading.innerText = "Check the spelling";

    return;
  } else {
    loading.style.display = "none";
    result.innerText = data.shortdef[0];
  }
});
