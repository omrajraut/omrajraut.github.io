const contactForm = document.querySelector('#form');
const MESSAGE_ROUTE =  'https://email-server-om.herokuapp.com/message';

// let alertModal = document.querySelector('#alert-modal');
// let alertModalText = document.querySelector('#alert-modal p');
// let alertModalBtn = document.querySelector('#alert-modal #close');


const modalDisplayMessage = (msg) => {
    // alertModalText.textContent = msg;
    // alertModal.style.display = 'flex';
    contactForm.reset();
}

// alertModalBtn.onclick = e => {
//     alertModalText = "";
//     alertModal.style.display = 'none';
// }


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
    }).then(() => {
        console.log("Thanks for reaching, I will reach out as soon as possible!")
        contactForm.reset();
    })
    .catch(()=>{
        alert("Sorry, couldn't reach to Om right Raj now, please try again later or email me to omrajraut480@gmail.com")
        // contactForm.reset();
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

    // modalDisplayMessage("Thanks for reaching out!, I'll contact you ASAP.");
    
}
