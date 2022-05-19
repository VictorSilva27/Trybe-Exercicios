const formatDate = (year, month, day, ...rest) => {
    return `${day}:${month}:${year} - ${rest.join(':')}`
}

const dateInfo = ['2004', '02', '27', '17', '20', '54'];

console.log(formatDate(...dateInfo));