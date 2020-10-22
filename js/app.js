/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNavBar(){
    const frag = document.createDocumentFragment(); //crating a document fragment to append the changes to
    
    sections.forEach(section =>{
        const navElement = document.createElement('li'); //creating a list item for each section in the list
        navElement.textContent = section.getAttribute('data-nav'); //stting the textContent to be the same as the section's data-nav value (section name)
        navElement.className = 'menu__link'; //Adding a styling class for each list item
        //navElement.setAttribute('href', section.getAttribute('data-nav'))
        navElement.addEventListener('click', () => { //adding an event listener to listen to clicks in each list item created
            section.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); //smooth scroll to the start of the approriate section when the list item is clicked
        });
        frag.appendChild(navElement); //Append the new list item to the document fragment
        // console.log(navElement);
    });
    const navList = document.querySelector('#navbar__list'); //find the appropriate position to place the complete navbar (the navbar list) 
    //note: getElementbyId could have also been used in the previous line 
    navList.appendChild(frag); //add the complete document fragment to the nabar list
}

buildNavBar();

// Add class 'active' to section when near top of viewport

function ViewportWatcher(){  //this function watches the viewport to determine which section is active
    const options = { //Creating the options attribute that will be used by the intersectionObserver
        root: null, //set the root to be the entire page
        rootMargin: "0px 0px" , //Setting the observed section to be the entire viewport
        threshold: "0.4" //40% of the observed item must be visible
    };
    observing = (observerEntries) => { //This function will be called whenever the observed element leaves or enters the viewport
        observerEntries.forEach(entry => { //looping through the InteractionObserverEntry list to find which entry is intersecting
            if(entry.isIntersecting){//if the element is intersecting...
                entry.target.classList.add('your-active-class'); // add the "your-active-class" to the class list to apply cosmetic changes to it
            }
            else{ //if the observer eLement is not intersecting...
                entry.target.classList.remove('your-active-class');//revoke it's active class status
            }
        });
    };
    const observer = new IntersectionObserver(observing, options); //creating the oberver with the aforementioned parameters
    sections.forEach(section =>{ //looping through the list of sections to tell the observer to observe each one of them
        observer.observe(section); 
    })
}

ViewportWatcher();
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


