/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let articleElement = document.createElement("article");

        let h3Element = document.createElement("h3");
        h3Element.innerHTML = temple.templeName;

        let imgElement = document.createElement("img");

        imgElement.setAttribute("src", temple.imageUrl);
        imgElement.setAttribute("alt", temple.location);

        articleElement.appendChild(h3Element)
            .appendChild(imgElement);

        templesElement.appendChild(articleElement);
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const temples = await response.json();

    console.log(temples);

    templeList = temples;
    displayTemples(temples);
};

/* reset Function */
const reset = () => templesElement.querySelectorAll("article").forEach(x => x.remove());

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.querySelector("#filtered");

    switch (filter.value) {
        case "utah":
            displayTemples(temples.filter(x => x.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(x => !x.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(x => new Date(x.dedicated).getFullYear() < 1950));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => filterTemples(templeList));