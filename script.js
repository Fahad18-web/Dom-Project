// Body styling

document.body.style.backgroundColor = "#313131"
document.body.style.color  = "#fff"

// graping btns

const jsBtn = document.getElementById("js-btn")
const pyBtn = document.getElementById("py-btn")
const rctBtn = document.getElementById("rct-btn")
const ndBtn = document.getElementById("nd-btn")


// graping documunet display element

const showJs = document.getElementById("show-js")
const showPy = document.getElementById("show-py")
const showRct = document.getElementById("show-rct")
const showNd = document.getElementById("show-nd")


const Books = [
    {
        id: 'js',
        Bone: 'javascript',
        priceJ: 12000,
    },

    {   
        id: 'py',
        Btwo: 'Python',
        priceP: 13000,
    },

    {   
        id: 'Rct', 
        Bthree: 'React js',
        priceR: 25000,
    },

    {   
        id: 'Nd',
        Bfour: 'Node js',
        priceN: 32000,
    },
]

Books.forEach((bks)=>{
   jsBtn.addEventListener("click", ()=>{
       if(bks.id == "js"){
         showJs.innerHTML = `You have Purchased ${bks.Bone} and price is ${bks.priceJ}`
       }
   })

   pyBtn.addEventListener("click",()=>{
    if(bks.id == "py"){
        showPy.innerHTML = `You have Purchased ${bks.Btwo} and price is ${bks.priceP}`
    }
   })

   rctBtn.addEventListener("click",()=>{
     if(bks.id == "Rct"){
         showRct.innerHTML = `You have purchased ${bks.Bthree} and the price is ${bks.priceR}`
     }
   })

   ndBtn.addEventListener("click", ()=>{
     if(bks.id == "Nd"){
          showNd.innerHTML = `You have Purchased ${bks.Bfour} and price is ${bks.priceN}`
     }
   })
})