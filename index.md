---
layout: default
---

# Working Timer Links

[10 Minutes](./10 Mins/index.html).

## How to change timer length

In script.js change the 2 fields shown below to update the starting time.

```js
var myTimer = new Timer({
  minutes: 5,
  seconds: 001,
  element: document.querySelector('#timer')
});
```
You will also need to update index.html to display the new time shown below on page load. 

```html
<p style="font-size:500%;"><font color="white"><strong><span id="timer">10:00</span></strong></p>
```
