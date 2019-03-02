	$(document).ready(function() 
	{
		$('form').submit(function(event) 
		{ 
			$('.throw_error').empty(); 
			event.preventDefault();
			var postForm = { 
				'name' 	: $('textarea[name=name]').val(),
				'phone' : $('textarea[name=phone]').val(),
				'email' : $('textarea[name=email]').val(),
				'comments' : $('textarea[name=message]').val()
				};
				
			$.ajax({
				type 		: 'POST',
				url 		: 'acknowledge.php',
				data 		: postForm,
				dataType 	: 'json',
				success 	: function(data) 
				{	
					if (!data.success) 
					{ 
						//alert ( data.errors.name );
						if ( data.errors.name == 'allerror' )
						{
							document.getElementById("error").style.display="block";
							document.getElementById("error").style="display:block";
						}
						
						if (data.errors.name == 'emailfalse') 
						{ 
							document.getElementById("error").style.display="block";
							document.getElementById("error").style="display:block";
							
							document.getElementById("mail-error").style.display="block";
							document.getElementById("mail-error").style="display:block";
							
							document.getElementById("success").style.display="none";
							document.getElementById("success").style="display:none";
						}
						else
						{
							document.getElementById("mail-error").style.display="";
							document.getElementById("mail-error").style="display:none";
						}
						
						if (data.errors.name == 'phonefalse') 
						{ 
							document.getElementById("error").style.display="block";
							document.getElementById("error").style="display:block";
							
							document.getElementById("phone-error").style.display="block";
							document.getElementById("phone-error").style="display:block";
							
							document.getElementById("success").style.display="none";
							document.getElementById("success").style="display:none";
						}
						else
						{
							document.getElementById("phone-error").style.display="";
							document.getElementById("phone-error").style="display:none";
						}
					}
					else 					
					{
						document.getElementById("mail-error").style.display="none";
						document.getElementById("mail-error").style="display:none";
						document.getElementById("error").style.display="none";
						document.getElementById("error").style="display:none";							
						document.getElementById("success").style.display="block";
						document.getElementById("success").style="display:block";
						window.location.href = 'formSuccess.html';						
					}					
				},
			});					
		});
	});	