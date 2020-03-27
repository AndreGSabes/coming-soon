const countdown = document.querySelector('.countdown');

//set lauch date(ms)
const lauchDate = new Date('Jan 1, 2021 13:00:00').getTime();

//update every second
const intvl = setInterval(() => {
  //get today date and time(ms)
  const now = new Date().getTime();

  //distance from now to launch date
  const distance = lauchDate - now;

  //time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24) )/ (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60 )) / (1000));

  //display result
  countdown.innerHTML = `
    <div>${days}<span>Days</div></span>
    <div>${hours}<span>Hours</div></span>
    <div>${mins}<span>Minutes</div></span>
    <div>${seconds}<span>Seconds</div></span>
  `;

  //if launch date passed
  if(distance < 0){
    //stop countdown
    clearInterval(intvl);
    //style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = `Launched!`;
  }
}, 1000);
