let btn  = document.querySelector('#btn');
let res  = document.querySelector('#res');
let inp1 = document.querySelector('#inp1');
let inp2 = document.querySelector('#inp2');

btn.addEventListener('click', function() {
	res.textContent = Number(inp1.value) + Number(inp2.value);
});
