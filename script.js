// ---------- Scores ----------

let scores={
FiH:0,FiA:0,
FeH:0,FeA:0,
TiH:0,TiA:0,
TeH:0,TeA:0,
NiH:0,NiA:0,
NeH:0,NeA:0,
SiH:0,SiA:0,
SeH:0,SeA:0
};

let current=0;

const quiz=document.getElementById("quiz");
const nextBtn=document.getElementById("nextBtn");
const previousBtn=document.getElementById("previousBtn");
const submitBtn=document.getElementById("submitBtn");

document.getElementById("totalQuestions").textContent=questions.length;

// ---------- Build Quiz ----------

function buildQuiz(){

questions.forEach((q,index)=>{

const card=document.createElement("div");
card.className="questionCard";

if(index===0)
card.classList.add("active");

let html=`<div class="questionTitle">
Q${q.id}) ${q.text}
</div>`;

q.options.forEach((option,i)=>{

html+=`
<label class="option">

<input
type="radio"
name="q${q.id}"
value="${i}">

${String.fromCharCode(65+i)}.
${option.text}

</label>
`;

});

card.innerHTML=html;

quiz.appendChild(card);

});

updateProgress();

}

buildQuiz();
function updateProgress(){

document.getElementById("currentQuestion").textContent=current+1;

let percent=((current+1)/questions.length)*100;

document.getElementById("progressFill").style.width=percent+"%";

const cards=document.querySelectorAll(".questionCard");

cards.forEach(card=>card.classList.remove("active"));

cards[current].classList.add("active");

previousBtn.style.display=current===0?"none":"inline-block";

if(current===questions.length-1){

nextBtn.style.display="none";
submitBtn.style.display="inline-block";

}
else{

nextBtn.style.display="inline-block";
submitBtn.style.display="none";

}

}
nextBtn.onclick=function(){

const checked=document.querySelector(
`input[name="q${questions[current].id}"]:checked`
);

if(!checked){

alert("Please answer this question.");

return;

}

current++;

updateProgress();

};

previousBtn.onclick=function(){

if(current>0){

current--;

updateProgress();

}

};
