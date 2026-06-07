/** Level 5 Vocabulary Bank — fill-in-the-blanks (EN + 粵) */
window.FILL_BLANKS_DATA = {
  title: "Level 5 Vocabulary Bank — Fill in the Blanks",
  subtitle: "Sports · Workplace · Social issues · 體育 · 職場 · 社會議題",

  vocabBank: [
    {
      category: "Emotional tone",
      categoryYue: "情感語氣",
      words: [
        { text: "overwhelming（難以承受的／淹沒性的）" },
        { text: "exhilarating（振奮人心的／令人興奮的）" },
        { text: "daunting（令人望而生畏的）" },
        { text: "frustrating（令人沮喪的）" },
        { text: "disheartening（令人灰心的）" },
        { text: "empowering（賦予力量的）" },
        { text: "reassuring（令人安心的）" },
        { text: "empathetic（富同理心的）" }
      ]
    },
    {
      category: "Cause & effect",
      categoryYue: "因果",
      words: [
        { text: "stem from（源於）" },
        { text: "give rise to（引起）" },
        { text: "be attributed to（歸因於）" },
        { text: "as a result（結果）" },
        { text: "consequently（因此）" },
        { text: "thereby（從而）" },
        { text: "hence（故此）" }
      ]
    },
    {
      category: "Opinion & advice",
      categoryYue: "意見與建議",
      words: [
        { text: "it is advisable to（建議／宜於）" },
        { text: "I would strongly encourage（我會強烈鼓勵）" },
        { text: "a viable option（可行的選擇）" },
        { text: "it is worth considering（值得考慮）" },
        { text: "take proactive steps（採取主動措施）" },
        { text: "strike a balance（取得平衡）" }
      ]
    },
    {
      category: "Contrast & concession",
      categoryYue: "對比與讓步",
      words: [
        { text: "nevertheless（儘管如此／然而）" },
        { text: "albeit（雖然）" },
        { text: "despite this（儘管如此）" },
        { text: "while it is true that（雖然確實）" },
        { text: "admittedly（誠然）" }
      ]
    },
    {
      category: "Formal verbs",
      categoryYue: "正式動詞",
      words: [
        { text: "address (a problem)（處理〔問題〕）" },
        { text: "alleviate (concerns)（減輕〔擔憂〕）" },
        { text: "acknowledge（承認／知悉）" },
        { text: "prioritise（優先處理）" },
        { text: "propose（建議）" },
        { text: "implement（實施）" },
        { text: "reinforce（加強）" }
      ]
    },
    {
      category: "Linking / discourse markers",
      categoryYue: "連接／篇章標記",
      words: [
        { text: "firstly（首先）" },
        { text: "moreover（此外）" },
        { text: "consequently（因此）" },
        { text: "on the contrary（相反）" },
        { text: "for instance（例如）" },
        { text: "in light of this（有鑑於此）" },
        { text: "to this end（為此目的）" }
      ]
    }
  ],

  tasks: [
    {
      id: 1,
      label: "Task 1",
      title: "Sports Communication (Blog for Hong Kong Marathon)",
      titleYue: "體育溝通（香港馬拉松網誌）",
      instruction: "Fill in the blanks (use words from the bank above).",
      instructionYue: "填寫空格（用上文詞庫嘅字詞）。",
      parts: [
        "Signing up for the Hong Kong Marathon was ",
        { blank: 1 },
        " at first. The idea of running 42km felt ",
        { blank: 2 },
        ". Nevertheless, crossing the finish line was an ",
        { blank: 3 },
        " experience. ",
        { blank: 4 },
        " the physical exhaustion, the cheers from strangers gave me an unexpected burst of energy. To young people reading this: don\u2019t let fear hold you back. I would ",
        { blank: 5 },
        " encourage you to take the first step. It is ",
        { blank: 6 },
        " to start small \u2014 try the 10km race first. ",
        { blank: 7 },
        " this end, form a running group with friends to keep each other motivated. The marathon is not just a race; it is a journey of self-discovery."
      ],
      blanks: {
        1: { answers: ["overwhelming"] },
        2: { answers: ["daunting"] },
        3: { answers: ["exhilarating"] },
        4: { answers: ["despite this"] },
        5: { answers: ["strongly"] },
        6: { answers: ["advisable", "worth considering"] },
        7: { answers: ["to"] }
      }
    },
    {
      id: 2,
      label: "Task 2",
      title: "Workplace Communication (Letter to staff about out-of-office messages)",
      titleYue: "職場溝通（給同事關於非辦公時間訊息的信）",
      instruction: "Fill in the blanks.",
      instructionYue: "填寫空格。",
      parts: [
        "I have carefully ",
        { blank: 1 },
        " the concerns ",
        { blank: 2 },
        " the number of work-related emails and messages received outside office hours. ",
        { blank: 3 },
        " it is true that our industry demands flexibility, I understand that constant notifications can be ",
        { blank: 4 },
        ". To ",
        { blank: 5 },
        " this issue, I propose a clear \u201cdigital curfew\u201d from 8pm to 8am. It is ",
        { blank: 6 },
        " to ",
        { blank: 7 },
        " a balance between responsiveness and rest. ",
        { blank: 8 },
        ", non-urgent messages should be scheduled to send the next morning. I would ",
        { blank: 9 },
        " you to mute group chats after hours without fear of judgment. Let\u2019s ",
        { blank: 10 },
        " this new policy for two weeks and review together."
      ],
      blanks: {
        1: { answers: ["acknowledged"] },
        2: { answers: ["stemming from", "stem from"] },
        3: { answers: ["while"] },
        4: { answers: ["disheartening", "frustrating"] },
        5: { answers: ["address", "alleviate"] },
        6: { answers: ["advisable"] },
        7: { answers: ["strike"] },
        8: { answers: ["moreover", "for instance"] },
        9: { answers: ["encourage", "strongly encourage"] },
        10: { answers: ["implement"] }
      }
    },
    {
      id: 3,
      label: "Task 3",
      title: "Social Issues (Advice column letter to J.C., age 16)",
      titleYue: "社會議題（給 16 歲 J.C. 的建議欄回信）",
      instruction: "Fill in the blanks.",
      instructionYue: "填寫空格。",
      parts: [
        "Your frustration is completely understandable, J.C. Hearing \u201cNo\u201d from parents about a dream career can feel ",
        { blank: 1 },
        ". ",
        { blank: 2 },
        " their reaction may ",
        { blank: 3 },
        " concern about job stability rather than a rejection of your love for animals. I would ",
        { blank: 4 },
        " encourage you to take ",
        { blank: 5 },
        " steps. First, research what it takes to become a vet \u2014 the subjects, the grades, the costs. Then, have a calm conversation. Acknowledge their worries, but ",
        { blank: 6 },
        " your passion with facts. It is ",
        { blank: 7 },
        " to invite them to a vet clinic open day. ",
        { blank: 8 },
        " they see your commitment, their attitude may soften. Keep believing in yourself \u2014 many vets once stood where you stand now."
      ],
      blanks: {
        1: { answers: ["disheartening", "frustrating"] },
        2: { answers: ["admittedly"] },
        3: { answers: ["stem from", "be attributed to", "stemming from"] },
        4: { answers: ["strongly"] },
        5: { answers: ["proactive"] },
        6: { answers: ["reinforce"] },
        7: { answers: ["worth considering", "advisable"] },
        8: { answers: ["if", "once"] }
      }
    }
  ],

  answerKey: [
    {
      taskId: 1,
      items: [
        { n: 1, answer: "overwhelming" },
        { n: 2, answer: "daunting" },
        { n: 3, answer: "exhilarating" },
        { n: 4, answer: "Despite this" },
        { n: 5, answer: "strongly" },
        { n: 6, answer: "advisable / worth considering" },
        { n: 7, answer: "To" }
      ]
    },
    {
      taskId: 2,
      items: [
        { n: 1, answer: "acknowledged" },
        { n: 2, answer: "stemming from" },
        { n: 3, answer: "While" },
        { n: 4, answer: "disheartening / frustrating" },
        { n: 5, answer: "address / alleviate" },
        { n: 6, answer: "advisable" },
        { n: 7, answer: "strike" },
        { n: 8, answer: "Moreover / For instance" },
        { n: 9, answer: "encourage" },
        { n: 10, answer: "implement" }
      ]
    },
    {
      taskId: 3,
      items: [
        { n: 1, answer: "disheartening / frustrating" },
        { n: 2, answer: "Admittedly" },
        { n: 3, answer: "stem from / be attributed to" },
        { n: 4, answer: "strongly" },
        { n: 5, answer: "proactive" },
        { n: 6, answer: "reinforce" },
        { n: 7, answer: "worth considering / advisable" },
        { n: 8, answer: "If / Once" }
      ]
    }
  ]
};
