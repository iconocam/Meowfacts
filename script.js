
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
// cannot use import statement outside a module so this is commented out now
// import { generateFact } from './manifesto.js';

// const generateFact = require('manifesto.js');




function generateFact() {
    const catFacts= ["The ancestor of all domestic cats is the African Wild Cat which still exists today.",
    "Cats have five toes on their front paws but only four on their back paws.",
    "A group of cats is called a clowder.",
    "The world's oldest known pet cat was found in a 9,500-year-old grave on the Mediterranean island of Cyprus.",
    "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully.",
    "Mother cats teach their kittens to use the litter box.",
    "Studies now show that the allergen in cats is related to their scent glands. Cats have scent glands on their faces and at the base of their tails. Entire male cats generate the most scent. If this secretion from the scent glands is the allergen, allergic people should tolerate spayed female cats the best.",
    "The average cat food meal is the equivalent to about five mice.",
    "Your cat recognizes your voice but just acts too cool to care (probably because they are)."];
    
    const randomIndex = Math.floor(Math.random() * catFacts.length);


    const randomFact = catFacts[randomIndex];


    const factBox = document.getElementById('factBox');
    factBox.style.display = 'block';

    const factText = document.getElementById('factText');
    factText.textContent = randomFact;

    setTimeout(() => {
        factBox.style.display = 'none';
    }, 8000);

}
// code isn't executing, typeerror. it was supposed to be images on the right that are available to see, gonna fix
// function generateSubImage() {
//     const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUugtihyUKXyHppcrcI7aaceKvIRbBNVRbQ&usqp=CAU";
//     const generatedImage = document.getElementById('generatedSubImage');
//     generatedImage.src = imageUrl;
//     generatedImage.style.display = 'block';
// }

// document.addEventListener('DOMContentLoaded', function() {
//     function generateSubImage() {
//         const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUugtihyUKXyHppcrcI7aaceKvIRbBNVRbQ&usqp=CAU";
//         const generatedImage = document.getElementById('generatedImage');
//         generatedImage.src = imageUrl;
//         generatedImage.style.display = 'block';
//     }
// });

// function generateImage() {
//     const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUugtihyUKXyHppcrcI7aaceKvIRbBNVRbQ&usqp=CAU";
//     const generatedImage = document.getElementById(imageId);
//     generatedImage.src = imageUrl;
//     generatedImage.style.display = 'block';
// }

function generateSubImage() {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTUugtihyUKXyHppcrcI7aaceKvIRbBNVRbQ&usqp=CAU";
    const generatedImage = document.getElementById('generatedSubImage');
    generatedImage.src = imageUrl;
    generatedImage.style.display = 'block';
}

function generateSubImageTwo() {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbG7qId9W9f24FYHtpCiXqBBfLl6zIcWygA&usqp=CAU";
    const generatedImage = document.getElementById('generateSubImageTwo');
    generatedSubImageTwo.src = imageUrl;
    generatedSubImageTwo.style.display = 'block';
}

function generateSubImageThree() {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrI1gSXhnq15_pe9ZnYE0JSxI3FB8AVUjFJnHxkzvEZLbS_iPBsn7Pt48eBe5PRCROTMM&usqp=CAU";
    const generatedImage = document.getElementById('generateSubImageThree');
    generatedSubImageThree.src = imageUrl;
    generatedSubImageThree.style.display = 'block';
}

function submitComment() {
    const userName = document.getElementById('userName').value;
    const userComment = document.getElementById('userComment').value;

    if (userName && userComment) {
        const commentList = document.getElementById('commentList');
        const commentItem = document.createElement('div');
        commentItem.innerHTML = `<strong>${userName}:</strong> ${userComment}`;
        commentList.appendChild(commentItem);

    
        document.getElementById('commentForm').reset();
    } else {
        alert('Please fill in both your name and idea.');
    }
}