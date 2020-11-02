# Calculator with Javascript
[instructions](https://btholt.github.io/intro-to-web-dev-v2/js-project)

## REQUIREMENTS 
* create a basic IOS calculator
* perform basic operation (+, - , *, /, clear, backspace, =)
* don't implements decimals, percentage; assume all values are integers

## TIPS 

### HTML & CSS TIPS
Here are some Useful information before you start,
so you can focus on building the calculator and not worry about the design stuff

#### Normal Button Background Colors:
* Normal buttons:  ``#d8d9db``
* Normal buttons:hover: ``#ebebeb``
* Normal buttons:active: ``#bbbcbe``

#### Operation Button Background Colors:
* Operation button: ``#df974c``
* Operation button:hover ``#dfb07e``
* Operation button:active: ``#dd8d37``

#### Sizes
* Calculator width: ``400px``
* Font Size: ``40px``
* Screen Padding: ``20px 5px``
* regular size button: ``width: 24.5%``
* double-size button: ``width: 49.7%``
* triple-size button: ``width: 74.8%``
* button height: ``100px``
---
* Use ``margin-bottom: 0.5%`` for each row to create a nice "border" or "gutter" look.

#### Other useful info
* Instead of creating a black background for the screen, create a black background for the entire calculator.
    * Then place buttons on top of it!

### JAVASCRIPT TIPS

#### Useful functions

adding event listener
```javascript
document
  .querySelector("selector")
  .addEventListener("click", function (event) {
    buttonClick(event.target.innerText);
  })
```

numbers stuff
```javascript
isNaN("xyz")
parseInt("42")
```

changing text of an element 
```javascript
document.querySelector(".msg").innerText = "Hello world"
```

substrings
```javascript
const MSG = "hello"; const START = 0; const END = MSG.length-1
MSG.substring(START, END) // "hell"
```

saving the results of ``querySelector`` into a variable for readability
```javascript
const redButton = document.querySelector(".red-button")
redButton.innerText = "Im a red button"
```

## REMINDERS
* Do not make 100 event-listener!
    * google ```event delagation```
* "rerender" your screen on button press
* Avoid long If/Else chains
* If your code is hundreds of lines long, you're doing something wrong.

