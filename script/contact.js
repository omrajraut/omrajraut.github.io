const contactForm = document.querySelector('#contact-form-content');
const MESSAGE_ROUTE =  'https://desolate-plains-55950.herokuapp.com/message';

let alertModal = document.querySelector('#alert-modal');
let alertModalText = document.querySelector('#alert-modal p');
let alertModalBtn = document.querySelector('#alert-modal #close');


const modalDisplayMessage = (msg) => {
    alertModalText.textContent = msg;
    alertModal.style.display = 'flex';
    contactForm.reset();
}

alertModalBtn.onclick = e => {
    alertModalText = "";
    alertModal.style.display = 'none';
}


let formData;
contactForm.onsubmit = e => {
    e.preventDefault();
    formData = new FormData(contactForm);

    let data = {
        firstname : formData.get('firstname'),
        lastname : formData.get('lastname'),
        email : formData.get('email'),
        message : formData.get('message')
    }

    fetch( MESSAGE_ROUTE , {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    // .then(function(response) {
    //     console.log(response.status); // Will show you the status
    //     if (!response.ok) {
    //         modalDisplayMessage("Error please try again later!");
    //     }
    //     else{
    //         modalDisplayMessage("Thanks for reaching out!, we'll contact you ASAP");
    //     }
    //     return;
    // })

    modalDisplayMessage("Thanks for reaching out!, I'll contact you ASAP.");
    
}
