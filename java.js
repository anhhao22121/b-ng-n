document.addEventListener('DOMContentLoaded', function () {
    let isLightOn = false;
    const bulb = document.getElementById('bulb');
    const status = document.getElementById('status');

    bulb.addEventListener('click', function () {
        isLightOn = !isLightOn;

        if (isLightOn) {
            bulb.classList.add('on');
            status.innerText = 'Bấm cc gì vậy';
            trollLaugh.play(); // Phát âm thanh cười trol
        } else {
            bulb.classList.remove('on');
            status.innerText = '';
            trollLaugh.pause(); // Phát âm thanh cười trol
        }
    });

    const trollLaugh = document.getElementById('trollLaugh');
});

