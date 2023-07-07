const cardsContainer = document.getElementById("project-container");

const cards = [
  {
    heading: "Sorting Algorithm Visualizer",
    description: `Sorting algorithms are fascinating, and watching them work even more so. <br>
    I made a <a href="https://js-sorting.netlify.app/">fancy one in JavaScript</a>, and <a href="https://github.com/DamianKoz/sorting_algorithms">a less visual in Go.</a>`,

    link: "https://js-sorting.netlify.app/",
  },
  {
    heading: "[Currently Learning] Scalable Go Microservices",
    description: `I am currently learning about highly available, scalable, resilient and distributed applications using Go. <br>
      For this I am also reading <a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321">Designing Data-Intensive Applications</a>, which is a fantastic book.`,
  },
  {
    heading: "[Currently Working on] My own Programming Language",
    description:
      "Programming languages are fascinating tools that allow us to turn ideas into reality. To understand them better, I decided to built my own and explain the concept in a beginner friendly way.",
  },
  {
    heading: "Autonomous Driving",
    description:
      "I built a neural network from scratch to let cars drive autonomously.",
    link: "https://auto-driving.netlify.app/",
  },
  {
    heading: "Smaller programming projects",
    description:
      "I am constantly trying to learn something new. For this I am solving coding challenges, learning about threads in Python and building smaller projects to learn something new.",
    link: "https://github.com/damiankoz",
  },
];

function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const headingElement = document.createElement("h2");
  headingElement.textContent = card.heading;
  headingElement.style.fontWeight = "400";
  cardElement.appendChild(headingElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = card.description;
  cardElement.appendChild(descriptionElement);

  const linkElement = document.createElement("a");
  linkElement.classList.add("button");
  if (card.link) {
    linkElement.href = card.link;
    linkElement.textContent = "Learn More";
    linkElement.target = "_blank";
  } else {
    linkElement.href = "javascript:void(0)";
    linkElement.textContent = "Coming Soon";
    linkElement.target = "_self";
  }

  cardElement.appendChild(linkElement);

  return cardElement;
}

for (const card of cards) {
  cardsContainer.appendChild(createCard(card));
}
