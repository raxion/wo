$(function() {
	getWorkoutFromFiBa();
	getWeighFromFiBa();
	//loguin();
	$("#theWorkoutDate, #theWeighDate").datepicker({
		dateFormat: "yy-mm-dd",
		firstDay: 1,
	});

	$("#slideIt").on('click', function() {
		var theWorkoutDiv = $('#workoutWrapper');
		var theWeigDiv = $('#weighWrapper');
		if(theWorkoutDiv.css('left') == '60px') {
			theWorkoutDiv.animate({left: '-100%'}, 500);
			theWeigDiv.animate({right: '60px'}, 500);
		} else {
			theWorkoutDiv.animate({left: '60px'}, 500);
			theWeigDiv.animate({right: '-100%'}, 500);
		}
	});

	$("#loginSpan").on('click', function() {
		var ele = $("#loginFormWrapper");
		if(ele.hasClass("harry-potter-invisibility-cloak")) {
			ele.removeClass("harry-potter-invisibility-cloak");
		} else {
			ele.addClass("harry-potter-invisibility-cloak");
		}
	});

	$(document).on('click','.aWorkout', function() {
		$(this).find(".aWorkoutsComment").slideToggle("fast");
	});
});
var startDate = 1416182400000;
var numOfWorkouts = 0;
function getFormData(theForm) {
	return $(theForm).serializeArray();
}

function transformFormData(data) {
	var theData = {};
	jQuery.each(data, function(i, field) {
		theData[field.name] = field.value;
	});
	return theData;
}

function getWorkoutFromFiBa() {
	var ref = new Firebase("https://raxworkout.firebaseio.com/workouts");
	ref.orderByChild("theWorkoutDate").once("value", function(snapshot) {
		numOfWorkouts = snapshot.numChildren();
		calcAvgWorkouts(numOfWorkouts);
		snapshot.forEach(function(childSnapshot) {
			addWorkoutToPage(childSnapshot.key(), childSnapshot.val());
		});
	}, function(errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
}
function calcAvgWorkouts(numOfWorkouts) {
	var endDate = Date.parse(new Date());
	var avg = (numOfWorkouts / (Math.ceil((endDate - startDate) / (1000*7*24*60*60)))).toFixed(2);
	$("#avgWorkouts").text("Träningstillfällen per vecka: " + avg);
}

function getWeighFromFiBa() {
	var ref = new Firebase('https://raxworkout.firebaseio.com/weigh');
	ref.once('value', function(snapshot) {
		addWeighToPage(snapshot.val());
	});
}


function loguin() {
	var ref = new Firebase("https://raxworkout.firebaseio.com");
	ref.onAuth(authDataCallback);
	ref.authWithPassword({
		email    : "raxion@gmail.com",
		password : "zxasqw12"
	}, function(error, authData) {
		if (error) {
			switch (error.code) {
				case "INVALID_EMAIL":
				console.log("The specified user account email is invalid.");
				break;
				case "INVALID_PASSWORD":
				console.log("The specified user account password is incorrect.");
				break;
				case "INVALID_USER":
				console.log("The specified user account does not exist.");
				break;
				default:
				console.log("Error logging user in:", error);
			}
		} else {
			console.log("Authenticated successfully with payload:", authData);
		}
		var user = ref.getAuth();
	console.log(user);
	});
	ref.unauth();
	var user = ref.getAuth();
	console.log(user);
}

function authDataCallback(authData) {
  if (authData) {
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log("User is logged out");
  }
}

function loggedIn() {
    return auth.user !== null;
};