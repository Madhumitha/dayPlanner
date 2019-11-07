//Set the variables
let timeNow = new Date();
let timeHour = timeNow.getHours();
let suffix = (timeHour >= 12)? 'PM' : 'AM';

function timeCalculation() {
timeHour = (timeHour > 12)? timeHour - 12: timeHour;
timeHour = (timeHour == "00")?12 : timeHour;
}

$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }
  localStorage.setItem("text1", $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }
  localStorage.setItem("text2", $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }
  localStorage.setItem("text3", $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }
  localStorage.setItem("text4", $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }
  localStorage.setItem("text5", $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }
  localStorage.setItem("text6", $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }
  localStorage.setItem("text7", $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }
  localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }
  localStorage.setItem("text9", $('#text9').val());
})

