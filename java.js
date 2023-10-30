document.addEventListener('DOMContentLoaded', function () {
    let isLightOn = false;
    const bulb = document.getElementById('bulb');
    const status = document.getElementById('status');

    bulb.addEventListener('click', function () {
        isLightOn = !isLightOn;

        if (isLightOn) {
            bulb.classList.add('on');
            status.innerText = 'Bấm cc gì vậy';
        } else {
            bulb.classList.remove('on');
            status.innerText = '';
        }
    });
});
