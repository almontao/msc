/*
* Template Name: BreezyCV - Resume / CV / vCard / Portfolio Template
* Author: LMPixels
* Author URL: http://themeforest.net/user/lmpixels
* Version: 1.3.0
*/

// Devuelve el año actual
function getCurrentYear() {
  return new Date().getFullYear();
}

// Rellena cada <span class="current-year">
function updateAllYears() {
  document
    .querySelectorAll('.current-year')
    .forEach(el => el.textContent = getCurrentYear());
}

// Cuando el DOM esté listo, ejecuta
document.addEventListener('DOMContentLoaded', updateAllYears);
