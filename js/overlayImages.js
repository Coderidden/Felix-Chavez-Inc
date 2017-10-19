// JavaScript Document

    var overlay;
	var specialBox;
	var specialBox2;
	var specialBox3;
	var specialBox4;
	var specialBox5;
function toggleOverlay(y){
	var a = y;
	overlay = document.getElementById('overlay');
	specialBox = document.getElementById('specialBox'); 
	overlay.style.opacity = .7;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox.style.display = "none";
	} else {
       var opacDisplay = overlay.style.display = "block";
	   var boxDisplay = specialBox.style.display = "block";
	   return showDivs(y);
	}
}
function toggleOverlay2(y){
	overlay = document.getElementById('overlay');
	specialBox2 = document.getElementById('specialBox2');
	overlay.style.opacity = .7;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox2.style.display = "none";
	} else {
       var opacDisplay = overlay.style.display = "block";
	   var boxDisplay = specialBox2.style.display = "block";
	   return showDivs2(y);
	}
}
function toggleOverlay3(y){
	overlay = document.getElementById('overlay');
	specialBox3 = document.getElementById('specialBox3');
	overlay.style.opacity = .7;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox2.style.display = "none";
	} else {
       var opacDisplay = overlay.style.display = "block";
	   var boxDisplay = specialBox2.style.display = "block";
	   return showDivs3(y);
	}
}
function toggleOverlay4(y){
	overlay = document.getElementById('overlay');
	specialBox4 = document.getElementById('specialBox4');
	overlay.style.opacity = .7;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox2.style.display = "none";
	} else {
       var opacDisplay = overlay.style.display = "block";
	   var boxDisplay = specialBox2.style.display = "block";
	   return showDivs4(y);
	}
}
function toggleOverlay5(y){
	overlay = document.getElementById('overlay');
	specialBox5 = document.getElementById('specialBox5');
	overlay.style.opacity = .7;
	if(overlay.style.display == "block"){
		overlay.style.display = "none";
		specialBox2.style.display = "none";
	} else {
       var opacDisplay = overlay.style.display = "block";
	   var boxDisplay = specialBox2.style.display = "block";
	   return showDivs5(y);
	}
}
var slideIndex;
var slideIndex1;

function plusDivs(n) 
{
  showDivs(slideIndex += n);
  showDivs(slideIndex1 += n);
}

function plusDivs2(n)
{
	showDivs2(slideIndex += n);
	showDivs2(slideIndex1 += n);
}

function plusDivs3(n)
{
	showDivs3(slideIndex += n);
	showDivs3(slideIndex1 += n);
}

function plusDivs4(n)
{
	showDivs4(slideIndex += n);
	showDivs4(slideIndex1 += n);
}

function plusDivs5(n)
{
	showDivs5(slideIndex += n);
	showDivs5(slideIndex1 += n);
}

var a = document.getElementsByClassName("stJean");
var a1 = document.getElementsByClassName("stJeanDescptn");
var b = document.getElementsByClassName("masonicLodge");
var b1 = document.getElementsByClassName("masonicDescptn");
var c = document.getElementsByClassName("stanleyCenter");
var c1 = document.getElementsByClassName("stanleyDescptn");
var d = document.getElementsByClassName("francis");
var d1 = document.getElementsByClassName("francisDescptn");
var e = document.getElementsByClassName("nypl");
var e1 = document.getElementsByClassName("nyplDescptn");
var i;

function showDivs(n) 
{
	slideIndex = n;
	slideIndex1 = n;
    
  if (slideIndex > a.length) 
  	{slideIndex = 1;}    
  if (slideIndex < 1) 
  	{slideIndex = a.length;}
  if (slideIndex1 > a1.length)
  	{slideIndex1 = 1;}
  if (slideIndex1 < 1)
  	{slideIndex1 = a1.length}
  for (i = 0; i < a.length; i++) 
  {
     a[i].style.display = "none";  
  } 
  a[slideIndex - 1].style.display = "block";

   for (i=0; i < a1.length; i++)
   {
  	 a1[i].style.display = "none";
   }
   a1[slideIndex1 - 1].style.display = "block";
};

function showDivs2(n) 
{
	slideIndex = n;
	slideIndex1 = n; 
    
  if (slideIndex > b.length) 
  	{slideIndex = 1;}    
  if (slideIndex < 1) 
  	{slideIndex = b.length;}
  if (slideIndex1 > b1.length)
  	{slideIndex1 = 1;}
  if (slideIndex1 < 1)
  	{slideIndex1 = b1.length;}
  for (i = 0; i < b.length; i++) 
  {
     b[i].style.display = "none";  
  }
  b[slideIndex - 1].style.display = "block";
  
  for (i = 0; i < b1.length; i++)
  {
  	b1[i].style.display = "none";
  }
  b1[slideIndex1 - 1].style.display = "block";
};

function showDivs3(n) 
{
	slideIndex = n;
	slideIndex1 = n;
    
  if (slideIndex > c.length) 
  	{slideIndex = 1;}    
  if (slideIndex < 1) 
  	{slideIndex = c.length;}
  if (slideIndex1 > c1.length)
  	{slideIndex1 = 1;}
  if (slideIndex1 < 1)
  	{slideIndex1 = c1.length;}
  for (i = 0; i < c.length; i++) 
  {
     c[i].style.display = "none";  
  }
  c[slideIndex - 1].style.display = "block";

  for (i = 0; i < c1.length; i++)
  {
  	c1[i].style.display = "none";
  }
  c1[slideIndex1 - 1].style.display = "block";
};

function showDivs4(n) 
{
	slideIndex = n;
	slideIndex1 = n;
    
  if (slideIndex > d.length) 
  	{slideIndex = 1;}    
  if (slideIndex < 1) 
  	{slideIndex = d.length;}
  if (slideIndex1 > d2.length)
  	{slideIndex1 = 1;}
  if (slideIndex1 < 1)
  	{slideIndex1 = d1.length;}
  for (i = 0; i < d.length; i++) 
  {
     d[i].style.display = "none";  
  }
  d[slideIndex-1].style.display = "block";

  for (i = 0; i < d1.length; i++)
  {
  	d1[i].style.display = "none";
  }
  d1[slideIndex1-1].style.display = "block";
}

function showDivs5(n) 
{
	slideIndex = n;
	slideIndex1 = n;
    
  if (slideIndex > e.length) 
  	{slideIndex = 1;}    
  if (slideIndex < 1) 
  	{slideIndex = e.length;}
  if (slideIndex1 > e1.length)
  	{slideIndex = 1;}
  if (slideIndex1 < 1)
  	{slideIndex1 = e1.length;}
  for (i = 0; i < e.length; i++) 
  {
     e[i].style.display = "none";  
  }
  e[slideIndex-1].style.display = "block";

  for (i = 0; i < e1.length; i++)
  {
  	e1[i].style.display = "none";
  }
  e1[slideIndex1-1].style.display = "block";
}