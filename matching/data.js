/**
 * Headline ↔ paragraph matching.
 * Five headlines, six paragraphs (one distractor).
 */
window.MATCH_DATA = {
  title: "Match headlines to paragraphs",
  titleZh: "標題配段落",
  instructions:
    "Read each headline and choose the paragraph (A–F) that best matches it. Each paragraph is used at most once. Green = correct, red = try again.",
  instructionsZh:
    "睇每個標題，揀最啱嘅段落 (A–F)。每段最多用一次。綠色 = 啱，紅色 = 再試。",
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
      id: "privacy",
      text: "Online privacy guidelines underscore key role of parents and teachers",
      url: "https://www.scmp.com/opinion/comment/article/3351557/online-privacy-guidelines-underscore-key-role-parents-and-teachers",
      answer: "A",
      hatQuestions: {
        red: "How do you feel when you post photos or personal details online?",
        white: "What online activities are expanding children\u2019s digital footprints today?",
        yellow: "How could parents and teachers working together improve children\u2019s online safety?",
        green: "What creative ways could schools teach students about privacy beyond a normal lesson?",
        blue: "What steps from a privacy guide would you put in place first at home or school?",
        black: "What could go wrong if children keep sharing personal data casually online?"
      }
    },
    {
      id: "teacher-assault",
      text: "Hong Kong woman feared reporting teacher over assaults would harm him",
      url: "https://www.scmp.com/news/hong-kong/law-and-crime/article/3356802/woman-feared-reporting-teacher-over-assaults-would-be-too-cruel-court-hears",
      answer: "B",
      hatQuestions: {
        red: "How would you feel if you feared reporting someone in authority would hurt them?",
        white: "What facts does the court case tell us about the timeline and charges?",
        yellow: "What positive outcomes could come from victims feeling safe to report abuse?",
        green: "What new support system could a school invent to help students speak up?",
        blue: "What practical process should schools follow when a student makes a serious accusation?",
        black: "What could go wrong if schools do not act quickly on reports of abuse?"
      }
    },
    {
      id: "data-breach",
      text: "Personal info of 9,045 people compromised in Hong Kong private club data breach",
      url: "https://www.scmp.com/news/hong-kong/society/article/3351143/personal-info-9045-people-compromised-hong-kong-private-club-data-breach",
      answer: "F",
      hatQuestions: {
        red: "How would you feel if your personal data from a club membership was leaked?",
        white: "How many people were affected and what type of attack caused the breach?",
        yellow: "What benefits could come from organisations taking data protection more seriously?",
        green: "What innovative technology could clubs use to protect member data?",
        blue: "What should a club do immediately after discovering a ransomware attack?",
        black: "What harm could members face when thousands of people\u2019s personal info is compromised?"
      }
    },
    {
      id: "intern-doctor",
      text: "Intern doctor arrested for allegedly accessing patient data without authorisation",
      url: "https://www.scmp.com/news/hong-kong/health-environment/article/3356960/hong-kong-hospital-authority-sacks-intern-doctor-over-series-breaches",
      answer: "D",
      hatQuestions: {
        red: "How would you feel as a patient knowing a doctor accessed records without permission?",
        white: "What happened at Caritas Medical Centre according to the report?",
        yellow: "How could stricter rules still allow interns to learn without risking patient privacy?",
        green: "What new system could hospitals design to monitor who accesses patient files?",
        blue: "What practical checks should hospitals have before staff can open patient records?",
        black: "What could go wrong if hospital staff can browse patient data without proper controls?"
      }
    },
    {
      id: "baby-danny",
      text: "Baby Danny DNA case sparks calls for Hong Kong to introduce home birth rules",
      url: "https://www.scmp.com/news/hong-kong/society/article/3355908/dna-test-confirms-baby-danny-hong-kong-save-lily-couples-son",
      answer: "C",
      hatQuestions: {
        red: "How would you feel about handing over your baby\u2019s DNA and family details to the government?",
        white: "What did the DNA test data confirm, and what registration records were still missing?",
        yellow: "How could clearer rules protect families\u2019 personal and medical data during birth registration?",
        green: "What secure digital system could let parents submit DNA and identity data without repeated paperwork?",
        blue: "What personal data and documents must parents provide before a birth can be officially registered?",
        black: "What could go wrong if a baby\u2019s DNA results, guardianship files or family records are lost or made public?"
      }
    }
  ],
  paragraphs: [
    {
      id: "A",
      text:
        "This may sound like common sense. But it underscores the supervisory role of parents and teachers as the digital world reaches users of a younger age. From running their own social media accounts and chatting to AI chatbots to playing online games and attending virtual classes, children are expanding their digital footprints more than ever today. But many may not be aware of the privacy and security risks behind the fun and convenience of such activities. The privacy watchdog has rightly warned that when children share their personal data casually online, it may result in cyberbullying, doxxing or other misuses."
    },
    {
      id: "B",
      text:
        "A Hong Kong woman who has accused her former school teacher of sexually assaulting her over a period of nearly five years has told the court she initially feared reporting the case because it would cause him serious repercussions. The defendant, Cheng Hon-sze, 32, appeared in court on Thursday where he pleaded not guilty to nine counts of indecent assault involving his former student. The alleged offences took place between November 2019 and June 2024, when she was aged between 14 and 19 years old."
    },
    {
      id: "C",
      text:
        "The father, Tsang Wai-bong, told the South China Morning Post that he had scheduled a meeting with government social workers on Saturday regarding the guardianship of his two-month-old son Danny, who has been placed in a care home. Authorities said on Thursday that DNA test results confirmed Tsang and his partner Kwan Pui-sin were Danny\u2019s parents, but more evidence was needed before the birth registration could be completed."
    },
    {
      id: "D",
      text:
        "An intern doctor has been arrested by Hong Kong police on suspicion of accessing patient data without authorisation and fired from her hospital, according to an insider and medical authorities. A source said the 24-year-old woman was arrested on Friday evening after allegedly accessing a computer with dishonest intent at Caritas Medical Centre in Sham Shui Po. She was being detained for investigation, the insider added."
    },
    {
      id: "E",
      text:
        "The Office of the Privacy Commissioner for Personal Data on Thursday also released a guide for parents and teachers to safeguard children\u2019s online privacy amid increasing risks facing youngsters online."
    },
    {
      id: "F",
      text:
        "Revealing the data breach, Privacy Commissioner for Personal Data Ada Chung Lai-ling said the private recreational club notified the office on October 31 last year that a ransomware attack had rendered its club management system inoperable by encrypting the information system\u2019s files stored on a server."
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
