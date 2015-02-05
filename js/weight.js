$(function() {
	$("#theAddWeighBtn").on("click", function(e) {
		e.preventDefault();
		var theData = transformFormData(getFormData("#weighForm"));
		var valid = validateWeighForm(theData);
		if(valid) {
			$(this).prop("disabled", true);
			addWeighToFiBa(theData);
			//getLastWeighFromFiBa();
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

function validateWeighForm(theData) {
	var valid = true;
	$.each(theData,function(key,value) {
		if(value == "") {
			$("#" + key).removeClass("form-good");
			$("#" + key).addClass("form-bad");
			valid = false;
		} else {
			$("#" + key).removeClass("form-bad");
			$("#" + key).addClass("form-good");
			valid = true;
		}
	});
	return valid;
}

function addWeighToFiBa(theWeigh) {
	var ref = new Firebase('https://raxworkout.firebaseio.com/weigh');
	ref.push(theWeigh, function(error) {
		if(error) {

		} else {
			$("#addWeighStatusGood").removeClass('hidden');
			$("#weighForm").trigger("reset");
			$("#theAddWeighBtn").prop("disabled", false);
			setTimeout(function() {
				$("#addWeighStatusGood").addClass('hidden');
			}, 3000);
		}
	});
}

function weighArrayFunction(snapshot) {
	var weight = [];
	$.each(snapshot, function(index, val) {
		weight.push(val);
	});
	return weight;
}

function addWeighToPage(weight) {
	var date = ['x'];
	var vikt = ['Vikt'];
	var bf = ['BF %'];
	var vatten = ['Vatten %'];
	var muskler = ['Muskler %'];
	var skelett = ['Skelett'];
	$.each(weight, function(index, val) {
		date.push(val.theWeighDate);
		vikt.push(val.theWeigh);
		bf.push(val.theBF);
		vatten.push(val.theWater)
		muskler.push(val.theMuscle);
		skelett.push(val.theBone);
	});
	console.log(date);
	var weighArr = weight;
	var chart = c3.generate({
		bindto: '#chart',
		data: {
			x: 'x',
			columns: [
				date,
				vikt,
				bf,
				vatten,
				muskler,
				skelett
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		}
	});
}