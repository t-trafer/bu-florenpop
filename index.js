// const FORM_EL = document.getElementById("form");
// const INPUT_EL = document.getElementById("input");
// const SUBMIT_EL = document.getElementById("submit");

// const base2match = /^[01]+$/;

// const validateElement = (el, rule) => {
//     if (!el.value || el.value.match(rule)) {
//         el.classList.remove('error');
//         return true;
//     }
//     el.classList.add('error');
//     return false;
// }

// FORM_EL.onsubmit = e => {
//     e.preventDefault();
//     if (validateElement(INPUT_EL, base2match)) {
//         alert(parseInt(INPUT_EL.value, 2));
//     }
// };

// INPUT_EL.oninput = e => {
//     SUBMIT_EL.disabled = !validateElement(e.target, base2match);
// }