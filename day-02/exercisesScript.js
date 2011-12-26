$(document).ready(function() {
  displayMsg();
  focusCursor();
  setActionBtn();
  setAnimationBtn();
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
		    })
		  .error(function() {
			  $('response').html('error');
			  $('response').css("background-color","red");
		    })
    });
}

var browser = $.browser
function setAnimationBtn() {
  $("#animationBtn").click(function() {
		$.mobile.showPageLoadingMsg();
  $(document).keyup(function(event) {
		if (browser.mozilla && event.keyCode == 13) {$.mobile.hidePageLoadingMsg();}
		if (event.keyCode == 27) {$.mobile.hidePageLoadingMsg();}
  })
  });
}