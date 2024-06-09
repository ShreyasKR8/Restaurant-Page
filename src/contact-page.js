const content = document.querySelector("#content");

const contactInfo = [
    {
        name: "Manager",
        contact: "555-555-5554",
        email: "totallyRealEmail@notFake.com"
    },
    {
        name: "Chef",
        contact: "555-555-5555",
        email: "perfectlyRealEmail@notFake.com"
    }
];

function createContactCard(contactPerson, divIndex) {
    const contactCard = document.createElement("div");
    contactCard.className = `contact-card-${divIndex}`;
    content.appendChild(contactCard);

    const name = document.createElement("h3");
    name.innerText = contactPerson.name;
    const contactNum = document.createElement("p");
    contactNum.innerText = contactPerson.contact;
    const emailId = document.createElement("p");
    emailId.innerText = contactPerson.email;

    contactCard.appendChild(name);
    contactCard.appendChild(contactNum);
    contactCard.appendChild(emailId);
}

function loadAboutPage() {
    const heading = document.createElement("h1");
    heading.innerText = "Contact Us";
    content.appendChild(heading);
    let divIndex = 1;
    contactInfo.forEach(contactPerson => {
        createContactCard(contactPerson, divIndex);
        divIndex++;
    });
}

export default loadAboutPage;

