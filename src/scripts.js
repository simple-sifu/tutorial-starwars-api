console.log("load scripts");

const loadCharacters = () => {
    console.log("loadCharacters");
    fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then((data) => console.log(data));
}

document.addEventListener("load", loadCharacters());


