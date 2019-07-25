

//slider homepage
slider();

var line_counter=0;
var line_num=["1","2","3","4","5","6","7","8","9","10"];




//EVENT LISTENER FOR CTA IN SERVIZI
document.body.addEventListener('click', function(e) {
  if (e.target.className == "tasto-fissa") {
    is_selected_fifth();
  }
})
//funzione per visualizzare foto successiva in slide metodo
function on_click_dx(){		
	
	//disattivare le foto
	document.getElementById(line_num[line_counter]).classList.remove("activate");
	document.getElementById(line_num[line_counter]).classList.add("deactivate");
	//disattivo i parag
	document.getElementById(line_num[line_counter]+"p").classList.remove("activate");
	document.getElementById(line_num[line_counter]+"p").classList.add("deactivate");
	//disattivo il tit
	document.getElementById(line_num[line_counter]+"t").classList.remove("activate");
	document.getElementById(line_num[line_counter]+"t").classList.add("deactivate");
	if(line_counter==9){
		line_counter=-1;
	}
	//attivare le foto
	document.getElementById(line_num[++line_counter]).classList.remove("deactivate");
	document.getElementById(line_num[line_counter]).classList.add("activate");
	//attivo i paraga
	document.getElementById(line_num[line_counter]+"p").classList.remove("deactivate");
	document.getElementById(line_num[line_counter]+"p").classList.add("activate");
	//attivo il tit
	document.getElementById(line_num[line_counter]+"t").classList.remove("deactivate");
	document.getElementById(line_num[line_counter]+"t").classList.add("activate");
	//--------------
	
	
	
	
}

//funzione per visualizzare foot precedente in slide metodo
function on_click_sx(){		
    //disattivare le foto
	document.getElementById(line_num[line_counter]).classList.remove("activate");
	document.getElementById(line_num[line_counter]).classList.add("deactivate");
	
	//disattivo i parag
	document.getElementById(line_num[line_counter]+"p").classList.remove("activate");
	document.getElementById(line_num[line_counter]+"p").classList.add("deactivate");
	
	//disattivo il tit
	document.getElementById(line_num[line_counter]+"t").classList.remove("activate");
	document.getElementById(line_num[line_counter]+"t").classList.add("deactivate");
	if(line_counter==0){
		line_counter=10;
	}
	//attivare le foto
	document.getElementById(line_num[--line_counter]).classList.remove("deactivate");
	document.getElementById(line_num[line_counter]).classList.add("activate");
	//attivo i paraga
	document.getElementById(line_num[line_counter]+"p").classList.remove("deactivate");
	document.getElementById(line_num[line_counter]+"p").classList.add("activate");
	//attivo il tit
	document.getElementById(line_num[line_counter]+"t").classList.remove("deactivate");
	document.getElementById(line_num[line_counter]+"t").classList.add("activate");
	//--------------
	
	
	
}


//------------------------------------------------------------------------------------------
//function generica per reset div menu
function resetta(div_name, height, margin, position, left, innerdiv_name, display){
	
	var local=document.getElementById(div_name);
	
	//controllo se main per poter inserire le classi per chiusura main
	if(div_name=="main"){
		local.classList.add("main-chiuso");
		local.classList.remove("main-aperto");
		local.style.cursor='pointer';
		var cta_1 = document.getElementById("cta-1");
	    var cta_2=document.getElementById("cta-2");
	    cta_1.style.display='none';
	    cta_2.style.display='none';
	
	}
	else{
		local.classList.add("cella-chiusa");
		local.classList.remove("cella-aperta");		
	}
	
	//controllo if per determinare quale div in input e far comparire scritta vert
	if(div_name=="sec"){
		var p=document.getElementById("pprofilo");
		p.style.display='block';
		p.style.position='static';
	}
	else if(div_name=="third"){
		var p=document.getElementById("pmetodo");
		p.style.display='block';
		p.style.position='static';
	}
    else if(div_name=="fourth"){
	    var p=document.getElementById("pservizi");
		p.style.display='block';
		p.style.position='static';
	}
	else if(div_name=="fifth"){
		var p=document.getElementById("pcontatti");
		p.style.display='block';
		p.style.position='static';
	}	
	
	local.style.height=height+"vh";
	local.style.marginLeft=margin+"vw";
	local.classList.remove("static");
	local.classList.add("fixed");			
	local.style.left=left+'vw';
	var local_1=document.getElementById(innerdiv_name);
	local_1.style.display=display;	
}
//------------------------------------------------------------------------------

//funzione per aggiungere  classe fixed (vedi CSS)
function fixed(div_name){
	var html=document.getElementById(div_name);
	html.classList.remove("static");
	html.classList.add("fixed");		 
}

//funzione per mettere static
function static(div){	
	var html = document.getElementById(div);
	html.classList.remove("fixed");	
	html.classList.add("static");
	console.log("no!");	
}

//funzione timer per permettere lo scrolling delle pagine
//il richiamo avviene nei div html stessi
function static_time(div_name){	
	if(div_name=="sec"){
		setTimeout("static('sec')",901);
	}
	else if(div_name=="third"){
		setTimeout("static('third')",901);
	}
	else if(div_name=="fourth"){
		setTimeout("static('fourth')",901);
	}
	else if(div_name=="fifth"){
		setTimeout("static('fifth')",901);
	}
}

//function HOMEPAGE-----------------------------------------------------
function is_selected_main(){
	
	
	//ampia il div main
	var div=document.getElementById("main");
	div.style.cursor='default';
	div.classList.remove("main-chiuso");
	div.classList.add("main-aperto");
	
	//fa scomparire logo piccolo
	var logo=document.getElementById("logo-piccolo");
	logo.style.display='none';
	//fa ricomparire cta
	var cta_1 = document.getElementById("cta-1");
	var cta_2 = document.getElementById("cta-2");
	cta_1.style.display='block';
	cta_2.style.display='block';
	
	//inner main
	div=document.getElementById("inner-main");
	div.style.display='inline';	
	//-----------------------------
	
	//riduce div-profilo
    resetta("sec",100,0,"fixed",88,"inner-sec","none");
	//div metodo
	resetta("third",100,0,"fixed",91,"inner-third","none");
	//div servizi
	resetta("fourth",100,0,"fixed",94,"inner-fourth","none");
	//div contatti
	resetta("fifth",100,0,"fixed",97,"inner-fifth","none");
	//------------------------
	
	//qui istruzioni da eseguire per mostrare content main
	
	
	//------------------------	
}


//function PROFILO-------------------------------------------------------
function is_selected_sec(){
	
	//ampia il div profilo
	var div=document.getElementById("sec");	
	div.classList.remove("cella-chiusa");
	div.style.marginLeft='5vw';	
	div.style.left='0vw';	
	div.classList.add("cella-aperta");
	
	//fa ricomparire il logo homepage
	var logo=document.getElementById("logo-piccolo");
	logo.style.display='inline';
	
	//titolo div sulla sx
	var p=document.getElementById("pprofilo");
	p.style.position='fixed';
	p.style.left='4vw';
	p.style.top='3.3vh';
	//-----------------------------
	//inner div profilo
	var innerdiv=document.getElementById("inner-sec");
	innerdiv.style.display='block';
	innerdiv.style.height='100vh';
	//-----------------------------
	
	//riduce div homepage
	resetta("main",100,0,"fixed",0,"inner-main","none");
	
	//div metodo
	resetta("third",100,0,"fixed",91,"inner-third","none");
	//div servizi
	resetta("fourth",100,0,"fixed",94,"inner-fourth","none");
	//div contatti
	resetta("fifth",100,0,"fixed",97,"inner-fifth","none");
	//------------------------
	
	//qui istruzioni da eseguire per mostrare content sec
	
	
	
	//------------------------
}


//function METODO ---------------------------------------------------------
function is_selected_third(){
	
	//ampia div metodo
	var div=document.getElementById("third");
	div.classList.remove("cella-chiusa");
	div.classList.add("cella-aperta");
	div.style.marginLeft='8vw';			
	div.style.left='0vw';
	
	
	//fa ricomparire il logo homepage
	var logo=document.getElementById("logo-piccolo");
	logo.style.display='inline';
	
	//titolo div sulla sx
	var p=document.getElementById("pmetodo");
	p.style.position='fixed';
	p.style.left='7vw';
	p.style.top='3.3vh';
	//-----------------------------
	
	//inner div profilo
	var innerdiv=document.getElementById("inner-third");
	innerdiv.style.display='block';
	innerdiv.style.height='150vh';
	//-----------------------------
	
	//riduce homepage
	resetta("main",100,0,"fixed",0,"inner-main","none");
	
	//div profilo	
	resetta("sec",100,0,"fixed",5,"inner-sec","none");
	
	//div servizi	
	resetta("fourth",100,0,"fixed",94,"inner-fourth","none");
	
	//div contatti
	resetta("fifth",100,0,"fixed",97,"inner-fifth","none");
	
	//------------------------
	
	//qui istruzioni da eseguire per mostrare content sec
	
	
	//------------------------	
}

//function SERVIZI ------------------------------------------------------------
function is_selected_fourth(){
	
	//ampia servizi
	var div=document.getElementById("fourth");
	div.classList.remove("cella-chiusa");
	div.classList.add("cella-aperta");
	div.style.marginLeft='11vw';	
	div.style.left='0vw';	
	
	//fa ricomparire il logo homepage
	var logo=document.getElementById("logo-piccolo");
	logo.style.display='inline';
	
	//titolo div sulla sx
	var p=document.getElementById("pservizi");
	p.style.position='fixed';
	p.style.left='10vw';
	p.style.top='3vh';
	//-----------------------------
	
    //inner div profilo
	var innerdiv=document.getElementById("inner-fourth");
	innerdiv.style.display='block';
	innerdiv.style.height='150vh';
	//-----------------------------
	
	//riduce homepage
	resetta("main",100,0,"fixed",0,"inner-main","none");
	//div profilo
	resetta("sec",100,0,"fixed",5,"inner-sec","none");
	//div metodo
	resetta("third",100,0,"fixed",8,"inner-third","none");
	//div contatti
	resetta("fifth",100,0,"fixed",97,"inner-fifth","none");
	//------------------------
	
	//qui istruzioni da eseguire per mostrare content fourth
	
	
	//------------------------	
}


//function CONTATI ----------------------------------------------------------
function is_selected_fifth(){
	
	//ampia il div contatti
	var div=document.getElementById("fifth");
	div.classList.remove("cella-chiusa");
	div.classList.add("cella-aperta");
	div.style.marginLeft='14vw';	
	div.style.left='0vw';

	
	//fa ricomparire il logo homepage
	var logo=document.getElementById("logo-piccolo");
	logo.style.display='inline';
	
	//titolo div sulla sx
	var p=document.getElementById("pcontatti");
	p.style.position='fixed';
	p.style.left='12vw';
	p.style.top='4vh';
	//-----------------------------
	
		//inner div profilo
	var innerdiv=document.getElementById("inner-fifth");
	innerdiv.style.display='block';
	innerdiv.style.height='150vh';
	//-----------------------------
	
	//riduce homepage
	resetta("main",100,0,"fixed",0,"inner-main","none");
	//div profilo
	resetta("sec",100,0,"fixed",5,"inner-sec","none");
	//div metodo
	resetta("third",100,0,"fixed",8,"inner-third","none");
	//div servizi
	resetta("fourth",100,0,"fixed",11,"inner-fourth","none");
	//------------------------
	
	//qui istruzioni da eseguire per mostrare content sec
	
	
	//------------------------	
}


//--------------FUNCTION PER SLIDER MAIN---------------------------
function slider(){
	setInterval("bkgrnd_5()",15000);
	setInterval("bkgrnd_2()",25000);
	setInterval("bkgrnd_3()",40000);
	setInterval("bkgrnd_4()",55000);
	setInterval("bkgrnd_1()",70000);	
}

function bkgrnd_1(){
	var	main=document.getElementById("main");
	main.style.backgroundImage="url('images/slider/LINEA 9.jpg')";
}
function bkgrnd_2(){
	var	main=document.getElementById("main");
	main.style.backgroundImage="url('images/slider/LINEA 1.jpg')";
}
function bkgrnd_3(){
	var	main=document.getElementById("main");
	main.style.backgroundImage="url('images/slider/LINEA 2.jpg')";
}
function bkgrnd_4(){
	var	main=document.getElementById("main");
	main.style.backgroundImage="url('images/slider/LINEA 5.jpg')";
}
function bkgrnd_5(){
	var	main=document.getElementById("main");
	main.style.backgroundImage="url('images/slider/LINEA 4.jpg')";
}





