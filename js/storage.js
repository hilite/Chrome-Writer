
function saveOprions(){ 
	setSpliter(escapeHTML(document.getElementById("splitter").value)); 
	setTagsName(escapeHTML(document.getElementById("nameTags").value)); 
} 

function loadOptions(){

	document.getElementById("splitter").innerHTML = getSpliter();
	document.getElementById("nameTags").innerHTML = getTagsName();

};

function escapeHTML(str){ 
	return str.replace(/\&/g,"&amp;").replace(/\</g,"&lt;").replace(/\>/g,"&gt;").replace(/"/,"&quot;"); 
} 


function getSpliter() 
{ 
  var result = '---';
  var lstrItem = localStorage.getItem("splitter"); 

  if(lstrItem != undefined) 
  { 
    result = lstrItem; 
  } 
  
  return result; 
} 

function setSpliter(value) 
{ 
  localStorage.setItem("splitter",value); 
} 

function getTagsName() 
{ 
  var result = 'post_title\npost_name\ncontent';

  var lstrItem = localStorage.getItem("nameTags"); 

  if(lstrItem != undefined) 
  { 
    result = lstrItem; 
  } 
  
  return result; 
} 

function setTagsName(value) 
{ 
  localStorage.setItem("nameTags",value); 
} 

function trim(string){
	var text = string.replace(/^[ 　]*/gim, "").replace(/^[\n]*/gim, "").replace(/^[\r\n]*/gim, "").replace(/[ 　]*$/gim, "").replace(/[\n]*$/gim, "").replace(/[\r\n]*$/gim, "");
	return text;
}

