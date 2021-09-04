// var j;
// let j;
// それぞれ結果が５回出力される

for(let i = 0; i < 5; i++) {
  // ループごとに違うメモリに値を保存している
	const j = i * 2;
	setTimeout(function() {
		console.log(j);
	}, 1000);
}