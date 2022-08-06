import throttle from "lodash.throttle";

const formEL = document.querySelector(".feedback-form");
const textAreaEL = document.querySelector('form textarea[name = "message"]');
const inputEl = document.querySelector('form input[name = "email"]');

const CURRENT_VALUE = "feedback-form-state";

const FormValue = {};

onLoadPage();

const onFormVlaue = (event) => {
  FormValue.email = inputEl.value;
  FormValue.textarea = textAreaEL.value;
  localStorage.setItem(CURRENT_VALUE, JSON.stringify(FormValue));
};
function onLoadPage() {
  const saveValue = localStorage.getItem(CURRENT_VALUE);
  if (saveValue) {
    const parseValue = JSON.parse(saveValue);
    inputEl.value = parseValue.email;
    textAreaEL.value = parseValue.textarea;
  } else {
    inputEl.value = "";
    textAreaEL.value = "";
  }
};

const onClearFormValue = (event) => {
  event.preventDefault();
  let { email, message } = event.currentTarget;
  email = inputEl.value;
  message = textAreaEL.value;
  console.log({ email, message });
  event.currentTarget.reset();
  localStorage.removeItem(CURRENT_VALUE);
};
formEL.addEventListener("input", throttle(onFormVlaue, 500));
formEL.addEventListener("submit", onClearFormValue);
