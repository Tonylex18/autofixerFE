// script.js
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  const cancelBtn = document.getElementById('cancel-btn');

  menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
  });

  cancelBtn.addEventListener('click', function () {
    menu.classList.remove('active');
  });
});


   // Function to show a section and update the 'current' class
  function showSection(sectionId, button) {
    // Hide all sections
    document.querySelectorAll('.help').forEach(section => {
      section.style.display = 'none';
    });

    // Remove 'current' class from all buttons
    document.querySelectorAll('#buttons-selector button').forEach(btn => {
      btn.classList.remove('current');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }

    // Add 'current' class to the clicked button
    button.classList.add('current');
  }

  // Show the car-diagnosis section by default on page load
  document.addEventListener('DOMContentLoaded', function() {
    showSection('car-diagnosis', document.querySelector('.current'));
  });

  const items = [
   
    {
      title: 'Quality in car diagnosis',
      image: '/public/assets/image1.png',
      description: 'Our Fix service provides you with a one-stop professional service for all of your auto needs. From electrical, to bodyworks and mechanical faults, we have got you covered.'
    },
    {
      title: 'Quality in car repair',
      image: '/public/assets/image10.png',
      description: 'One of our objectives is to improve the longevity of every vehicle we encounter and to guide our clients through a lasting enjoyment of their investment.'
    },
    {
      title: 'Quality in car maintenance.',
      image: '/public/assets/image8.png',
      description: 'So many vehicles develop problems due to Lack of Maintenance or the Wrong Maintenance Structure. We are here to sole that problem. Let\'s partner with you and give your vehicle the best hands in the industry.'
    }
  ];
  
  
  let currentIndex = 0;

  function changeContent(index, button) {
    currentIndex = index;
    const selected = items[index];

    const titleElement = document.getElementById('hero-title');
    const descriptionElement = document.getElementById('hero-description');
    const imageElement = document.getElementById('hero-image');

    // Remove active-btn class from all buttons
    document.querySelectorAll('.active-btn').forEach(btn => btn.classList.remove('active-btn'));

    // Add active-btn class to the clicked button
    button.classList.add('active-btn');

    // Add fade-out effect before changing content
    titleElement.classList.remove('active');
    descriptionElement.classList.remove('active');
    imageElement.classList.remove('active');

    setTimeout(() => {
      // Change content
      titleElement.innerText = selected.title;
      descriptionElement.innerText = selected.description;
      imageElement.src = selected.image;

      // Trigger a reflow to restart the transition
      void titleElement.offsetWidth;

      // Add fade-in effect
      titleElement.classList.add('active');
      descriptionElement.classList.add('active');
      imageElement.classList.add('active');
    }, 500); // Set timeout to match the transition duration
  }

  function autoplay() {
    currentIndex = (currentIndex + 1) % items.length;
    const button = document.getElementById(getButtonId(currentIndex));
    changeContent(currentIndex, button);
  }

  function getButtonId(index) {
    switch (index) {
      case 0:
        return 'diagnosis';
      case 1:
        return 'repair';
      case 2:
        return 'maintenance';
      default:
        return '';
    }
  }

  // Show initial content on page load
  changeContent(currentIndex, document.getElementById(getButtonId(currentIndex)));

  // Autoplay every 5000 milliseconds (5 seconds)
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


  