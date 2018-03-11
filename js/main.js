var then = new Date(2018, 05, 02), // month is zero based
    now  = new Date;               // no arguments -> current date
var element = document.getElementsByClassName('my-counter');
// 24 hours, 60 minutes, 60 seconds, 1000 milliseconds
var value = Math.round((then - now) / (1000 * 60 * 60 * 24)); // round the amount of days
// result: 712
var el1 = element[0];
var el2 = element[1];
if (value == -1) {
    el1.innerHTML = 'É HOJE!!';
    el2.innerHTML = 'É HOJE!!';
} else {
    el1.innerHTML = 'Faltam apenas ' + (value + 1) + ' dias!';
    el2.innerHTML = 'Faltam apenas ' + (value + 1) + ' dias!';
}

