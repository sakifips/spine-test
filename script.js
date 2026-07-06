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

${Str
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
submitBtn.onclick=function(){

const answers={};

for(let q of questions){

const selected=document.querySelector(
`input[name="q${q.id}"]:checked`
);

if(!selected){

alert("Please answer every question.");

return;

}

answers[q.id]=parseInt(selected.value);

}

// Reset scores

for(let key in scores){
scores[key]=0;
}

// Calculate

questions.forEach(q=>{

const answer=answers[q.id];

const option=q.options[answer];

if(option.scores){

for(const stat in option.scores){

scores[stat]+=option.scores[stat];

}

}

});

showResults();

};
function showResults(){

const heroFunctions=["Fi","Fe","Ti","Te","Ni","Ne","Si","Se"];
const animaFunctions=["Fi","Fe","Ti","Te","Ni","Ne","Si","Se"];

let bestHero="";
let bestHeroScore=-9999;

let bestAnima="";
let bestAnimaScore=-9999;

heroFunctions.forEach(f=>{

if(scores[f+"H"]>bestHeroScore){

bestHeroScore=scores[f+"H"];
bestHero=f;

}

});

animaFunctions.forEach(f=>{

if(scores[f+"A"]>bestAnimaScore){

bestAnimaScore=scores[f+"A"];
bestAnima=f;

}

});

const opposite={
Fi:"Te",
Te:"Fi",
Ti:"Fe",
Fe:"Ti",
Ni:"Se",
Se:"Ni",
Ne:"Si",
Si:"Ne"
};

const consistent=(opposite[bestHero]===bestAnima);

let html=`
<h2>Your Results</h2>

<p>
It appears that the function attitude most likely associated with your
<b>Hero/Heroine</b> archetype is <b>${bestHero}</b>, while the function attitude
most likely associated with your <b>Anima/Animus</b> archetype is
<b>${bestAnima}</b>.
</p>

<p>
<b>Hero-Anima Relationship:</b><br><br>

This assessment is based on John Beebe's archetypal model, in which the Hero and Anima/Animus functions are expected to form an opposite pair (Fi-Te, Ti-Fe, Ni-Se, or Ne-Si).
</p>

${
consistent
? `
<p>
✅ <b>Your results are internally consistent.</b><br>
Your highest Hero function (<b>${bestHero}</b>) corresponds to the expected opposite Anima/Animus function (<b>${bestAnima}</b>). This suggests that your responses are coherent with the Hero-Anima polarity predicted by the model.
</p>
`
: `
<p>
⚠️ <b>Your results are not fully internally consistent.</b><br>
Your highest Hero function (<b>${bestHero}</b>) would ordinarily be expected to pair with <b>${opposite[bestHero]}</b> as the Anima/Animus function, but your responses instead produced <b>${bestAnima}</b> as the strongest Anima score.
</p>

<p>
This does <b>not</b> necessarily mean your result is incorrect. It may indicate a more differentiated personality, mixed preferences, ambiguity between two function-attitudes, or simply (most likely case) that additional questions would be required for a clearer assessment.
</p>
`
}
<hr>

<h2>Function Scores</h2>
`;

for(let key in scores){

html+=`<p>${key}: ${scores[key]}</p>`;

}

quiz.innerHTML=html;

document.querySelector(".navigation").style.display="none";
document.querySelector(".progressSection").style.display="none";

}
