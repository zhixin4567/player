var btn1 = document.getElementById("btn1");
var shipin = document.getElementById("shipin");
var tupian = document.getElementById("dw");
btn1.onclick = function() {

    if (shipin.paused) {
        shipin.play();
        tupian.style.visibility = "hidden";
        btn1.src = "2_副本.png"
    } else {
        shipin.pause();
        
        tupian.style.visibility = "visible";
        btn1.src = "1_副本.png"
    }
}
shipin.onclick = function() {

    if (shipin.paused) {
        shipin.play();
        tupian.style.visibility = "hidden";
    } else {
        shipin.pause();
        
        tupian.style.visibility = "visible";
    }
}
var cur = document.getElementById("cur");
var zsj = document.getElementById("zsj");
var jindu = document.getElementById("jindu");
var jindu1 = document.getElementById("jindu1");
shipin.ontimeupdate = function(){
	
	cur.innerHTML=parseInt(shipin.currentTime/60)+":"+(shipin.currentTime%60).toFixed(0);
	zsj.innerHTML=parseInt(shipin.duration/60)+":"+"0"+parseInt(shipin.duration%60);
	jindu1.style.width = (shipin.currentTime/shipin.duration)*100+"%";
	
	jindu1.style.backgroundColor="#1E90FF";

}
var btn2 = document.getElementById("btn2");
btn2.onclick = function(){
	if(shipin.style.width != "100%" || shipin.style.height != "100%"){
	shipin.style.width="100%";
	shipin.style.height="100%";
	div1.style.visibility = "hidden";
	jindu.style.visibility = "hidden";
}else{
	shipin.style.width="550px";
	shipin.style.height="450px";
	div1.style.visibility = "visible";
	jindu.style.visibility = "visible";
}
}
tupian.onclick = function (){
	tupian.style.visibility = "hidden";
	shipin.play();
}

var yinliang = document.getElementById("yinliang");
yinliang.onclick = function (){
	
	if(shipin.muted == true){
		shipin.muted =false;
		yinliang.src = "4.png";
	}else{
		shipin.muted =true;
		yinliang.src = "6.png";
	}
}

shipin.onended = function(){
	alert("感谢观看！");
}
shipin.onmouseout = function(){
	div1.className = "css2";
	tiaojie.style.visibility = "hidden";
}
shipin.onmouseover = function(){
	div1.className = "css1";
}
div1.onmouseover = function(){
	div1.className = "css1";
}
var tiaojie = document.getElementById("tiaojie");
var bianhua = document.getElementById("bianhua");
yinliang.onmouseover = function(){
	tiaojie.style.visibility = "visible";
}
yinliang.onmouseout = function(){
	tiaojie.style.visibility = "hidden";
}
tiaojie.onmouseover = function(){
	tiaojie.style.visibility = "visible";
	div1.className = "css1";
}

// jindu.onmousemove = function(){
// 	console.log(event.x);
// 	// alert(jindu.style.width)
// 	// event.x = jindu1.style.width;

// }

// jindu.onclick = function(){
// 	console.log(event.x);
// 	// alert(jindu.style.width)
// 	jindu1.style.pixeWidth = event.x;
// 	jindu.style.width = jindu1.style.pixeWidth;
// 	console.log(jindu1.style.pixeWidth);
// 	jindu1.style.height = "5px";
// 	jindu1.style.backgroundColor="#1E90FF";

// }
jindu.onclick = function (){
	var zsj = shipin.duration;
	// alert(event.x);
	// alert(zsj);
	
	shipin.currentTime = (event.x*zsj)/548;
	// alert(shipin.currentTime);
	// console.log(event.x);
	// console.log(shipin.currentTime);
}
tiaojie.onclick = function(){
	
	shipin.volume = (340-event.y)/100;
	var gd =100-(340-event.y);
	
	bianhua.style.height = gd+"px";
	// alert(bianhua.style.height);

	// bianhua.style.height = shipin.volume*100;
	// console.log(bianhua.style.height);
	
}
// shipin.onvolumechange = function(){
// 	bianhua.style.height = shipin.volume;
// 	alert(bianhua.style.height);
// }
var shijian = document.getElementById("shijian");
jindu.onmousemove = function(){
	var zsj = shipin.duration;
	// shipin.currentTime = ((event.x*zsj)/548);
	shijian.style.left = event.x+"px";
	shijian.style.visibility = "visible";
	shijian.innerHTML = parseInt(((event.x*zsj)/548)/60)+":"+((((event.x*zsj)/548)%60).toFixed(0)-1);

}
jindu.onmouseout = function(){
	shijian.style.visibility = "hidden";
}