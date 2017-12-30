// function declaration

function drawTree(getTreeHeight) {
	for (var i=0; i<=getTreeHeight; i++){
		var star = '';

		for (var j=0; j<=i; j++){
			star += '*';
		}
		console.log(star);
	}
}
var numberDrawTree = drawTree(20);
/*
var numberDrawTree2 = drawTree(3);
var numberDrawTree3 = drawTree(5);
var numberDrawTree4 = drawTree(7);
*/