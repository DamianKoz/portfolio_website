const cardsContainer = document.getElementById("project-container");

const cards = [
  {
    heading: "Sorting Algorithm Visualizer",
    description:
      "Sorting algorithms are fascinating, and visualizing them even more.",
    link: "https://js-sorting.netlify.app/",
  },
  {
    heading: "Card 2",
    description: "This is the description for card 2.",
    link: "https://example.com",
  },
  {
    heading: "Card 3",
    description: "This is the description for card 3.",
    link: "https://example.com",
  },
];

function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const headingElement = document.createElement("h2");
  headingElement.textContent = card.heading;
  cardElement.appendChild(headingElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = card.description;
  cardElement.appendChild(descriptionElement);

  const linkElement = document.createElement("a");
  linkElement.classList.add("button");
  linkElement.href = card.link;
  linkElement.textContent = "Learn More";
  cardElement.appendChild(linkElement);

  return cardElement;
}

for (const card of cards) {
  cardsContainer.appendChild(createCard(card));
}
