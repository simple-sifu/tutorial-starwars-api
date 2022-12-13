console.log("start load scripts");

const characterData = [];

const characterImages = [
    "luke-skywalker_1.jpg",
    "c-3po_2.jpg",
    "r2-d2_3.jpg",
    "darth-vader_4.jpg",
    "leia-organa_5.jpg",
    "owen-lars_6.jpg",
    "beru-whitesun-lars_7.jpg",
    "r5-d4_8.jpg",
    "biggs-darklighter_9.jpg",
    "obi-wan-kenobi_10.jpg",
]


const addToDivToCard = (charObj, index) => {
    // create card
    const divElement = document.createElement('div');
    divElement.classList.add("card");

    // add image to card
    const imgElement = document.createElement('img');
    imgElement.src = `./assets/images/${characterImages[index]}`
    divElement.appendChild(imgElement);
    divElement.appendChild(document.createElement(`br`));


    // add all properties to card
    Object.keys(charObj).forEach((key) => {
        const value = charObj[key];
        console.log("addToDivElement value=", value);
        if (Array.isArray(value)){
            console.log("array processing for urls");
            // To Do: process array of links
            
            // const linkArray = []; 
            // value.forEach((url, index) => {
            //     console.log("url =", url);
            //     const displayIndex = index + 1;
            //     const aElement = document.createElement('a');
            //     aElement.href = url;
            //     const linkText = document.createTextNode(`${key + displayIndex} `);
            //     aElement.appendChild(linkText);
            //     aElement.title = `${key + displayIndex}, `; 
            //     linkArray.push(aElement);
            // })
            // const linkText = document.createTextNode(`${key}: ${key + displayIndex} `);
            // divElement.appendChild(aElement)
        }else {
            divElement.appendChild(document.createTextNode(`${key}: ${charObj[key]}`))
            divElement.appendChild(document.createElement(`br`));
        }
 
    })
    return divElement

}

const addToContainer = (arrayOfCharacters) => {
    console.log("add to body tag")
    const bodyElement = document.querySelector("body");
    const divContainerElement = document.createElement('div');
    divContainerElement.classList.add("cardContainer");

    arrayOfCharacters.forEach((character, index) => {
        console.log(`add character.name=${character.name}`);
        divContainerElement.appendChild(addToDivToCard(character, index));
    })
    bodyElement.appendChild(divContainerElement);
    console.log("finished adding to body tag")
  
}



const loadCharacters = () => {
    console.log("loadCharacters");
    fetch('https://swapi.dev/api/people')
        .then((response) => response.json())
        .then((data) => {
            data.results.map(obj => {
                characterData.push(obj)
            })
            addToContainer(characterData);
            console.log(characterData)
        });
}

document.addEventListener("load", loadCharacters());

console.log("end load scripts");

