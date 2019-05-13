const entry = document.querySelector('.inputString');
const submitBtn = document.querySelector('.submitBtn');
const exit = document.querySelector('.exit p')

submitBtn.addEventListener('click', () => {
    if (isValid(entry.value)) {
        if (checkPallindrome(entry.value)) {
            console.log('congratulations');
            console.log(exit);
            return exit.innerHTML = 'Congratulations';
        } else {
            alert(`Sorry '${entry.value}' is not a pallindrome. Try another word.`)
        }
    } else {
        alert('Please Write a word...')
    }


})

const isValid = (str) => {
    return (str.length !== 0);
}

const checkPallindrome = inputStr => {
    let tempStr = inputStr.match(/[a-z0-9]+/ig).join('').toLowerCase();

    let second = tempStr.split('').reverse().join('');

    return (tempStr === second);
}

const str = 'KAYAK'
checkPallindrome(str);