console.log("You're My Sunflower")
// const ranger=document.getElementById('range')
// const stuf2=document.getElementById('stuf3')
// ranger.addEventListener('input',()=>{
//     const value=ranger.value
//     stuf2.textContent=value
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
    else{
        currentSlideA--
    }
    newBaseArray.forEach((slide,index)=>{
        slide.style.transform=`translateY(${107*(index-currentSlideA)}%)`
    })
})
const slides=document.querySelectorAll(".slide")
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

const newsContainer1=document.getElementById("news-container-1")
const newsContainer2=document.getElementById("news-container-2")
const newsContainer3=document.getElementById("news-container-3")
const newsContainer4=document.getElementById("news-container-4")
const newsNextButton=document.getElementById("ind-503-ch1-btn-div-next")
const newsprevButton=document.getElementById("ind-503-ch1-btn-div-prev")
const superContainer=[newsContainer1,newsContainer2,newsContainer3,newsContainer4]
let maxSlideC=superContainer.length-1
let currentSlideC=0
superContainer.forEach((element,index)=>{
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
})
const box=document.querySelector("#news-cards-1-of-4")
const rect=box.getBoundingClientRect()
console.log(rect)
let year=new Date
console.log(year)
const emergencyBtn=document.getElementById("school-new-btns")
         emergencyBtn.addEventListener("click",()=>{
            if("geolocation"in navigator){
    navigator.geolocation.getCurrentPosition(function(position){
        const latitude=position.coords.latitude
        const longitude=position.coords.longitude
        console.log(latitude + " , " + longitude)
    })
}
})
