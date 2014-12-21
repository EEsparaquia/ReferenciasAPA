/* 
 * New Wave Javascript - APA Library
 * 
 * Author EEsparaquia
 * Date 12/21/2014
 *  
 * This is the APA References Library for all the JS 
 * Each file have its own function in order to make
 * the correct references.
 * 
 * APA References on: http://referenceapa.byethost13.com
 * 
 * Full Code on GitHub: 
 * https://github.com/EEsparaquia/ReferenciasAPA
 * 
 * Sometimes programming just hurts your brain :o
 */

function referenceBook(){
    var resp = " ";
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');

    if(myText1.value != "" && 
       myText2.value != "" && 
       myText3.value != "" && 
       myText4.value != "" && 
       myText5.value != "") {
            resp = "<h3>La ficha bibliográfica es : </h3><br />   " 
                + myText1.value 
                + ". (" 
                + myText2.value   
                + "). " 
                + myText3.value
                + '. ' 
                + myText4.value 
                + ": " 
                + myText5.value 
                + ".";	
    }    
    else{
            resp = "Te faltó llenar algun dato";
    }

    document.getElementById("resultado").innerHTML = resp;            
}

function apaCBook() {
    console.log("1234567890");
    var resp = "";
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');
    var myText6 = document.getElementById('txf6');
    var myText7 = document.getElementById('txf7');

    if(myText1.value !== "" && 
       myText2.value !== "" && 
       myText3.value !== "" && 
       myText4.value !== "" &&
       myText5.value !== "" &&
       myText6.value !== "" &&
       myText7.value !== "") {

            resp = "<h3>La ficha bibliográfica es : </h3><br /><h3>   " 
                + myText1.value 
                + ". (" 
                + myText2.value 
                + "). " 
                + myText3.value 
                + '. En ' 
                + myText4.value 
                + "(" 
                + myText5.value 
                + "). " 
                + myText6.value 
                + ": " 
                + myText7.value 
                + ".</h3> " ;	
            console.log(resp);
    }    
    else{
            resp = "Te faltó llenar algun dato";
    }

    document.getElementById("resultado").innerHTML = resp;

}     
function apaDB() {
    //console.log("1223455");
    var resp = "";
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');
    var myText6 = document.getElementById('txf6');
    var myText7 = document.getElementById('txf7');
    var myText8 = document.getElementById('txf8');

    if( myText1.value != "" && 
        myText2.value != "" && 
        myText3.value != "" && 
        myText4.value != "" && 
        myText5.value != "" &&
        myText6.value != "" &&
        myText7.value != "" &&
        myText8.value != "" ) {

            resp = "<h3>La ficha resultante es:</h3><br/><h3>  " 
                        + myText1.value 
                        + ". (" 
                        + myText2.value 
                        + "). " 
                        + myText3.value
                        + '. ' 
                        + myText4.value 
                        + ", " 
                        + myText5.value 
                        + ", " 
                        + myText6.value 
                        + ". " 
                        + myText7.value 
                        + ", De " 
                        + myText8.value 
                        + " Base de datos.</h3>";	

    }
    else{
           resp = "<h3>Te falt&oacute llenar algun dato </h3>";
           //console.log(resp);       
        }

    document.getElementById("resultado").innerHTML = resp;

}
function apaEnci() {
    //console.log("1223455");
    var resp = "";
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');
    var myText6 = document.getElementById('txf6');
    var myText7 = document.getElementById('txf7');
    var myText8 = document.getElementById('txf8');

    if( myText1.value != "" && 
        myText2.value != "" && 
        myText3.value != "" && 
        myText4.value != "" && 
        myText5.value != "" &&
        myText6.value != "" &&
        myText7.value != "" &&
        myText8.value != "" ) {

        resp = "La ficha bibliográfica es : <br />   " 
            + myText1.value 
            + ". " 
            + myText2.value 
            + ". " 
            + myText3.value 
            + '. En ' 
            + myText4.value 
            + " (" 
            + myText5.value 
            + ", " 
            + myText6.value 
            + ") " 
            + myText7.value 
            + ": " 
            + myText8.value 
            + ". ";
    }

    else{
           resp = "<h3>Te falt&oacute llenar algun dato </h3>";
           //console.log(resp);       
        }

    document.getElementById("resultado").innerHTML = resp;

}
function apaMaga() {
    var resp = "" ;
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');
    var myText6 = document.getElementById('txf6');

    if(myText1.value != "" && 
            myText2.value != "" && 
            myText3.value != "" && 
            myText4.value != "" && 
            myText5.value != "" && 
            myText6.value != ""){

            resp = "<h3>La ficha bibliográfica es : </h3><br />   " 
                    + myText1.value 
                    +". (" 
                    + myText2.value   
                    +"). " 
                    + myText3.value
                    + '. ' 
                    + myText4.value 
                    +", " 
                    + myText5.value 
                    +", " 
                    + myText6.value 
                    +". ";		 

    }
    else{
        resp = "Te faltó llenar algun dato." ;
    }

            document.getElementById("resultado").innerHTML = resp;

}

function apaNews() {
    //console.log("1223455");
    var resp = "";
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');

    if( myText1.value != "" && 
        myText2.value != "" && 
        myText3.value != "" && 
        myText4.value != "" && 
        myText5.value != "") {

        resp = "La ficha bibliográfica es : <br />   " 
            + myText1.value 
            + ". (" 
            + myText2.value 
            + "). " 
            + myText3.value 
            + '. ' 
            + myText4.value 
            + ", " 
            + myText5.value 
            + ".";	
    }
    else{
           resp = "<h3>Te falt&oacute llenar algun dato </h3>";
           //console.log(resp);       
        }
    document.getElementById("resultado").innerHTML = resp;

}
function notEmpty() {
    //console.log("1223455");
    var resp = "";
    var myText1 = document.getElementById('txf1');
    var myText2 = document.getElementById('txf2');
    var myText3 = document.getElementById('txf3');
    var myText4 = document.getElementById('txf4');
    var myText5 = document.getElementById('txf5');
    var myText6 = document.getElementById('txf6');

    if( myText1.value != "" && 
        myText2.value != "" && 
        myText3.value != "" && 
        myText4.value != "" && 
        myText5.value != "" && 
        myText6.value != "" ) {

            resp = "<h3>La ficha resultante es:</h3><br/><h3>  " 
                + myText1.value 
                +". (" 
                +   myText2.value   
                +"). " 
                + myText3.value
                + '. ' 
                + myText4.value 
                +", de " 
                + myText5.value 
                +" Sitio web: " 
                + myText6.value
                +"</h3>";	
    }
    else{
           resp = "<h3>Te falt&oacute llenar algun dato </h3>";
           //console.log(resp);       
        }
    document.getElementById("resultado").innerHTML = resp;
}
