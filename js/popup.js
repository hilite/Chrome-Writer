
$(function(){

	// Button Configure
	$("#configure").click(function () {
	
		chrome.tabs.create({url:"options.html"});
		window.close();

	});

	// Button Text to Form 
	$("#txt2form").click(function () {

		// get localstorage data
		var splitter = getSpliter();
		var tagNames = getTagsName().split("\n");
		for(i = 0; i < tagNames.length; i++){
			if(tagNames[i] == ""){
				tagNames.splice(i,1);
				i-=1;
			}
		}

		// get article data
		var article = document.getElementsByName('article')[0].value.split(splitter);
		var a="";
		for(var i=0; i < tagNames.length; i++) {	
			js = "document.getElementsByName('" + tagNames[i] + "')[0].value=''";
			chrome.tabs.executeScript(null, {code:js});
			js = "document.getElementsByName('" + tagNames[i] + "')[0].value='" + jQuery.trim(article[i]).replace(/\r?\n|\r/g, "\\n") + "'";
			chrome.tabs.executeScript(null, {code:js});
		}
		//chrome.tabs.executeScript(null, {code:"document.body.style.backgroundColor='red'"});

		window.close();

	});

});



