/**
 * Cambodia — Angkor / LiDAR headline ↔ paragraph matching.
 */
window.MATCH_DATA = {
  title: "Angkor & Cambodia",
  titleZh: "吳哥與柬埔寨",
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
      id: "berets",
      text: "Hand-cut reservoirs moved dirt equal to dozens of Great Pyramids",
      hatQuestions: {
        red: "How do you feel knowing ancient reservoirs moved more earth than dozens of pyramids?",
        white: "How large are the Barays, and what river was diverted through Angkor?",
        yellow: "What might such water engineering have allowed Khmer society to achieve?",
        green: "If you designed a modern baray for a city today, what would it do?",
        blue: "How could archaeologists verify how much earth was moved at Angkor?",
        black: "Why might historians doubt that rice farming alone needed this much earth-moving?"
      }
    },
    {
      id: "lidar",
      text: "LiDAR revealed spiral embankments resembling a circuit board",
      hatQuestions: {
        red: "Does the circuit-board pattern feel exciting or unsettling to you?",
        white: "What did LiDAR reveal at Angkor Wat — grids, mounds, spirals?",
        yellow: "What new discoveries could open LiDAR data bring if released fully?",
        green: "What else might ancient spiral embankments have been designed to do?",
        blue: "How could students check whether LiDAR images have been withheld?",
        black: "What problems arise if only selected LiDAR images are made public?"
      }
    },
    {
      id: "lost-tech",
      text: "Lathe-turned pillars and giant lingams suggest advanced machining",
      hatQuestions: {
        red: "How do you react to the idea of lathe-turned stone pillars?",
        white: "What evidence suggests machining beyond simple hand tools?",
        yellow: "What could we learn if older Khmer masterworks were studied openly?",
        green: "What modern tool could you invent to carve hard sandstone so precisely?",
        blue: "How might experts test whether pillars were turned on a lathe?",
        black: "Why is the old-versus-new statue contrast controversial?"
      }
    },
    {
      id: "koh-ker",
      text: "Entire city of Koh Ker allegedly built in only 20 years",
      hatQuestions: {
        red: "How believable does a whole city in twenty years feel to you?",
        white: "What structures at Koh Ker does official history credit to Jayavarman IV?",
        yellow: "Could a king still gain something positive by claiming an older site?",
        green: "How would you prove whether Koh Ker was built or merely renamed?",
        blue: "What records or dating methods could settle the twenty-year claim?",
        black: "What is weak about saying an entire city was built so quickly?"
      }
    },
    {
      id: "global-style",
      text: "Statue styles echo Egypt, Assyria and ancient India",
      hatQuestions: {
        red: "How do you feel when art in Cambodia looks like Egypt or Assyria?",
        white: "Which shared features appear in Cambodian, Egyptian and Assyrian statues?",
        yellow: "What might ancient trade or travel explain these similarities?",
        green: "What story could link Angkor, Egypt and India in one classroom drama?",
        blue: "How could museums compare statues side by side for students?",
        black: "Why might similar styles not prove direct ancient contact?"
      }
    }
  ],
  paragraphs: [
    {
      id: "A",
      answer: "berets",
      text:
        "The Western and Eastern [[Barays|人工大湖]] measure up to eight by two kilometres and are among the largest [[hand-cut reservoirs|人手開鑿水庫]] on Earth. The presenter notes that earth moved to build just two of them equals about 53 solid [[Great Pyramids of Giza|吉薩大金字塔]], far more than simple rice farming would seem to require. The ancient civilization also diverted the entire [[Siem Reap River|暹粒河]] to flow through their structures, showing that [[water management|水利管理]] was central to the engineering, not merely symbolic decoration around the temples."
    },
    {
      id: "B",
      answer: "lidar",
      text:
        "[[LiDAR data|激光雷達數據]] revealed a vast grid of 280 large [[earth mounds|土丘]] at Angkor Wat and mysterious [[coil-shaped embankments|螺旋形堤壩]] over a mile long. The layout, especially the spirals and grids, visually resembles a [[circuit board|電路板]]. The presenter claims the most problematic LiDAR images challenging the [[mainstream narrative|主流說法]] have been largely ignored, with very few released and no public access to the [[source data|原始數據]]."
    },
    {
      id: "C",
      answer: "lost-tech",
      text:
        "Spindles and pillars show clear signs of [[lathe turning|車床加工]], implying machining beyond simple hand tools. Giant multi-ton stone [[lingams|林伽]] are linked to ancient texts describing infinite columns of fire or light, suggesting possible [[energy devices|能量裝置]] rather than purely religious symbols. The presenter argues there were two industries: an older civilization produced highly polished masterworks in [[hard sandstone|硬砂岩]], while the later [[Khmer Empire|高棉帝國]] emulated them poorly in softer sandstone and brick — side-by-side statue comparisons support this [[old-versus-new contrast|新舊對比]]."
    },
    {
      id: "D",
      answer: "koh-ker",
      text:
        "Official history says King Jayavarman IV built the entire massive site of [[Koh Ker|貢開]], including a [[seven-tier pyramid|七層金字塔]], a seven-kilometre dam and a 2,000-acre reservoir, in just twenty years during a [[power struggle|權力鬥爭]]. The alternative view is that he merely claimed an existing ancient masterpiece."
    },
    {
      id: "E",
      answer: "global-style",
      text:
        "Cambodian statues show uncanny similarities to art from [[ancient Egypt|古埃及]] and [[Assyria|亞述]], including brow ridges, coiled hair and lion paws. Giant lingams in roofless structures also parallel examples in India facing north, suggesting [[cross-cultural links|跨文化聯繫]]."
    }
  ]
};
