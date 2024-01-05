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


async function searchMeowFact() {
    const searchInput = document.getElementById('searchInput');
    const meowFactContainer = document.getElementById('meowFactContainer');

    try {
    
    const searchTerm = searchInput.value;

    
    if (searchTerm.trim() === '') {
        alert('Please enter a search term.');
        return;
    }  const meowFact = await fetchMeowFactBySearch(searchTerm);

    
    meowFactContainer.innerHTML = `<p>${meowFact}</p>`;
    } catch (error) {
    
    meowFactContainer.innerHTML = '<p>Error fetching MeowFact. Please try again.</p>';
    }
}