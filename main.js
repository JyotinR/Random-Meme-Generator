const GenerateMemeButton=document.querySelector(".meme-gen .generate-meme-btn");
const MemeImg=document.querySelector(".meme-gen img");
const MemeTitle=document.querySelector(".meme-gen .meme-title");
const updateDetails=(url,title)=>{
    MemeImg.setAttribute("src",url);
    MemeTitle.innerHTML=title;
}


const GenerateMeme=()=>{
    fetch("https://meme-api.com/gimme")
    .then((response) => response.json())
    .then((data)=>{
    updateDetails(data.url,data.title);
    console.log(data);
    });;

};

GenerateMemeButton-addEventListener("click", GenerateMeme);