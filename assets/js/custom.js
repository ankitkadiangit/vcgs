// Accordion code starts
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// Accordion code ends

// Tab code starts
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

// Tab code ends

// Mobile hamburger code starts
function menuMobile() {
  var x = document.getElementById("headerNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function openNav() {
  document.getElementById("nav-items").style.width = "calc(100% - 5rem)";
  var x = document.getElementById("headerNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function closeNav() {
  document.getElementById("nav-items").style.width = "4rem";
  const myTimeout = setTimeout(delayClose, 190);
}

function delayClose() {
  var x = document.getElementById("headerNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// Mobile hamburger code ends

// Contact popup code starts
function openContact() {
  var element = document.getElementById("contact-modal");
  element.classList.add("open");
  const myTimeoutNew = setTimeout(delayContact, 100);
}
function closeContact() {
  document.getElementsByClassName("popup-inner")[0].style.bottom = "-100%";
  const myTimeoutNewe = setTimeout(delayContactClose, 300);
}
function delayContact() {
  document.getElementsByClassName("popup-inner")[0].style.bottom = "0";
}
function delayContactClose() {
  var element = document.getElementById("contact-modal");
  element.classList.remove("open");
}
// Contact popup code ends

$(document).ready(function () {
  // Prepair tab code starts
  $("#prepair-visible").click(function () {
    $("#plus-visible").removeClass("active");
    $(this).addClass("active");
    $("#prepair-plan").show();
    $("#plus-plan").hide();
  });
  // Prepair tab code ends

  // Prepair plus tab code starts
  $("#plus-visible").click(function () {
    $("#prepair-visible").removeClass("active");
    $(this).addClass("active");
    $("#prepair-plan").hide();
    $("#plus-plan").show();
  });
  // Prepair plus tab code ends

  // Step prepair visible code starts
  $("#step-prepair-visible").click(function () {
    $("#step-plus-visible").removeClass("active");
    $(this).addClass("active");
    $("#step-prepair-plan").show();
    $("#step-plus-plan").hide();
  });
  // Step prepair visible code ends

  // Step prepair plus visible code starts
  $("#step-plus-visible").click(function () {
    $("#step-prepair-visible").removeClass("active");
    $(this).addClass("active");
    $("#step-prepair-plan").hide();
    $("#step-plus-plan").show();
  });
  // Step prepair plus visible code ends
});
