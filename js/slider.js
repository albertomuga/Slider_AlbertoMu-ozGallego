var slider_content = document.getElementById('box');

  	// EN EL ARRAY INCLUIMOS LAS 5 IMÁGENES

    var image = ['img/imagen1','img/imagen2','img/imagen3','img/imagen4','img/imagen5'];

    var i = image.length;


    // FLECHA SIGUIENTE

    function siguienteImage(){
    	if (i<image.length) {
    		i= i+1;
    	}else{
    		i = 1;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
    }


   // FLECHA ATRÁS

    function atrasImage(){

    	if (i<image.length+1 && i>1) {
    		i= i-1;
    	}else{
    		i = image.length;
    	}
    	  slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

    }

 //PERMITE QUE SE CAMBIE LA IMÁGEN AUTOMÁTICAMENTE 

  setInterval(nextImage , 3000);