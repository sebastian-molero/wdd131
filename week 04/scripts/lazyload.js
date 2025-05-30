const yearSpan = document.getElementById("currentyear");
const lastModifiedParagraph = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedParagraph.textContent = `Last Modification: ${document.lastModified}`;

let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
        street: "123 Camino Real",
        city: "Santa Rosa",
        country: "Honduras"
    },
    isEmployed: true,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
console.log(person['isEmployed']);
console.log(person.hobbies[0]);
console.log(person.age)
console.log(person['address'].city)