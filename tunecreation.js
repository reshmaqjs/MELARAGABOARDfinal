// array of 72 ragas
const melaRagaSet=["KANAKANGI","RATNANGI","GANAMOORTI","VANASPATI","MANAVATI","TANAROOPI",
"SENAVATI","HANUMATODI","DHENUKA","NATAKAPRIYA","KOKILAPRIYA","ROOPAVATI","GAYAKAPRIYA",
"VAKULABHARANAM","MAYAMALAVAGOWLA","CHAKRAVAKAM","SOORYAKANTAM","HATAKAMBARI","JHANKARADHWANI",
"NATABHAIRAVI","KEERAVANI","KHARAHARAPRIYA","GOURIMANOHARI","VARUNAPRIYA","MARARANJANI",
"CHARUKESI","SARASANGI","HARIKAMBHOJI","SHANKARABHARANAM","NAGANANDINI","YAGAPRIYA","RAGAVARDINI",
"GANGEYABHOOSHANI","VAGADHEESHWARI","SHOOLINI","CHALANATA","SALAGAM","JALARNAVAM","JHALAVARALI",
"NAVANEETAM","PAVANI","RAGHUPRIYA","GAVAMBHODI","BHAVAPRIYA","SHUBHAPANTUVARALI","SHADVIDAMARGINI",
"SUVARNANGI","DIVYAMANI","DHAVALAMBARI","NAMANARAYANI","KAMAVARDINI","RAMAPRIYA","GAMANASHRAMA",
"VISHWAMBARI","SHAMALANGI","SHANMUKHAPRIYA","SIMHENDRAMADHYAMAM","HEMAVATI","DHARMAVATI",
"NEETIMATI","KANTAMANI","RISHABHAPRIYA","LATANGI","VACHASPATI","MECHAKALYANI","CHITRAMBARI",
"SUCHARITRA","JYOTISWAROOPINI","DHATUVARDANI","NASIKABHOOSHANI","KOSALAM","RASIKAPRIYA"];
//array of chakras
const chakraset=["INDU","NETRA","AGNI","VEDA","BANA","RITU","RISHI","VASU","BRAHMA","DISI","RUDHRA","ADITYA"];
//ARRAY of all notes in carnatic (12 notes)
//piano notes
 const pianoNotes={S:"./piano/C4.mp3",R1:"./piano/Db4.mp3",R2:"./piano/D4.mp3",R3:"./piano/Eb4.mp3",
 G1:"./piano/D4.mp3",G2:"./piano/Eb4.mp3",G3:"./piano/E4.mp3",M1:"./piano/F4.mp3",
 M2:"./piano/Gb4.mp3",P:"./piano/G4.mp3",D1:"./piano/Ab4.mp3",D2:"./piano/A4.mp3",
 D3:"./piano/Bb4.mp3",N1:"./piano/A4.mp3",N2:"./piano/Bb4.mp3",N3:"./piano/B4.mp3",S2:"./piano/C5.mp3"};
 //guitar notes
 const guitarNotes={S:"./guitar/C4.mp3",R1:"./guitar/Cs4.mp3",R2:"./guitar/D4.mp3",R3:"./guitar/Ds4.mp3",
 G1:"./guitar/D4.mp3",G2:"./guitar/Ds4.mp3",G3:"./guitar/E4.mp3",M1:"./guitar/F4.mp3",
 M2:"./guitar/Fs4.mp3",P:"./guitar/G4.mp3",D1:"./guitar/Gs4.mp3",D2:"./guitar/A4.mp3",
 D3:"./guitar/Gs4.mp3",N1:"./guitar/A4.mp3",N2:"./guitar/As4.mp3",N3:"./guitar/B4.mp3",S2:"./guitar/C5.mp3"};
 
 //set of notes represented as swaras for a raga. its values vary based on raga
 let swaras={s:"S",r:"",g:"",m:"",p:"P",d:"",n:""};
//time length
var tlen=400;
//sequence
var sequence="";
var instr="piano";
const audio=new Audio();

//set the items in selection with id ragas
var x=document.getElementById("ragas");
for(i=0;i<72;i++){
  let op=new Option(i,melaRagaSet[i]);
   op.value=i;
   let idn=i+1;
  op.text=idn+". "+melaRagaSet[i];
 x.add(op,undefined);
 }  

  //when raga name selected ,then raga is diplay and call key board making function
  function takeraganum(){
       var x= document.getElementById("ragas").value;
        
          let i=parseInt(x)+1;
         
          document.getElementById("showRagaName").innerHTML=melaRagaSet[x]+"  <button id='startbtn' onclick='makeBoard("+(i)+")'>Start</button>";
   
      }

       //playpiano sound 
function playPianoSound(note){
  sequenz=document.getElementById("sequenz");
  sequence=sequence+" "+note;
  sequenz.innerHTML="<br>"+sequence+"<br><br>";
  if(note=="S")
{ 
audio.src=pianoNotes.S;

audio.play();}
else if(note=="R1")
{
audio.src=pianoNotes.R1;
audio.play();}
else if(note=="R2")
{
audio.src=pianoNotes.R2;
audio.play();}
else if(note=="R3")
{
audio.src=pianoNotes.R3;
audio.play();}
else if(note=="G1")
{
audio.src=pianoNotes.G1;
audio.play();}
else if(note=="G2")
{
audio.src=pianoNotes.G2;
audio.play();}
else if(note=="G3")
{
audio.src=pianoNotes.G3;
audio.play();}
else if(note=="M1")
{
audio.src=pianoNotes.M1;
audio.play();}
else if(note=="M2")
{
audio.src=pianoNotes.M2;
audio.play();}
else if(note=="P")
{
audio.src=pianoNotes.P;
audio.play();}
else if(note=="D1")
{
audio.src=pianoNotes.D1;
audio.play();}
else if(note=="D2")
{
audio.src=pianoNotes.D2;
audio.play();}
else if(note=="D3")
{
audio.src=pianoNotes.D3;
audio.play();}
else if(note=="N1")
{
audio.src=pianoNotes.N1;
audio.play();}
else if(note=="N2")
{
audio.src=pianoNotes.N2;
audio.play();}
else if(note=="N3")
{
audio.src=pianoNotes.N3;
audio.play();}
else if(note=="S2")
{
audio.src=pianoNotes.S2;
audio.play();}
}


//play guitar sound
function playGuitarSound(note){
  sequenz=document.getElementById("sequenz");
  sequence=sequence+" "+note;
  sequenz.innerHTML="<br>"+sequence+"<br><br>";
  if(note=="S")
{
audio.src=guitarNotes.S;

audio.play();}
else if(note=="R1")
{
audio.src=guitarNotes.R1;
audio.play();}
else if(note=="R2")
{
audio.src=guitarNotes.R2;
audio.play();}
else if(note=="R3")
{
audio.src=guitarNotes.R3;
audio.play();}
else if(note=="G1")
{
audio.src=guitarNotes.G1;
audio.play();}
else if(note=="G2")
{
audio.src=guitarNotes.G2;
audio.play();}
else if(note=="G3")
{
audio.src=guitarNotes.G3;
audio.play();}
else if(note=="M1")
{
audio.src=guitarNotes.M1;
audio.play();}
else if(note=="M2")
{
audio.src=guitarNotes.M2;
audio.play();}
else if(note=="P")
{
audio.src=guitarNotes.P;
audio.play();}
else if(note=="D1")
{
audio.src=guitarNotes.D1;
audio.play();}
else if(note=="D2")
{
audio.src=guitarNotes.D2;
audio.play();}
else if(note=="D3")
{
audio.src=guitarNotes.D3;
audio.play();}
else if(note=="N1")
{
audio.src=guitarNotes.N1;
audio.play();}
else if(note=="N2")
{
audio.src=guitarNotes.N2;
audio.play();}
else if(note=="N3")
{
audio.src=guitarNotes.N3;
audio.play();}
else if(note=="S2")
{
audio.src=guitarNotes.S2;
audio.play();}
}

//play sound S 
function InstrumentplayS(){
  if(instr=='piano'){
    playPianoSound(swaras.s);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.s);
  }
}
//play  sound R 
function InstrumentplayR(){
  if(instr=='piano'){
    playPianoSound(swaras.r);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.r);
  }
  
}

//play  sound G
function InstrumentplayG(){
  if(instr=='piano'){
    playPianoSound(swaras.g);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.g);
  }
 
}
//play  sound M 
function InstrumentplayM(){
  if(instr=='piano'){
    playPianoSound(swaras.m);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.m);
  }
  
}
//play sound P 
function InstrumentplayP(){
  if(instr=='piano'){
    playPianoSound(swaras.p);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.p);
  }
  
}

//play sound D
function InstrumentplayD(){
  if(instr=='piano'){
    playPianoSound(swaras.d);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.d);
  }
 
}
//play sound N 
function InstrumentplayN(){
  if(instr=='piano'){
    playPianoSound(swaras.n);
  }
  if(instr=='guitar'){
    playGuitarSound(swaras.n);
  }
  
}

//play sound S2 
function InstrumentplayS2(){
  if(instr=='piano'){
    playPianoSound("S2");
  }
  if(instr=='guitar'){
    playGuitarSound("S2");
  }
  
}
//play dash 
function playDash(){
  sequenz=document.getElementById("sequenz");
  sequence=sequence+" -";
  sequenz.innerHTML="<br>"+sequence+"<br><br>";
  
}

//Assign Piano sound
function assignSoundToKeys(){
  sbtn=document.getElementById('sbutton');
  sbtn.addEventListener('click',InstrumentplayS);
  rbtn=document.getElementById('rbutton');
  rbtn.addEventListener('click',InstrumentplayR);
  gbtn=document.getElementById('gbutton');
  gbtn.addEventListener('click',InstrumentplayG);
  mbtn=document.getElementById('mbutton');
  mbtn.addEventListener('click',InstrumentplayM);
  pbtn=document.getElementById('pbutton');
  pbtn.addEventListener('click',InstrumentplayP);
  dbtn=document.getElementById('dbutton');
  dbtn.addEventListener('click',InstrumentplayD);
  nbtn=document.getElementById('nbutton');
  nbtn.addEventListener('click',InstrumentplayN);
  s2btn=document.getElementById('s2button');
  s2btn.addEventListener('click',InstrumentplayS2);
  dashbtn=document.getElementById('dashbutton');
  dashbtn.addEventListener('click',playDash);

}


//make keyboard keys
function makeKeys(){
  document.getElementById("keyset").innerHTML="<button id='sbutton' class='key'>"+swaras.s+"<br><br>1</button>"+
  "<button id='rbutton' class='key'>"+swaras.r+"<br><br>2</button>"+
  "<button id='gbutton' class='key'>"+swaras.g+"<br><br>3</button>"+
  "<button id='mbutton' class='key'>"+swaras.m+"<br><br>4</button>"+
  "<button id='pbutton' class='key'>"+swaras.p+"<br><br>5</button>"+
  "<button id='dbutton' class='key'>"+swaras.d+"<br><br>6</button>"+
  "<button id='nbutton' class='key'>"+swaras.n+"<br><br>7</button>"+
  "<button id='s2button' class='key'> S\'<br><br>8</button>"+
  "<button id='dashbutton' class='key'> - <br><br>9</button>";
}

//function for play a single note ns  in timelength ts
function ReplaySingleNote(ns,ts){  
  setTimeout(function(){
     if(ns!=0){
     audio.src=ns;
     audio.play()};},ts*(300000/tlen));

}

//function for replaying a sequence of notes from sequence string
function ReplayNotes(){
  tlen=document.getElementById('slider').value;
  const playnotesarray= sequence.split(" "); 
  if(instr=='piano'){
  for(i=0;i<playnotesarray.length;i++){
    switch(playnotesarray[i]){
   case "S":
    ReplaySingleNote(pianoNotes.S,i); 
      break;
   case "R1":
    ReplaySingleNote(pianoNotes.R1,i); 
      break;
    case "R2":
      ReplaySingleNote(pianoNotes.R2,i);
        break;
    case "R3":
      ReplaySingleNote(pianoNotes.R3,i); 
          break;
    case "G1":
      ReplaySingleNote(pianoNotes.G1,i); 
          break;
    case "G2":
      ReplaySingleNote(pianoNotes.G2,i);
            break;
    case "G3":
        ReplaySingleNote(pianoNotes.G3,i);
        break;
    case "M1":
       ReplaySingleNote(pianoNotes.M1,i); 
       break;
    case "M2":
        ReplaySingleNote(pianoNotes.M2,i);
        break;
    case "P":
          ReplaySingleNote(pianoNotes.P,i);
          break;  
    case "D1":
          ReplaySingleNote(pianoNotes.D1,i); 
            break;
    case "D2":
            ReplaySingleNote(pianoNotes.D2,i);
              break;
    case "D3":
            ReplaySingleNote(pianoNotes.D3,i); 
                break;
    case "N1":
        ReplaySingleNote(pianoNotes.N1,i); 
        break;
    case "N2":
        ReplaySingleNote(pianoNotes.N2,i);
        break;
    case "N3":
        ReplaySingleNote(pianoNotes.N3,i); 
        break;
    case "S2":
      ReplaySingleNote(pianoNotes.S2,i);
        break;
    case "-":
          ReplaySingleNote(0,i);
            break;
    default:
          break;
      }
    }
  }

  else if(instr=='guitar'){
    for(i=0;i<playnotesarray.length;i++){
      switch(playnotesarray[i]){
     case "S":
      ReplaySingleNote(guitarNotes.S,i); 
        break;
     case "R1":
      ReplaySingleNote(guitarNotes.R1,i); 
        break;
      case "R2":
        ReplaySingleNote(guitarNotes.R2,i);
          break;
      case "R3":
        ReplaySingleNote(guitarNotes.R3,i); 
            break;
      case "G1":
        ReplaySingleNote(guitarNotes.G1,i); 
            break;
      case "G2":
        ReplaySingleNote(guitarNotes.G2,i);
              break;
      case "G3":
          ReplaySingleNote(guitarNotes.G3,i);
          break;
      case "M1":
         ReplaySingleNote(guitarNotes.M1,i); 
         break;
      case "M2":
          ReplaySingleNote(guitarNotes.M2,i);
          break;
      case "P":
            ReplaySingleNote(guitarNotes.P,i);
            break;  
      case "D1":
            ReplaySingleNote(guitarNotes.D1,i); 
              break;
      case "D2":
              ReplaySingleNote(guitarNotes.D2,i);
                break;
      case "D3":
              ReplaySingleNote(guitarNotes.D3,i); 
                  break;
      case "N1":
          ReplaySingleNote(guitarNotes.N1,i); 
          break;
      case "N2":
          ReplaySingleNote(guitarNotes.N2,i);
          break;
      case "N3":
          ReplaySingleNote(guitarNotes.N3,i); 
          break;
      case "S2":
        ReplaySingleNote(guitarNotes.S2,i);
          break;
      case "-":
            ReplaySingleNote(0,i);
              break;
      default:
            break;
        }
      }
    }
  

}

//function to set instrument
function setInstrument(){
  instr=document.getElementById("instrument").value;
 
}

//discard notes played
function DiscardTune(){
  sequence="";
  sequenz=document.getElementById("sequenz");
  sequenz.innerHTML="<br>"+sequence+"<br><br>";
}

//funcion to save the sequence into a text file
function SaveFile(){
  if(sequence==""){
    alert("Please build a note sequence")
  }
  else{
  let fname=prompt("Enter file name");
  
  if(fname==""){
    alert("Please enter a file name");
  }
  else if(fname!=null){
    const saveElement=document.createElement("a");
    //Blob is a data type that can store binary data
    //type is a MIME type
    const blob=new Blob([sequence],{type:"plain/text"}) ;
    const fileurl=URL.createObjectURL(blob);
    saveElement.setAttribute('href',fileurl);
    fnm=fname;
    fnm=fnm+".mrbtx";
    saveElement.setAttribute('download',fnm);
    saveElement.style.display='none';
    document.body.appendChild(saveElement);
    saveElement.click();
    document.removeChild(saveElement);
    
    //alert("saved");
  }
  }
}

//keyboard Mapping
function keyboardMaping(){
  document.body.addEventListener("keydown",(ev)=>{ 
      if(instr=='piano'){
        if(ev.key=='1'){   
          playPianoSound(swaras.s);          
      }
      else if(ev.key=='2'){
        playPianoSound(swaras.r);
      }
      else if(ev.key=='3'){
        playPianoSound(swaras.g);
      }
      else if(ev.key=='4'){
        playPianoSound(swaras.m);
      }
      else if(ev.key=='5'){
        playPianoSound(swaras.p);
      }
      else if(ev.key=='6'){
        playPianoSound(swaras.d);
      }
      else if(ev.key=='7'){
        playPianoSound(swaras.n);
      }
      else if(ev.key=='8'){
        playPianoSound("S2");
      }
      else if(ev.key=='9'){
        playDash();
      }
     
    }
    else if(instr=='guitar'){
      if(ev.key=='1'){   
        playGuitarSound(swaras.s);          
    }
    else if(ev.key=='2'){
      playGuitarSound(swaras.r);
    }
    else if(ev.key=='3'){
      playGuitarSound(swaras.g);
    }
    else if(ev.key=='4'){
      playGuitarSound(swaras.m);
    }
    else if(ev.key=='5'){
      playGuitarSound(swaras.p);
    }
    else if(ev.key=='6'){
      playGuitarSound(swaras.d);
    }
    else if(ev.key=='7'){
      playGuitarSound(swaras.n);
    }
    else if(ev.key=='8'){
      playGuitarSound("S2");
    }
    else if(ev.key=='9'){
      playDash();
    }
   
  }

  });
 
}
// show swarasthana and call key board display function
function makeBoard(idnum){
        //if raga number out of range
        if(idnum>'72' || idnum<'1'){
          alert("Enter number between 1-72");
          SelectionOfRaga();
        }
       document.getElementById("div1").innerHTML="";
       //window contain specific details of raga
       var specificWindow= document.getElementById("div2");
      //c used to detect chakra;
      var c;
      //select s
      var swr="Swarasthanas : Shadjam";
      //select r g
      if(idnum%36>=31 || idnum%36==0 ){
      swaras.r="R3";
      swaras.g="G3";
      swr=swr+", Shatshruti Rishabham, Anthara Gandharam";
      c=6;
      }
      else if(idnum%36<=18){
        swaras.r="R1";
        swr=swr+", Suddha Rishabham";
        if(idnum%36<=6){
          swaras.g="G1";
          swr=swr+", Suddha Gandharam";
          c=1;
        }
        else if(idnum%36<=12){
          swaras.g="G2";
          swr=swr+", Sadharana Gandharam";
          c=2;
        }
        else{
          swaras.g="G3";
          swr=swr+", Anthara Gandharam";
          c=3;
        }
      }
      else{
      swaras.r="R2";
      swr=swr+", Chatushruti Rishabham"
      if(idnum%36<=24){
        swaras.g="G2";
        swr=swr+", Sadharana Gandharam";
        c=4;
      }
      else{
         swaras.g="G3";
         swr=swr+", Anthara Gandharam";
         c=5;
      }
      
      }
      //select ma
      if(idnum<=36){
        swaras.m="M1";
        swr=swr+", Suddha Madhyamam";
      }
      else{
        swaras.m="M2";
        swr=swr+", Predi Madhyamam";
        c=c+6;
      }
      //select p
      swr=swr+", Panchamam";
      //select d n
      if(idnum%6==0){
        swaras.d="D3";
        swaras.n="N3";
        swr=swr+", Shatshruti Dhaivatam, Kakali Nishadham";
      }
      else if(idnum%6<=3){
        swaras.d="D1";
        swr=swr+", Suddha Dhaivatam";
        if(idnum%6==1){
          swaras.n="N1";
          swr=swr+", Suddha Nishadham";
        }
        else if(idnum%6==2){
          swaras.n="N2";
          swr=swr+", Kaisika Nishadham";
        }
        else{
          swaras.n="N3";
          swr=swr+", Kakali Nishadham";
        }
      }
      else{
        swaras.d="D2";
        swr=swr+", Chatushruti Dhaivatam";
        if(idnum%6==4){
          swaras.n="N2";
          swr=swr+", Kaisika Nishadham";
        }
        else{
          swaras.n="N3";
          swr=swr+", Kakali Nishadham";
        }
      }
      
      var chakra=chakraset[c-1];
      var rag=melaRagaSet[idnum-1];
      
      //display chakra
      specificWindow.innerHTML="<p id='ragaspecify'><b>Raga :"+rag+"<BR>"+idnum+"<SUP>th</SUP> Melakarta raga<BR>"+"Chakra : "+chakra+" <br>"+swr+"</b></p><hr>";
      
      var bwindow=document.getElementById("boardwindow");
      //bwindow.style.backgroundColor="green";
      //Select Instrument
      bwindow.innerHTML="<div id='textseting'>Set Instrument <select id='instrument'><option value='piano'>piano</option><option value='guitar'>guitar</option></select></div><br><br><br>";
     //assign selected instrument into a variable
    var  selectIns=document.getElementById('instrument');
    selectIns.addEventListener("change",setInstrument);
    //advaced options like replay save and discard
    adoptions=document.getElementById("advacedOptions");
    adoptions.innerHTML="<table><tr><td><button id='replay'>Replay</button></td><td><button id='save'>Save</button></td><td><button id='discard'>Discard Tune</button></td></tr></table>"
    adoptions.innerHTML=adoptions.innerHTML+"<div id='textseting'><br>Replay speed <input type='range' min='200' max='1500' value='400' class='slider' id='slider'></div>";
    tlen=document.getElementById('slider').value;
    //Replay
    replaying=document.getElementById('replay');
    replaying.addEventListener("click",ReplayNotes);
      //SAVE OR DISCARD
    discarding=document.getElementById('discard');
    discarding.addEventListener("click",DiscardTune);
    saveTune=document.getElementById('save');
    saveTune.addEventListener("click",SaveFile);
    //MAKE KEYBOARD 
      makeKeys();
      //assign sound to keys by onclick
      assignSoundToKeys();
//map keyboard
      keyboardMaping();
     
    
}
         