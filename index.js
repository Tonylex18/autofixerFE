// Animations
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("review");
      
      // Unobserve the element once it has been reviewed
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("review");
    }
  });
});

const hiddenElements = document.querySelectorAll(".encrypt");
hiddenElements.forEach((el) => {
  observer.observe(el);
});


let activeTabIndex = 0;
let isCardSelected = false;

document.addEventListener("DOMContentLoaded", function () {
  // Hide all body sections except the first one
  const sections = document.querySelectorAll(".body > div");
  for (let i = 1; i < sections.length; i++) {
    sections[i].classList.add("hidden");
  }


  // Show the first body section and the "Next" button
  sections[0].classList.remove("hidden");
  const nextButton = document.querySelector(".next-button");
  nextButton.classList.remove("hidden");
  nextButton.disabled = true;

  // Initialize tabs variable
  tabs = document.querySelectorAll(".tab div");
});

function switchTab(index) {
  const tabs = document.querySelectorAll(".tab div");
  const sections = document.querySelectorAll(".body > div");

  // tabs[activeTabIndex].classList.remove("active-text", "active-quote");
  sections[activeTabIndex].classList.add("hidden");

  activeTabIndex = index;

  tabs[activeTabIndex].classList.add("active-text", "active-quote");
  sections[activeTabIndex].classList.remove("hidden");

  // Add "active-quote" class to the icons of the currently active tab
  const activeTabIcon = tabs[activeTabIndex].querySelector(".fa-circle-check");
  if (activeTabIcon) {
    activeTabIcon.classList.add("active-quote");
  }

  // Show or hide the "Next" button based on the active tab
  if (activeTabIndex === tabs.length - 1) {
    document.querySelector(".next-button").classList.add("hidden");
  } else {
    document.querySelector(".next-button").classList.remove("hidden");
  }

  // Enable or disable the "Next" button based on card selection
  updateNextButtonState();
}


function changeCategory(category, cardId) {
  const h1Element = document.getElementById('headingQuote');
  h1Element.textContent = `${category}`;

  // Remove focus from the previously selected card
  const prevSelectedCard = document.querySelector('.selected-card');
  if (prevSelectedCard) {
    prevSelectedCard.classList.remove('selected-card');
  }

  // Add focus to the selected card
  const selectedCard = document.getElementById(cardId);
  if (selectedCard) {
    selectedCard.classList.add('selected-card');
  }

  // Set the flag indicating that a card is selected
  isCardSelected = true;

  // Enable or disable the "Next" button based on card selection
  updateNextButtonState();
}

function updateNextButtonState() {
  // Enable or disable the "Next" button based on card selection and other validations
  const nextButton = document.querySelector(".next-button");
  nextButton.disabled = !isCardSelected || !validateForm();
}


function nextTab() {
  // Validate before moving to the next tab
  if (validateForm()) {
    let nextIndex = activeTabIndex + 1;
    if (nextIndex >= tabs.length) {
      nextIndex = 0;
    }
    switchTab(nextIndex);
  }
}

function validateForm() {
  if (!isCardSelected) {
    alert("Please select a card before proceeding.");
    return false;
  }
  return true;
}

function nextTab() {
  let nextIndex = activeTabIndex + 1;
  if (nextIndex >= tabs.length) {
    nextIndex = 0;
  }
  switchTab(nextIndex);
}





document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const cancelBtn = document.getElementById("cancel-btn");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  cancelBtn.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

function showSection(sectionId, button) {
  document.querySelectorAll(".help").forEach((section) => {
    section.style.display = "none";
  });

  document.querySelectorAll("#buttons-selector button").forEach((btn) => {
    btn.classList.remove("current");
  });

  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }

  button.classList.add("current");
}

document.addEventListener("DOMContentLoaded", function () {
  showSection("car-diagnosis", document.querySelector(".current"));
});

const items = [
  {
    title: "Quality in car diagnosis",
    image: "./public/assets/image1.png",
    description:
      "Our Fix service provides you with a one-stop professional service for all of your auto needs. From electrical, to bodyworks and mechanical faults, we have got you covered.",
  },
  {
    title: "Quality in car repair",
    image: "./public/assets/image10.png",
    description:
      "One of our objectives is to improve the longevity of every vehicle we encounter and to guide our clients through a lasting enjoyment of their investment.",
  },
  {
    title: "Quality in car maintenance.",
    image: "./public/assets/image8.png",
    description:
      "So many vehicles develop problems due to Lack of Maintenance or the Wrong Maintenance Structure. We are here to sole that problem. Let's partner with you and give your vehicle the best hands in the industry.",
  },
];

let currentIndex = 0;

function changeContent(index, button) {
  currentIndex = index;
  const selected = items[index];

  const titleElement = document.getElementById("hero-title");
  const descriptionElement = document.getElementById("hero-description");
  const imageElement = document.getElementById("hero-image");

  document
    .querySelectorAll(".active-btn")
    .forEach((btn) => btn.classList.remove("active-btn"));

  button.classList.add("active-btn");

  titleElement.classList.remove("active");
  descriptionElement.classList.remove("active");
  imageElement.classList.remove("active");

  setTimeout(() => {
    titleElement.innerText = selected.title;
    descriptionElement.innerText = selected.description;
    imageElement.src = selected.image;

    void titleElement.offsetWidth;

    titleElement.classList.add("active");
    descriptionElement.classList.add("active");
    imageElement.classList.add("active");
  }, 500);
}

function autoplay() {
  currentIndex = (currentIndex + 1) % items.length;
  const button = document.getElementById(getButtonId(currentIndex));
  changeContent(currentIndex, button);
}

function getButtonId(index) {
  switch (index) {
    case 0:
      return "diagnosis";
    case 1:
      return "repair";
    case 2:
      return "maintenance";
    default:
      return "";
  }
}

document.getElementById("diagnosis").addEventListener("click", function () {
  changeContent(0, this);
});

document.getElementById("repair").addEventListener("click", function () {
  changeContent(1, this);
});

document.getElementById("maintenance").addEventListener("click", function () {
  changeContent(2, this);
});

changeContent(currentIndex, document.getElementById(getButtonId(currentIndex)));

setInterval(autoplay, 5000);

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 2,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [5000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
