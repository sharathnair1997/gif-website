let APIKEY="WV6wZTMSMLtAJk4v22eGzFLgjWj57DGg";

const main = async() => {
try{

let response= await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`);

let data = await response.json();
// console.log(data.data)
append(data.data)
}

catch(error){
console.log(error)
}
}

main();


const append=async (data)=>{
data.forEach((e) => {
    let gif =document.getElementById("gif");
    let img =document.createElement("img")
    img.src=e.images.downsized.url;

    img.addEventListener("click",()=>{
        detail.gif(e.id)
    })
    gif.append(img);
});
}

const details_gif=(id)=>{
    localStorage.setItem("details",JSON.stringify(id));
    window.location.href="/gif_details.html"
}


const random= async()=>{
    let gif =document.getElementById("gif");
gif.innerHTML=null;
try{

    let response=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=&rating=g`);
    let data= await response.json();
    console.log(data);
    
    let img=document.createElement("img");
    img.src=data.data.images.downsized.url;
    img.addEventListener("click",()=>{

        details_gif(data.data.id);
    });
    gif.append(img)
}catch(error){
    console.log(error)
}

}

const categories =async() =>{
let gif =document.getElementById("gif")
gif.innerHTML=null;
let sorting = document.getElementById("sorting");
sorting.innerHTML=null;


try{
    let res = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}&tag=&rating=g`)
    let result =await res.json();




    let sorting_Z_A=document.createElement("button");
    sorting_Z_A.innerText="Z-A";
    sorting.append(sorting_Z_A);

    let sorting_A_Z=document.createElement("button");
    sorting_A_Z.innerText="A-Z";
    sorting.append(sorting_A_Z);

let dum;
sorting_A_Z.onclick=() =>{
sorting_cat(dum=false);
}
sorting_Z_A.onclick=() =>{
    sorting_cat(dum=true);
}


    console.log(result);

result.data.forEach((e => {
    let name =document.createElement("p");
    name.innerHTML=e.name;
    let image=document.createElement("img");
    image.src=e.gif.images.downsized.url;
    image.addEventListener("click",()=>{
        details_gif(e.gif.id);
    });
    gif.append(name,image)
}));

}catch(error){
console.log(error)
}
}
const sorting_cat=(dum)=>{
    let data=JSON.parse(localStorage.getItem("categories"));
if (dum==true){
data=data.reverse();
}

let gif=document.getElementById("gif");
gif.innerHTML=null;
result.data.forEach((e => {
    let name =document.createElement("p");
    name.innerHTML=e.name;
    let image=document.createElement("img");
    image.src=e.gif.images.downsized.url;
    image.addEventListener("click",()=>{
        details_gif(e.gif.id)
    });
    gif.append(name,image)
}));
}

// const gif =async()=>{

//     try{
//         let gif = document.getElementById("gif");
//                 gif.innerHTML=null;
//                 let query= document.getElementById("search").value;
//                 if(query==""){
//                     alert("please provide your input");

//     }
//     let res =await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`

//     );
//     let data=await res.json();
//     console.log(data.data);
//     data.data.forEach((e)=>{
// let name=document.createElement("p");
// name.innerHTML=e.title;
// let image=document.createElement("img");
// image.src=e.images.downsized.url;
// image.addEventListener("click",()=>{
//     details_gif(e.id);
// });
// gif.append(name,image)
//     })
    
//  } catch(error){
//     console.log("error")
//     }
// }

 
const translater = async() =>{
try{
    let gif = document.getElementById("gif");
            gif.innerHTML=null;
            let query= document.getElementById("search").value;
            if(query==""){
                alert("please provide your input");

}
let res =await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=${APIKEY}&s=${query}&offset=0&rating=g&lang=en`
);
let data=await res.json();
console.log(data.data);

let name=document.createElement("p");
name.innerHTML=data.data.title;
let image=document.createElement("img");
image.src=data.data.images.downsized.url;
image.addEventListener("click",()=>{
details_gif(data.data.id);
});
gif.append(name,image)
}catch(error){
console.log("error")

}
};
