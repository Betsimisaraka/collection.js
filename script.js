
class collection {
    constructor(title, nameOfArtist, truckNumber, socialLink, releaseYear) {
        this.title = title;
        this.nameOfArtist = nameOfArtist;
        this.truckNumber = truckNumber;

        let linkUrl = socialLink;
        if (!linkUrl.startsWith ('http://') && !linkUrl.startsWith ('https://')) {
            linkUrl = `https:// ${linkUrl}`;
        }

        this.socialLink = linkUrl;
        this.releaseYear = releaseYear;
    }
    toString() {
        return `Title: ${this.title} Name: ${this.nameOfArtist} Truck number: ${this.truckNumber}
        Social link: ${this.socialLink} Release year: ${this.releaseYear}`;
    }
}

let collections = [];
collections.push(new collection("My first song", "John", 2, "my-first-song.com", 1996));
collections.push(new collection("My second song", "John", 2, "http://my-second-song.com", 2000));
collections.push(new collection("My third song", "John", 2, "http://my-third-song.com", 2015));
collections.push(new collection("My fith song", "John", 2, "http://my-fith-song.com", 2020));

const allCollections = () => {
    for (let i = 0; i < collections.length; i++) {
        alert(`${collections[i].toString()}`);
    }
}

const addCollection = () => {
    let title = prompt("Enter the title of your collection");
    let nameOfArtist = prompt("Enter the name of your collection");
    let truckNumber = prompt("Enter the truck of your collection");
    let socialLink = prompt("Enter the link of your collection");
    let releaseyear = prompt("Enter the year of your collection");
    collection.push(title, nameOfArtist, truckNumber, socialLink, releaseyear);
}

const removeCollection = () => {
    let titleOfCollection = [];
    let maxIndex = collections.title;
    while (titleOfCollection < 1 || titleOfCollection > collections.title) {
        titleOfCollection = prompt(`Remove the exist collection by choosing the index (between 1, ${maxIndex})`);
    }
   collection.splice(titleOfCollection, 1);
}

const choice = `Menu options:

choice (1) Show all the collections
Choice (2) Add a new record
Choice (3) Update a specific record
Choice (4) Remove an exist record
Choice (5) Quite`;

let menuChoice = Number(prompt(choice));

while (menuChoice !== 5) {
    switch(menuChoice) {
        case 1:
            allCollections();
            break;
        case 2:
            addCollection();
            break;
        case 3:
            alert('I love it');
            break;
        case 4:
            removeCollection();
            break;
        case 5:
            alert('Goodbye');
            break;
        default:
          alert('Thank you');
    }
    menuChoice = Number(prompt(choice));
}

alert('Thank you for following this program');
