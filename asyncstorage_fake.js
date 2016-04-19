/* This is a stand-in for React Native's AsyncStorage module,
 * for anyone who is developing Javascript-only features
 * for a future React Native project.
 */


var store = {};
var noop = function(){};


/* 
 * callback(error, result)
 */
function getItem(key, callback) {
	callback = callback || noop;
	var result = store[key];
	if (!result) {
		var err = new Error("Item does not exist");
		callback(err, null);
	}
	callback(null, result);
}

/* value is a JSON string
 * callback(error)
 */
function setItem(key, value, callback) {
	callback = callback || noop;
	try {
		JSON.parse(value); //ensuring that value is JSON
		store[key] = value;
	} catch (e) {
		callback(e);
		return;
	}
	callback(null);
}

/* 
 * callback(error)
 */
function removeItem(key, callback) {
	callback = callback || noop;
	delete store[key];
	callback(null);
}


function test() {
	var fruit_count = {
		"apples": 3,
		"bananas": 2
	}
	setItem("fruit", JSON.stringify(fruit_count), function(err) {
		getItem("fruit", function(err, result) {
			console.log(result);
		});
	});
}



module.exports = {
	"test": test,
	"getItem": getItem,
	"setItem": setItem,
	"removeItem": removeItem
};



