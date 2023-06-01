// BMW cars
const bmwCars = [
    {
      model: "BMW 3 Series",
      year: 2023,
      price: "$40,000",
      topSpeed: "155 mph",
      imgUrl: "img/BMW 3 Series.jpg",
    },
    {
      model: "BMW 5 Series",
      year: 2023,
      price: "$55,000",
      topSpeed: "130-155 mph",
      imgUrl: "img/BMW 5 Series.jpg",
    },
    {
      model: "BMW 7 Series",
      year: 2023,
      price: "$85,000",
      topSpeed: "130-155 mph",
      imgUrl: "img/BMW 7 Series.jpg",
    },
    {
      model: "BMW X3",
      year: 2023,
      price: "$43,000",
      topSpeed: "130-155 mph",
      imgUrl: "img/BMW X3.jpg",
    },
    {
      model: "BMW X5",
      year: 2023,
      price: "$59,000",
      topSpeed: "130-155 mph",
      imgUrl: "img/BMW X5.jpg",
    },
  ];
  
  // Tesla cars
  const teslaCars = [
    {
      model: "Tesla Model S",
      year: 2023,
      price: "$79,990",
      topSpeed: "200 mph",
      imgUrl: "img/Tesla Model S.jpg",
    },
    {
      model: "Tesla Model 3",
      year: 2023,
      price: "$39,990",
      topSpeed: "140 mph",
      imgUrl: "img/Tesla Model 3.jpg",
    },
    {
      model: "Tesla Model X",
      year: 2023,
      price: "$89,990",
      topSpeed: "155 mph",
      imgUrl: "img/tesla model X.jpg",
    },
    {
      model: "Tesla Model Y",
      year: 2023,
      price: "$42,990",
      topSpeed: "135 mph",
      imgUrl: "img/tesla model Y.jpg",
    },
    {
      model: "Tesla Cybertruck",
      year: 2022, // Up to knowledge cutoff
      price: "$39,900",
      topSpeed: "130 mph",
      imgUrl: "img/Tesla Cybertruck.jpg",
    },
  ];
  
  // Audi cars
  const audiCars = [
    {
      model: "Audi A3",
      year: 2023,
      price: "$33,900",
      topSpeed: "130 mph",
      imgUrl: "img/Audi A3.jpg",
    },
    {
      model: "Audi A4",
      year: 2023,
      price: "$39,100",
      topSpeed: "130 mph",
      imgUrl: "img/Audi A4.jpg",
    },
    {
      model: "Audi A6",
      year: 2023,
      price: "$54,900",
      topSpeed: "130-155 mph",
      imgUrl: "img/Audi A6.jpg",
    },
    {
      model: "Audi Q3",
      year: 2023,
      price: "$37,800",
      topSpeed: "130 mph",
      imgUrl: "img/Audi Q3.jpg",
    },
    {
      model: "Audi Q5",
      year: 2023,
      price: "$43,300",
      topSpeed: "130-155 mph",
      imgUrl: "img/Audi Q5.jpg",
    },
  ];
  
  // Ferrari cars
  const ferrariCars = [
    {
      model: "Ferrari 488 GTB",
      year: 2023,
      price: "$262,647",
      topSpeed: "205 mph",
      imgUrl: "img/Ferrari 488 GTB.jpg",
    },
    {
      model: "Ferrari F8 Tributo",
      year: 2023,
      price: "$280,000",
      topSpeed: "211 mph",
      imgUrl: "img/Ferrari F8 Tributo.jpg",
    },
    {
      model: "Ferrari SF90 Stradale",
      year: 2023,
      price: "$511,250",
      topSpeed: "211 mph",
      imgUrl: "img/Ferrari SF90 Stradale.jpg",
    },
    {
      model: "Ferrari Portofino",
      year: 2023,
      price: "$218,750",
      topSpeed: "199 mph",
      imgUrl: "img/Ferrari Portofino.jpg",
    },
    {
      model: "Ferrari Roma",
      year: 2023,
      price: "$222,315",
      topSpeed: "199 mph",
      imgUrl: "img/Ferrari Roma.jpg",
    },
  ];
  

// // function.................


function generateCarCard(car) {
    var html = `
      <div class="post-box">
          <img src="${car.imgUrl}" alt="${car.model}">
          <hr>
          <div class="post-info">
              <div class="Year">
                  <h3>${car.year}</h3>
              </div>
              <div class="Top-speed">
                  <span>${car.topSpeed}</span>
              </div>
          </div>
          <div class="post-info">
              <div class="name-modelnumber">
                  <span>${car.model}</span>
              </div>
          </div>
          <div class="Price">
              <span>${car.price}</span>
          </div>
      </div>
    `;
    return html;
  }

var BMW = document.getElementById('BMW');
var tesla = document.getElementById('tesla');
var audi = document.getElementById('audi');
var ferrari = document.getElementById('ferrari');

  for (var i = 0; i < bmwCars.length; i++) {
    var carCardHTML = generateCarCard(bmwCars[i]);
    postContainer.innerHTML += carCardHTML;
  }

//   BMW End ...BMW.............

  for (var i = 0; i < teslaCars.length; i++) {
    var carCardHTML = generateCarCard(teslaCars[i]);
    postContainer.innerHTML += carCardHTML;
  }
//   Tesla End ///////////////
  for (var i = 0; i < audiCars.length; i++) {
    var carCardHTML = generateCarCard(audiCars[i]);
    postContainer.innerHTML += carCardHTML;
  }

//   Audi End//////////////////
  for (var i = 0; i < ferrariCars.length; i++) {
    var carCardHTML = generateCarCard(ferrariCars[i]);
    postContainer.innerHTML += carCardHTML;
  }

  
  function generateCarCard(car, brand) {
    var html = `
      <div class="post-box">
          <img src="${car.imgUrl}" alt="${car.model}">
          <hr>
          <div class="post-info">
              <div class="Year">
                  <h3>${car.year}</h3>
              </div>
              <div class="Top-speed">
                  <span>${car.topSpeed}</span>
              </div>
          </div>
          <div class="post-info">
              <div class="name-modelnumber">
                  <span>${car.model}</span>
              </div>
          </div>
          <div class="Price">
              <span>${car.price}</span>
          </div>
      </div>
    `;
    return html;
  }

  


  var brandDropdown = document.getElementById('brandDropdown');
brandDropdown.addEventListener('click', function (event) {
  var brand = event.target.textContent.trim().toLowerCase();
  postContainer.innerHTML = ''; // Clear existing posts
  
  // Filter and display the posts based on the selected brand
  switch (brand) {
    case 'tesla':
      teslaCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, brand);
        postContainer.innerHTML += carCardHTML;
      });
      break;
    case 'bmw':
      bmwCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, brand);
        postContainer.innerHTML += carCardHTML;
      });
      break;
    case 'audi':
      audiCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, brand);
        postContainer.innerHTML += carCardHTML;
      });
      break;
    case 'ferrari':
      ferrariCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, brand);
        postContainer.innerHTML += carCardHTML;
      });
      break;
    default:
      // Display all posts if no specific brand is selected
      bmwCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'bmw');
        postContainer.innerHTML += carCardHTML;
      });
      teslaCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'tesla');
        postContainer.innerHTML += carCardHTML;
      });
      audiCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'audi');
        postContainer.innerHTML += carCardHTML;
      });
      ferrariCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'ferrari');
        postContainer.innerHTML += carCardHTML;
      });
      break;
  }
});




// home function............
  var brandDropdown = document.getElementById('home');
brandDropdown.addEventListener('click', function (event) {
  var brand = event.target.textContent.trim().toLowerCase();
  postContainer.innerHTML = ''; // Clear existing posts
  
  // Filter and display the posts based on the selected brand
  switch (brand) {
    default:
      // Display all posts if no specific brand is selected
      bmwCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'bmw');
        postContainer.innerHTML += carCardHTML;
      });
      teslaCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'tesla');
        postContainer.innerHTML += carCardHTML;
      });
      audiCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'audi');
        postContainer.innerHTML += carCardHTML;
      });
      ferrariCars.forEach(function (car) {
        var carCardHTML = generateCarCard(car, 'ferrari');
        postContainer.innerHTML += carCardHTML;
      });
      break;
  }
});

