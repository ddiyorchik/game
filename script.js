let inputData=document.querySelector(".input")
let btn=document.querySelector(".btn")
let form=document.querySelector(".form")
let result=document.querySelector(".result-h1")
let x=parseInt(Number(Math.random()*50))

form.addEventListener("submit",(evt)=>{
    evt.preventDefault()
    let data=inputData.value
    if (data == x) {
        result.innerHTML = `Qoyil siz Yutdingiz`;
        result.style.color= "green"
    } else if (data > x) {
        result.innerHTML = `Men oylagan son ${data}dan kichik. Kichikroq son kiriting`;
        result.style.color= "blue"
    } else if (data < x) {
        result.innerHTML = `Men oylagan son ${data}dan katta. Kattaroq son kiriting`;
        result.style.color= "red"
    } else {
        result.innerHTML = `Siz 1dan 50gacha oraliqda son kiritish kk`;
        result.style.color= "red"
    }
    
})