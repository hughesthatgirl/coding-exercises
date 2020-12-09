var counter = document.getElementById('count');
var decrement = document.getElementById('decrement');
var increment = document.getElementById('increment');
var count = 0;

increment.addEventListener('click', function(){
    count++;
    counter.textContent = count;
});