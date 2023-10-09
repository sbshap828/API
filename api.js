//const req = new XMLHttpRequest();
const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U";

const form = document.querySelector("form");
const div = document.querySelector("div");


  
    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
       console.log(res)
        displayInfo(res);
      });
  
  

function displayInfo(res) {

     
        document.getElementById("title").textContent = res.explanation;
        document.getElementById("date").textContent = res.date;
         document.getElementById("pic").src = res.hdurl;
    
    } 