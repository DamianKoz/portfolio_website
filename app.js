const cardsContainer = document.getElementById("project-container");

const cards = [
  {
    heading: "Sorting Algorithm Visualizer",
    description:
      "Sorting algorithms are fascinating, and visualizing them even more.",
    link: "https://js-sorting.netlify.app/",
  },
  {
    heading: "Damiansblog",
    description:
      "I also built a blog, on which you can take a look at my thinking.",
    link: "https://damiansblog.com",
  },
  {
    heading: "Autonomous Driving",
    description:
      "I built a neural network from scratch to let cars drive autonomously.",
    link: "https://auto-driving.netlify.app/",
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
  linkElement.target = "_blank";
  linkElement.textContent = "Learn More";
  cardElement.appendChild(linkElement);

  return cardElement;
}

for (const card of cards) {
  cardsContainer.appendChild(createCard(card));
}
