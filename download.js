let download = document.getElementById('download');



download.addEventListener('click', () => {
    let qr_img = document.querySelector('img'); 

    if (!qr_img) {
        alert('QR-код еще не создался!');
        return;
    }

    let download = qr_img.src;

    let link = document.createElement('a');
    link.href = download;
    link.download = 'qrcode.png';
    link.click();
});

