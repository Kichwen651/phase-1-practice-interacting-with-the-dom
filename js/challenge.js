// Select the element you want to listen to
const button = document.getElementById('touch');

// Define the event handler function
function handleClick() {
    alert('Button was clicked!');
}

// Add the event listener
button.addEventListener('click', handleClick);


