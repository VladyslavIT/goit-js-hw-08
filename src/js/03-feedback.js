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
        formEl[key].value = parseValue[key] || '';
      }
    }
  }
}
onLoadPage();

const onSubmitForm = event => {
  event.preventDefault();
  if (!formEl.email.value || !formEl.message.value) {
    alert(`Placeholder all fields`);
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(CURRENT_VALUE);
  for (const key in formData) {
    delete formData[key];
  }
};

formEl.addEventListener('input', throttle(onFormValue, 500));
formEl.addEventListener('submit', onSubmitForm);
