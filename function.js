(function($){
	$(document).ready(function(){
		function mudar_url(url, titulo) {
			if(url != "blank" && url != "/blank" && url != "/home/blank" || url != "about:blank") {
				window.top.location.hash = url.replace("/", "");
				window.top.document.title = titulo;
			}
		}
		var frameID = "lenivene";
		if(!document.getElementById(frameID)) {
			if(!parent.document.getElementById(frameID)) {
				if(!location.origin) {
					location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
				}
				window.location = "/#" + location.href.replace(location.origin + "/","");
				//alert(location.href.replace(location.origin + "/",""));
			}
		}else{
			if(location.hash == "") {
				if(typeof window.top.frames[frameID].frames != "undefined" && window.top.frames[frameID].frames.length != 0) {
					window.top.frames[frameID].location = "/home/?link=home";
				} else if(typeof window.top.frames[frameID].contentWindow != "undefined" && window.top.frames[frameID].contentWindow.frames.length != 0 || typeof window.top.frames[frameID].contentWindow != null) {
					window.top.frames[frameID].src = "/home/?link=home";
				}else{
					document.getElementById(frameID).src = "/home/?link=home";
				}
			}else{
				if(location.hash.substring(1) == "/") {
					document.getElementById(frameID).src = "/home/?link=ihome";
				}else if(document.getElementById(frameID).src == "/home/?link=home"){
				}else {
					document.getElementById(frameID).src = location.hash.substring(1);
				}
			}
		}
	});
})(jQuery);