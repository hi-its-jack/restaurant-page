import "./styles.css"; // Import CSS styles
import home from './home'; // Import the home function

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    
    const content = document.querySelector("#content");
    console.log(content); // Check if this logs the div element or null

    if (content) {
        home(); // Only call home if the element exists
    } else {
        console.error('Element with id "content" not found');
    }
});