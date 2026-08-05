import showTooltip from './showTooltip';

document.addEventListener('DOMContentLoaded', () => {
  const json = localStorage.getItem('formData');//читаем данные из кэшь

  let formData;

  try {
    formData = JSON.parse(json);
  } catch(error) {
    console.log(error);
  }

  const form = document.querySelector('.form');

  const errors = {
    login: { valueMissing: 'Представьтесь, пожалуйста!', },
    email: {
      valueMissing: 'Нам потребуется электропочта...',
      typeMismatch: 'А это точно электропочта?',
    },
    'credit-card': { valueMissing: 'Предоставьте нам данные своей кредитной карты, это безопасно, честно', },
    'comments': { valueMissing: 'Введите минимум один...', },
  };

  let actualMessages = [];

  const getError = (el) => {
    const errorKey = Object.keys(ValidityState.prototype).find((key) => {
      if (!el.name) return;
      if (key === 'valid') return;

      return el.validity[key];
    });

    if(!errorKey) return;

    return errors[el.name][errorKey];
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    actualMessages = [];

    const elements = form.elements;

    const rex = [ ...elements ].some (elem => {
      const error = getError(elem);

      if (error) {
        let m = showTooltip(error, elem);
        return true;
      }
    });

    const resulter = document.querySelector('.result');
    if (!rex){
      if (!resulter){
        const second = document.createElement('h0');
        second.className = 'result';
        second.textContent = 'Спасибо. Все поля заполнены...';
        document.body.appendChild(second);
      }
    } else {
      if (resulter) {
        resulter.remove();
      }
    }
  });

  const elementOnBlur = (e) => {
    const el = e.target;

    const error = getError(el);
    if (error) {
      showTooltip(error, el);
    }

    el.removeEventListener('blur', elementOnBlur);
  };

  document.addEventListener('click', (event) => {
    const forms = document.querySelector('.form-error');
    if (forms != null) {
      forms.remove();
    }

    if (event.target.type == 'reset') {
      const finBefore = document.querySelector('.result');
      if (finBefore){
        finBefore.remove();
      }
    }

    if (event.target.type == 'submit') {
      const formData = {};
      const conteinerForm = document.querySelectorAll('.input')

      conteinerForm.forEach((el) => {
        formData[el.name] = el.value
      })
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  });
});
