const LIST_ALL_BREEDS_ENDPOINTS = "https://dog.ceo/api/breeds/list/all"

document
  .querySelector(".doggo-button")
  .addEventListener("click", () => fetchDog())

fetchBreedListFromEndpoint();

/* ***** */

function fetchBreedListFromEndpoint() {
  fetch(LIST_ALL_BREEDS_ENDPOINTS)
    .then((response) => {
      return response.json()
    })
    .then((responseJSON) => {
      const result = responseJSON.message
      const listOfBreeds = Object.keys(result)
      const fullBreedList = []
      listOfBreeds.forEach(breed => {
        if (result[breed].length) {
          result[breed].forEach((subBreed) => {
            fullBreedList.push(`${subBreed} ${breed}`)
          })
        } else {
          fullBreedList.push(breed)
        }
      })
      return fullBreedList
    })
    .then((list) => {
      updateSelectMenu(list)
    })
}

function updateSelectMenu(list) {
  const breedSelect = document.querySelector(".breed-select")
  list.forEach((breed) => {
    const opt = document.createElement("option")
    opt.value = breed
    opt.innerText = breed
    breedSelect.appendChild(opt)
  })
}

function fetchDog() {
  const select = document.querySelector(".breed-select")
  const breed = select.options[select.selectedIndex].value
  const doggoPromise = fetch(`https://dog.ceo/api/breed/${breed}/images/random`)

  let img = document.querySelector(".doggo-img")
  if (!img) {
    img = document.createElement("img")
    img.alt= "loading gif"
  }
  img.src = "./public/loading.gif"

  doggoPromise
    .then((response) => {
      return response.json()
    })
    .then((resultJSON) => {
      displayDog(resultJSON)
    })
}


function displayDog(resultJSON) {
  let doggo = document.querySelector(".doggo-img")
  if (!doggo) {
    doggo = document.createElement("img")
    doggo.className = "doggo-img"
    doggo.alt = "a doggo"
    document.querySelector(".doggo").appendChild(doggo)
  }
  doggo.src = resultJSON.message
}
