let icon = document.querySelector(".fa-cart-shopping")
let page1 = document.querySelector(".page1")
let checkout = document.querySelector(".checkout")
let pricebox = document.querySelector(".pricebox")
let empties = document.querySelector(".empty")
let superi = document.querySelector("sup")
let product = 1;
let  createbuttontrash;
let arr = []
icon.addEventListener("click",function(){
    if(page1.style.opacity==0){
        page1.style.opacity=1
    }
    else{
        page1.style.opacity=0
        
    }

})
checkout.addEventListener("click",function(){
  if(pricebox.style.display=="none"){
      pricebox.style.display="block"
  }
  else{
    pricebox.style.display="none"

  }
})
let mainn = document.querySelector(".maincart")

async function main(){
    let data = await fetch("https://fakestoreapi.com/products")
    let cnvrtjson = await data.json()
// console.log(cnvrtjson)
cnvrtjson.forEach(function(elem){
let createcard = document.createElement("div")
let createimag = document.createElement("img")
let imagine = document.createElement("div")
let createtitle = document.createElement("p")
let createprice = document.createElement("p")
createprice.setAttribute("class","cartprice")
let createpricetext = document.createTextNode(`$ price${elem.price}`)
let addbtn = document.createElement("button")
addbtn.setAttribute("class","btn")
let createtextbutton = document.createTextNode("Add to cart")
addbtn.appendChild(createtextbutton)
createprice.appendChild(createpricetext)
createtitle.setAttribute("class","carttitle")
let createtitletext = document.createTextNode(elem.title)
createtitle.appendChild(createtitletext)
createcard.setAttribute("class","cart")
imagine.setAttribute("class","cartimage")
createimag.setAttribute("src",elem.image)
createimag.setAttribute("class","imagine")
imagine.appendChild(createimag)

mainn.appendChild(createcard)
createcard.appendChild(imagine)
createcard.appendChild(createtitle)
createcard.appendChild(createprice)
createcard.appendChild(addbtn)
console.log(imagine)
function addtocart(images,prices){
    let pricesarr = prices
    arr.push(pricesarr)
    let sum = 0;
    arr.forEach(function(){
        sum +=prices
    })
   document.querySelector(".pricebox").innerHTML = `price $${sum.toFixed(2)}`
    createbuttontrash = document.createElement("i")
    createbuttontrash.setAttribute("class","fa-solid fa-trash")
let addtocart = document.createElement("div")
let addtocartimage = document.createElement("img")
let createprices = document.createElement("p")
createprices.setAttribute("class","pricecard")
let createtextprices = document.createTextNode(`price $${elem.price}`)
createprices.appendChild(createtextprices)
addtocartimage.setAttribute("src",elem.image)
addtocart.setAttribute("class","addtocarts")
page1.appendChild(addtocart)
addtocart.appendChild(addtocartimage)
addtocart.appendChild(createprices)
addtocart.appendChild(createbuttontrash)
empties.innerHTML = "Product in card"
superi.innerHTML = `${product++}`
createbuttontrash.addEventListener("click",function(removed){
    let removit = removed.target.parentNode
    removit.remove()
    superi.innerHTML = `${product--}`
})
}

addbtn.addEventListener("click",()=>addtocart(elem.image,elem.price))

})
}
main()