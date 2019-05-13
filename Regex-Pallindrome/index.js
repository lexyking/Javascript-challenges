const checkPallindrome = inputStr => {
    let tempStr = inputStr.match(/[a-z0-9]+/ig).join('').toLowerCase();

    let second = tempStr.split('').reverse().join('');

    console.log(tempStr === second);
}

const str = 'KAYAK'
checkPallindrome(str);