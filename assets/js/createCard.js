const myList = document.getElementById("root");
const socialMap = new Map();

socialMap.set("www.instagram.com", "fa-brands fa-instagram");
socialMap.set("twitter.com", "fa-brands fa-facebook");
socialMap.set("www.facebook.com", "fa-brands fa-twitter");

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
    ulSocial.classList.add("ulSocial");

    `${actor.contacts.map((path) => {
        const listSocial = document.createElement("li");
        listSocial.classList.add("liSocial");
        const aSocial = document.createElement("a");
        listSocial.classList.add("aSocial");
        const iSocial = document.createElement("i");
        iSocial.classList.add("iSocial")
        console.log(iSocial)
      
        aSocial.setAttribute("href", path);
        aSocial.setAttribute("target", "_blank");

        const { hostname } = new URL(path);
        console.log(hostname);
      
        iSocial.className= socialMap.get(hostname);
       console.log(aSocial)

        aSocial.append(iSocial)
        listSocial.append(aSocial);
        ulSocial.append(listSocial);
    })}`;

    wrapperUl.append(ulSocial);
    listItem.append(divWrapper, fullName, wrapperUl);
    listActors.append(listItem);
    article.append(listActors);
    myList.append(article);
    return article;
}
