import home from './home';
import contact from './contact';
import sourdough from './assets/images/sourdough.jpg';

function menu() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const header = document.createElement("h1");
    header.textContent = "Menu";
    content.appendChild(header);

    const image = document.createElement("img");
    image.src = sourdough;
    image.alt = "image of bread";
    content.appendChild(image);

    const welcome = document.createElement("p");
    welcome.textContent = "All we do is sourdough, You'll eat it and you'll like it!";
    content.appendChild(welcome);

    const nav = document.createElement("nav");
    content.appendChild(nav);

    const homeBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    nav.appendChild(homeBtn);
    homeBtn.addEventListener("click", home);

    const menuBtn = document.createElement("button");
    menuBtn.textContent = "Menu";
    nav.appendChild(menuBtn);
    menuBtn.addEventListener("click", menu);

    const contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    nav.appendChild(contactBtn);
    contactBtn.addEventListener("click", contact);
}

export default menu;
