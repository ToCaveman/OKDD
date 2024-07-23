const lightButton = document.getElementById("light");
const kawaiiButton = document.getElementById("kawaii");
const latvijaButton = document.getElementById("latvija");
const body = document.body;

lightButton.onclick = () => {
    body.classList.remove('kawaii', 'latvija');
    body.classList.add('light');
};

kawaiiButton.onclick = () => {
    body.classList.remove('light', 'latvija');
    body.classList.add('kawaii');
};

latvijaButton.onclick = () => {
    if (body.classList.contains('latvija')) {
        body.classList.remove('latvija');
    } else {
        body.classList.remove('kawaii', 'light');
        body.classList.add('latvija');
    }
};