

let click = document.querySelector(".btn")
let inputvalue = document.querySelector(".userinput")

let cityname = document.querySelector(".name")
let desc = document.querySelector(".desc")
let temp = document.querySelector(".temp")
let gettitle=document.querySelector(".weathertitle")

let getgeo = document.querySelector(".geo")
let getspanny = document.querySelector(".spanny")
let getsun=document.querySelector(".suny")
let getrays =document.querySelector(".rays")
let getcloud = document.querySelector(".cloudxv")
let googlemaps = document.querySelector(".googlemaps")
let gmapcanvasa = document.querySelector(".gmapcanvas")
let prac= document.querySelector(".prac")
let time = document.querySelector(".time")

let displaytime = new Date().toDateString()

let getwrapper =document.querySelector(".wrapper")

click.addEventListener("click",function(){
    temp.classList.add("temp2")
    cityname.classList.add("name2")
time.classList.add("time2")
gmapcanvasa.classList.add("display")
gettitle.remove()
  
    gmapcanvasa.src=`https://maps.google.com/maps?q=${inputvalue.value}&ie=UTF8&iwloc=&output=embed`
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&APPID=357026b21824e734f442794b9e659825`)
    .then (response => response.json())
    //.then(response => console.log(response))
    .then (data => {

let cname = data["name"]
let weatherdesc = data.weather[0].main
let citytemp = data["main"]["temp"]
let country = data["sys"]["country"]
let gettime = document.querySelector(".time")

let celsius = Math.round(citytemp-273)

temp.innerHTML = `${Math.round(citytemp-273)} ºC | ${Math.round(celsius*9/5)+32}°F`

desc.innerHTML = weatherdesc
cityname.innerHTML = `${cname} (${country})`
gettime.innerHTML=new Date().toDateString()





    })
    .catch(errors => alert("City Not Found"))
})


    
// Clouds, Clear, Rain  (manilla)




/*
getwrapper.addEventListener("mouseover", function changered(e){



this.style.opacity="background: rgba(red, green, blue, alpha);"
 
})
*/

