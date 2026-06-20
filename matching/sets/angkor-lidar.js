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
  discussionQuestions: [
    { hat: "red", text: "Would you be more excited or nervous to explore Angkor at night?" },
    { hat: "white", text: "Name one huge thing the ancient Khmer built — a giant lake, a temple, or a pyramid city." },
    { hat: "yellow", text: "What cool fact about Angkor would you tell a friend?" },
    { hat: "green", text: "If Angkor were a video game, what would the final treasure be?" },
    { hat: "blue", text: "What three things would you pack for a school trip to Cambodia?" },
    { hat: "black", text: "Which sounds too wild — a whole city built in 20 years, or stone carved like a machine?" }
  ],
  headlines: [
    { id: "berets", text: "Hand-cut reservoirs moved dirt equal to dozens of Great Pyramids" },
    { id: "lidar", text: "LiDAR revealed spiral embankments resembling a circuit board" },
    { id: "lost-tech", text: "Lathe-turned pillars and giant lingams suggest advanced machining" },
    { id: "koh-ker", text: "Entire city of Koh Ker allegedly built in only 20 years" },
    { id: "global-style", text: "Statue styles echo Egypt, Assyria and ancient India" }
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
