const tabs = document.querySelectorAll('.tabs__tab');
const sections = document.querySelectorAll('.content__section');
const startBtn = document.getElementById("startBtn");
const aboutSection = document.getElementById("about");
const featuresSection = document.getElementById("features");
const viewForm = document.getElementById("viewForm");
const forms = document.getElementById("forms");
const formDetails = document.getElementById("form_details");

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutSection.classList.remove("content__section--active");
    featuresSection.classList.add("content__section--active");
});

viewForm.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.remove("content__section--active");
    formDetails.classList.add("content__section--active");
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tabs__tab--active'));
        sections.forEach(s => s.classList.remove('content__section--active'));

        tab.classList.add('tabs__tab--active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('content__section--active');
    });
});

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
