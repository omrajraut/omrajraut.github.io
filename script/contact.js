const contactForm = document.querySelector('#contact-form-content');
const MESSAGE_ROUTE =  'http://localhost:4000/message';


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
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        alert(result);
    })
    .catch (function (error) {
        console.log('Request failed', error);
    });
    
}
