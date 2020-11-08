// El veloz murciélago hindú comía feliz cardillo y kiwi La cigüeña tocaba el saxofón detrás del palenque de paja
var cesar = cesar || (function(){
    //tenemos que entender que para poder cifrar o descifrar
    //es necesario obtener 3 parametros
    //txt, desp, action
    var doStaff = function(txt, desp, action){
        //nota ya estamos mal, la nueva version de JS
        //ya no maneja var, ahora todo es let y const
        //besos y comercial wiiiii
        var replace = (function(){
            //necesito un alfabeto
            var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
        'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 
        'v', 'w', 'x', 'y', 'z'];

        var l = abc.length;
        //tenemos que crear una funcion que se encargue de poder realizar
        //el cambio de las posiciones de las letras para el
        //cifrado
        return function(c){
            var i = abc.indexOf(c.toLowerCase());
            //reemplazo de las posiciones o el movimiento
            //primero tenemos que saber si el texto esta vacio
            if(i != -1){
                //movimiento de las posiciones
                var pos = i;
                if(action){
                    //cifrar
                    pos += desp;
                    pos -= (pos>=1)?0:1;
                //    alert(pos);
                    if(pos>26){
                        pos=pos-27;
                    }
                    if(pos<0){
                        pos=0;
                    }
                //    alert(pos);
                }else{
                    //descifrando
                //    alert(pos);//2
                    pos -= desp;
                    if(pos<0){
                        pos=pos+27;
                    }
                    if(pos>26){
                        pos=26;
                    }
                //    alert(pos);//0
                    pos += (pos<0)?1:0;
                //    alert(pos);
                }
                return abc[pos];
            }
            return c;
        };

    })();

    //vamos a necesitar regresar el reemplazo de la cadena
    //pero primero hay que verificarlo
    var re = (/[abcdefghijklmnñopqrstuvwxyz]/ig);
    return String(txt).replace(re, function(macth){
        //se encarga de buscar las coincidencias entre la
        //expresion regular y el textarea
        return replace(macth);
    });
    
    };

    //necesito enviar si vamos a cifrar o descifrar
    return {
        //el caso para cuando cifras
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },
        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };

})();


//crear las funciones codificar y decodificar

function codificar(){
    document.getElementById("resultado").innerHTML = cesar.encode(validarEntrada(document.getElementById("cadena").value), validarDesplazamiento(document.getElementById("desplazamiento").value));
}

function decodificar(){
    document.getElementById("resultado").innerHTML = cesar.decode(validarEntrada(document.getElementById("cadena").value), validarDesplazamiento(document.getElementById("desplazamiento").value));
}



function validarEntrada (text){
//lert(text+"1");
var pattern = /[^a-záéíóúüñ \n]/i;
//alert(new RegExp(pattern).test(text));
if(text==null){
    text="Introduce algun valor en el mensaje.";
    alert("Introduce algun valor");
    document.getElementById("cadena").focus();
}
if(text==""){
    text="Introduce algun valor en el mensaje.";
    alert("Introduce algun valor");
    document.getElementById("cadena").focus();
}
    if (new RegExp(pattern).test(text)) {
    
        //alert(text+"4");
        alert("Introduce caracteres alfabeticos y no simbolos u otros caracteres no admitidos.");
        document.getElementById("cadena").focus();
        
        text="";
    } else {
        //alert(text+"2");
        text=text.replace("á", "a");
        text=text.replace("é", "e");
        text=text.replace("í", "i");
        text=text.replace("ó", "o");
        text=text.replace("ú", "u");
        text=text.replace("Á", "a");
        text=text.replace("É", "e");
        text=text.replace("Í", "i");
        text=text.replace("Ó", "o");
        text=text.replace("Ú", "u");
        text=text.replace("Ü", "u");
        text=text.replace("ü", "u");
        //alert(text+"3");
    } 
    //alert(text+"5");
    return text;
}

function validarDesplazamiento (number){
    //alert(number+"a");
    var pattern = /[^\d.\d]/;
    //alert(new RegExp(pattern).test(number));
    if(number.length>8){
        number="0";
        alert("Introduce valores menores a 8 caracteres.");
        document.getElementById("desplazamiento").focus();
    }
    if(number==null){
        number="0";
        alert("Introduce algun valoren el desplazamiento.");
        document.getElementById("desplazamiento").focus();
    }
    if(number==""){
        number="0";
        alert("Introduce algun valor en el desplazamiento.");
        document.getElementById("desplazamiento").focus();
    }
        if (new RegExp(pattern).test(number)) {
            //alert(number+"b");
            alert("Introduce un numero porfavor.");
            document.getElementById("desplazamiento").focus();
            number=3;
        } else {
            //alert(number+"c");
            number=parseInt((parseFloat(number)%26).toFixed());
        } 
        //alert(number+"d");
        return number;
    }






/*
                                                    ╓╣╢╗
                                                  ,╣▒▒▒▒╣
                                                 @▒▒▒▒▒▒▒╢ ▄▄,
                                              ▄▄█▒▒▒▒▒▄████████▄
                                            ╓▀▀█████▄████████████▄
                                         ,@╣▒▒▒▒▒▒▒▀███████   ▐██▌
                                      ,╦╣▒▒▒▒▒▒▒▒▒▒▒███████   ▄███▄
                                   ,╦╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒█████████████████▄▄
                                ,@▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐████████████████████▄
                               ╔▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██████████████████████▄
                             ,╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀██████▀▀▀▀▀``▀▀▀▀▀████
                            ╔▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓╜                      ▀█▌
                          ,╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                         ╓╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒@
                        ╔▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢
                       ╫▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒U
                      ╫▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╣
                     ╟▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                    ╓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓╖
                    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒@
                   ╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢
                  ]▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢
   ▓╢             ╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╣
   ╢╢            ]▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
   ╢╢            ╟▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
   ╢╢            ╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
   ╢╢            ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒L
   ▓╢L           ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒[
    ╢▓           ╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╡
    ╟╢@          ║▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢
     ▓╢╗         ]▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
      ▓╢@         ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
       ╙╢▓╖       ]▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
         ╩╢▓╖      ╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
           ╨╢▓╦     ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╢
             "▓╢▓╦, ]▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
                 ╙▓╢▓╢▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╖╓,
                     "╙╝╣▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒╣
*/
function no(){
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=FLCqWUQdIZJdKilEyB8MS9kA", "_blank"); 
}