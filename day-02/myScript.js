var message = "Página Cargada";
/* Im using this function that checks the document and waits until it's ready to be manipulated... */
$(document).ready(function()
{
	isLoaded();
	cursorInaBox();
});

function isLoaded()
{
	alert(message);
}

function cursorInaBox()
{
	/* The Cursor is placed in the Box (with id alias) when the web is loaded */
	$('#alias').focus();
}

function eventAttached()
{
	$('#exerButton').click(function()
	{
		/*Load data from the server using a HTTP POST request*/
		$post("api/dispatcher.php", { 
		service:'welcome.hello',
		params:{ 
		name:$('#alias').val()
		}
		}, function(data,status){
			if (status == 'sucess'){
				$('response').html(data);
			} else {
				$('response').css({'background-color':'red'});}
				});
	});
}
/* ... instead of this 
/*
window.onload=function()
{
	alert("Página Cargada");
}
*/