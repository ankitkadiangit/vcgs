function openService(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


function menuMobile() {
  var x = document.getElementById("headerNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(document).ready(function(){
$('#prepair-visible').click(function(){
  $('#plus-visible').removeClass('active');
  $(this).addClass('active');
  $('#prepair-plan').show();
  $('#plus-plan').hide();
});
$('#plus-visible').click(function(){
  $('#prepair-visible').removeClass('active');
  $(this).addClass('active');
  $('#prepair-plan').hide();
  $('#plus-plan').show();
});
$('#step-prepair-visible').click(function(){
  $('#step-plus-visible').removeClass('active');
  $(this).addClass('active');
  $('#step-prepair-plan').show();
  $('#step-plus-plan').hide();
});
$('#step-plus-visible').click(function(){
  $('#step-prepair-visible').removeClass('active');
  $(this).addClass('active');
  $('#step-prepair-plan').hide();
  $('#step-plus-plan').show();
});
});