//
let button1 = document.getElementsByClassName("btn")[0];
let button2 = document.getElementsByClassName("btn")[1];
let button3 = document.getElementsByClassName("btn")[2];

//
button1.addEventListener("click", getRandomThirukkural);
button2.addEventListener("click", getRandomJoke);
button3.addEventListener("click", getRandomFoxImage);

//
let responseThirukkural = document.getElementsByClassName("result")[0];
async function getRandomThirukkural() {
  const getThirukkural = async () => {
    const response = await fetch(
      "https://api-thirukkural.vercel.app/api?num=" +
        Math.floor(Math.random() * 1300)
    );
    const data = await response.json();
    return data;
  };
  const thirukkuralResponse = await getThirukkural();
  let getThirukkuralDisplay =
    thirukkuralResponse.line1 + " -- " + thirukkuralResponse.line2;
  responseThirukkural.innerHTML = getThirukkuralDisplay;
}

//
let responseJoke = document.getElementsByClassName("result")[1];
async function getRandomJoke() {
  const getJokes = async () => {
    const response = await fetch(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const data = await response.json();
    return data;
  };
  const jokeResponse = await getJokes();
  let jokeDisplay = jokeResponse.joke;
  responseJoke.innerHTML = jokeDisplay;
}

//
let responseFoxImage = document.getElementsByClassName("result")[2];
async function getRandomFoxImage() {
  const getFoxImage = async () => {
    const response = await fetch("https://randomfox.ca/floof/");
    const data = await response.json();
    return data;
  };
  const resultFoxImage = await getFoxImage();
  let displayFoxImage = resultFoxImage.image;
  responseFoxImage.style.backgroundImage = "url(" + displayFoxImage + ")";
}
