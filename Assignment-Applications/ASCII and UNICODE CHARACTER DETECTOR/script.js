function detectCharacter(){
    const chracterInput=document.getElementById("characterInput");
    const result=document.getElementById("result");

    const character = chracterInput.value;
    if(isASCII(character)){
        result.innerText='The entered character is an ASCII Character';
    }else{
        result.innerText='The entered character is an unicode ASCII Character';

    }
}
function isASCII(chracter){
    return chracter.charCodeAt(0)<=127;
}