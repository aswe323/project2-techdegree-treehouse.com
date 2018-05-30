/*
 KNOWN BUGS:

 TO-ADD:
 TODO:add search elements. 
 TODO:add search functionality
 TODO:add calling of page when student hit succsefuly searched.
 TODO:make an alert for the suer when he enters the wrong input in the elements and press search
 TO-REFACTOR:
	complete:make the code more like the example snippet.
 	conplete:make buttons inside a div element with li for each button.

 TESTS:
 TODO:test script with exact number of students. (10 for example)
 TODO:test script with less then 10 studens.
*/

/*----------------------------------------------------------
 *		  MINIMUM VIABLE PRODUCT                   *
-----------------------------------------------------------*/
//accesing DOM elements
const divPage = document.querySelector('.page');//acces to first tag with page class in it. 
const studentListDOM = document.querySelector(".student-list").children; // acces to list of li containing students
const studentEmail = (student) => student.querySelector("div span").innerText;//access a studentListDOM email text
const studentName = (student) => student.querySelector("div h3").innerText;//acces to studentListDOM name text

//make a new elememnt DIV and adding an ul for the pages to held at
function createDiv (){
	//creating a new div
	const newDiv = document.createElement('div');
	//setting its class to pages
	newDiv.setAttribute('class', 'pages');
	//creaing new ul elemeny
	const newUl = document.createElement('ul');
	//ul element has class of pagination
	newUl.setAttribute("class", "pagination");
	//appening the ul to the new div element
	divPage.appendChild(newDiv);
	//selecting all the div element
	const pageDiv = document.querySelector('.pages');	
	//appending the ul to the div.
	pageDiv.appendChild(newUl);
	//making pagesUl a global access for the ul element
	pagesUl = document.querySelector('.pages ul');
}
createDiv();
//hide every element in the student-list selector studentListDOM;
function hideAll (){

	//adding a style to hide all the students from the html
	for (let i=0; i<studentListDOM.length;i++){
	studentListDOM[i].style.display = 'none';//adding a style to hide all the students from the html

	}
}
//creating buttons in the range of studentListDOM/10 then adding another for any leftovers. if the value of the next index is null. will stop.
function buttons(){

	for (let index=0;index<=studentListDOM.length/10;index++){
		

		//creating an <a> element
		let button = document.createElement("a");
		console.log(button);
		//adding an href attr with the vlaue of $
		button.setAttribute('href', "#");
		//making the inner html of the button = to index. TODO: make it 1 for the first button without interapting the event listener creation
		button.innerHTML = index + 1;
		//creating a new <li> element 
		let newLi = document.createElement('li')
		//adding the new <a> to the new <li> element
		newLi.appendChild(button);
		//adding the new <li> to the div with the class of pagination
		pagesUl.appendChild(newLi);
		if (studentListDOM.item(index+1) === null){break};//UNTESTED
	}

};
//calling buttons before accesing them, so to use them in the creating of the event listeners.
buttons();
const buttonElements = document.querySelectorAll(".pagination li");
//looping throw all buttons and adding event listeners to them.
for (let buttonInstence=0;buttonInstence<buttonElements.length;buttonInstence++){

//the event will make the approprirate students apper and hide all outher students.
	buttonElements.item(buttonInstence).addEventListener('click', (event) =>{

		let button = event.target;//set the button variable to target
		hideAll();//hides all the student elements
		makeActive();
		//will add a class attribue with the value of active.
		button.setAttribute('class','active');
		let startCount = button.innerHTML -1;
		//if event index is not smaller then the starting index value plus 10. continue enabling student LI
		for (let eventIndex=(parseInt(startCount))*10; eventIndex<((parseInt(startCount)+1)*10);eventIndex++){
			if (studentListDOM.item(eventIndex) === null){break};
			studentListDOM.item(eventIndex).style.display='list-item';
			}
	})
}
//will remove all active classes from the buttons
function makeActive(){
	const buttonsList = document.querySelectorAll('[href="#"]');
	for (let i=0;i<buttonsList.length;i++){
		buttonsList.item(i).removeAttribute('class');
	}
}
//initial load of page, hiding every student on the page then showing the first 10
function hideAndAppened() {
	hideAll();
	//default page is the first. so we display the first 10 students
	for (let i=0;i<10;i++){
		studentListDOM.item(i).style.display ="list-item";
	
	}
};
hideAndAppened();
	
