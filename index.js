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
