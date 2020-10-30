# DOG PROJECT WITH AJAX & API

## [Instructions](https://btholt.github.io/intro-to-web-dev-v2/ajax)
* using [dog.ceo](https://dog.ceo/dog-api/)
* make a web-page that display picture of dogs after pressing a button

### Useful functions & stuff

#### fetching data
```javascript
const promise = fetch(url)
```

#### processing fetch data to json
```javascript
response.json()
```

#### promise chaining 
```javascript
promise
    .then((response) => {
      const processingPromise = response.json()
      return processingPromise
    })  
   .then((processResponse) => {
      console.log(processResponse)
   })
console.log("this will log  first!")
```

#### dog.ceo response
```json
{
  "status": "success",
  "message": "https://images.dog.ceo/breeds/affenpinscher/n02110627_11783.jpg"
}
```

#### creating new elements with javascript
```javascript
const img = document.createElement("img")
```

#### appending new element to existing elements
```javascript
listOfDogs.appendChild(img)
```

#### REMINDERS ...
* fill out the alt attribute of img tag
* style with css
* show a loading gif that shows when you're loading a new dog and then hide it when you're done
* select which breed of dogs to get from api
* this project is a more open-ended than the previous.






