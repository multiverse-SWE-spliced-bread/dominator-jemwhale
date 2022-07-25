const p = document.getElementById('patrick');
const quietBtn = document.getElementById('quiet-btn');
const loudBtn = document.getElementById('loud-btn');
const sarcBtn = document.getElementById('sarc-btn');
quietBtn.addEventListener('click', lowerCase);
loudBtn.addEventListener('click', upperCase);
sarcBtn.addEventListener('click', sarcCase);
function lowerCase(e){
    p.innerText = p.innerText.toLowerCase()
}
function upperCase(e){
    p.innerText = p.innerText.toUpperCase()
}
function sarcCase(e){
    let low = p.innerText.toLowerCase();
    let high = p.innerText.toUpperCase();
    let newStr = ''
    for (i=0; i<low.length; i++){
        if(i%2 === 0){
            newStr += high[i]
        }else{
            newStr += low[i]
        }
    }
    p.innerText = newStr
}

