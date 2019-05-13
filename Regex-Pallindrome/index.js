const entry = document.querySelector('.inputString');
const submitBtn = document.querySelector('.submitBtn');
const exit = document.querySelector('.exit p');
const date = document.querySelector('.currentDate');
const rightWrong = document.querySelectorAll('.entry i');


setInterval(() => {
    date.innerHTML = new Date().toLocaleString();

}, 1000)

submitBtn.addEventListener('click', () => {
    if (isValid(entry.value)) {

        if (checkPallindrome(entry.value)) {

            rightWrong[0].setAttribute('class', 'fas fa-2x fa-check checkedRight');
            console.log(rightWrong[0]);
            return exit.innerHTML = 'Congratulations';
        } else {
            rightWrong[1].setAttribute('class', 'fas fa-2x fa-check checkedWrong');
            return exit.innerHTML = `Sorry '${entry.value}' is not a pallindrome. Try another word.`
        }

    } else {
        alert('Please Write a word...')
    }


})

entry.addEventListener('click', () => {
    entry.value = '';
    exit.innerHTML = '';
    rightWrong[0].setAttribute('class', 'fas fa-2x fa-check checkedRight visible');
    rightWrong[1].setAttribute('class', 'fas fa-2x fa-check checkedWrong visible');
    console.log('hello')
})

const isValid = str => {

    return (str.length !== 0);
}

const checkPallindrome = inputStr => {
    let tempStr = inputStr.match(/[a-z0-9]+/ig).join('').toLowerCase();

    let second = tempStr.split('').reverse().join('');

    return (tempStr === second);
}

