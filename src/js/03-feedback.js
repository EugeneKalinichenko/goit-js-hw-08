import throttle from "lodash.throttle";
import '../css/03-feedback.css';
import '../css/common.css';


const refs = {
    form: document.querySelector('.feedback-form'),
    // email: document.querySelector('.feedback-form input'),
    // textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEY = "feedback-form-state";

populateFormOutput();

const formData = {
    email: refs.form.email.value,
    message: refs.form.message.value, 
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);



function onFormInput(e) { 
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) { 
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);   

};

function populateFormOutput() {
    const saveMassage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    
    if (!saveMassage) return;
    
    if (saveMassage.email)
        refs.form.email.value = saveMassage.email;
    if (saveMassage.message)
        refs.form.message.value = saveMassage.message;
    
    // formData = {
    //     email: saveMassage.email,
    //     message: saveMassage.message
  
    // }
}