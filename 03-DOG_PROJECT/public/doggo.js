const LIST_ALL_BREEDS_ENDPOINTS = "https://dog.ceo/api/breeds/list/all"
const RANDOM_DOG_ENDPOINT = "https://dog.ceo/api/breeds/image/random"

fetchAndPopulateBreedsMenu()
fetchRandomDog()

document
  .querySelector(".doggo-button")
  .addEventListener("click", () => fetchDog())

document
  .querySelector(".breed-select")
  .addEventListener("change", () => fetchDog())

/* ******************************************** */

function fetchRandomDog() {
  displayLoadingGif()
  fetch(RANDOM_DOG_ENDPOINT)
    .then(response => response.json())
    .then(responseJSON => displayDog(responseJSON))
}

function fetchAndPopulateBreedsMenu() {
  fetch(LIST_ALL_BREEDS_ENDPOINTS)
    .then(response => response.json())
    .then(responseJSON => populateSelectMenu(responseJSON))
}

function populateSelectMenu(responseJSON) {
  const dogs = responseJSON.message
  const breeds = Object.keys(dogs)
  const breedSelect = document.querySelector(".breed-select")

  breeds.forEach(breed => {
    const opt = document.createElement("option")

    if (dogs[breed].length) {
      dogs[breed].forEach(subBreed => {
        /* why the "/" in opt.value ?
         * to get sub-breed from endpoint we need: .../breed/${breed}/${subBreed}/images/ ...
         * we'll use opt.value for breed, and if breed has a sub-breed, it
         * will provide an additional sub route for the sub-breed:
         * ".../australian/shepherd/..." vs .../beagle/...
         */
        opt.innerText = `${breed} ${subBreed}`
        opt.value = `${breed}/${subBreed}`
      })
    } else {
      opt.innerText = breed
      opt.value = opt.innerText
    }

    breedSelect.appendChild(opt)
  })
}

function fetchDog() {
  const select = document.querySelector(".breed-select")
  const breed = select.options[select.selectedIndex].value

  displayLoadingGif()

  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(resultJSON => displayDog(resultJSON))
}

function displayLoadingGif() {
  const img = document.querySelector(".doggo-img")

  img.alt = "loading gif"
  img.src = "./public/loading.gif"
}

function displayDog(resultJSON) {
  const img = document.querySelector(".doggo-img")
  const dogSrc = resultJSON.message

  img.alt = "a doggo"
  img.src = dogSrc
}