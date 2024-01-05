// Function to fetch data from the Axolotl API
async function fetchCatFact() {
    try {
    
    const response = await fetch('https://meowfacts.herokuapp.com/');


    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    
    const data = await response.json();

    
    console.log(data);
    } catch (error) {

    console.error('Error fetching Cat fact:', error.message);
    }
}


fetchCatFact();
