var suspectArray = [
{
    nickName: "mrGreen",
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
},
{
    nickName: "drOrchid",
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr.Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
    },
    {
    nickName: "profPlum",
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer", 
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
    },
    {
    nickName: "missScarlet",
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: 31,
    description: "She is an A- list movie star with a dark past",
    image: "https://www.ultraboardgames.com/clue/gfx/miss-scarlet.jpg",
    color: "red"
    },
    {
    nickName: "mrsPeacock",
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "She is from a wealthy family and uses her status and money to earn popularity",
    image: "https://i.pinimg.com/originals/2d/63/2e/2d632eff4326b2b0fb209ab0e59f5ba9.jpg",
    color: "blue"
    },
    {
    nickName: "mrMustard",
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "He is a former football player who tries to get by on his former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
    }
]

var weaponsArray = [
    {
        name: "rope",
        weight: 10 
    },
    {
        name: "knife",
        weight: 8
        
    },
    {
        name: "candlestick",
        weight: 2 
    },
    {
        name: "dumbbell",
        weight: 30 
    },
    {
        name: "poison",
        weight: 2 
    },
    {
        name: "axe",
        weight: 15 
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25 
    },
    {
        name: "pistol",
        weight: 20
    }
]

var roomsArray = [
    {name: "Dining Room"},
    {name: "Conservatory"},
    {name: "Kitchen"},
    {name: "Study" },
    {name: "Library"},
    {name: "Billiard Room"},
    {name: "Lounge" },
    {name: "Ballroom"},
    {name: "Hall"},
    {name: "Spa"},
    {name: "Living Room"},
    {name: "Observatory"},
    {name: "Theater"},
    {name: "Guest House"},
    {name: "Patio"}

]
let secret = {}
let firstName = document.getElementById("firstName")
let lastName= document.getElementById("lastName")
let weapon= document.getElementById("weapon")
let room = document.getElementById("room")
let suspect =document.getElementById("suspect")


function selectRandom(a) {
    let num = a.length
    // console.log(num)
    let random = Math.floor(Math.random() * num)
    for (let index = 0; index < a.length; index++) {
        return a[random]
    }
}



function pickMystery() {
    secret = {
        suspect : Object.values(selectRandom(suspectArray)),
        weapon : Object.values(selectRandom(weaponsArray)),
        room : Object.values(selectRandom(roomsArray))
    }
    console.log(secret)
    return secret
}

pickMystery()

function revealMystery(a) {
    console.log(secret)
    console.log(`${secret.suspect[1]} ${secret.suspect[2]} killed Mr. Boddy using the ${secret.weapon[0]} in the ${secret.room}`)
    firstName.innerHTML = secret.suspect[1]
    lastName.innerHTML = secret.suspect[2]
    weapon.innerHTML = secret.weapon[0]
    room.innerHTML = secret.room
    // suspect.innerHTML = `${secret.suspect[1]} ${secret.suspect[2]} killed Mr. Boddy using the ${secret.weapon[0]} in the ${secret.room} <br> <img src="${secret.suspect[6]}" alt="">`
    suspect.innerHTML = `<img src="${secret.suspect[6]}" alt="">`
}

revealMystery(secret)

//<FIRST NAME> <LAST NAME> killed Mr. Boddy using the <WEAPON> in the <ROOM>!

//Dazu ein Bild. 