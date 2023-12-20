
//piano notes sounds
const pianoNotes={S:"./piano/C4.mp3",R1:"./piano/Db4.mp3",R2:"./piano/D4.mp3",R3:"./piano/Eb4.mp3",
G1:"./piano/D4.mp3",G2:"./piano/Eb4.mp3",G3:"./piano/E4.mp3",M1:"./piano/F4.mp3",
M2:"./piano/Gb4.mp3",P:"./piano/G4.mp3",D1:"./piano/Ab4.mp3",D2:"./piano/A4.mp3",
D3:"./piano/Bb4.mp3",N1:"./piano/A4.mp3",N2:"./piano/Bb4.mp3",N3:"./piano/B4.mp3",S2:"./piano/C5.mp3"};
 //guitar notes
 const guitarNotes={S:"./guitar/C4.mp3",R1:"./guitar/Cs4.mp3",R2:"./guitar/D4.mp3",R3:"./guitar/Ds4.mp3",
 G1:"./guitar/D4.mp3",G2:"./guitar/Ds4.mp3",G3:"./guitar/E4.mp3",M1:"./guitar/F4.mp3",
 M2:"./guitar/Fs4.mp3",P:"./guitar/G4.mp3",D1:"./guitar/Gs4.mp3",D2:"./guitar/A4.mp3",
 D3:"./guitar/Gs4.mp3",N1:"./guitar/A4.mp3",N2:"./guitar/As4.mp3",N3:"./guitar/B4.mp3",S2:"./guitar/C5.mp3"};
 
const notesList=["S",'R1','R2','R3','G1','G2','G3','M1','M2','P','D1','D2','D3','N1','N2','N3','S2','-',"",' '];
var sequence="";
var instr="piano";
var tlen=400;
console.log("done");
const upload = document.getElementById("upload");
const audio=new Audio();
 upload.addEventListener('change', function() { 
              
            const fr=new FileReader(); 
            fr.onload=function(){ 
                // document.getElementById('output') 
                //         .textContent=fr.result;
                try {
                  console.log(fr.result);
                  sequence=fr.result; 
                }
                catch(err) {
                  alert("File cannot read");
                }

               
            } 
              
            fr.readAsText(this.files[0]); 
        }) ;

function playSingleNote(ns,ts){  
    setTimeout(function(){
       if(ns!=0){
       audio.src=ns;
       audio.play()};},ts*(300000/tlen));
  
  }
function playNotes(){
  
    const playnotesarray= sequence.split(" "); 
    if(instr=='piano'){
    for(i=0;i<playnotesarray.length;i++){
      switch(playnotesarray[i]){
     case "S":
      playSingleNote(pianoNotes.S,i); 
        break;
     case "R1":
      playSingleNote(pianoNotes.R1,i); 
        break;
      case "R2":
        playSingleNote(pianoNotes.R2,i);
          break;
      case "R3":
        playSingleNote(pianoNotes.R3,i); 
          break;
    case "G1":
      playSingleNote(pianoNotes.G1,i); 
          break;
    case "G2":
      playSingleNote(pianoNotes.G2,i);
            break;
    case "G3":
        playSingleNote(pianoNotes.G3,i);
        break;
    case "M1":
       playSingleNote(pianoNotes.M1,i); 
       break;
    case "M2":
        playSingleNote(pianoNotes.M2,i);
        break;
    case "P":
          playSingleNote(pianoNotes.P,i);
          break;  
    case "D1":
          playSingleNote(pianoNotes.D1,i); 
            break;
    case "D2":
            playSingleNote(pianoNotes.D2,i);
              break;
    case "D3":
            playSingleNote(pianoNotes.D3,i); 
                break;
    case "N1":
        playSingleNote(pianoNotes.N1,i); 
        break;
    case "N2":
        playSingleNote(pianoNotes.N2,i);
        break;
    case "N3":
        playSingleNote(pianoNotes.N3,i); 
        break;
    case "S2":
        playSingleNote(pianoNotes.S2,i);
        break;
    case "-":
          playSingleNote(0,i);
            break;
    default:
          break;
      }
    }
  }
  if(instr=='guitar'){
    for(i=0;i<playnotesarray.length;i++){
      switch(playnotesarray[i]){
     case "S":
      playSingleNote(guitarNotes.S,i); 
        break;
     case "R1":
      playSingleNote(guitarNotes.R1,i); 
        break;
      case "R2":
        playSingleNote(guitarNotes.R2,i);
          break;
      case "R3":
        playSingleNote(guitarNotes.R3,i); 
          break;
    case "G1":
      playSingleNote(guitarNotes.G1,i); 
          break;
    case "G2":
      playSingleNote(guitarNotes.G2,i);
            break;
    case "G3":
        playSingleNote(guitarNotes.G3,i);
        break;
    case "M1":
       playSingleNote(guitarNotes.M1,i); 
       break;
    case "M2":
        playSingleNote(guitarNotes.M2,i);
        break;
    case "P":
          playSingleNote(guitarNotes.P,i);
          break;  
    case "D1":
          playSingleNote(guitarNotes.D1,i); 
            break;
    case "D2":
            playSingleNote(guitarNotes.D2,i);
              break;
    case "D3":
            playSingleNote(guitarNotes.D3,i); 
                break;
    case "N1":
        playSingleNote(guitarNotes.N1,i); 
        break;
    case "N2":
        playSingleNote(guitarNotes.N2,i);
        break;
    case "N3":
        playSingleNote(guitarNotes.N3,i); 
        break;
    case "S2":
        playSingleNote(guitarNotes.S2,i);
        break;
    case "-":
          playSingleNote(0,i);
            break;
    default:
          break;
      }
    }
  }

}
//set instrument sound
function setInstrument(){
  instr=document.getElementById("setInstrument").value;
}

function tuneplayer(){
    //read file into sequence
    tlen=document.getElementById('slider').value;
    console.log(sequence);
     var seqList= sequence.split(" "); 
    var flag=0;
    var i;
    for(i=0;i<seqList.length;i++){
      if(!notesList.includes(seqList[i]) ){
        flag=1;
        break;
      }
    }
    if(flag==1){
      console.log("File cannot read");  
          alert("File cannot read");    
          
    }
    else{
    playNotes();}
}


