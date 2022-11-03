
    const thisForm = document.getElementById('myForm');
    thisForm.addEventListener('submit', async function (e) {
    const waapURL = 'https://api.qrserver.com/v1/create-qr-code/?size=250x50&data=https://api.whatsapp.com/send/?phone=' +document.getElementById('phoneNumber').value + encodeURIComponent('&text=') +document.getElementById('initialText').value;
    e.preventDefault();
    //const result = await response.json();
    document.getElementById("qrcode").src = ""
    document.getElementById("qrcode").src = waapURL
    console.log(waapURL)
});