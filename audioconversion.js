
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
 var flist=[];
 var sequence="";
var instr="piano";
var tlen=5;
var clicktime=0;
console.log("done");
const upload = document.getElementById("upload");
const audio=new Audio();
 upload.addEventListener('change', function() {               
            const fr=new FileReader(); 
            fr.onload=function(){ 
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
//select audio notes of sequence file and put into flist[]
        function setFList(){
          flist=[];
          const playnotesarray= sequence.split(" "); 
          if(instr=='piano'){
          for(i=0;i<playnotesarray.length;i++){
            switch(playnotesarray[i]){
           case "S":
            flist.push(pianoNotes.S) 
              break;
           case "R1":
            flist.push(pianoNotes.R1); 
              break;
            case "R2":
              flist.push(pianoNotes.R2);
                break;
            case "R3":
              flist.push(pianoNotes.R3); 
                break;
          case "G1":
            flist.push(pianoNotes.G1); 
                break;
          case "G2":
            flist.push(pianoNotes.G2);
                  break;
          case "G3":
            flist.push(pianoNotes.G3);
              break;
          case "M1":
            flist.push(pianoNotes.M1); 
             break;
          case "M2":
            flist.push(pianoNotes.M2);
              break;
          case "P":
            flist.push(pianoNotes.P);
                break;  
          case "D1":
            flist.push(pianoNotes.D1); 
                  break;
          case "D2":
            flist.push(pianoNotes.D2);
                    break;
          case "D3":
            flist.push(pianoNotes.D3); 
                      break;
          case "N1":
            flist.push(pianoNotes.N1); 
              break;
          case "N2":
            flist.push(pianoNotes.N2);
              break;
          case "N3":
            flist.push(pianoNotes.N3); 
              break;
          case "S2":
            flist.push(pianoNotes.S2);
              break;
          case "-":
            flist.push("./nullsound/nullSound.mp3");
            flist.push("./nullsound/nullSound.mp3");
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
            flist.push(guitarNotes.S); 
              break;
           case "R1":
            flist.push(guitarNotes.R1); 
              break;
            case "R2":
              flist.push(guitarNotes.R2);
                break;
            case "R3":
              flist.push(guitarNotes.R3); 
                break;
          case "G1":
            flist.push(guitarNotes.G1); 
                break;
          case "G2":
            flist.push(guitarNotes.G2);
                  break;
          case "G3":
            flist.push(guitarNotes.G3);
              break;
          case "M1":
            flist.push(guitarNotes.M1); 
             break;
          case "M2":
            flist.push(guitarNotes.M2);
              break;
          case "P":
            flist.push(guitarNotes.P);
                break;  
          case "D1":
            flist.push(guitarNotes.D1); 
                  break;
          case "D2":
            flist.push(guitarNotes.D2);
                    break;
          case "D3":
            flist.push(guitarNotes.D3); 
                      break;
          case "N1":
            flist.push(guitarNotes.N1); 
              break;
          case "N2":
            flist.push(guitarNotes.N2);
              break;
          case "N3":
            flist.push(guitarNotes.N3); 
              break;
          case "S2":
            flist.push(guitarNotes.S2);
              break;
          case "-":
            flist.push("./nullsound/nullSound.mp3");
            flist.push("./nullsound/nullSound.mp3");
                  break;
          default:
                break;
            }
          }
        }
      
      }

      function setInstrument(){
        instr=document.getElementById("setInstrument").value;
      }


function playSingleNote(ns,ts){  
    setTimeout(function(){
       if(ns!=0){
       audio.src=ns;
       audio.play()};
       },ts*(300000/tlen));
  
  }
  function audioconvertor(){
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
      setFList();
      testing();
  }
}
    
const downloadMergedAudio = (audioBuffer) => {

  let fname=prompt("Enter file name");
  if(fname==""){
    alert("Please enter a file name");
  }
  else if(sequence==""){
    alert("No file found to convert")
  }
  else if(fname!=null){

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioBlob = new Blob([audioBuffer], { type: 'audio/wav' }); // Change the type accordingly

  const url = URL.createObjectURL(audioBlob);
  const link = document.createElement('a');
  link.href = url;
  
  link.download = fname; // Change the file name and extension as needed
  link.click();

  URL.revokeObjectURL(url);
}
};



async function testing(){
  // const fileInputs = flist;
  if(sequence==""){
    alert("No file found to convert")
  }
  else{
  
  console.log(flist);
  audio.src=flist[0];
  console.log(audio);
 var  btlengthneeded=8030;
 if(instr=='guitar'){
  btlengthneeded=btlengthneeded*6;
 }
 else{
  btlengthneeded=8030;
 }
 btlength=btlengthneeded;
var merggedBuffer;
  try {
    const response = await fetch(flist[0]);
    arrayBuffer = await response.arrayBuffer();
    let halfLength = Math.floor(btlength / tlen);
    let firstHalf = arrayBuffer.slice(0, halfLength);
    //let secondHalf = arrayBuffer.slice(halfLength);

    console.log('ArrayBuffer of '+flist[0]+':', arrayBuffer);
    console.log('ArrayBuffer half  of'+flist[0]+':', firstHalf);
    merggedBuffer=firstHalf.slice(0,firstHalf.length);
    console.log("mergedBuffer1 ",merggedBuffer);
    
  } catch (error) {
    console.error('Error:', error);
  }
  for(i=1;i<flist.length;i++){
    if(flist[0]=='-'){
      btlength=9030;
    }
    else{
      btlength=btlengthneeded;
    }
    try {
      const response = await fetch(flist[i]);
      arrayBuffer = await response.arrayBuffer();
      let halfLength = Math.floor(btlength / tlen);
      let firstHalf = arrayBuffer.slice(0, halfLength);
      //let secondHalf = arrayBuffer.slice(halfLength);
     
      console.log('ArrayBuffer of '+flist[i]+':', arrayBuffer);
      console.log('ArrayBuffer half  of '+flist[i]+':', firstHalf);
      var merger=new Uint8Array(merggedBuffer.byteLength+firstHalf.byteLength);
      merger.set(new Uint8Array(merggedBuffer),0);
      merger.set(new Uint8Array(firstHalf),merggedBuffer.byteLength);

      merggedBuffer=merger.slice(0,merger.length);
      console.log('Merger',merggedBuffer);     
      
    } catch (error) {
      console.error('Error:', error);
    }   
  }
  //convert mergedBuffer to buffer
  var buf=merggedBuffer.buffer;
  console.log('ArrayBuffer of merged:', buf);
//create a button to play the converted audio withid playtest  //create a button to download converted audio with id downloadbtn

  document.getElementById("download").innerHTML="<br><button id='playtest'></button><br><br><button id='downloadbtn'>Download</button><br>";
  playaudio=document.getElementById('playtest');
  const urls = new Audio();
  playaudio.addEventListener("click",function(){
    if(clicktime%2==0){
      clicktime=clicktime+1;
      document.getElementById('playtest').style.backgroundImage="url('stopbtn.png')";
      document.getElementById('playtest').style.borderRadius="10px";
      document.getElementById('playtest').style.marginRight="30px";
      document.getElementById('playtest').style.borderWidth="3px";
      document.getElementById('playtest').style.borderColor="#320646";
      document.getElementById('playtest').style.backgroundSize="cover";
      document.getElementById('playtest').style.width="75px";
      document.getElementById('playtest').style.height="65px";
    const audioBlobs = new Blob([buf], { type: 'audio/wav' }); // Change the type accordingly
   
    urls.src = URL.createObjectURL(audioBlobs);
   urls.play();
  }
   else{
    clicktime=clicktime+1;
    urls.pause();
    
    document.getElementById('playtest').style.backgroundImage="url('playbtn.jpeg')";
    document.getElementById('playtest').style.borderRadius="10px";
    document.getElementById('playtest').style.marginRight="30px";
    document.getElementById('playtest').style.borderWidth="3px";
    document.getElementById('playtest').style.borderColor="#320646";
    document.getElementById('playtest').style.backgroundSize="cover";
    document.getElementById('playtest').style.width="65px";
    document.getElementById('playtest').style.height="65px";
    

   }
  });
  
 
  downloadfile=document.getElementById('downloadbtn');
  downloadfile.addEventListener("click",function(){ downloadMergedAudio(buf) });
}
}


