const eiffelTower = require('./../assets/images/eiffel-tower-paris.jpeg');
const colosseum = require('./../assets/images/the-colosseum-rome.jpeg');
const statueOfLiberty = require('./../assets/images/statue-liberty-new-work.jpeg');
const machuPicchu = require('./../assets/images/machu-picchu-peru.jpeg');
const acropolis = require('./../assets/images/the-acropolis-athens.jpeg');
const tajMahal = require('./../assets/images/taj-mahal-india.jpeg');
const pyramids = require('./../assets/images/pyramids.jpeg');
const greatWall = require('./../assets/images/great-wall-china.jpeg');
const angkor = require('./../assets/images/angkor-wat-cambodia.jpeg');
const petra = require('./../assets/images/petra-jordan.jpeg');

export type placeType = {
    id: number,
    title: string,
    image: any,
    place: string,
    discount: number,
    price: number,
    pricePerPerson: number
}

const places: placeType[] = [
    {
        id: 1,
        title: `Eiffel Tower, Paris`,
        image: eiffelTower,
        place: `Paris`,
        discount: 20,
        price: 120,
        pricePerPerson: 10
    },
    {
        id: 2,
        title: `The Colosseum, Rome`,
        image: colosseum,
        place: `Roman Empire`,
        discount: 15,
        price: 80,
        pricePerPerson: 15
    },
    {
        id: 3,
        title: `Statue of Liberty, New York City`,
        image: statueOfLiberty,
        place: `United States`,
        discount: 10,
        price: 200,
        pricePerPerson: 20
    },
    {
        id: 4,
        title: `Machu Picchu, Peru`,
        image: machuPicchu,
        place: `South America`,
        discount: 25,
        price: 78,
        pricePerPerson: 8
    },
    {
        id: 5,
        title: `The Acropolis, Athens`,
        image: acropolis,
        place: `Acropolis, Athens`,
        discount: 22,
        price: 40,
        pricePerPerson: 5
    },
    {
        id: 6,
        title: `The Taj Mahal, India`,
        image: tajMahal,
        place: `India`,
        discount: 18,
        price: 60,
        pricePerPerson: 6
    },
    {
        id: 7,
        title: `Pyramids of Giza, Egypt`,
        image: pyramids,
        place: `Giza, Egypt`,
        discount: 20,
        price: 40,
        pricePerPerson: 3
    },
    {
        id: 8,
        title: `Great Wall of China`,
        image: greatWall,
        place: `China`,
        discount: 28,
        price: 109,
        pricePerPerson: 12
    },
    {
        id: 9,
        title: `Angkor Wat, Cambodia`,
        image: angkor,
        place: `Cambodia`,
        discount: 30,
        price: 133,
        pricePerPerson: 15
    },
    {
        id: 10,
        title: `Petra, Jordan`,
        image: petra,
        place: `Petra, Jordan`,
        discount: 15,
        price: 100,
        pricePerPerson: 10
    },
];

export default places;