// API Key: 82df7d570ef72b5ac302370458b46a6f

// API Call https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// API Key: 82df7d570ef72b5ac302370458b46a6f

// function renderHTML(data) {
//   var weatherInfoDiv = document.getElementById("weather-info");

//   // Check if the data has the necessary properties
//   if (data.weather && data.main && data.wind) {
//       var weatherDescription = data.weather[0].description;
//       var cityMainTemperature = data.main.temp;
//       var windSpeed = data.wind.speed;
//       var place = data.name;

//       // Create HTML elements to display the weather details
//       var descriptionElement = document.createElement("p");
//       descriptionElement.textContent = "The weather in " + place + " is " + weatherDescription;

//       var temperatureElement = document.createElement("p");
//       temperatureElement.textContent = "The Temperature is " + (parseInt(cityMainTemperature) - 273.15).toFixed(2) + " °C with a wind speed of " + windSpeed + "m/s";

//       // Clear any previous data in the div
//       weatherInfoDiv.innerHTML = "";

//       // Append the new elements to the weatherInfoDiv
//       weatherInfoDiv.appendChild(descriptionElement);
//       weatherInfoDiv.appendChild(temperatureElement);
//       weatherInfoDiv.appendChild(windSpeedElement);
//   } else {
//       // Handle cases where the data is incomplete or missing properties
//       weatherInfoDiv.textContent = "Weather data is incomplete or unavailable.";
//   }
// }

// var btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   var place = document.getElementById("cityInput").value;
//   var apiKey = "82df7d570ef72b5ac302370458b46a6f";
//   var url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey;

//   var ourRequest = new XMLHttpRequest();

//   ourRequest.open("GET", url);
//   ourRequest.onload = function () {
//       if (ourRequest.status >= 200 && ourRequest.status < 400) {
//           var ourData = JSON.parse(ourRequest.responseText);
//           renderHTML(ourData);
//           console.log(ourData);
//       } else {
//           console.error("Failed to retrieve data. Status: " + ourRequest.status);
//           alert("Failed to retrieve weather data. Please check the city name and try again.");
//       }
//   };
//   ourRequest.send();
// });

// API Key: 82df7d570ef72b5ac302370458b46a6f

function renderHTML(data) {
    var weatherContainer = document.getElementById("weather-info");
  
    // Create a new response container for each response
    var responseContainer = document.createElement("div");
    responseContainer.classList.add("response-container");
  
    // Check if the data has the necessary properties
    if (data.weather && data.main && data.wind) {
      var weatherDescription = data.weather[0].description;
      var cityMainTemperature = (parseFloat(data.main.temp) - 273.15).toFixed(2) + " °C";
      var windSpeed = data.wind.speed;
      var place = data.name;
  
      // Create HTML elements to display the weather details
      var descriptionElement = document.createElement("p");
      descriptionElement.textContent = "The weather in " + place + " is " + weatherDescription;
  
      var temperatureElement = document.createElement("p");
      temperatureElement.textContent = "The Temperature is " + cityMainTemperature + " with a wind speed of " + windSpeed + " m/s";
  
      // Append the new elements to the response container
      responseContainer.appendChild(descriptionElement);
      responseContainer.appendChild(temperatureElement);
  
      // Append the response container to the weatherContainer
      weatherContainer.appendChild(responseContainer);
  
      // Add a horizontal line between responses
      var line = document.createElement("hr");
      weatherContainer.appendChild(line);
    } else {
      // Handle cases where the data is incomplete or missing properties
      responseContainer.textContent = "Weather data is incomplete or unavailable.";
      weatherContainer.appendChild(responseContainer);
    }
  }
  
  var btn = document.getElementById("btn");
  
  btn.addEventListener("click", function () {
    var place = document.getElementById("cityInput").value;
    var apiKey = "82df7d570ef72b5ac302370458b46a6f";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey;
  
    var ourRequest = new XMLHttpRequest();
  
    ourRequest.open("GET", url);
    ourRequest.onload = function () {
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        console.log(ourData);
      } else {
        console.error("Failed to retrieve data. Status: " + ourRequest.status);
        alert("Failed to retrieve weather data. Please check the city name and try again.");
      }
    };
    ourRequest.send();
  });
  

// API Key: 82df7d570ef72b5ac302370458b46a6f

// function renderHTML(data) {
//     var weatherContainer = document.getElementById("weather-info");
  
//     // Create a new div for each response
//     var responseDiv = document.createElement("div");
//     responseDiv.classList.add("response");
  
//     // Check if the data has the necessary properties
//     if (data.weather && data.main && data.wind) {
//       var weatherDescription = data.weather[0].description;
//       var cityMainTemperature = (parseFloat(data.main.temp) - 273.15).toFixed(2) + " °C";
//       var windSpeed = data.wind.speed;
//       var place = data.name;
  
//       // Create HTML elements to display the weather details
//       var descriptionElement = document.createElement("p");
//       descriptionElement.textContent = "The weather in " + place + " is " + weatherDescription;
  
//       var temperatureElement = document.createElement("p");
//       temperatureElement.textContent = "The Temperature is " + cityMainTemperature + " with a wind speed of " + windSpeed + " m/s";
  
//       // Append the new elements to the responseDiv
//       responseDiv.appendChild(descriptionElement);
//       responseDiv.appendChild(temperatureElement);
  
//       // Append the responseDiv to the weatherContainer
//       weatherContainer.appendChild(responseDiv);
//     } else {
//       // Handle cases where the data is incomplete or missing properties
//       responseDiv.textContent = "Weather data is incomplete or unavailable.";
//       weatherContainer.appendChild(responseDiv);
//     }
//   }
  
//   var btn = document.getElementById("btn");
  
//   btn.addEventListener("click", function () {
//     var place = document.getElementById("cityInput").value;
//     var apiKey = "82df7d570ef72b5ac302370458b46a6f";
//     var url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey;
  
//     var ourRequest = new XMLHttpRequest();
  
//     ourRequest.open("GET", url);
//     ourRequest.onload = function () {
//       if (ourRequest.status >= 200 && ourRequest.status < 400) {
//         var ourData = JSON.parse(ourRequest.responseText);
//         renderHTML(ourData);
//         console.log(ourData);
//       } else {
//         console.error("Failed to retrieve data. Status: " + ourRequest.status);
//         alert("Please check the city name and try again.");
//       }
//     };
//     ourRequest.send();
//   });
  