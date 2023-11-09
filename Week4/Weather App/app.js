// API Key: 82df7d570ef72b5ac302370458b46a6f

// API Call https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function renderHTML(data) {

    // getting the div that will be used to disply the content
    var weatherContainer = document.getElementById("weather-info");
  
    // Create a new container for each response
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
  
  // Get button element from index
  var btn = document.getElementById("btn");
  
  // function that gets api call from source
  btn.addEventListener("click", function () {

    // Get the city input from the user
    var place = document.getElementById("cityInput").value;
    var apiKey = "82df7d570ef72b5ac302370458b46a6f";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&appid=" + apiKey;
    
    // Creates a new instance of the XMLHttpRequest object and stores it in the ourRequest variable. 
    // This object is used to make asynchronous HTTP requests.
    var ourRequest = new XMLHttpRequest();
    
    ourRequest.open("GET", url);

    // Event handler to handle data when the request completes successfully or not
    ourRequest.onload = function () {

    // Status code error handeling 
    // if request successful, then pass data to renderHTML function
      if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        console.log(ourData);
      } 

      // Else show error alert message
      else {
        console.error("Failed to retrieve data. Status: " + ourRequest.status);
        alert("Failed to retrieve weather data. Please check the city name and try again.");
      }
    };
    ourRequest.send();
  });
  
  