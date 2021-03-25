
//HAMBURGER CONTROLER 



const navSlide = () => {

    //VARIABLE DECLARATION 

    const navDisplay = document.querySelector('.navigation--section');
    const openHam = document.querySelector('.open--nav');
    const closeHam = document.querySelector('.close--nav');

    //ADDING EVENT LISTENER FUNCTION 
    openHam.addEventListener('click', () => {
        navDisplay.classList.add('ani');
               
        closeHam.style.display = 'block';
        openHam.style.display = 'none';
    });

    closeHam.addEventListener('click', () => {
        closeHam.style.display = 'none';
        openHam.style.display = 'block';
        navDisplay.classList.remove('ani');
    });
}

navSlide();