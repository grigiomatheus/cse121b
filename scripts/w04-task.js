/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Matheus Grigio da Silva",
    age: 25,
    photo: {
        path: "images/profile.jpeg",
        name: "Profile picture of Matheus Grigio da Silva"
    },
    favoriteFoods: ['Strogonoff', 'Açai', 'Steak', 'Tuna Salad'],
    hobbies: ["Study", "Cinema", "Read books"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile["placesLived"].push({
    place: "Londrina",
    length: "23 years"
});

let anotherPlaceLived = {
    place: "Piracicaba",
    length: "2 years"
};

myProfile.placesLived.push(anotherPlaceLived);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;


/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo.path);
document.querySelector("#photo").setAttribute("alt", myProfile.photo.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let liElement = document.createElement("li");
    liElement.textContent = food;
    document.querySelector("#favorite-foods").appendChild(liElement);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    liElement = document.createElement("li");
    liElement.textContent = hobby;
    document.querySelector("#hobbies").appendChild(liElement);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
    let dtElement = document.createElement("dt");
    dtElement.textContent = placeLived.place;

    let ddElement = document.createElement("dd");
    ddElement.textContent = placeLived.length;

    document.querySelector("#places-lived")
        .appendChild(dtElement)
        .appendChild(ddElement);
});

