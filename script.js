
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


async function fetchMeowFactBySearch(searchTerm) {
    try {
    
    const response = await fetch(`https://meowfacts.herokuapp.com/${searchTerm}`);

    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    
    const data = await response.json();

    
    return data.data;
    } catch (error) {
    
    console.error('Error fetching MeowFact:', error.message);
    throw error;
    }
}

function navigateToMeowFacts() {
    window.open('https://meowfacts.herokuapp.com/', '_blank');
}

async function searchMeowFact() {
    const searchInput = document.getElementById('searchInput');
    const meowFactContainer = document.getElementById('meowFactContainer');

    try {
    
    // const searchTerm = searchInput.value;
    // function navigateToMeowFacts() {
    //     window.location.href = 'https://meowfacts.herokuapp.com/';
    // }

    
    if (searchTerm.trim() === '') {
        alert('Please enter a search term.');
        return;
    }  const meowFact = await fetchMeowFactBySearch(searchTerm);

    
    meowFactContainer.innerHTML = `<p>${meowFact}</p>`;
    } catch (error) {
    
    meowFactContainer.innerHTML = '<p>Error fetching MeowFact. Please try again.</p>';
    }
}

