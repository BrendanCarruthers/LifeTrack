//This is the mathematical functionality section

/* module.exports={
	"chiSquare":chiSquare
}*/



/* 
	List of names
	Behavior
	LifeTrack
	OnTrack


	(Home screen)
	About screen
	(Config screen) Reading and editing list of activities and moods.
    Correlation screen (Odds ratio screen (accuracy 1-p))
    Notification
    	Leading user to write a question in this format "Did you feel/do ___?"
    	



*/

var chi = require("chi-squared");

function expectedValues(a, b, c, d) {
	var vt=(a+b+c+d);						//Makes the math simpler by calculating this first
	var aval = (((a+b)*(a+c))/vt);
	var bval = (((a+b)*(b+d))/vt);
	var cval = (((c+d)*(c+a))/vt);
	var dval = (((c+d)*(b+d))/vt);

return [aval, bval, cval, dval];

}


function calculatePartsum(observed, expected){
	var partsum = (Math.pow((observed-expected), 2))/expected;
	return partsum;

}

function deviationCheck(obsarr, exparr){
	var sum = 0;
	for (var i=0; i<4; i++) {
		sum += calculatePartsum(obsarr[i], exparr[i]);
	}
	return sum;
}

function compareResult(xval){
	var result = chi.cdf(xval, 1);
	return result;
}


function oddsRatio(a,b,c,d) {
	var ratio = (d/c)/(b/a);
	return ratio;
}

console.log("TESTING EXPECTED VALUES", expectedValues(5,4,3,4));
console.log("TESTING calculatePartsum", calculatePartsum(7,4));
console.log("TESTING compareResult", compareResult(4.7));


