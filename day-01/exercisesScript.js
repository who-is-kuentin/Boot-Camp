$(document).ready(function() {
  displayMsg();
  focusCursor();
  setActionBtn();
});

function displayMsg() {
  $('#button').button();
  alert('the page has loaded successfully');
}

function focusCursor() {
	$('#alias').focus();
}

function setActionBtn() {
	$('#button').click(function() {
		$.post('api/dispatcher.php', { service: 'welcome.hello', params: {"name": $('#alias').val()}})
			.success(function(dataFromServer) {
				$('response').html(dataFromServer);
				$('response').css("background-color","lightgreen");
			})
			.error(function() {
				$('response').html('error');
				$('response').css("background-color","red");
			})
	});
}