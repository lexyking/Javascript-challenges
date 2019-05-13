const entry = document.querySelector('.inputString');
const submitBtn = document.querySelector('.submitBtn');
const exit = document.querySelector('.exit p');
const date = document.querySelector('.currentDate');
const time = document.querySelector('.currentTime');
const rightWrong = document.querySelectorAll('.entry i');


setInterval(() => {
    date.innerHTML = new Date().toDateString();
    time.innerHTML = new Date().toLocaleTimeString();

}, 1000)

submitBtn.addEventListener('click', () => {
    if (isValid(entry.value)) {

        if (checkPallindrome(entry.value)) {
            rightWrong[0].setAttribute('class', 'fas fa-2x fa-check checkedRight');
            console.log(rightWrong[0]);
            return exit.innerHTML = 'Congratulations';
        } else {
            exit.parentElement.setAttribute('class', 'exit wrongbg');
            console.log(exit.parentElement);
            rightWrong[1].setAttribute('class', 'fas fa-2x fa-times checkedWrong');
            return (exit.innerHTML = `Sorry '${entry.value}' is not a pallindrome. Try another word.`);
        }

    } else {
        alert('Please Write a word...');
    }

})

entry.addEventListener('click', () => {
    entry.value = '';
    exit.innerHTML = '';
    rightWrong[0].setAttribute('class', 'fas fa-2x fa-check checkedRight visible');
    rightWrong[1].setAttribute('class', 'fas fa-2x fa-times checkedWrong visible');
    console.log('hello')
});


const isValid = str => {

    return (str.length !== 0);
}

const checkPallindrome = inputStr => {
    let tempStr = inputStr.match(/[a-z0-9]+/ig).join('').toLowerCase();

    let second = tempStr.split('').reverse().join('');

    return (tempStr === second);
}

