let imgObj = document.getElementById("mainImg");
console.dir(imgObj);
imgObj.src = "assets/creation_1.png"


let smallImg = document.getElementsByClassName("oldImg");
for(let i=0;i<smallImg.length;i++){
    smallImg[i].src = "assets/spiderman_img.png"
    console.log('value of image no ${i} is changed');
}

let tagName = document.getElementsByTagName("p");
tagName[1].innerText = "abc";

console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll(".oldImg"));

let para = document.querySelector('p');
console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);


let img = document.querySelector('img');
console.log(img.getAttribute('id'));
img.setAttribute('id','spidermanImg'); // width default ho jayegi
img.setAttribute('src',"assets/creation_2.jpeg");

let links = document.querySelectorAll(".box a");
for(let i =0;i < links.length;i++){
    links[i].style.color ="green";
}
for(link of links){
    link.style.color = "purple";
}



let heading = document.querySelector('h1');
console.log(heading.classList);
console.log(heading.classList.add("green"));
