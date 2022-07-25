const section = document.getElementById('blocks')
let  i  = 2;
while(i <= 100){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', "block-" + i, 'class', "red-block");
    newDiv.setAttribute('class', "red-block");
    newDiv.addEventListener('mouseover', deleteMe);
    section.appendChild(newDiv);
    i ++
}
const ogBlock = document.getElementById('block-1');
ogBlock.addEventListener('mouseover', deleteMe);
function deleteMe(e){
    let deadBlock = document.getElementById(e.target.id);
    deadBlock.remove();
}




