const refs = {
  
}

class CountdownTimer {
  selector;
  targetDate;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
}
  
  const newTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 25, 2021'),
});


console.log(newTimer.targetDate);

// getTimeElements(time) {
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);

//   return { days, hours, mins, secs };
// };
