import throttle from "lodash.throttle";
import '../css/03-feedback.css';
import '../css/common.css';


const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea')
}

const STORAGE_KEY = "feedback-form-state";

const formData = {};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

populateFormOutput();

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
    const saveMessage = localStorage.getItem(STORAGE_KEY)
    const outputText = JSON.parse(saveMessage);
    if (saveMessage) {
        refs.email.value = outputText.email;
        refs.textarea.value = outputText.message;
    }
    
    formData = {
        email: outputText.email,
        message: outputText.message
    }
};
