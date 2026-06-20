/**
 * Antarctica — satellite images & surface anomalies.
 */
window.MATCH_DATA = {
  title: "Antarctica — satellite anomalies",
  titleZh: "南極 · 衛星異象",
  hatTypes: [
    { id: "red", emoji: "\uD83D\uDE0A", tag: "red hat", label: "personal" },
    { id: "white", emoji: "\uD83D\uDCCA", tag: "white hat", label: "factual" },
    { id: "yellow", emoji: "\uD83C\uDF1F", tag: "yellow hat", label: "optimistic reasoning" },
    { id: "green", emoji: "\uD83D\uDCA1", tag: "green hat", label: "creative" },
    { id: "blue", emoji: "\uD83D\uDCCB", tag: "blue hat", label: "practical" },
    { id: "black", emoji: "\u26A0\uFE0F", tag: "black hat", label: "critical reasoning" }
  ],
  headlines: [
    {
      id: "mountain-entrance",
      text: "2016 satellite image showed man-made-looking entrance in Antarctic mountains",
      hatQuestions: {
        red: "How do you feel seeing a hole in a mountain that looks man-made?",
        white: "What did researchers highlight in the 2016 satellite image?",
        yellow: "What useful mapping could public satellite images still provide?",
        green: "What expedition log would you write after finding the entrance?",
        blue: "How could students compare satellite photos with ground geology?",
        black: "Why can shadows and ice make natural rock look artificial?"
      }
    },
    {
      id: "south-georgia-crash",
      text: "2018 images showed straight skid marks and crashed object on South Georgia ice",
      hatQuestions: {
        red: "Does a UFO-like skid mark on ice feel exciting or worrying?",
        white: "What do photographs from South Georgia in 2018 appear to show?",
        yellow: "What safety lessons could come from studying remote crash sites?",
        green: "What news headline would you write for the South Georgia object?",
        blue: "How could investigators measure skid length from satellite photos?",
        black: "Why might a rock slide be mistaken for a craft crash?"
      }
    },
    {
      id: "pole-contrail",
      text: "2018 contrail stretched pole to pole at impossible aircraft speed",
      hatQuestions: {
        red: "How surprising is a line of cloud from pole to pole?",
        white: "What was unusual about the 2018 contrail image?",
        yellow: "Could tracking contrails improve climate or flight research?",
        green: "What sci-fi explanation would you give for a pole-to-pole trail?",
        blue: "How long do normal contrails usually last?",
        black: "What other explanations besides super-fast craft could leave a long line?"
      }
    },
    {
      id: "antarctic-pyramid",
      text: "Pyramid-shaped formation photographed near Shackleton mountain range",
      hatQuestions: {
        red: "How do you feel about pyramids hidden under Antarctic ice?",
        white: "What formation did researchers identify near the Shackleton range?",
        yellow: "What might open polar archaeology teach if done carefully?",
        green: "What board game would you design about Antarctic pyramids?",
        blue: "How could lidar or radar search for buried structures?",
        black: "Why are pyramid-shaped mountains common in nature?"
      }
    },
    {
      id: "ice-paradox",
      text: "NASA reported some Antarctic ice growing while coastal glaciers melt rapidly",
      hatQuestions: {
        red: "How do you feel hearing ice is growing in one place but melting in another?",
        white: "What did NASA report in October 2015 about Antarctic ice?",
        yellow: "What hope could better ice monitoring give for climate planning?",
        green: "What infographic would you draw to explain the ice paradox?",
        blue: "How do scientists measure ice gain and loss in Antarctica?",
        black: "Why is it misleading to say all of Antarctica is simply freezing or melting?"
      }
    }
  ],
  paragraphs: [
    {
      id: "A",
      answer: "mountain-entrance",
      text:
        "In 2016, internet researchers highlighted a [[satellite image|衛星圖像]] of a large, proportionate hole carved into an Antarctic [[mountain range|山脈]]. Some argued it looked [[intelligently designed|人為設計]] for a craft to pass through."
    },
    {
      id: "B",
      answer: "south-georgia-crash",
      text:
        "In 2018, coordinates circulated for a [[UFO-like object|疑似不明飛行物]] on the Antarctic island of [[South Georgia|南喬治亞島]]. Photographs show straight [[skid marks|滑行痕跡]] across ice, as if an oblong craft ricocheted off a mountain and slid thousands of feet."
    },
    {
      id: "C",
      answer: "pole-contrail",
      text:
        "A 2018 satellite image captured a [[contrail|飛機凝結尾]] stretching longitudinally from the [[North Pole|北極點]] to the South Pole. Because most contrails dissipate within fifteen to thirty minutes, only a craft travelling far faster than any known aircraft could leave such a line."
    },
    {
      id: "D",
      answer: "antarctic-pyramid",
      text:
        "Researchers including Joseph White claimed to identify a [[pyramid-shaped formation|金字塔形地貌]] near the [[Shackleton Mountain Range|沙克爾頓山脈]]. [[Ancient astronaut theorists|古代太空人理論者]] suggest pyramids worldwide may share a common Antarctic origin and function as a [[power grid|能源網絡]]. Pyramids have also been rediscovered worldwide after being mistaken for [[natural hills|天然山丘]], and theorists argue that if habitation existed in Antarctica before the [[last ice age|末次冰河期]], monumental structures could still lie buried under miles of ice."
    },
    {
      id: "E",
      answer: "ice-paradox",
      text:
        "In October 2015, NASA announced that [[East Antarctic ice|東南極冰層]] was growing by tens of billions of tons a year while western [[coastal glaciers|沿岸冰川]] were melting rapidly, with huge volumes of ice disappearing into the ocean annually."
    }
  ]
};
