/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
const fullName = "Matheus Grigio da Silva";
let currentYear = Date().currentYear;
let profilePicture = 'images/profile.jpeg';


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Strogonoff', 'Açai', 'Steak', 'Tuna Salad'];

foodElement.innerHTML += `<br>${favoriteFoods}`;

let anotherFavoriteFood = 'Lasagna';
favoriteFoods.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;