$(function() {
	$("#theAddWorkoutBtn").on("click", function(e) {
		e.preventDefault();
		var theData = transformFormData(getFormData("#workoutForm"));
		var theWeek = calculateWeek(theData.theWorkoutDate);
			theData = addWeekToData(theWeek,theData);
		var valid = validateWorkoutForm(theData);
		if(valid) {
			$(this).prop("disabled", true);
			addWorkoutToFiBa(theData);
			getLastWorkoutFromFiBa();
			$(".form-good").removeClass("form-good");
		} else {
			console.log("Form failed");
		}
	});
});

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

function validateWorkoutForm(theData) {
	var valid = true;
	$.each(theData,function(key,value) {
		if(key != "theWorkoutComment") {
			if(value == "") {
				$("#" + key).removeClass("form-good");
				$("#" + key).addClass("form-bad");
				valid = false;
			} else {
				$("#" + key).removeClass("form-bad");
				$("#" + key).addClass("form-good");
				valid = true;
			}
		}
	});
	return valid;
}
function calculateWeek(theWorkoutDate) {
	var oneDay = 1000*60*60*24;
	workoutDate = new Date(theWorkoutDate);
	var diff = workoutDate.getTime() - startDate; //startDate GLOBAL VAR atm (in app.js)
	var theWeek = Math.ceil((diff/oneDay)/7);
	return theWeek;
}
function addWeekToData(theWeek,theData) {
	theData["theWeek"] = theWeek;
	return theData;
}

function addWorkoutToFiBa(theWorkout) {
	var ref = new Firebase("https://raxworkout.firebaseio.com/workouts");
	ref.push(theWorkout, function(error) {
		if(error) {
			$("#addWorkoutStatusBad").removeClass('hidden');
			setTimeout(function() {
				$("#addWorkoutStatusBad").addClass('hidden');
			}, 3000);
		} else {
			$("#addWorkoutStatusGood").removeClass('hidden');
			$("#workoutForm").trigger("reset");
			$("#theAddWorkoutBtn").prop("disabled", false);
			setTimeout(function() {
				$("#addWorkoutStatusGood").addClass('hidden');
			}, 3000);
		}
	});
}

function getLastWorkoutFromFiBa() {
	var ref = new Firebase("https://raxworkout.firebaseio.com/workouts");
	ref.limitToLast(1).on("child_added", function(snapshot) {
		addWorkoutToPage(snapshot.key(), snapshot.val());
		calcAvgWorkouts(++numOfWorkouts);
	}, function(errorObject) {
		console.log("The read failed: " + errorObject.code);
	});
}

function addWorkoutToPage(theWorkoutId, theWorkoutData) {
	var mainParent = $("#workoutList");
	var theWorkoutParent = jQuery("<div/>", {
		id: theWorkoutId,
		'class': "highlight"
	});
	var theWorkout = jQuery("<div/>", {
		'class': "aWorkout",
		html: theWorkoutData.theWorkoutDate + ", " + 
		theWorkoutData.theType + ", " + 
		theWorkoutData.theActivity + ", " + 
		theWorkoutData.theDuration
	});
	var theWorkoutsComment = jQuery("<div/>", {
		'class': "aWorkoutsComment",
		html: theWorkoutData.theWorkoutComment
	});
	mainParent.prepend(theWorkoutParent.prepend(theWorkout.append(theWorkoutsComment)));
}



function removeWorkoutFromFiBa(theWorkout) {

}