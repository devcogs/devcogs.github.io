$( document ).ready(function() {
	$('.alert').removeClass('hide').hide();
    $('#send-btn').on('click', function(e){
    	console.log('contact form submitted.');
    	var datastring = $('#contact-form').serialize();
    	$.ajax({
            type: 'POST',
            url: 'https://cogs.dev/contact.php',
            data: datastring,
            success: function(data) {
            	$('#myModal').modal('hide');
                $('.alert').slideDown('slow');
                $('#msg').text('Thank you for your message, I\'ll repsond shortly.');
                setTimeout(function(){ 
                	$('.alert').slideUp('slow');
                }, 3000);
            }
        });
    })
});