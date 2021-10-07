import pause from '../js/pause'

const cycle = async () => {
    const circle = document.getElementById("inner-circle");
    const message = document.getElementById("message");
    const rotatingPoint = document.getElementById("rotating-circle");

    try {
        circle.className = 'breathe-in';
        message.innerHTML = 'Inhala';
        rotatingPoint.style.animationDuration = '3800ms';
        rotatingPoint.style.animationName = 'rotate-cycle-1';

        await pause(4000);
        circle.className = 'hold-it';
        message.innerHTML = 'Aguanta';
        rotatingPoint.style.animationDuration = '6800ms';
        rotatingPoint.style.animationName = 'rotate-cycle-2';

        await pause(7000);
        circle.className = 'breathe-out';
        message.innerHTML = 'Exhala';
        rotatingPoint.style.animationDuration = '8000ms';
        rotatingPoint.style.animationName = 'rotate-cycle-3';
    }
    catch {
        console.log("dismounted");
    }

    return true;
};
export default cycle;


