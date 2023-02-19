// "use strict";

// const cardsHTML = document.getElementById("root");

// fetch("./assets/js/data.json").then((response)=>{
//   return response.json()
// }).then((data)=>{
//   for (const user of data) {
//     getFirstLettersFromName(user.firstName).then((e)=>{
//       root.append(e)
//     })

//   }
// }).catch((error)=>console.log(error))

// cardsContainer.append(...cardsHTML);

const myList = document.querySelector("section");

const myRequest = new Request("./assets/js/data.json");

fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        for (const actor of data) {
            const listItem = document.createElement("li");
            listItem.classList.add("cardWrapper");

            const article = document.createElement("article");
            article.classList.add("card");

            const divWrapper = document.createElement("div");
            divWrapper.classList.add("cardImageWrapper");

            const divInitial = document.createElement("div");
            divInitial.classList.add("initials");
            divInitial.style.backgroundColor = stringToColour(actor.firstName)
            divInitial.textContent=getFirstLettersFromName(`${actor.firstName} ${actor.lastName}`)

            divWrapper.append(divInitial)

            const name = document.createElement("h3");
            name.textContent = `${actor.firstName} ${actor.lastName}`;

            const img = document.createElement("img");
            // img.classList.add("cardImage");
            img.setAttribute("src", actor.profilePicture);


            
            myList.append(listItem,divWrapper,img,name);
        }
    })
    .catch((error) => console.log(error));

