

// Create a variable called el to hold the element whose id attribute has a value of footer

// Write the year into that element.


function load_mainpage(website) {
	var el = document.getElementById('content');
    el.innerHTML='<object style="width:100% ; height:90%" type="text/html" data="'+ website +'" ></object>';
}