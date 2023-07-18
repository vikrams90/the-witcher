const maparray = document.getElementsByClassName("map-b")
const anchorarray = document.getElementsByTagName("a")

let x =[{text:"m2",location:"Location : chill",type:"Type : city",country:"Country : lamia",region:" Region : red Garden",located:"Location : North of the White Garden"},{text:"m3",location:"Location : pill",type:"Type: city",country:"Country: zamia",region:"Region: yellow Garden",located:"Location: south of the yellow Garden"},{text:"m4",location:"Location : kill",type:"Type: village",country:"Country: talaamia",region:"Region: purple Garden",located:"Location: east of the purple Garden"},{text:"m5",location:"Location : bill",type:"Type: village",country:"Country: kalamia",region:"Region: blue Garden",located:"Location: west of the blue Garden"},{text:"m1",location:"Location : fill",type:"Type: Abandoned Village",country:"Country: Temeria",region:"Region: white Garden",located:"Location: North of the white Garden"}]
const change = function(e){
    const check = e.target.innerText
    const location = document.getElementById("location")
    const type = document.getElementById("type")
    const region = document.getElementById("region")
    const country = document.getElementById("country")
    const located = document.getElementById("located")
    for(let i=0;i<x.length;i++){
        if(check===x[i].text){
            location.innerText=x[i].location
            type.innerText=x[i].type
            region.innerText=x[i].region
            country.innerText=x[i].country
            located.innerText=x[i].located
        }
    }
    for(i=0;i<maparray.length;i++){
       let classs = maparray[i].className
       if(classs.includes("m-active"))
       {
        maparray[i].className="map-b"
       }
    }
    const el = e.target
    const clas = el.classList
    el.className = clas[0]+" m-active"
    
}

const link = function(e){
    e.preventDefault()
    for(i=0;i<anchorarray.length;i++){
        let classs = anchorarray[i].className
        if(classs.includes("active"))
        {
         anchorarray[i].className=" "
        }
     }
     const el = e.target
     el.className = "active"
     if(el.id==="character")
     {
         const background = document.querySelector(".background")
         background.style.backgroundImage="url(./images/character.png)"
        const element = document.querySelector(".Hero")
        element.style.display="none"
        const element2 = document.querySelector(".characters")
        element2.style.display="block"
        
        
     }
     if(el.id==="home")
     {
         const background = document.querySelector(".background")
         background.style.backgroundImage="url(./images/background.jpg)"
        const element = document.querySelector(".Hero")
        element.style.display="flex"
        const element2 = document.querySelector(".characters")
        element2.style.display="none"
        
        
     }
}


for(let i=0;i<maparray.length;i++){
    maparray[i].addEventListener("click",change)  
}

for(let i=0;i<anchorarray.length;i++){
    anchorarray[i].addEventListener("click",link)  
}