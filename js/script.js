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
var numberDrawTree = drawTree(5);
var numberDrawTree2 = drawTree(6);
var numberDrawTree3 = drawTree(7);
var numberDrawTree4 = drawTree(8);