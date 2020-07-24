// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById('footer');
// Write the year into that element.
el.innerHTML = '<p> Footers Goes here. &copy;' + year + '</p>';

function load_home(website) {
     document.getElementById("content").innerHTML='<object style="width:100% ; height:90%" type="text/html" data="'+ website +'" ></object>';
}
load_home('Home.html');