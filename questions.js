const questions = [
  {
    id: 1,

    text: "What hurts the most or feels most disrespectful",

    options: [
      {
        text: "When someone invalidates my real life experiences or when they falsely accuse me of making up anecdotes that are not rooted in reality",
        scores: {
          SiA: 5
        }
      },

      {
        text: "When someone invalidates my feelings or emotions and claim it has altered their image of me",
        scores: {
          FiA: 5
        }
      },

      {
        text: "When someone invalidates my insights or symbolic beliefs as bullshit and accuse me of doing it for attention",
        scores: {
          NiA: 5
        }
      },

      {
        text: "When someone invalidates my reasonings or logic and nitpicks every argument I provide",
        scores: {
          TiA: 5
        }
      }
    ]
  },

  {
    id: 2,

    text: "Which part of yourself feels so fundamental that, if it disappeared tomorrow, you would no longer feel like yourself?",

    options: [
      {
        text: "My sense of “acceptable” vs “unacceptable” and ability to assign subjective value/worth to stuff",
        scores: {
          FiH: 5
        }
      },

      {
        text: "My ability to understand and articulate stuff and to parse information and arguments",
        scores: {
          TiH: 5
        }
      },

      {
        text: "My sense of direction and ability of finding underlying symbolisms and giving meanings to patterns",
        scores: {
          NiH: 5
        }
      },

      {
        text: "My ability to retain what I’ve learned from experience and maintain continuity with what has proven dependable over time.",
        scores: {
          SiH: 5
        }
      }
    ]
  },

  {
    id: 3,

    text: "Which feels the most embarrassing or shameful for you to admit near yourself?",

    options: [
      {
        text: "I usually feel more comfortable relying on a trusted person’s reasoning or explanation than developing my own.",
        scores: {
          TeA: 5,
          TiA: 2
        }
      },

      {
        text: "I usually feel more comfortable relying on a trusted person’s experience or routine than creating my own.",
        scores: {
          SeA: 5,
          SiA: 2
        }
      },

      {
        text: "I usually feel more comfortable relying on a trusted person’s emotional reaction to a situation than introspecting about my own feelings about the said situation",
        scores: {
          FeA: 5,
          FiA: 2
        }
      },

      {
        text: "I usually feel more comfortable relying on a trusted person’s ability to interpret and interconnect things than exploring or entertaining similar alternatives of my own.",
        scores: {
          NeA: 5,
          NiA: 2
        }
      }
    ]
  },

  {
    id: 4,

    text: "What process feels most natural, effortless, and life-giving?",

    options: [
      {
        text: "Grasping multiple potentials hidden inside an idea, theory, skill etc and being able to naturally generate alternative ways of understanding or developing it, ideally through combining it with many other ideas/theories/skills.",
        scores: {
          NeH: 5
        }
      },

      {
        text: "Grasping what is immediately happening in the present environment and being able to instinctively respond to what the situation concretely demands without overthinking or overanalysing.",
        scores: {
          SeH: 5
        }
      },

      {
        text: "Grasping that somebody’s reasoning or methodology is not very practical or time friendly or efficient and being able to modify it for them or help/guide them through it",
        scores: {
          TeH: 5
        }
      },

      {
        text: "Grasping what somebody’s needs are and evaluating whether it’d be appropriate or inappropriate of them to express those needs at that given environment at that given time",
        scores: {
          FeH: 5
        }
      }
    ]
  },

  {
    id: 5,

    text: "Pick the processes that feels most instinctual and requires the least conscious effort. (Please Google the words if necessary.)Here entertaining has two meanings. 1. Interesting and amusing yourself and others. 2. beginning to consider or 'entertain' possibilities that you may want to go on to envision in greater detail.",

    options: [
      {
        text: "Engaging, Experiencing, Enjoying",
        scores: {
          SeH: 7
        }
      },

      {
        text: "Validating, Affirming, Relating",
        scores: {
          FeH: 7
        }
      },

      {
        text: "Entertaining, Envisioning, Enabling",
        scores: {
          NeH: 7
        }
      },

      {
        text: "Regulating, Planning, Enforcing",
        scores: {
          TeH: 7
        }
      }
    ]
  },

  {
    id: 6,

    text: "Choose which of these might trigger the insecurities you try so hard to hide from others",

    options: [
      {
        text: "You are extremely useless and impractical. You are an insecure bigot who is incapable of leading or guiding people properly. You lack the skills to break down things into steps in a non retarded way. Please never attempt to instruct people or they’ll lose whatever respect they accidentally have for you",
        scores: {
          TeA: 5,
          SeA: 2
        }
      },

      {
        text: "Nobody ever feels helped or heard by anything you do. You just create additional problems for everybody while deluding yourself to be compassionate and thoughtful. I hope nobody ever opens up to you vulnerably cause you’ll disappoint them",
        scores: {
          FeA: 5
        }
      },

      {
        text: "You’re a timid fuck. When life actually demands action, you freeze, hesitate, or hide behind excuses. Your presence is suffocating and you make everyone uncomfortable and tense with your loser-like body language.",
        scores: {
          SeA: 5
        }
      },

      {
        text: "You’re painfully uncreative. Everyone else can see possibilities that never even occur to you. You’re stuck in your ways in the most obnoxious way possible and thats why progress is repelled by a rigid moron like you. Stay a loser forever clinging to your boring worthless experiences lmao.",
        scores: {
          NeA: 5,
          SiA: 3
        }
      }
    ]
  },

  {
    id: 7,

    text: "Imagine somebody proposes a completely new way of understanding a complex issue. What matters more to you?",

    options: [
      {
        text: "Whether it reveals one deeper principle that explains the whole phenomenon.",
        scores: {
          NiH: 5
        }
      },

      {
        text: "Whether it opens up many interesting possibilities and new ways of thinking.",
        scores: {
          NeH: 5
        }
      }
    ]
  },
    {
    id: 8,

    text: "What mental operation feels so automatic that you often don’t notice yourself doing it?",

    options: [
      {
        text: "Quietly reorganizing definitions until everything fits together without contradiction.",
        scores: {
          TiH: 5,
          TeA: -2
        }
      },

      {
        text: "Quietly assigning personal significance or value to what I’m observing before I consciously realize I’ve done so.",
        scores: {
          FiH: 5,
          TeA: -4
        }
      },

      {
        text: "Quietly synthesizing separate observations into one underlying meaning or direction before consciously trying to explain it",
        scores: {
          NiH: 5,
          SeA: -3
        }
      },

      {
        text: "Quietly comparing new information with previous experiences and noticing what feels familiar, reliable, or inconsistent.",
        scores: {
          SiH: 5
        }
      }
    ]
  },

  {
    id: 9,

    text: "Imagine you can choose which of these to have an intense mid life crisis about. What sounds like the safest choice to pick?",

    options: [
      {
        text: "I experienced everything… but I never found what it all meant",
        scores: {
          NiA: -5
        }
      },

      {
        text: "I was always searching for the next horizon, but I never found a place that truly felt like home.",
        scores: {
          SiA: -5
        }
      },

      {
        text: "I brought people together… but I never really understood what I believed to be true",
        scores: {
          TiA: -5
        }
      },

      {
        text: "I remained true to who I was… but I never became capable enough to turn my convictions into reality",
        scores: {
          FiA: -5
        }
      }
    ]
  },

  {
    id: 10,

    text: "Someone tells you a complicated story. Which realization usually comes to you first?",

    options: [
      {
        text: "Whether it feels personally meaningful.",
        scores: {
          FiH: 3
        }
      },

      {
        text: "Whether the explanation actually makes sense.",
        scores: {
          TiH: 3
        }
      },

      {
        text: "What the story is ultimately pointing toward.",
        scores: {
          NiH: 5
        }
      },

      {
        text: "Whether it matches what I’ve previously observed or experienced in similar situations.",
        scores: {
          SiH: 5
        }
      }
    ]
  },

  {
    id: 11,

    text: "Imagine somebody proposes a new code of conduct for a community. What matters more to you?",

    options: [
      {
        text: "Whether it remains true to genuine personal convictions of each member and protects individual integrity.",
        scores: {
          FiH: 5
        }
      },

      {
        text: "Whether it promotes harmony and collective responsibility and functions well within the community.",
        scores: {
          FeH: 5
        }
      }
    ]
  },

  {
    id: 12,

    text: "Which compliment would almost feel too good to believe?",

    options: [
      {
        text: "You have remarkable insight! You can grasp the core of things so effortlessly!",
        scores: {
          NiA: 5,
          NiH: 2
        }
      },

      {
        text: "You’re one of the most dependable people I know! I could always rely on you!",
        scores: {
          SiA: 5,
          SiH: 2
        }
      },

      {
        text: "You have an incredible and beautiful presence and I feel so comfortable around you!",
        scores: {
          SeA: 5,
          SeH: 2
        }
      },

      {
        text: "You amaze me with your outside the box ideas! You can connect and intertwine stuff to create something profound!",
        scores: {
          NeA: 5,
          NeH: 2
        }
      }
    ]
  },

  {
    id: 13,

    text: "What would you feel most hurt by in general? Assume somebody close whom you care for and respect has said it to you.",

    options: [
      {
        text: "You don’t even know what you care about. You just pretend to be passionate about some shit cause you like feeling special and unique",
        scores: {
          FiA: 5,
          NiA: 2
        }
      },

      {
        text: "You don’t understand the most simple logic. The reasonings you make are so banal that any sheep could have thought of those had it been allowed to speak",
        scores: {
          TiA: 5,
          TeA: 2
        }
      },

      {
        text: "You can’t even keep your own life together. You’re forgetful, extremely unreliable, and never learn from experience. You’re about as dependable as a crocheted condom.",
        scores: {
          SiA: 5,
          TeA: 3
        }
      },

      {
        text: "Most of your insights are vague fantasies which are so blatantly unprofound and nonsensical that Everyone can tell how poor your inner world is.",
        scores: {
          NiA: 5,
          FiA: 3
        }
      }
    ]
  },

  {
    id: 14,

    text: "Pick the processes that feels most instinctual and requires the least conscious effort. (Please google the words if necessary.)Like 'entertaining, 'divining' has a double meaning in this scheme. It is not only seeing in what direction the future is bending. It is also descrying the divine purpose hidden in the developing situation",

    options: [
      {
        text: "Imagining, Knowing, Divining",
        scores: {
          NiH: 7
        }
      },

      {
        text: "Judging, Appraising, Establishing the Value",
        scores: {
          FiH: 7
        }
      },

      {
        text: "Naming, Defining, Understanding",
        scores: {
          TiH: 7
        }
      },

      {
        text: "Implementing, Verifying, Accounting",
        scores: {
          SiH: 7
        }
      }
    ]
  },
    {
    id: 15,

    text: "What mental operation feels so automatic that you often don’t notice yourself doing it?",

    options: [
      {
        text: "Quietly generating additional possibilities, interpretations, and connections without intending to.",
        scores: {
          NeH: 5,
          SiA: -3
        }
      },

      {
        text: "Quietly monitoring what is concretely happening in the present moment and instinctively noticing changes in the environment.",
        scores: {
          SeH: 5,
          NiA: -3
        }
      },

      {
        text: "Quietly tracking how people’s reactions are changing and adjusting my understanding of what their needs are",
        scores: {
          FeH: 5
        }
      },

      {
        text: "Quietly reorganizing information into procedures or methods that would produce better practical results.",
        scores: {
          TeH: 5
        }
      }
    ]
  },

  {
    id: 16,

    text: "Imagine you’re eighty years old looking back on your life. Which regret feels more realistic for you in this situation?",

    options: [
      {
        text: "I understood everything… but I hesitated too often.",
        scores: {
          SeA: 5
        }
      },

      {
        text: "I faithfully walked one path… but never discovered whether another might have suited me better.",
        scores: {
          NeA: 5
        }
      },

      {
        text: "People respected my ideas… but they never truly knew or connected with me",
        scores: {
          FeA: 5,
          FiA: 3
        }
      },

      {
        text: "I built an impressive life… but I’m not sure it was truly mine or whether it was even me who built it",
        scores: {
          TeA: 5
        }
      }
    ]
  },

  {
    id: 17,

    text: "Imagine somebody introduces a new method of accomplishing an important task. What matters more to you?",

    options: [
      {
        text: "Whether it proves itself reliable and consistently effective over time.",
        scores: {
          SiH: 5
        }
      },

      {
        text: "Whether it performs effectively in the immediate situation, even if it breaks with previous methods.",
        scores: {
          SeH: 5
        }
      }
    ]
  },

  {
    id: 18,

    text: "What’s your biggest insecurity ie constant source of shame ie something about you that you secretly wish others won’t ever notice? Please read each option TWICE before answering",

    options: [
      {
        text: "My inability to discover a satisfying long-term direction or deeper meaning behind my life. I often fear I’m just drifting without truly knowing what I ultimately want.",
        scores: {
          NiA: 9
        }
      },

      {
        text: "My inability to stay true to what genuinely matters to me. I sometimes worry that I don’t really know who I am or what I truly value beneath outside influences",
        scores: {
          FiA: 9
        }
      },

      {
        text: "My inability to understand things well enough to completely trust my own reasoning. I secretly fear that my thinking isn’t as coherent or insightful as I wish it were.",
        scores: {
          TiA: 9
        }
      },

      {
        text: "My inability to accomplish things effectively or reliably. I often worry that I don’t have the competence or capability to turn intentions into result",
        scores: {
          TeA: 9
        }
      },

      {
        text: "My inability to be as attentive or dutiful as I aspire to be towards certain things and situations. I am often irresponsible about my duties and promises to others as i either forget them or slither out of them due to perceived inconvenience. ",
        scores: {
          SiA: 9
        }
      },

      {
        text: "My inability to give people a good time, create memorable experiences, or engage them with the confidence and presence I aspire to",
        scores: {
          SeA: 9
        }
      },

      {
        text: "My lack of smoothness in anticipating other people’s needs, and how much I struggle to comfort or emotionally support them the way I wish I could.",
        scores: {
          FeA: 9
        }
      },

      {
        text: "My inability to imagine alternatives or recognize possibilities that seem obvious to other people. I worry that my thinking becomes too narrow or that I miss opportunities I should have seen.",
        scores: {
          NeA: 9
        }
      }
    ]
  },

  {
    id: 19,

    text: "What process feels most natural, effortless, and life-giving?",

    options: [
      {
        text: "Grasping that something or someone vibes or doesn’t vibe with me and evaluating how much that thing or person is valuable for me at that given time",
        scores: {
          FiH: 5
        }
      },

      {
        text: "Grasping that somebody’s understanding of something is similar or different than mine and being able to articulate in my own head the subtle differences between our understanding of the said thing",
        scores: {
          TiH: 5
        }
      },

      {
        text: "Grasping how something relates to what I already recognise or what I’ve experienced before and instinctively recalling whether it has consistently worked or has remained reliable.",
        scores: {
          SiH: 5
        }
      },

      {
        text: "Grasping where a situation seems to be leading in a non-detaily way as if I’m randomly seeing glimpses of an almost veiled image and quietly recognizing the underlying meaning or personal significance of it.",
        scores: {
          NiH: 5
        }
      }
    ]
  },

  {
    id: 20,

    text: "Imagine somebody is creating a new theory and you are tasked with evaluating if it’s relevant enough to be approved. What matters more to you?",

    options: [
      {
        text: "The logic should be consistent and clear or have strong premises",
        scores: {
          TiH: 5
        }
      },

      {
        text: "It should be empirically verifiable or have real life applications",
        scores: {
          TeH: 5
        }
      }
    ]
  },

  {
    id: 21,

    text: "Which part of yourself feels so fundamental that, if it disappeared tomorrow, you would no longer feel like yourself?",

    options: [
      {
        text: "My ability to understand what people need from one another and foster appropriate, harmonious interactions between them.",
        scores: {
          FeH: 5
        }
      },

      {
        text: "My ability to organize people, resources, or systems so that things actually get done effectively.",
        scores: {
          TeH: 5
        }
      },

      {
        text: "My ability to respond confidently to what is happening right now and fully engage with the immediate situation.",
        scores: {
          SeH: 5
        }
      },

      {
        text: "My curiosity and ability to imagine possibilities, connect seemingly unrelated ideas, and discover alternatives that others overlook.",
        scores: {
          NeH: 5
        }
      }
    ]
  }
  ];

console.log("Length =", questions.length);

console.log(questions);
