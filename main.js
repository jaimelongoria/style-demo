$(document).ready(function () { //checks if html is fully loaded
	$('#btn-img-1').prop('disabled', true); //on first page view, the button for the visible img has to be disabled
	$('.my-button').on("click", function (e) { //when a button with class .my-button is clicked
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		$('.my-button').prop('disabled', false); //enable ALL buttons so NONE are disabled
		$(this).prop('disabled', true); //disable ONLY the button that was clicked - "this" button that was clicked
		var myInfo = $(this), // gather the info related to "this" button that was clicked and store in a variable call myInfo
			myUrl = myInfo.data('image'); //from myInfo, grab the URL stored in data-image attribut and store in myUrl
		$('#aids-img').attr('src', myUrl); //Replace URL attribute for #aids-img by replacing what is in the src field
	}); //end of  function
}); //closes all the functions








// // Add in external javascript file
// $(document).ready(function () { //verifies all HTML loaded
//
// 	// if the hightlight gandhi button is clicked, add highlight class
// 	$("#hi-gandhi").on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		$('#gandhi').addClass('highlight'); /*Note no # or . for class being added*/
// 		$("#hi-gandhi").prop('disabled', true);
// 	});
//
// 	// if the hightlight angelou button is clicked, add highlight class
//
// 	$("#hi-angelou").on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		$('#angelou').addClass('highlight');
// 		$("#hi-angelou").prop('disabled', true);
// 	});
//
// 	// if the style headline button is clicked, add headline class
// 	$('#style-hed').on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		$("h3").addClass("headline");
// 		$('#style-hed').prop('disabled', true);
// 	});
//
// 	// if the multi style button is clicked, add  someStyling somePadding biggerText addBorder classes
// 	$('#style-multi').on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		console.log("multi is clicked");
// 		$('#style-multi').prop('disabled', true);
// 		$('.authors').addClass("someStyling somePadding biggerText addBorder"); // note multiple IDs and classes
// 		$("#hi-gandhi, #hi-angelou").prop('disabled', true); // we disabled the highlight buttons highlight got activated
// 	});
//
//
// 	$("#swap-div").on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		$(".container").addClass('newDiv');
// 		$("#swap-div").prop('disabled', true);
// 	});
//
// 	$("#hide-div").on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		$(".dog").addClass('hide-pretty-please');
// 		$("#hide-div").prop('disabled', true);
// 	});
//
// 	// reset all IDs and classes
// 	$("#reset-all").on("click", function (e) {
// 		e.preventDefault(); //disable the button's default behavior
// 		$("#gandhi, #angelou, h3, .authors, .container, .dog").removeClass("highlight headline someStyling somePadding biggerText addBorder newDiv hide-pretty-please  ");
// 		$(".button").prop('disabled', false);
//
// 	});
// }); //closes all the functions