/**
 * SCMP news — headline ↔ paragraph matching.
 */
window.MATCH_DATA = {
  title: "Match headlines to paragraphs",
  titleZh: "標題配段落",
  hatTypes: [
    { id: "red", emoji: "\uD83D\uDE0A", tag: "red hat", label: "personal" },
    { id: "white", emoji: "\uD83D\uDCCA", tag: "white hat", label: "factual" },
    { id: "yellow", emoji: "\uD83C\uDF1F", tag: "yellow hat", label: "optimistic reasoning" },
    { id: "green", emoji: "\uD83D\uDCA1", tag: "green hat", label: "creative" },
    { id: "blue", emoji: "\uD83D\uDCCB", tag: "blue hat", label: "practical" },
    { id: "black", emoji: "\u26A0\uFE0F", tag: "black hat", label: "critical reasoning" }
  ],
  discussionQuestions: [
    { hat: "red", text: "How do you feel when an app asks for your photo or phone number?" },
    { hat: "white", text: "What kind of personal info do these news stories talk about?" },
    { hat: "yellow", text: "What could make the internet safer and kinder for kids in Hong Kong?" },
    { hat: "green", text: "Design a fun classroom poster: three things not to share online." },
    { hat: "blue", text: "What should you do if a friend posts your photo without asking?" },
    { hat: "black", text: "What could go wrong if a school, hospital, or club loses people\u2019s private data?" }
  ],
  headlines: [
    {
      id: "privacy",
      text: "Online privacy guidelines underscore key role of parents and teachers",
      url: "https://www.scmp.com/opinion/comment/article/3351557/online-privacy-guidelines-underscore-key-role-parents-and-teachers"
    },
    {
      id: "teacher-assault",
      text: "Hong Kong woman feared reporting teacher over assaults would harm him",
      url: "https://www.scmp.com/news/hong-kong/law-and-crime/article/3356802/woman-feared-reporting-teacher-over-assaults-would-be-too-cruel-court-hears"
    },
    {
      id: "data-breach",
      text: "Personal info of 9,045 people compromised in Hong Kong private club data breach",
      url: "https://www.scmp.com/news/hong-kong/society/article/3351143/personal-info-9045-people-compromised-hong-kong-private-club-data-breach"
    },
    {
      id: "intern-doctor",
      text: "Intern doctor arrested for allegedly accessing patient data without authorisation",
      url: "https://www.scmp.com/news/hong-kong/health-environment/article/3356960/hong-kong-hospital-authority-sacks-intern-doctor-over-series-breaches"
    },
    {
      id: "baby-danny",
      text: "Baby Danny DNA case sparks calls for Hong Kong to introduce home birth rules",
      url: "https://www.scmp.com/news/hong-kong/society/article/3355908/dna-test-confirms-baby-danny-hong-kong-save-lily-couples-son"
    }
  ],
  paragraphs: [
    {
      id: "A",
      answer: "privacy",
      text:
        "This may sound like common sense. But it underscores the [[supervisory role|監督角色]] of [[parents and teachers|家長同老師]] as the digital world reaches users of a younger age. From running their own [[social media accounts|社交媒體帳戶]] and chatting to [[AI chatbots|人工智能聊天機器人]] to playing online games and attending virtual classes, children are expanding their [[digital footprints|數碼足跡]] more than ever today. But many may not be aware of the [[privacy and security risks|私隱同保安風險]] behind the fun and convenience of such activities. The [[privacy watchdog|私隱專員公署]] has rightly warned that when children share their [[personal data|個人資料]] casually online, it may result in [[cyberbullying|網絡欺凌]], [[doxxing|起底]] or other misuses."
    },
    {
      id: "B",
      answer: "teacher-assault",
      text:
        "A Hong Kong woman who has accused her former school teacher of [[sexually assaulting|性侵犯]] her over a period of nearly five years has told the court she initially feared reporting the case because it would cause him serious repercussions. The defendant, Cheng Hon-sze, 32, appeared in court on Thursday where he [[pleaded not guilty|不認罪]] to nine counts of [[indecent assault|非禮]] involving his former student. The alleged offences took place between November 2019 and June 2024, when she was aged between 14 and 19 years old."
    },
    {
      id: "C",
      answer: "baby-danny",
      text:
        "The father, Tsang Wai-bong, told the South China Morning Post that he had scheduled a meeting with government social workers on Saturday regarding the [[guardianship|監護權]] of his two-month-old son Danny, who has been placed in a [[care home|育嬰院]]. Authorities said on Thursday that [[DNA test|DNA 測試]] results confirmed Tsang and his partner Kwan Pui-sin were Danny\u2019s parents, but more evidence was needed before the [[birth registration|出生登記]] could be completed."
    },
    {
      id: "D",
      answer: "intern-doctor",
      text:
        "An intern doctor has been arrested by Hong Kong police on suspicion of accessing [[patient data|病人資料]] [[without authorisation|未經授權]] and fired from her hospital, according to an insider and medical authorities. A source said the 24-year-old woman was arrested on Friday evening after allegedly accessing a computer with [[dishonest intent|不誠實意圖]] at Caritas Medical Centre in Sham Shui Po. She was being detained for investigation, the insider added."
    },
    {
      id: "E",
      answer: "privacy",
      text:
        "The [[Office of the Privacy Commissioner for Personal Data|個人資料私隱專員公署]] on Thursday also released a guide for parents and teachers to safeguard children\u2019s [[online privacy|網上私隱]] amid increasing risks facing youngsters online."
    },
    {
      id: "F",
      answer: "data-breach",
      text:
        "Revealing the [[data breach|資料外洩]], Privacy Commissioner for Personal Data Ada Chung Lai-ling said the private recreational club notified the office on October 31 last year that a [[ransomware attack|勒索軟件攻擊]] had rendered its club management system inoperable by [[encrypting|加密]] the information system\u2019s files stored on a server."
    }
  ],
  writingTasks: [
    {
      format: "Letter to the editor",
      formatZh: "讀者來信",
      words: "120–150",
      prompt:
        "The Privacy Commissioner has released guidelines on children\u2019s online privacy. Write a letter to the editor of the South China Morning Post explaining what schools and parents should do to reduce cyberbullying, doxxing and other misuses of students\u2019 personal data.",
      focus: "online privacy \u00b7 parents and teachers"
    },
    {
      format: "Blog post",
      formatZh: "網誌",
      words: "150–180",
      prompt:
        "Imagine you are a member of a Hong Kong private club whose personal data was leaked in a ransomware attack. Write a blog post describing how the breach affects members and what steps people should take to protect their identity and financial information.",
      focus: "club data breach \u00b7 9,045 members"
    },
    {
      format: "School assembly speech",
      formatZh: "早會演講",
      words: "120–150",
      prompt:
        "You are a Form 5 student leader. Write a speech for morning assembly on why classmates must protect their digital footprints when using social media, AI chatbots and online games. Give practical advice on what personal data not to share.",
      focus: "children\u2019s digital footprints"
    },
    {
      format: "Formal letter",
      formatZh: "正式信函",
      words: "150–180",
      prompt:
        "Write to the Hospital Authority as a patient representative. Propose new rules to prevent hospital staff from accessing patient records without authorisation. Refer to the intern doctor case and explain how patient confidentiality should be protected.",
      focus: "patient data \u00b7 hospital records"
    },
    {
      format: "Opinion article",
      formatZh: "評論文章",
      words: "180–220",
      prompt:
        "Write an opinion article titled \u201cHong Kong must do more to protect sensitive family data.\u201d Use the Baby Danny DNA case to discuss how DNA results, guardianship files and birth registration records should be handled securely and kept private.",
      focus: "DNA data \u00b7 birth registration"
    },
    {
      format: "Proposal",
      formatZh: "建議書",
      words: "150–180",
      prompt:
        "Your school wants to collect more student data for apps, online learning and AI tools. Write a proposal to the school board explaining the privacy risks and recommending a clear data policy on what information can be collected, stored and shared.",
      focus: "school data policy"
    }
  ]
};
