const array = [1, 2, 3, 4, 5];

for(let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

let v, i = 0;
while(v = array[i++]) {
	console.log(v);
}