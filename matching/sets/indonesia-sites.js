/**
 * Indonesia & SE Asia — headline ↔ paragraph matching.
 */
window.MATCH_DATA = {
  title: "Indonesia mysteries",
  titleZh: "印尼謎團",
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
      id: "gunung-padang",
      text: "West Java hill may be a 25,000-year-old man-made pyramid",
      hatQuestions: {
        red: "How do you feel about a pyramid older than Egypt hidden in West Java?",
        white: "What evidence supports the Gunung Padang age claim?",
        yellow: "What could open archaeology in Indonesia reveal if disputes were settled fairly?",
        green: "What documentary opening scene would you film at Gunung Padang?",
        blue: "How do ground-penetrating radar and radiocarbon dating work together here?",
        black: "Why did other geologists pressure for retraction of the 2023 paper?"
      }
    },
    {
      id: "hobbits",
      text: "Meter-tall \u201cHobbits\u201d lived on Flores until about 50,000 years ago",
      hatQuestions: {
        red: "How would you feel meeting a one-metre-tall human relative?",
        white: "What is Homo floresiensis and when was it found?",
        yellow: "What might Hobbit discoveries teach us about human diversity?",
        green: "What children\u2019s book would you write about the Flores Hobbits?",
        blue: "How can scientists date when Homo sapiens arrived on Flores?",
        black: "Why is it wrong to call them Hobbits as if they were fantasy creatures only?"
      }
    },
    {
      id: "borobudur",
      text: "World\u2019s largest Buddhist monument was deliberately buried",
      hatQuestions: {
        red: "How do you feel knowing Borobudur was buried on purpose?",
        white: "What happened to Borobudur around the 10th century AD?",
        yellow: "What cultural value comes from restoring buried heritage sites?",
        green: "What reason would you invent for sealing the hidden foot gallery?",
        blue: "How could archaeologists prove burial was deliberate rather than accidental?",
        black: "Why would burying the world\u2019s largest Buddhist monument be so difficult?"
      }
    },
    {
      id: "leang-art",
      text: "Sulawesi cave painting dated to 45,500 years may be oldest narrative art",
      hatQuestions: {
        red: "How exciting is the idea of 45,500-year-old story art in Sulawesi?",
        white: "What does the Leang Tedongnge painting depict and how old is it?",
        yellow: "How could Southeast Asian art change how we view early human creativity?",
        green: "What modern mural would echo the hybrid hunters painting?",
        blue: "How do researchers date cave paintings scientifically?",
        black: "Why did many old accounts underestimate art in Southeast Asia?"
      }
    },
    {
      id: "bada-valley",
      text: "Sulawesi granite megaliths have no local tradition of who built them",
      hatQuestions: {
        red: "How mysterious do nameless giant statues feel to you?",
        white: "How many statues stand in the Bada Valley and how tall are they?",
        yellow: "What community benefits could careful study of megaliths bring?",
        green: "What legend would you write to explain who built the statues?",
        blue: "How could oral history and archaeology be combined in Bada Valley?",
        black: "Why is missing local tradition not proof of alien builders?"
      }
    },
    {
      id: "prambanan",
      text: "Java temple features andesite carvings harder than the tools of its era",
      hatQuestions: {
        red: "How do you react to carvings thinner than 5 mm with no tool marks?",
        white: "What stone is Prambanan built from and how hard is it?",
        yellow: "What skills might temple builders teach craftspeople today?",
        green: "What tool from science fiction would carve andesite so finely?",
        blue: "How did GPR scans in 2022 add to the Prambanan mystery?",
        black: "Why is hardness alone not proof of impossible technology?"
      }
    },
    {
      id: "lake-toba",
      text: "Sumatra supervolcano eruption may have shrunk humanity to thousands",
      hatQuestions: {
        red: "How frightening is an eruption that may have nearly wiped out humans?",
        white: "When did Lake Toba erupt and what effects did it have?",
        yellow: "What disaster planning could modern societies learn from Toba?",
        green: "What survival story would you set during the volcanic winter?",
        blue: "How do geneticists estimate past population bottlenecks?",
        black: "Why is it hard to be certain how few humans survived Toba?"
      }
    }
  ],
  paragraphs: [
    {
      id: "A",
      answer: "gunung-padang",
      text:
        "In 2011, geologist Danny Hilman Natawidjaja used [[ground-penetrating radar|穿透雷達]] on a hill in [[West Java|西爪哇]] and found four distinct [[construction layers|建築層次]]. [[Radiocarbon dating|放射性碳素定年]] of organic material from the deepest layer suggested an age of 20,000 to 25,000 years — far older than the [[Egyptian pyramids|埃及金字塔]] if correct. A 2023 [[peer-reviewed paper|同儕評審論文]] claiming that [[Gunung Padang|岡望巴當]] is a [[man-made pyramid|人造金字塔]] up to 25,000 years old then faced immediate pressure from other geologists for [[retraction|撤回]], and published in Archaeological Prospection, it remains in limbo, neither officially retracted nor confirmed."
    },
    {
      id: "B",
      answer: "hobbits",
      text:
        "In 2003, remains of [[Homo floresiensis|佛羅里斯人]] were found on [[Flores Island|弗洛勒斯島]]. They stood about one metre tall and had brains roughly the size of a grapefruit, yet made complex [[stone tools|石器]] and hunted large animals until about 50,000 years ago, when [[Homo sapiens|現代人類]] arrived in the region."
    },
    {
      id: "C",
      answer: "borobudur",
      text:
        "[[Borobudur|婆羅浮屠]], the world\u2019s largest [[Buddhist monument|佛教建築]], was deliberately buried under [[volcanic ash|火山灰]] and soil around the 10th century AD — burying such a structure would have required immense, deliberate effort rather than simple abandonment. At its base lies a hidden [[foot gallery|底層迴廊]] known as K\u0101madh\u0101tu, with [[reliefs|浮雕]] depicting graphic scenes of sin, punishment and sexuality that builders sealed before the temple was even finished."
    },
    {
      id: "D",
      answer: "leang-art",
      text:
        "In 2019, researchers dated a [[cave painting|洞穴壁畫]] in Leang Tedongnge, [[Sulawesi|蘇拉威西]], to about 45,500 years old. It depicts [[human-animal hybrid|人獸混合]] hunters, suggesting complex [[symbolic thinking|象徵思維]] in Southeast Asia far earlier than many Eurocentric accounts allow."
    },
    {
      id: "E",
      answer: "bada-valley",
      text:
        "About thirty massive [[granite statues|花崗岩雕像]] stand in the [[Bada Valley|巴達谷]] of Sulawesi, ranging from 0.5 to 4.5 metres tall. No local [[oral tradition|口述傳統]] describes who made them, yet fresh flowers and coins still appear at the statues regularly."
    },
    {
      id: "F",
      answer: "prambanan",
      text:
        "[[Prambanan|普蘭巴南]] is built from [[andesite|安山岩]] with a Mohs hardness of about 7, harder than bronze or iron tools of the era. Yet its [[Ramayana reliefs|羅摩耶那浮雕]] are intricate, with details less than 5 mm thick and no visible tool marks. In 2022, [[GPR scans|探地雷達掃描]] under the main temple found subsurface anomalies, but no further data was released."
    },
    {
      id: "G",
      answer: "lake-toba",
      text:
        "About 74,000 years ago, [[Lake Toba|多巴湖]] erupted in a [[super-eruption|超級火山爆發]] that ejected thousands of cubic kilometres of material and caused a [[volcanic winter|火山冬天]]. Geneticists suggest it may have reduced the global human population to only a few thousand individuals."
    }
  ]
};
