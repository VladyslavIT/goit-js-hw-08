import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const CURRENT_VALUE = 'feedback-form-state';

const formData = {};

const onFormValue = event => {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(CURRENT_VALUE, JSON.stringify(formData));
};

function onLoadPage() {
  const saveValue = localStorage.getItem(CURRENT_VALUE);
  if (saveValue) {
    const parseValue = JSON.parse(saveValue);
    for (const key in parseValue) {
      if (parseValue.hasOwnProperty(key)) {
        formEl.email.value = parseValue.email || '';
        formEl.message.value = parseValue.message || '';
      }
    }
  }
}
onLoadPage();

const onSubmitForm = event => {
  if (!formEl.email.value || !formEl.message.value) {
    alert(`Placeholder all fields`);
  } else {
    event.preventDefault();
    let { email, message } = event.currentTarget;
    email = formEl.email.value;
    message = formEl.message.value;
    console.log({ email, message });
    event.currentTarget.reset();
    localStorage.removeItem(CURRENT_VALUE);
  }
};
formEl.addEventListener('input', throttle(onFormValue, 500));
formEl.addEventListener('submit', onSubmitForm);
