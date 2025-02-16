// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const funButton = document.getElementById('funButton');
    const funFactContainer = document.getElementById('funFactContainer');
    
    // Array of fun facts
    const funFacts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old!",
        "A group of flamingos is called a 'flamboyance'.",
        "Bananas are berries, but strawberries are not!",
        "Octopuses have three hearts.",
        "The Eiffel Tower can be 15 cm taller during the summer."
    ];
    
    // Function to display a random fun fact
    const displayFunFact = () => {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        funFactContainer.textContent = funFacts[randomIndex];
    };
    
    // Event listener for button click
    funButton.addEventListener('click', () => {
        displayFunFact();
    });
});
