import sourdough from './assets/images/sourdough.jpg'; // Adjust the path as necessary
import menu from './menu'
import contact from './contact'

function home() {
    const content = document.querySelector("#content");
    if (!content) {
        console.error('Element with id "content" not found');
        return;
    }

    content.textContent = ""; // Clear previous content

    const header = document.createElement("h1");
    header.textContent = "Dough Boys";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = sourdough;
    image.alt = "image of bread";
    content.appendChild(image);

    const welcome = document.createElement("p");
    welcome.textContent = "The Freshest Sourdough on the Market!";
    content.appendChild(welcome);

    const nav = document.createElement("nav");
    content.appendChild(nav);

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    nav.appendChild(menuBtn);
    menuBtn.addEventListener("click", menu);

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    nav.appendChild(contactBtn);
    contactBtn.addEventListener("click", contact);
}

export default home;