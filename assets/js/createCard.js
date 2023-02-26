// const myList = document.getElementById("root");
const socialMap = new Map();

socialMap.set("www.instagram.com", "*");
socialMap.set("twitter.com", "*");
socialMap.set("www.facebook.com", "fa-brands fa-instagram");


// const user = JSON.parse({
//     id: 5,
//     firstName: "Scarlett",
//     lastName: "Johansson",
//     profilePicture:
//         "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg",
//     contacts: [
//         "https://www.facebook.com/pages/category/Actor/Scarlett-Johansson-Official-101457158013203/",
//         "https://twitter.com/scarlett_jo",
//         "https://www.instagram.com/scarlett.johansson.fc/?hl=ru",
//     ],
// });



function createActorCard(actor) {
    const article = document.createElement("article");
    article.classList.add("card");

    const listActors = document.createElement("ul");

    listActors.classList.add("cardsContainer");

    const listItem = document.createElement("li");
    listItem.classList.add("cardWrapper");

    const divWrapper = document.createElement("div");
    divWrapper.classList.add("cardImageWrapper");

    const img = document.createElement("img");
    img.classList.add("cardImage");
    img.setAttribute("src", actor.profilePicture);
    img.addEventListener("error", handleImageError);
    img.addEventListener("load", handleImageLoad);

    const divInitial = document.createElement("div");
    divInitial.classList.add("initials");
    divInitial.style.backgroundColor = stringToColour(actor.firstName);
    divInitial.textContent = getFirstLettersFromName(
        `${actor.firstName} ${actor.lastName}`
    );

    divWrapper.append(divInitial, img);

    const fullName = document.createElement("h3");
    fullName.classList.add("cardName");
    fullName.textContent = `${actor.firstName} ${actor.lastName}`;
    
  
    const wrapperUl = document.createElement("div");
    const ulSocial = document.createElement("ul");
   
    

 
    // aSocial.textContent = `${actor.contacts[0]}`
    debugger
    `${actor.contacts.map((href)=>{

        const listSocial = document.createElement("li");
       const aSocial = document.createElement("a");
        aSocial.setAttribute('href', href);
        aSocial.textContent=`${href}`
        
        listSocial.append(aSocial)
        ulSocial.append(listSocial);
        // const hrefname = new URL(href);
        // console.log(hrefname)
      
    })}`
   
   
    
   
    wrapperUl.append(ulSocial);
    listItem.append(divWrapper, fullName,wrapperUl);
    listActors.append(listItem);
    article.append(listActors);
    myList.append(article);
    return article;
}
