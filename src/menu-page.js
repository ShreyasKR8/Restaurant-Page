const content = document.querySelector("#content");

const menuData = {
    "Specialty Cupcakes": [
        {
            name: "Salted Caramel Dream",
            description: "Caramel cupcake topped with salted caramel buttercream and a caramel drizzle.",
            price: 3.99
        },
        {
            name: "Peanut Butter Paradise",
            description: "Peanut butter cupcake with a creamy peanut butter frosting and a chocolate drizzle.",
            price: 4.79
        },
        {
            name: "Cookies and Cream",
            description: "Oreo-infused cupcake with a cookies and cream frosting, topped with a mini Oreo.",
            price: 3.99
        }
    ],
    "Classic Cupcakes": [
        {
            name: "Velvety Vanilla Delight",
            description: "A classic vanilla cupcake with a smooth buttercream frosting.",
            price: 2.99
        },
        {
            name: "Chocolate Bliss",
            description: "Rich, moist chocolate cupcake topped with decadent chocolate ganache.",
            price: 3.49
        },
        {
            name: "Red Velvet Romance",
            description: "Traditional red velvet cupcake with a tangy cream cheese frosting.",
            price: 3.29
        },
        {
            name: "Strawberry Shortcake",
            description: "Light strawberry-infused cupcake with a whipped cream topping and fresh strawberries.",
            price: 3.99
        }
    ],
    "Seasonal Cupcakes": [
        {
            name: "Pumpkin Spice Magic",
            description: "Spiced pumpkin cupcake with a maple cream cheese frosting (available in fall).",
            price: 3.79
        },
        {
            name: "Peppermint Wonderland",
            description: "Chocolate cupcake with peppermint frosting and crushed candy cane topping (available in winter).",
            price: 3.59
        },
        {
            name: "Berry Burst",
            description: "Mixed berry cupcake with a berry compote filling and vanilla frosting (available in summer).",
            price: 3.89
        }
    ],
    "Drinks": [
        {
            name: "Artisan Coffee",
            description: "Freshly brewed coffee from locally roasted beans.",
            price: 3.49
        },
        {
            name: "Gourmet Hot Chocolate",
            description: "Rich, creamy hot chocolate topped with whipped cream and chocolate shavings.",
            price: 4.99
        },
        {
            name: "Herbal Teas",
            description: "A variety of soothing herbal teas.",
            price: 2.99
        }
    ]
};

let divCount = 0;
function createMenuCategory(menuCategoryName, menuCategory) {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = `menu-category-${++divCount}`;
    content.appendChild(categoryDiv);

    const categoryHeading = document.createElement("h2");
    categoryHeading.innerText = menuCategoryName;
    categoryDiv.appendChild(categoryHeading);

    menuCategory.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";
        categoryDiv.appendChild(itemDiv);

        const itemHeading = document.createElement("h3");
        itemHeading.innerText = item.name;

        const itemDesc = document.createElement("p");
        itemDesc.innerText = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.className = "price";
        itemPrice.innerText = `$${item.price}`;

        //imageDiv

        itemDiv.appendChild(itemHeading);
        itemDiv.appendChild(itemDesc);
        itemDiv.appendChild(itemPrice);
    });
}

function loadMenuPage() {
    divCount = 0;
    const headingDiv = document.createElement("h1");
    headingDiv.classList.add("menu-header")
    headingDiv.innerText = "Menu";
    content.appendChild(headingDiv);

    Object.keys(menuData).forEach(menuCategoryName => {
        createMenuCategory(menuCategoryName, menuData[menuCategoryName]);
    });
}

export default loadMenuPage;