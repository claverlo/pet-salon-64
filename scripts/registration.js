let pet1 = {
    name: "Ferrari",
    age: 3,
    gender: "Female",
    service: "Shell cleaning",
    breed: "Turtle"
};

let pet2 = {
    name: "Lambo",
    age: 5,
    gender: "Male",
    service: "Vaccination",
    breed: "Turtle"
};

let pet3 = {
    name: "Bugatti",
    age: 2,
    gender: "Male",
    service: "Health check",
    breed: "Turtle"
};

let petsList = [pet1, pet2, pet3];

function displayPets() {
    let list = document.getElementById("pets");
    list.innerHTML = "";

    for (let i = 0; i < petsList.length; i++) {
        list.innerHTML += `<li>${petsList[i].name}</li>`;
    }
}


displayPets();
