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
      

        const wrapperText = document.createElement('div')
        wrapperText.classList.add("wrapperText")
        const text = document.createElement("h2");
        text.textContent ="your choose" ;
        // input.placeholder = "≈";
        // input.classList.add("text");
        wrapperText.append(text);
        myList.append(wrapperText)
        
    })
    .catch((error) => console.log(error));
