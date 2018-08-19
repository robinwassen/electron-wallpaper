'use strict';

const downValue = document.getElementById('networkSpeed_downValue');
const downBar = document.getElementById('networkSpeed_downBar');
const upValue = document.getElementById('networkSpeed_upValue');
const upBar = document.getElementById('networkSpeed_upBar');

setInterval(function() {
  const speedDown = Math.floor(Math.random() * 1000);

  downValue.innerText = speedDown;
  downBar.style.width = speedDown / 10 + '%';

  const speedUp = Math.floor(Math.random() * 1000);

  upValue.innerText = speedUp;
  upBar.style.width = speedUp / 10 + '%';
}, 300);

