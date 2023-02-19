// const myList = document.getElementById("root");

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
    fullName.classList.add("cardName")
    fullName.textContent = `${actor.firstName} ${actor.lastName}`;

    listItem.append(divWrapper, fullName)
    listActors.append(listItem);
    article.append(listActors)
    myList.append(article)
    return article;
  }