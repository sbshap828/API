//const req = new XMLHttpRequest();
//const urlstrpart="https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U&date=2022-12-"
// for (let i = 1; (i = 12); i++) {
//   let textnum = num.toString(i);
//   console.log(textnum);
//   const urlstrpart =
//     "https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U&date=2022-12-" +
//     textnum;

//   //const baseUrl = "https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U&date=2022-12-12";

//   const form = document.querySelector("form");
//   const div = document.querySelector("div");

//   fetch(baseUrl)
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {
//       console.log(res);
//       //displayInfo(res);
//       const array0fPhoto = [];
//       document.getElementById("pic").src = res.hdurl;
//     });

//   function displayInfo(res) {
//     // document.getElementById("title").textContent = res.explanation;
//     //document.getElementById("date").textContent = res.date;
//     document.getElementById("pic").src = res.hdurl;
//   }
// }

const wrapper = document.querySelector(".wrapper")
let images = []

function onLoad(){
    let url = "https://api.nasa.gov/planetary/apod?api_key=C2IT9AfppAOPyZBKtzmcgnpvfrUL2zVOetyyyR9U&count=12"

    fetch(url)
    .then(res => res.json())
    .then(res => {
        images.push(...res)
        displayImages()
    })
}

onLoad()

function displayImages(){
    images.forEach((img, i) => {
        let html = `
            <div class="image-containers">
                <img class="images" src="${img.url}" alt="${img.title}" data-index="${i}"/>
            </div>
        `

        wrapper.insertAdjacentHTML("beforeend", html)
    })

    const imageContainers = document.querySelectorAll(".image-containers")
    imageContainers.forEach(imgContainer => {
        imgContainer.addEventListener("click", handleClick)
    })
}

function handleClick(e){
    console.log(images[e.target.dataset.index])
    const imageContainers = document.querySelector(".test")
    imageContainers.innerHTML=images[e.target.dataset.index].explanation
    // this is the keyboard example again
   let modal = document.getElementById("myModal");

    // Get the button that opens the modal
    //var btn = document.getElementById("myBtn");
    
    //// Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on the button, open the modal 
    
      modal.style.display = "block";
    
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        imageContainers.innerHTML=""
       
      const gif = document.createElement("img")
     gif.src = "https://penmarkpropertyadvisors.com/test2/paper.gif"

     //gif.src = https://media2.giphy.com/media/3ohnEqJ1XOfvWaSk7e/giphy.gif?cid=ecf05e47j5tlfxhp17u2v7prgsht2ck90583r1n1tq83llwi&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      gif.classList.add("stuart")
      imageContainers.appendChild(gif)
      setTimeout(function(){
        gif.style.display="none"
        modal.style.display = "none";


      },10000)
    }

    
    // When the user clicks anywhere outside of the modal, close it
    document.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
     let hml2="jkhjhkhjkh"
    //modal-content.insertAdjacentHTML("beforeend",html2)
      //div class="modal-content"
   
    // wrapper.insertAdjacentHTML("beforeend", html)
console.log("hello")

    }
}



