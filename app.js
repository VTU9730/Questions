let ansEl=document.getElementById('ans-el')
let btnEl=document.getElementById('btn-el')
let questionsDiv=document.getElementsByClassName('question')
for(let i=0;i<questionsDiv.length;i++){
    questionsDiv[i].addEventListener('click',()=>{
        // console.log(questionsDiv[i].children[0].children[1].children[0]);
        let buttonText=questionsDiv[i].children[0].children[1].children[0]
        let target=questionsDiv[i].children[1]
        if(buttonText.textContent=='+') {
            buttonText.textContent='-'
        }
        else{
            buttonText.textContent='+'
        }
        target.classList.toggle('show')
    })
}
 
// btnEl.addEventListener('click',()=>{
//     if(btnEl.textContent=='+') {
//         btnEl.textContent='-'
//     }
//     else{
//         btnEl.textContent='+'
//     }
//     ansEl.classList.toggle('show')
// })