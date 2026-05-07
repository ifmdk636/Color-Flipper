# Color Flipper

A simple web project that changes the background color when buttons are clicked using JavaScript `addEventListener`.

## Features

- Change background color to:
  - Green
  - Red
  - Blue
- Random color generator
- Built with:
  - HTML
  - CSS
  - JavaScript

---

## Project Structure

```bash
color-flipper/
│
├── index.html
├── styles.css
└── script.js
```

---

## Preview

```text
[ Green ] [ Red ] [ Blue ] [ Random ]
```

Clicking a button changes the page background color.

---

## HTML

Buttons are created inside `index.html`.

```html
<button class="btn btn-green">Green</button>
<button class="btn btn-red">Red</button>
<button class="btn btn-blue">Blue</button>
<button class="btn btn-random">Random</button>
```

---

## JavaScript

Event listeners are added in `script.js`.

```javascript
greenBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#16a34a";
});
```

---

## How to Run

1. Download or clone this repository

```bash
git clone https://github.com/your-username/color-flipper.git
```

2. Open the project folder

3. Run `index.html` in your browser

---

## Learning Goals

This project helps practice:

- DOM selection
- `addEventListener()`
- JavaScript functions
- Random color generation
- Basic UI interaction

---

## License

MIT License
