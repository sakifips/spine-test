
const questions = [
  {
id:1,

text:"Which feels the most embarrassing or shameful for you to admit near yourself?",

options:[

{
text:"I usually feel more comfortable relying on a trusted person's reasoning or explanation than developing my own.",
scores:{
TeA:5,
TiH:2
}
},

{
text:"I usually feel more comfortable relying on a trusted person's experience or routine than creating my own.",
scores:{
SeA:5,
TeH:1,
SiA:2
}
},

{
text:"I usually feel more comfortable relying on a trusted person's emotional reaction to a situation than introspecting about my own feelings about the said situation.",
scores:{
FeA:5,
FiA:2
}
}

]

},
  {
id:2,

text:"Which part of yourself feels so fundamental that, if it disappeared tomorrow, you would no longer feel like yourself?",

options:[

{
text:"My sense of acceptable versus unacceptable and my ability to assign subjective value.",
scores:{
FiH:5
}
},

{
text:"My ability to understand, articulate and parse arguments.",
scores:{
TiH:5
}
},

{
text:"My sense of direction and ability to discover underlying meanings.",
scores:{
NiH:5
}
},

{
text:"My curiosity and ability to connect seemingly unrelated ideas.",
scores:{
NeH:5
}
}

]

},
  {
id:3,

text:"Which statement feels closest to the role you naturally assume in life without having to think about it?",

options:[

{
text:"I feel responsible for remaining true to what has personal value for me.",
scores:{
FiH:4
}
},

{
text:"I feel responsible for understanding reality accurately.",
scores:{
TiH:4,
SiA:1
}
},

{
text:"I feel responsible for making life function effectively.",
scores:{
TeH:4,
SeA:1
}
},

{
text:"I feel responsible for helping people relate appropriately to one another.",
scores:{
FeH:4
}
}

]

},
  {
id:4,

text:"Which compliment would almost feel too good to believe?",

options:[

{
text:"You have remarkable insight. You grasp the core of things effortlessly.",
scores:{
NiA:5,
NiH:2
}
},

{
text:"You're one of the most dependable people I know.",
scores:{
SiA:5,
SiH:2
}
},

{
text:"You have an incredible presence and people naturally feel comfortable around you.",
scores:{
SeA:5,
SeH:2
}
},

{
text:"Your ideas are amazingly original and connect things nobody else sees.",
scores:{
NeA:5,
NeH:2
}
}

]

},
  {
id:5,

text:"Which failure feels like it reflects something fundamentally missing in you?",

options:[

{
text:"Failing to think creatively when the situation demanded it.",
scores:{
NeA:5,
TeA:1,
TiA:2
}
},

{
text:"Failing to understand what truly mattered to me in a situation.",
scores:{
NiA:5
}
},

{
text:"Failing to act when the moment demanded it.",
scores:{
SeA:5
}
},

{
text:"Failing to show up or uphold my duty to others.",
scores:{
SiA:5
}
}

]

},

{
id:6,

text:"Which personal weakness do you secretly wish would disappear?",

options:[

{
text:"I worry that I overlook opportunities because I fail to imagine enough alternatives.",
scores:{
NeA:4
}
},

{
text:"I worry that my life will always lack a meaningful direction or significant purpose.",
scores:{
NiA:4
}
},

{
text:"I worry that I'm unreliable and irresponsible because I forget details or fail to build stable routines.",
scores:{
SiA:4
}
},

{
text:"I worry that I overlook opportunities because I hesitate too much instead of simply acting.",
scores:{
SeA:4
}
}

]

},

{
id:7,

text:"Which failure feels the most humiliating?",

options:[

{
text:"When you do something that personally feels inappropriate or unacceptable to you.",
scores:{
FiH:2,
FiA:5
}
},

{
text:"Saying something that later turns out to be logically inconsistent or contradictory to convictions you'd made before.",
scores:{
TiA:5,
TiH:2
}
},

{
text:"Being unable to accomplish something you believed you could and had organized into goals.",
scores:{
TeA:5,
SeA:3
}
},

{
text:"When you invalidate someone's needs or feelings because you weren't paying enough attention.",
scores:{
FeA:5
}
}

]

},

{
id:8,

text:"What process feels most natural, effortless, and life-giving? Please read all options carefully before answering.",

options:[

{
text:"Grasping whether something or someone resonates with me and evaluating its personal value.",
scores:{
FiH:5
}
},

{
text:"Grasping subtle differences between my understanding and someone else's understanding.",
scores:{
TiH:5
}
},

{
text:"Recognizing inefficient methods and naturally improving or guiding them.",
scores:{
TeH:5
}
},

{
text:"Recognizing people's needs and whether expressing those needs is appropriate in a given context.",
scores:{
FeH:5
}
}

]

},

{
id:9,

text:"Which ability feels almost magical when other people possess it?",

options:[

{
text:"Remaining authentic even under enormous social pressure.",
scores:{
FiA:5
}
},

{
text:"Constructing flawless explanations that seem impossible to refute.",
scores:{
TiA:5
}
},

{
text:"Reading a room instantly and naturally bringing people together.",
scores:{
FeA:5
}
},

{
text:"Taking charge and making difficult things happen effortlessly.",
scores:{
TeA:5
}
}

]

},

{
id:10,

text:"What would you feel most hurt by in general?",

options:[

{
text:"'You don't even know what you care about. You just pretend to be passionate because you like feeling unique.'",
scores:{
FiA:5
}
},

{
text:"'You are extremely useless and impractical. You are incapable of leading or guiding people properly.'",
scores:{
TeA:5
}
},

{
text:"'You don't understand anything. Your reasoning is so shallow that anyone could have produced it.'",
scores:{
TiA:5
}
},

{
text:"'Nobody feels helped or heard by anything you do. You just create more problems while believing you're compassionate.'",
scores:{
FeA:5
}
}

]

},
  {
id:11,

text:"Which criticism would make you feel shame?",

options:[

{
text:"You are extremely rigid and lack creativity.",
scores:{
NeA:5
}
},

{
text:"You're incapable of taking decisive action.",
scores:{
SeA:5,
TeA:3
}
},

{
text:"You can't even take care of basic responsibilities.",
scores:{
SiA:5,
FeA:3
}
},

{
text:"You should have figured out by now what you truly want or desire in the long run.",
scores:{
NiA:5
}
}

]

},

{
id:12,

text:"Imagine you're eighty years old looking back on your life. Which regret feels more frightening?",

options:[

{
text:"I understood everything... but I hesitated too often.",
scores:{
SeA:5
}
},

{
text:"I experienced everything... but I never found what it all meant.",
scores:{
NiA:5
}
}

]

},

{
id:13,

text:"What sounds more like something you could be genuinely upset about later?",

options:[

{
text:"I was always searching for the next horizon, but I never found a place that truly felt like home.",
scores:{
SiA:5
}
},

{
text:"I faithfully walked one path, but never discovered whether another might have suited me better.",
scores:{
NeA:5
}
}

]

},

{
id:14,

text:"Pick what suits you more.",

options:[

{
text:"I brought people together, but I never really understood what I believed to be true.",
scores:{
TiA:5
}
},

{
text:"People respected my ideas, but they never truly knew me.",
scores:{
FeA:5,
FiA:3
}
}

]

},

{
id:15,

text:"What would you rather have a mid-life crisis about?",

options:[

{
text:"I remained true to who I was, but I never became capable enough to turn my convictions into reality.",
scores:{
FiA:5
}
},

{
text:"I built an impressive life, but I'm not sure it was truly mine.",
scores:{
TeA:5
}
}

]

},

{
id:16,

text:"I naturally know when something aligns or does not align with me, even if I struggle to explain why.",

options:[

{
text:"Mostly true.",
scores:{
FiH:4
}
},

{
text:"Sometimes true.",
scores:{
FiH:2
}
},

{
text:"I usually have to put some effort into it.",
scores:{
FiH:-2
}
},

{
text:"I struggle with this.",
scores:{
FiH:-5
}
}

]

},
  {
id:17,

text:"Imagine somebody is creating a new theory and you are tasked with evaluating whether it deserves to be approved. What matters more to you?",

options:[

{
text:"The logic should be consistent and clear with strong premises.",
scores:{
TiH:5
}
},

{
text:"It should be empirically verifiable or have real-life applications.",
scores:{
TiH:-2,
TeH:3
}
}

]

},

{
id:18,

text:"Without consciously deciding to, what kind of mental process seems to switch on first?",

options:[

{
text:"Recognizing whether something resonates with my values.",
scores:{
FiH:4
}
},

{
text:"Looking for inconsistencies in what I'm hearing.",
scores:{
TiH:4
}
},

{
text:"Seeing where events are likely to lead.",
scores:{
NiH:4
}
},

{
text:"Seeing multiple ways the situation could unfold.",
scores:{
NeH:4
}
}

]

},

{
id:19,

text:"Someone tells you a complicated story. Which realization usually comes to you first?",

options:[

{
text:"Whether it feels personally meaningful.",
scores:{
FiH:3
}
},

{
text:"Whether the explanation actually makes sense.",
scores:{
TiH:3
}
},

{
text:"What the story is ultimately pointing toward.",
scores:{
NiH:5
}
},

{
text:"Several alternative interpretations they haven't considered.",
scores:{
NeH:5
}
}

]

},

{
id:20,

text:"Which experience gives you the strongest feeling of confidence?",

options:[

{
text:"Drawing on past experience that has consistently worked before.",
scores:{
SiH:5
}
},

{
text:"Responding confidently to whatever is happening right now.",
scores:{
SeH:5
}
},

{
text:"Understanding the deeper meaning behind events.",
scores:{
NiH:2
}
},

{
text:"Discovering an unexpected possibility.",
scores:{
NeH:2
}
}

]

},

{
id:21,

text:"What hurts the most or feels most disrespectful?",

options:[

{
text:"When someone invalidates my real-life experiences or falsely accuses me of making things up.",
scores:{
SiA:5
}
},

{
text:"When someone invalidates my feelings and says it changes their image of me.",
scores:{
FiA:5
}
},

{
text:"When someone dismisses my insights or symbolic beliefs as attention-seeking nonsense.",
scores:{
NiA:5
}
},

{
text:"When someone nitpicks my reasoning and dismisses every argument I make.",
scores:{
TiA:5
}
}

]

},

{
id:22,

text:"Pick the process that feels most instinctual and requires the least conscious effort. (Google the words if necessary.)",

options:[

{
text:"Engaging • Experiencing • Enjoying",
scores:{
SeH:7
}
},

{
text:"Validating • Affirming • Relating",
scores:{
FeH:7
}
},

{
text:"Entertaining • Envisioning • Enabling",
scores:{
NeH:7
}
},

{
text:"Regulating • Planning • Enforcing",
scores:{
TeH:7
}
}

]

},

{
id:23,

text:"Pick the process that feels most instinctual and requires the least conscious effort. (Google the words if necessary.)",

options:[

{
text:"Imagining • Knowing • Divining",
scores:{
NiH:7
}
},

{
text:"Judging • Appraising • Establishing Value",
scores:{
FiH:7
}
},

{
text:"Naming • Defining • Understanding",
scores:{
TiH:7
}
},

{
text:"Implementing • Verifying • Accounting",
scores:{
SiH:7
}
}

]

},

{
id:24,

text:"What's your biggest insecurity? In other words, what do you secretly hope other people never notice about you? Please read every option carefully.",

options:[

{
text:"My inability to discover a satisfying long-term direction or deeper meaning behind my life.",
scores:{
NiA:7
}
},

{
text:"My inability to stay true to what genuinely matters to me. I worry I don't really know who I am beneath outside influences.",
scores:{
FiA:7
}
},

{
text:"My inability to understand things well enough to completely trust my own reasoning.",
scores:{
TiA:7
}
},

{
text:"My inability to accomplish things effectively or reliably. I worry I lack the competence to turn intentions into results.",
scores:{
TeA:7
}
},

{
text:"The fact that I'm not as attentive or dutiful as I aspire to be.",
scores:{
SiA:7
}
},

{
text:"My inability to create memorable experiences or engage people with the confidence and presence I aspire to.",
scores:{
SeA:7
}
},

{
text:"My lack of smoothness in anticipating other people's needs and comforting them the way I wish I could.",
scores:{
FeA:7
}
},

{
text:"My inability to imagine alternatives or recognize possibilities that seem obvious to other people.",
scores:{
NeA:7
}
}

]

}

];
  
