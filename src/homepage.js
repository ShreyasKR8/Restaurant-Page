import bgImg from './bgImage.jpg' 

function loadHomePage() {
    const content = document.querySelector("#content");
    const headLine = document.createElement("h3");
    const desc = document.createElement("p");
    // const backgroundImg = document.createElement("img");
    const backgroundImg = new Image();

    headLine.innerText = "Find Your Bliss in Every Bite and Brew";
    desc.innerText = `There's something magical about our café. 
    It's in the way the morning light filters through the windows, 
    the laughter of friends sharing stories, and the comforting taste of a well-made cappuccino. 
    It's in the care we put into every detail, from the friendly smile of our staff to the 
    artful presentation of our pastries.`;
    backgroundImg.src = bgImg;

    content.appendChild(headLine);
    content.appendChild(desc);
    content.appendChild(backgroundImg);
} 

export default loadHomePage;