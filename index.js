"use strict";

const myList = document.getElementById("root");

const myRequest = new Request("./assets/js/data.json");

fetch(myRequest)
    .then((response) => response.json())
    .then((data) => {
      const title = document.createElement("h1");
      title.textContent = "Actors";
      title.classList.add("title");
      myList.append(title);


        for (const actor of data) {
           createActorCard(actor);
        }
      
        const input = document.createElement("input");
        input.type ="text"
        input.placeholder = "you choosed";
        input.classList.add("input");
        myList.append(input);
    })
    .catch((error) => console.log(error));
