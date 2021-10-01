const cycle = async () => {
    const circle = document.getElementById("inner-circle");
    const message = document.getElementById("message");
    const rotatingPoint = document.getElementById("rotating-circle");
    const pause = (time) => {
        return new Promise((resolve) => setTimeout(resolve, time));
    };
    circle.className = 'breathe-in';
    message.innerHTML = 'Inhale';
    rotatingPoint.style.animationDuration = '5000ms';
    rotatingPoint.style.animationName = 'rotate-cycle-1';
    await pause(5000);
    circle.className = 'hold-it';
    message.innerHTML = 'Hold it';
    rotatingPoint.style.animationDuration = '6800ms';
    rotatingPoint.style.animationName = 'rotate-cycle-2';
    await pause(7000);
    circle.className = 'breathe-out';
    message.innerHTML = 'Exhale';
    rotatingPoint.style.animationDuration = '5000ms';
    rotatingPoint.style.animationName = 'rotate-cycle-3';
    return true;
};
export default cycle;


