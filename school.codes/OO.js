console.log("You're My Sunflower")

async function userinterfacePrograms(){

// const ranger=document.getElementById('topics-rating-bar')
// const stuf2=document.getElementById('rate-div')
// ranger.addEventListener('input',()=>{
//     const value=ranger.value
//     stuf2.textContent=value +"%"
//     console.log(value)
// })

const newsSection=document.getElementById("ind-503-ch1")
const studentBase=document.getElementById("ind-503-ch2")
const newsStudentup=document.getElementById("scroll-up-btns-up")
const newsStudentdown=document.getElementById("scroll-up-btns-down")
const newBaseArray=[newsSection,studentBase]
let maxSlideA=newBaseArray.length-1
let currentSlideA=0
newBaseArray.forEach((Array,index)=>{
    Array.style.transform= `translateY(${index*107}%)`
})
newsStudentup.addEventListener('click',()=>{
    if(currentSlideA===maxSlideA){
        currentSlideA=0
        newsStudentup.textContent="Scroll Down"
    }
    else if(currentSlideA<maxSlideA+1){
        currentSlideA++
        newsStudentup.textContent="Start Over"
    }
    else{
        currentSlideA++
    }
    newBaseArray.forEach((slide,index)=>{
        slide.style.transform=`translateY(${107*(index-currentSlideA)}%)`
    })
})
newsStudentdown.addEventListener('click',()=>{
    if(currentSlideA===0){
        currentSlideA=0
    }
    else if(currentSlideA===0+1){
        currentSlideA=0
        newsStudentup.textContent="Scroll Down"
    }
    else{
        currentSlideA--
    }
    newBaseArray.forEach((slide,index)=>{
        slide.style.transform=`translateY(${107*(index-currentSlideA)}%)`
    })
})


const slide1=document.getElementById("slide1")
const slide2=document.getElementById("slide2")
const slide3=document.getElementById("slide3")
const slides=[slide1,slide2]
let maxSlideB=slides.length-1
let currentSlideB=0
slides.forEach((slide,index)=>{
    slide.style.transform=`translateX(${index*100}%)`
})
const nextSlide=document.getElementById("btn-next")
const prevSlide=document.getElementById("btn-prev")
nextSlide.addEventListener('click',()=>{
    if(currentSlideB===maxSlideB){
        currentSlideB=0
    }
    else{
        currentSlideB++
    }
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${100*(index-currentSlideB)}%)`
    })
})
prevSlide.addEventListener('click',()=>{
    if(currentSlideB===0){
        currentSlideB=0
    }
    else{
        currentSlideB--
    }
    slides.forEach((slide,index)=>{
        slide.style.transform=`translateX(${100*(index-currentSlideB)}%)`
    })
})

const topics=document.querySelectorAll(".topics")
const pngTopics=document.querySelectorAll("#png-topics")
const newsContainer1=document.getElementById("news-container-1")
const newsContainer2=document.getElementById("news-container-2")
const newsContainer3=document.getElementById("news-container-3")
const newsContainer4=document.getElementById("news-container-4")
const newsNextButton=document.getElementById("ind-503-ch1-btn-div-next")
const newsprevButton=document.getElementById("ind-503-ch1-btn-div-prev")
const superContainer=[newsContainer1,newsContainer2,newsContainer3,newsContainer4]
let maxSlideC=superContainer.length-1
let currentSlideC=0
topics.forEach((element,index)=>{
    element.style.transform=`translateX(${index*113}%)`
})
superContainer.forEach((element,index)=>{
    element.style.transform=`translateX(${index*113}%)`
})
pngTopics.forEach((element,index)=>{
    element.style.transform=`translateX(${index*113}%)`
})
newsNextButton.addEventListener("click",()=>{
        if(currentSlideC===maxSlideC){
            currentSlideC=0
        }
        else{
            currentSlideC++
        }
        superContainer.forEach((slide,index)=>{
            slide.style.transform=`translateX(${113*(index-currentSlideC)}%)`
        })
        topics.forEach((slide,index)=>{
            slide.style.transform=`translateX(${113*(index-currentSlideC)}%)`
        })
        pngTopics.forEach((slide,index)=>{
            slide.style.transform=`translateX(${113*(index-currentSlideC)}%)`
        })
})
newsprevButton.addEventListener("click",()=>{
    if(currentSlideC===0){
        currentSlideC=0
    }
    else{
        currentSlideC--
    }
    superContainer.forEach((slide,index)=>{
        slide.style.transform=`translateX(${113*(index-currentSlideC)}%)`
    })
    topics.forEach((slide,index)=>{
        slide.style.transform=`translateX(${113*(index-currentSlideC)}%)`
    })
    pngTopics.forEach((slide,index)=>{
        slide.style.transform=`translateX(${113*(index-currentSlideC)}%)`
    })
})

const box=document.querySelector("#news-cards-1-of-4")
const rect=box.getBoundingClientRect()
console.log(rect)
const emergencyBtn=document.getElementById("overboard9")
         emergencyBtn.addEventListener("click",()=>{
            if("geolocation"in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        console.log(latitude + " , " + longitude)
    })
}
})
const emergencyBtn2=document.getElementById("overboard10")
         emergencyBtn2.addEventListener("click",()=>{
            if("geolocation"in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        console.log(latitude + " , " + longitude)
        // if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
        //     navigator.mediaDevices.getUserMedia({video
        //     :true}).then(function (stream){
        //         videoElement.innerHTML=stream
        //     }).catch(function(error){
        //         console.log("Error Accessing The camera:",error)
        //     })
        // }else{
        //     console.log("This Browser Doesn't Support Such Cool stuff. Try Updating or Deleting It!😂 ")
        // }
    })
}
})
}


async function timeAndWeather(){
    let date=new Date()
    let showtime=document.getElementById("school-new-btns")
    showtime.textContent=timefunction(date)
   function timefunction(date){
        let Hours=date.getHours()
        let Minutes=date.getMinutes()
        let Seconds=date.getSeconds()
        let amOrPm= Hours>=12? 'PM':'AM'
        let RefinedHours=Hours >12 ? (Hours-12) : Hours
        Hours=Formatzeros(Hours)
        Minutes=Formatzeros(Minutes)
        Seconds=Formatzeros(Seconds)
        return `${Hours} : ${Minutes} : ${Seconds} ${amOrPm}`
    }
    function Formatzeros(AllCalledArguments){
        AllCalledArguments=AllCalledArguments.toString()
        return AllCalledArguments.length <2 ? '0'+ AllCalledArguments : AllCalledArguments
    }
}


// my algorithm for months display. copyright samson
function monthFunction(){
let sept =function displaynone(){
    let monthDom=document.getElementById("sep")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let jan =function displaynone(){
    let monthDom=document.getElementById("jan")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let feb =function displaynone(){
    let monthDom=document.getElementById("feb")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let march =function displaynone(){
    let monthDom=document.getElementById("mar")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let apr =function displaynone(){
    let monthDom=document.getElementById("apr")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let may =function displaynone(){
    let monthDom=document.getElementById("may")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let jun =function displaynone(){
    let monthDom=document.getElementById("jun")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let july =function displaynone(){
    let monthDom=document.getElementById("jul")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let aug =function displaynone(){
    let monthDom=document.getElementById("aug")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let oct =function displaynone(){
    let monthDom=document.getElementById("oct")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let nov =function displaynone(){
    let monthDom=document.getElementById("nov")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
let dec =function displaynone(){
    let monthDom=document.getElementById("dec")
    monthDom.style.display=`block`
    monthDom.style.zIndex=`10000`
    console.log("function call successful!")
}
//experiment
let one =1
one =3
console.log(one)

let months=[jan,feb,march,apr,may,jun,july,aug,sept,oct,nov,dec]
months.forEach(function display(element,index){
    let datey=new Date()
    let monthNumber=datey.getMonth()
    if(monthNumber==index){
        console.log(months[index])
        element()
    }
})
}
let annoncements=document.getElementById("overboard1")
annoncements.addEventListener("click",()=>{
    window.open('OO.anounce.html','_blank')
})
let rareLibRes=document.getElementById("overboard2")
rareLibRes.addEventListener("click",()=>{
    // window.location.href="OO.libook.html"
    window.open("OO.libook.html","_blank")
})
let personalInfo=document.getElementById("overboard3")
personalInfo.addEventListener("click",()=>{
    // window.location.href="personalinfo.html"
    window.open("personalinfo.html","_blank")
})
let progress=document.getElementById("overboard4")
progress.addEventListener("click",()=>{
    window.open("OO.progress.html","_blank")
})
let comm=document.getElementById("overboard7")
comm.addEventListener("click",()=>{
    window.open("emails.html","_blank")
})
let survey=document.getElementById("overboard8")
survey.addEventListener("click",()=>{
    window.open("survey.html","_blank")
})
let Holidays=document.getElementById("overboard5")
Holidays.addEventListener("click",()=>{
        let datey=new Date()
        let monthNumber=datey.getMonth()
        if(monthNumber>=8 && monthNumber<=11){
            alert(`At this Time We Expect:
            OCT 10: Moi Day/Huduma Day/Utamaduni Day
            OCT 20: Mashujaa Day (National Day)
            NOV 19: International Men's Day
            DEC 12: Jamuhuri Day (National Day)
            DEC 25: Christmas Day (Jingle Bells All The Way!)
            DEC 26: Boxing Day/Utamaduni Day
            
            (Of Course We're talking About This Semester)`)
        }
        else if(monthNumber>=0 && monthNumber<=3){
            alert(`It's A Beautiful Year Isn't It?
            Well... Here Are Your Upcoming Holidays In the Semester:
            Jan 01: New Year's Day
            Feb 14: Valentine's Day
            Mar 29: Good Friday
            Mar 08: International Women's Day
            Apr 01: Easter Monday
            Apr 11: Idd Ul Fitr/Iddd Baraza (End of Ramadhan)`)
        }
        else if(monthNumber>=4 && monthNumber <=7){
            alert(`Hey! Let's Go straight to the point, Shall we?
            We Expect:
            MAY 01: Labours Day
            MAY 12: Mother's Day
            JUN 01: Madaraka Day (National Day)
            JUN 16: Father's Day
            JUN 17: Idd-Ul-Azha

            `)
        }
    
})
let audio=document.getElementById("backgmusic")
function play(){
    audio.play()
}
function pause(){
    audio.pause()
}
let playing=true
let schoolname=document.getElementById("schoolName")

schoolname.addEventListener("click",()=>{
    if(playing){
        play()
    }
    else{
        pause()
    }
    playing = !playing
})
let videoElement=document.getElementById("camera")
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video
    :true}).then(function (stream){
        videoElement.innerHTML=stream
    }).catch(function(error){
        console.log("Error Accessing The camera:",error)
    })
}else{
    console.log("This Browser Doesn't Support Such Cool stuff. Try Updating or Deleting It!😂 ")
}
userinterfacePrograms()
setInterval(timeAndWeather,1000)
monthFunction()
