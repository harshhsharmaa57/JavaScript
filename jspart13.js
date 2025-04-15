let btn = document.querySelector("#fact");


btn.addEventListener("click", async () =>{
    console.log("button was clicked");
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;

    } catch(e) {
        console.log("error - ", e);
        return "no fact found";
    }
}


let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2= document.querySelector("#image");

async function getImage() {
    try {
        let res = await axios.get(url2);
        //console.log(res.data.message);
        return res.data.message;

    } catch(e) {
        console.log("error - ", e);
        return "no Image found";
    }
}

btn2.addEventListener("click", async () =>{
    let link = await getImage();
    console.log(link);
    let img = document.querySelector("#ima");
    img.setAttribute("src", link);
});






let url3 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{ 
        const config = { headers: { Accept: "application/json"}};
        let res = await axios.get(url3, config);
        console.log(res.data);

    } catch(err) {
        console.log(err);
    }
}