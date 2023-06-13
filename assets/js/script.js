// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================

const link = document.querySelector('.link');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener('click', function() {
  if(link.style.display === 'none') {
    link.style.display = 'block';
  }else{
    link.style.display = 'none';
  }
});



// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

// get all the radio buttons in the tabset
const tabset = document.querySelectorAll('input[name="tabset"]');

// get all the items with the "tag" class
const items = document.querySelectorAll('.tag');

// add event listener to the tabset
tabset.forEach((radio) => {
  radio.addEventListener('click', () => {
    // get the value of the selected radio button
    const value = radio.value;
    
    // loop through all the items and show/hide based on the selected value
    items.forEach((item) => {
      if (value === "All") {
        // show all items
        item.parentElement.parentElement.style.display = "inline-block";
      } else if (value === "Male" && item.textContent === "Male") {
        // show male items
        item.parentElement.parentElement.style.display = "inline-block";
      } else if (value === "Female" && item.textContent === "Female") {
        // show female items
        item.parentElement.parentElement.style.display = "inline-block";
      } else {
        // hide other items
        item.parentElement.parentElement.style.display = "none";
      }
    });
  });
});


// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================

// get the search input element
const searchInput = document.querySelector(".search_product");

// add event listener to the search input
searchInput.addEventListener("input", function() {
  // get the value of the search input
  const searchValue = this.value.trim().toLowerCase();
  
  // get all the product cards
  const productCards = document.querySelectorAll(".percard");
  
  // loop through all the product cards
  productCards.forEach(function(productCard) {
    // get the text content of the product card
    const textContent = productCard.textContent.toLowerCase();
    
    // check if the search value matches the text content
    if (textContent.includes(searchValue)) {
      // if it matches, show the product card
      productCard.style.display = "block";
    } else {
      // if it doesn't match, hide the product card
      productCard.style.display = "none";
    }
  });
});





