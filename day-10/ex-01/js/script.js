function executeJscriptCode() {
	var code = document.querySelector('#code').value; //$('#code')[0].value;
	eval(code);//$("body").append("<script>"+code+"</script>");
}