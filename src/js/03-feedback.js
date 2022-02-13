import throttle from "lodash.throttle";
import '../css/03-feedback.css';
import '../css/common.css';

const STORAGE_KEY = "feedback-form-state";

const formData = {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle (onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

populateFormOutput();

function onFormInput(e) { 
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

function onFormSubmit(e) { 
  e.preventDefault();

  if (localStorage.getItem(STORAGE_KEY)) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  };
  
  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
};

function populateFormOutput() { 
  if (localStorage.getItem(STORAGE_KEY)) {
    formEl.email.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).email;
    formEl.message.value = JSON.parse(localStorage.getItem(STORAGE_KEY)).message;
  }
};
