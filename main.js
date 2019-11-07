//Set the variables
let timeNow = new Date();
let timeHour = timeNow.getHours();
let suffix = (timeHour >= 12)? 'PM' : 'AM';

function timeCalculation() {
timeHour = (timeHour > 12)? timeHour - 12: timeHour;
timeHour = (timeHour == "00")?12 : timeHour;
}

// Store user input in local Storage

$('#btn1').click(function() {
  if($('#text1').val()) {
    localStorage.removeItem('text1');
  }

  const hour1 = $('#time1').text();
  const hour1String = JSON.stringify(hour1);
  
  localStorage.setItem(hour1, $('#text1').val());
});

$('#btn2').click(function() {
  if($('#text2').val()) {
    localStorage.removeItem('text2');
  }

  const hour2 = $('#time2').text();
  const hour2String = JSON.stringify(hour2);

  localStorage.setItem(hour2, $('#text2').val());
});

$('#btn3').click(function() {
  if($('#text3').val()) {
    localStorage.removeItem('text3');
  }

  const hour3 = $('#time3').text();
  const hour3String = JSON.stringify(hour3);

  localStorage.setItem(hour3, $('#text3').val());
});

$('#btn4').click(function() {
  if($('#text4').val()) {
    localStorage.removeItem('text4');
  }

  const hour4 = $('#time4').text();
  const hour4String = JSON.stringify(hour4);

  localStorage.setItem(hour4, $('#text4').val());
});

$('#btn5').click(function() {
  if($('#text5').val()) {
    localStorage.removeItem('text5');
  }

  const hour5 = $('#time5').text();
  const hour5String = JSON.stringify(hour5);

  localStorage.setItem(hour5, $('#text5').val());
});

$('#btn6').click(function() {
  if($('#text6').val()) {
    localStorage.removeItem('text6');
  }

  const hour6 = $('#time6').text();
  const hour6String = JSON.stringify(hour6);

  localStorage.setItem(hour6, $('#text6').val());
});

$('#btn7').click(function() {
  if($('#text7').val()) {
    localStorage.removeItem('text7');
  }

  const hour7 = $('#time7').text();
  const hour7String = JSON.stringify(hour7);

  localStorage.setItem(hour7, $('#text7').val());
})

$('#btn8').click(function() {
  if($('#text8').val()) {
    localStorage.removeItem('text8');
  }

  const hour8 = $(hour8).text();
  const hour8String = JSON.stringify(hour8);

  localStorage.setItem("text8", $('#text8').val());
})

$('#btn9').click(function() { 
  if($('#text9').val()) {
    localStorage.removeItem('text9');
  }

  const hour9 = $('#time9').text();
  const hour9String = JSON.stringify(hour9);

  localStorage.setItem(hour9, $('#text9').val());
})

