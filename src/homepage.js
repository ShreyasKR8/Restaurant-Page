
function loadHomePage() {
    const content = document.querySelector("#content");
    const headLine = document.createElement("h1");
    const desc = document.createElement("p");

    headLine.innerText = "Cupcake Cove";
    desc.innerText = `At Cupcake Cove, every bite is a moment of pure joy. 
    We handcraft each cupcake with love and the finest locally sourced 
    ingredients. From classic chocolate and vanilla to seasonal fruit 
    creations, there's a cupcake for every taste.`;

    content.appendChild(headLine);
    content.appendChild(desc);
}

export default loadHomePage;