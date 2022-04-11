const contactForm = document.querySelector('#form');
const ENV = 'prod'

const MESSAGE_ROUTE =  ENV == 'dev' ? 'http://localhost:4000/message' : 'https://email-server-om.herokuapp.com/message';


console.log(MESSAGE_ROUTE)

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
        alert("Thanks for reaching, I will reach out as soon as possible!")
        contactForm.reset();
    })
    .catch(()=>{
        alert("Sorry, couldn't reach to Om right Raj now, please try again later or email me to omrajraut480@gmail.com")
        // contactForm.reset();
    })
    
}
