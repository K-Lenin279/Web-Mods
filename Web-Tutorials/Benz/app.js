// Selecting Elements
const redColor = document.querySelector('.red');
const blackColor = document.querySelector('.black');
const grayColor = document.getElementsByClassName('gray');
const imageCard = document.querySelector('.product-image');
const feedbackBtn = document.querySelector('.feedback');
const cartButton = document.getElementById('button');
const itemTag = document.getElementsByTagName('h3')[0];
/* If you've used the tag you're targeting more than once, then it will return a list of elements.
   Use indexing to select the right one. */

// Modifying Elements
redColor.addEventListener('click', () => {
  cartButton.style.backgroundColor = 'red';
  itemTag.style.backgroundColor = 'red';
  imageCard.style.backgroundImage = "url('./img/Mercedes Benz GTR wallpaper by Maaxx10 - Download on ZEDGE™ _ ad38.jpeg')";
});

grayColor[0].addEventListener('click', () => {
  cartButton.style.backgroundColor = 'gray';
  itemTag.style.backgroundColor = 'gray';
  imageCard.style.backgroundImage = "url('./img/Luxury cars Mercedes Benz Wallpaper 4k Download в 2022 г _ Автомобили мечты, Мерседес amg, Автомобили.jpeg')";
});

blackColor.addEventListener('click', () => {
  cartButton.style.backgroundColor = 'black';
  itemTag.style.backgroundColor = 'black';
  imageCard.style.backgroundImage = "url('./img/86798a3c-4f59-4aa1-9950-daf9b0c870aa.jpeg')";
});

// Button Click Implementation
const cart = () => {
  cartButton.style.display = 'none';
  feedbackBtn.style.display = 'block';
}
cartButton.addEventListener('click', cart);

const feedback = () => {
  cartButton.style.display = 'block';
  feedbackBtn.style.display = 'none';
}
feedbackBtn.addEventListener('click', feedback);