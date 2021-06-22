const refs = {
  daysEl: document.querySelector('[data-value="days"]'),
  hoursEl: document.querySelector('[data-value="hours"]'),
  minsEl: document.querySelector('[data-value="mins"]'),
  secsEl: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor({ сlockFace, beforeTravelDate }) {
    this.сlockFace = сlockFace,
      this.beforeTravelDate = beforeTravelDate,
      this.onInterfaceStart()
  }

  onInterfaceStart() {
    const timeComponents = this.getTimeElements(0);
    this.сlockFace(timeComponents);
  }

  start() {

    setInterval(() => {
      
      const currentTime = Date.now();
      const timeLeft = this.beforeTravelDate - currentTime;
      const timeComponents = this.getTimeElements(timeLeft);
      
      this.сlockFace(timeComponents);
  
    }, 1000);      
  }

  getTimeElements(time) {
  const days = this.addZero(Math.floor(time / (1000 * 60 * 60 * 24)));
  const mins = this.addZero(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.addZero(Math.floor((time % (1000 * 60)) / 1000));
  const hours = this.addZero(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

  return {days, hours, mins, secs};
  }
  
  addZero = (num) => num < 10 ? '0' + num : num ;
};
  
const newTimer = new CountdownTimer({    
    сlockFace: getClockFace,
    beforeTravelDate: new Date('Sep 25, 2022'),
});

function getClockFace({ days, hours, mins, secs }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minsEl.textContent = mins;
  refs.secsEl.textContent = secs;
};

newTimer.start();