$(function() {
  getWorkoutFromFiBa();
  getWeighFromFiBa();
  //addWeighToPage();
  

  $("#theWorkoutDate, #theWeighDate").datepicker({
    dateFormat: "yy-mm-dd"
  });

  $("#slideIt").on('click', function() {
    var theWorkoutDiv = $('#workoutWrapper');
    var theWeigDiv = $('#weighWrapper');
    if(theWorkoutDiv.css('left') == '20px') {
      theWorkoutDiv.animate({left: '-100%'}, 500);
      theWeigDiv.animate({right: '20px'}, 500);
    } else {
      theWorkoutDiv.animate({left: '20px'}, 500);
      theWeigDiv.animate({right: '-100%'}, 500);
    }
  });

  $("#theAddWorkoutBtn").on("click", function(e) {
    e.preventDefault();
    $(this).prop("disabled", true);
    addWorkoutToFiBa(transformFormData(getFormData("#workoutForm")));
  });

  $("#theAddWeighBtn").on("click", function(e) {
    e.preventDefault();
    $(this).prop("disabled", true);
    addWeighToFiBa(transformFormData(getFormData("#weighForm")));
  });
});

var weighArray = ['data1'];

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
  ref.orderByChild("theWorkoutDate").on("child_added", function(snapshot) {
    addWorkoutToPage(snapshot.key(), snapshot.val());
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
}

function addWorkoutToFiBa(theWorkout) {
  var ref = new Firebase("https://raxworkout.firebaseio.com/workouts")
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

function addWorkoutToPage(theWorkoutId, theWorkoutData) {
  var mainParent = $("#workoutListWrapper");
  var theWorkoutParent = jQuery("<div/>", {
    id: "theWorkoutId",
    'class': "highlight"
  });
  var theWorkout = jQuery("<div/>", {
    html: theWorkoutData.theWorkoutDate + ", " + 
          theWorkoutData.theType + ", " + 
          theWorkoutData.theActivity + ", " + 
          theWorkoutData.theDuration + ", " + 
          theWorkoutData.theWorkoutComment
  });
  mainParent.append(theWorkoutParent.append(theWorkout));
}

function removeWorkoutFromFiBa(theWorkout) {

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

function getWeighFromFiBa() {
  var ref = new Firebase('https://raxworkout.firebaseio.com/weigh');
  ref.once('value', function(snapshot) {
    addWeighToPage(snapshot.val());
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
  var vikt = ['Vikt'];
  var bf = ['BF %'];
  var vatten = ['Vatten'];
  var muskler = ['Muskler'];
  var skelett = ['Skelett'];
  $.each(weight, function(index, val) {
     vikt.push(val.theWeigh);
     bf.push(val.theBF);
     vatten.push(val.theWater)
     muskler.push(val.theMuscle);
     skelett.push(val.theBone);
  });
  var weighArr = weight;
  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          vikt,
          bf,
          vatten,
          muskler,
          skelett
        ]
      }
  });
}