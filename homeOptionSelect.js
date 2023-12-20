
//Access displaying frame
var display_Frame=document.getElementById("displaypartRight");
//function to change iframe content to createTune.html
function SetTuneCreation(){
    display_Frame.innerHTML="<iframe class='displayframe'  src='createTune.html'  > </iframe>";
    
}
//function to change iframe content to PlayTune.html
function SetPlayTune(){
    display_Frame.innerHTML="<iframe class='displayframe'  src='PlayTune.html'  > </iframe>";
   
}
//function to change iframe content to FileConversion.html
function SetFileConversion(){
    
    display_Frame.innerHTML="<iframe class='displayframe'  src='FileConversion.html'  > </iframe>";

}