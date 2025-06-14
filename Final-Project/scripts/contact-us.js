const hamburgerMenu = document.querySelector("#mobile__menu");
const nav = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("open")
    nav.classList.toggle("active");
})

const nameInput = document.querySelector("input[placeholder='John Doe']");
const form = document.querySelector(".contact-form")
const greeting = document.querySelector(".userGreeting")



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullName = nameInput.value.trim();
    if (fullName) {
        localStorage.setItem("username", fullName);
        greeting.textContent = `Thank you, ${fullName}! We'll contact you soon.`
        form.reset();
}
})

const savedName = localStorage.getItem("username")
if (savedName) {
    greeting.textContent = `Your answers have been submitted ${savedName}!. Have a nice day`;
}


let sACountries = {
    Arg: "Argentina",
    Bol: "Bolivia",
    Bra: "Brasil",
    Chi: "Chile",
    Col: "Colombia",
    Ecu: "Ecuador",
    Gui: "Guiana",
    Par: "Paraguay",
    Per: "Peru",
    Sur: "Surinam",
    Uru: "Uruguay",
    Ven: "Venezuela",
    IDK: "I don't know"
};

const countriesSelect = document.querySelector(".countryOfInterest");

for (let code in sACountries) {
    let option = document.createElement("option");
    option.value = code;
    option.textContent = sACountries[code];
    countriesSelect.appendChild(option);
}


let experiencesList = [
    {
        nature: "Nature and Wildlife"
    },
    {
        beach: "Beaches"
    },
    {
        adventure: "Extreme Adventures"
    },
    {
        culture: "History & Culture"
    },
    {
        food: "Gastronomy"
    },
    {
        eco: "Ecotourism"
    },
    {
        not_sure: "I'm Not Sure"
    }
]


const experiences = document.querySelector(".experiences")
experiencesList.forEach(experience => {
    const key = Object.keys(experience)[0];
    const value = experience[key]

    let option = document.createElement("option");
    option.value = key
    option.textContent = value
    experiences.appendChild(option)
});

