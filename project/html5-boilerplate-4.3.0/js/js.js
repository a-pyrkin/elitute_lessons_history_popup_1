// $(document).ready(function () {
//         $("input[type=button]").click(function () {
//             $.post( "http://localhost", $( "#formid" ).serialize()).fail(function() {
//                 alert( "error" );
//             });
//         });
//     });

$(document).ready(function () {


	$(".b-checkbox-user-agreement").click(function(){
		if ($(".b-checkbox-user-agreement").hasClass('active-checkbox'))
			{
				$(".b-checkbox-user-agreement").removeClass('active-checkbox');
				$("#first-checkbox").attr('checked', false);	
			}else{
				$(".b-checkbox-user-agreement").addClass('active-checkbox');
				$("#first-checkbox").attr('checked', true);
			}
	});


	$(".c-Post").click(function(){
		if ($(".c-Post").hasClass('active-radio'))
			{
				$(".c-self-pick-Up").removeClass('active-radio');
				$("#second-radio").attr('checked', false);	
			}else{
				$(".c-Post").addClass('active-radio');
				$("#first-radio").attr('checked', true);
				$(".c-self-pick-Up").removeClass('active-radio');
				$("#second-radio").attr('checked', false);
			}
	});

	$(".c-self-pick-Up").click(function(){
		if ($(".c-self-pick-Up").hasClass('active-radio'))
			{
				$(".c-Post").removeClass('active-radio');
				$("#first-radio").attr('checked', false);	
			}else{
				$(".c-self-pick-Up").addClass('active-radio');
				$("#second-radio").attr('checked', true);
				$(".c-Post").removeClass('active-radio');
				$("#first-radio").attr('checked', false);
			}
	});

    $("#button").click(function () {
        var name = $('#name').val();
        var email = $('#email').val();
        var check = $('#first-checkbox').attr('checked');
        var radio = document.getElementsByClassName("view-radio-selected");

        var select = $("#formid").find( "input[name='select']" ).val();
        if (name && email && check && radio.length) {
        	$.post( "http://localhost", $( "#formid" ).serialize()).fail(function() {
                alert( "error" );
            });
        }
        else {
            alert("Заполните всю форму!");
        }
     });

});
