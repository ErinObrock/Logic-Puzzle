$(document).ready(function(){
  console.log("loaded");
  

	$("div").on('click', function() {
		if ($(this).is(':empty')) {
			$(this).css("color", "red")
				   .css("font-size", "2em")
				   .html("X");
		}
		else if ($(this).html() == "X") {
			$(this).css("color", "green"),
			$(this).html("O");
		}
		else {
			$(this).empty();
		}
	});
	
	$("#checkAnswer").on('click', function() {
		if (($("#a1a1").html() == "O") && ($("#a2d2").html() == "O") && ($("#a3b3").html() == "O") 
			&& ($("#a4e5").html() == "O") && ($("#a5c5").html() == "O") && 
			($("#c1a1").html() == "O") && ($("#c2d2").html() == "O") &&
			($("#c3c3").html() == "O") && ($("#c4e5").html() == "O") &&
			($("#c5b5").html() == "O")) {
				alert("Congratulations! You solved the puzzle!");
			} 

		else if (($("#a1a1").html() == "O") && ($("#a2d2").html() == "O") &&
			($("#a3b3").html() == "O") && ($("#a4e5").html() == "O") && ($("#a5c5").html() == "O") &&
			($("#b1a1").html() == "O") && ($("#b2b2").html() == "O") && 
			($("#b3e3").html() == "O") && ($("#b4d4").html() == "O") && ($("#b5c5").html() == "O")) {
			alert("Congratulations! You solved the puzzle!");
		}

		else {
			alert("Sorry, not quite! Try again!");
			}
		
	});

	$("#resetBoard").on("click", function() {
		($("div")).empty();
});
});

