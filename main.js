var sr= window.webkitSpeechRecognition
var recog= new sr()

function startmic(){
    recog.start()
}

    recog.onresult=function(event){
        console.log(event) 
        var content=event.results[0][0].transcript   
        document.getElementById("textbox1").innerHTML=content

        if(content=="take my selfie"){
            speaking()
        }
        
    }

    function speaking(){
        var synth=window.speechSynthesis

         data = "taking your selfie in five seconds"

        var utterthis = new SpeechSynthesisUtterance(data)
        synth.speak(utterthis)

        Webcam.attach(camera)

        setTimeout(function(){
         img_id="selfie1"   
         takesnap();
         data = "taking your selfie in 10 seconds"
         var utterthis = new SpeechSynthesisUtterance(data)
        synth.speak(utterthis)
        }, 5000)

        setTimeout(function(){
            img_id="selfie2"
            takesnap();
            data = "taking your selfie in 15 seconds"
         var utterthis = new SpeechSynthesisUtterance(data)
        synth.speak(utterthis)
            
            }, 10000)

        setTimeout(function(){
            img_id="selfie3"
            takesnap();
        
                }, 15000)
    }

    camera=document.getElementById("camera")
    Webcam.set({
        width:360,
        height:250,
        image_format:"png",
        png_quality:90
    })

    function takesnap(){
        Webcam.snap(function (Myselfie){
        if(img_id=="selfie1"){
        document.getElementById("result1").innerHTML="<img id='selfie1' src=' " + Myselfie + "'>" 
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML="<img id='selfie2' src=' " + Myselfie + "'>" 
            }
            if(img_id=="selfie3"){
                document.getElementById("result3").innerHTML="<img id='selfie3' src=' " + Myselfie + "'>" 
                } 
        })
    }

    
    




