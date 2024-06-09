import bgImg from './bgImage.jpg'; 

function loadHomePage() {
    const content = document.querySelector("#content");
    const headLine = document.createElement("h1");
    const desc = document.createElement("p");
    // const backgroundImg = document.createElement("img");
    const backgroundImg = new Image();

    headLine.innerText = "Cupcake Cove";
    desc.innerText = `At Cupcake Cove, every bite is a moment of pure joy. 
    We handcraft each cupcake with love and the finest locally sourced 
    ingredients. From classic chocolate and vanilla to seasonal fruit 
    creations, there's a cupcake for every taste.`;
    backgroundImg.src = bgImg;
    backgroundImg.width = 1440;

    content.appendChild(headLine);
    content.appendChild(desc);
    content.appendChild(backgroundImg);
} 

export default loadHomePage;