// console.log(document)
// const checkBoxs=document.getElementsByTagName("input")
// const total=document.getElementById("total")
// const deleteButns=document.querySelectorAll(".delete")
// const btnPlus=document.querySelector(".plus")
// console.log(btnPlus)
const btnPlus=document.getElementsByClassName("plus")
const btnMinus=document.getElementsByClassName("minus")
const checkboxs=document.querySelectorAll("input")
// console.log(checkboxs)

for (var i=0; i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click",increment)
    checkboxs[i].addEventListener("click",totalPrice)
   
}

function increment(event){
const btn=event.target
// console.log(btn)
const divElt=btn.parentElement
// console.log(divElt)
var quantityTag=divElt.querySelector("p")
// console.log(quantityTag)
var quantityValue=Number(quantityTag.innerHTML)
quantityValue++
// console.log(quantityValue)
quantityTag.innerHTML=quantityValue
const tdElt=divElt.parentElement
const trElt=tdElt.parentElement
// console.log(trElt)
const unitPriceValue=Number(trElt.querySelector(".unitPrice").innerHTML)
// console.log(unitPriceValue)
var priceTag=trElt.querySelector(".price")
var priceValue=Number(priceTag.innerHTML)
priceValue=quantityValue*unitPriceValue
// console.log(priceValue)
priceTag.innerHTML=priceValue
}

function totalPrice(e) {
    const checkBox=e.target
    // console.log(checkBox)

    var price=Number(checkBox.parentElement.parentElement.querySelector(".price").innerHTML)
    // console.log(price)
    
    var totalTag=document.getElementById("total")
    // console.log(totalTag)
    var totalValue=parseInt(totalTag.innerHTML)
    // console.log(totalValue)
    const bntPlus=checkBox.parentElement.parentElement.querySelector(".plus")
    if(checkBox.checked===true){
        totalValue+=price
        bntPlus.setAttribute("disabled",true)
    }
    else{
        totalValue-=price
        bntPlus.removeAttribute("disabled")
    }
    totalTag.innerHTML=totalValue

}