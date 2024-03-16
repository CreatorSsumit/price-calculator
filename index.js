const calculator = ({broughtAmount=0,weight=0,weighInType=null,totalPrice=0,totalPriceInType=null})=>{

    let weightInGram = 0,temp={};

    if(weighInType === 'kg'){
    weightInGram = 1
    weight=weight
}
    if(weighInType === 'gm'){
    weightInGram  = 1000
    weight = weight/1000
}
    if(weighInType === 'mg'){
    weightInGram = 1000000
    weight = weight/1000000
}

if(totalPriceInType ==='kg'){
    totalPrice = totalPrice
}
if(totalPriceInType === 'gm'){
    totalPrice = totalPrice * 1000
}
if(totalPriceInType === 'mg'){
    totalPrice = totalPrice * 1000000
}

    
    if(!weight && broughtAmount)
    temp =  (broughtAmount/totalPrice) * weightInGram // find weight
    if(weight && !price)
    temp =  (weight)*totalPrice // find price

    return temp.toFixed(4)

} 

module.exports = calculator