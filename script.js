let generate_button = document.getElementById('generate')
let clean = document.getElementById('clean')


let codeqr = document.getElementById('codeqr')





function find(name_element) {
    let index_el = document.getElementById(name_element)
    return index_el
}



let headers = [find('header__url'), find('header__text'), find('header__phone'), find('header__telegram')] // header

let sections = [find('element__url'), find('element__text'), find('element__phone'), find('element__telegram')] // block input


let inputs = document.querySelectorAll('input, textarea') // all inputs


let container = document.getElementById('codeqr')




let select = 0





function cleanAllInputs() {
    console.log(inputs)

        for (let input of inputs) {
            if (input.value != '') {
                input.value = ''
            }
       }
}



function cleanSomeInputs() {
    console.log(inputs)

        for (let input of inputs) {
            if (input.value == '') {
                input.value = ''
            }
            else {
                return input.value
            }
       }
}



function hideAll() {
    for (let element of sections) {
        element.style.display = 'none';
    }


    console.log('hideAll');
}





function generateQR() {
    text = cleanSomeInputs();

    if (text){
        codeqr.innerHTML = ''
        
        console.log(QRCode)

        new QRCode(codeqr, {
            text: text,
            width: 278,
            height: 278,
            colorDark: '#5a4a42',
            colorLight: '#fffef9',
            correctLevel: QRCode.CorrectLevel.H

        }

        )



        
        let img = document.createElement('img');

        container.appendChild(img);


}}







generate_button.addEventListener('click', function() {
    if (select == 3) {
        let cleanInput = text.trim();

        if (cleanInput === '') {
            return;
        }

        if (cleanInput.startsWith('@')) {
            cleanInput = cleanInput.substring(1);
        }

        let finalUrl = `https://t.me/${cleanInput}`;

        generateQR(finalUrl);


    }



    else {
        generateQR()

    }
    



})





clean.addEventListener('click', function() {
    cleanAllInputs();

})



 


headers[0].addEventListener('click', function() {
    hideAll()
    select = 0
    sections[0].style.display = 'block';

});




headers[1].addEventListener('click', function() {
    hideAll()
    select = 1
    sections[1].style.display = 'block';

});



headers[2].addEventListener('click', function() {
    hideAll()
    select = 2
    sections[2].style.display = 'block'

})


headers[3].addEventListener('click', function() {
    hideAll()
    select = 3
    sections[3].style.display = 'block'

})




window.addEventListener('load', function() {
    hideAll()
    sections[0].style.display = 'block'

    select = 0

})