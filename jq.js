function $(selector) {
	this.domArr=document.querySelectorAll(selector)
}
$.prototype.click = function(fun){
	var len = this.domArr.length;
	for (var i = 0; i<len; i++) {
		this.domArr[i].addEventListener('click',fun);
	}
}
// $.prototype.addClass=function(str){
// 		var newClassname="";
// 		if(this.dom.className){
// 			var cname=this.dom.className;
// 			newClassname=cname+" "+str;
// 		}else{
// 			newClassname = str;
// 		}
// 		this.dom.className=newClassname;
// 	}
// $.prototype.removeClass=function(str){
// 			var arr = this.dom.className.split(" ");
// 			for(var i = 0;i<arr.length;i++){
// 				if(arr[i] === str){
// 					arr.splice(i,1);

// 				}
// 			}
// 			this.dom.className = arr.join(" ");
// 		}