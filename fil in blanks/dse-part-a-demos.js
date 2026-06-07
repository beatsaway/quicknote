/**
 * DSE Part A Level 5+ demos — pop-up shop, school fair speech, restaurant review.
 * Word / phrase fill-in — dropdown exercise (EN + 粵 in vocab bank).
 */
window.DSE_PART_A_DEMOS = {
  title: "DSE Part A — Level 5+ Writing Demos",
  subtitle: "2022 Pop-up shop · 2021 School fair · 2020 Restaurant review · 填空格",
  instructions:
    "Choose the best word or phrase from each dropdown. Use the vocabulary bank for help. Green = correct, red = try again.",
  instructionsZh:
    "喺每個下拉選單揀最啱嘅字詞。可參考詞庫。綠色 = 啱，紅色 = 再試。",

  vocabBank: [
    {
      category: "2022 — Pop-up shop",
      categoryYue: "快閃店申請表",
      words: [
        { text: "committed（致力於）" },
        { text: "accessible（人人可及）" },
        { text: "eco-friendly（環保）" },
        { text: "eco-conscious（具環保意識）" },
        { text: "flagship（旗艦）" },
        { text: "reusable（可重用）" },
        { text: "hands-on（實操）" },
        { text: "foot traffic（人流）" },
        { text: "engage（吸引參與）" },
        { text: "win-win（雙贏）" }
      ]
    },
    {
      category: "2021 — School fair speech",
      categoryYue: "學園祭演講",
      words: [
        { text: "thrilled（非常興奮）" },
        { text: "anticipated（備受期待）" },
        { text: "mark your calendars（記低日期）" },
        { text: "alumni（校友）" },
        { text: "mouth-watering（令人垂涎）" },
        { text: "showcase（展示）" },
        { text: "test your luck（試試運氣）" },
        { text: "former students（舊生）" },
        { text: "setup（佈置）" }
      ]
    },
    {
      category: "2020 — Restaurant review",
      categoryYue: "餐廳評論",
      words: [
        { text: "honest take（中肯評價）" },
        { text: "snap（爽脆）" },
        { text: "letdown（令人失望）" },
        { text: "inattentive（疏忽）" },
        { text: "flag down（招手叫）" },
        { text: "overwhelmed（應接不暇）" },
        { text: "stylish（時尚有格調）" },
        { text: "overhear（聽到）" },
        { text: "caveats（保留條件）" },
        { text: "off-peak（非繁忙時段）" },
        { text: "attentive（周到）" },
        { text: "verdict（總評）" }
      ]
    }
  ],

  tasks: [
    {
      id: 1,
      label: "2022 Part A",
      title: "Pop-up Shop Application Form",
      titleYue: "快閃店申請表",
      subsections: [
        {
          heading: "A. Company Profile",
          parts: [
            "Planet Smart is a Hong Kong-based company ",
            { blank: 1 },
            " to making sustainable living ",
            { blank: 2 },
            " for everyone. Since our establishment in 2018, we have helped over 10,000 customers reduce their plastic waste by offering ",
            { blank: 3 },
            ", affordable alternatives to everyday products. We would bring a ",
            { blank: 4 },
            " green retail experience to your shopping centre, attracting ",
            { blank: 5 },
            " consumers who care about the planet."
          ],
          blanks: {
            1: {
              answers: ["committed"],
              options: ["committed", "dedicated", "limited", "opposed", "reluctant", "uncertain"]
            },
            2: {
              answers: ["accessible"],
              options: ["accessible", "expensive", "exclusive", "hidden", "remote", "difficult"]
            },
            3: {
              answers: ["eco-friendly"],
              options: ["eco-friendly", "plastic", "harmful", "outdated", "luxury", "imported"]
            },
            4: {
              answers: ["unique"],
              options: ["unique", "boring", "ordinary", "temporary", "risky", "identical"]
            },
            5: {
              answers: ["eco-conscious"],
              options: ["eco-conscious", "careless", "indifferent", "budget", "random", "impatient"]
            }
          }
        },
        {
          heading: "B. Best-selling Product",
          parts: [
            "Our ",
            { blank: 6 },
            " product is the \"SmartKitchen\" starter set \u2013 a ",
            { blank: 7 },
            ", durable, and stylish alternative to plastic wrap and bags. Customers love it because one set replaces 100 rolls of plastic wrap per year. It is made from organic cotton and beeswax, and it comes in a beautiful gift box. With over 15,000 units sold, this is the product that ",
            { blank: 8 },
            " customers through the door."
          ],
          blanks: {
            6: {
              answers: ["flagship"],
              options: ["flagship", "cheapest", "failed", "secret", "borrowed", "outdated"]
            },
            7: {
              answers: ["reusable"],
              options: ["reusable", "disposable", "fragile", "single-use", "plastic", "wasteful"]
            },
            8: {
              answers: ["draws"],
              options: ["draws", "drives away", "confuses", "bores", "limits", "replaces"]
            }
          }
        },
        {
          heading: "C. In-store Event",
          parts: [
            "To attract customers, we would host a weekly \"Plastic-Free Saturday\" workshop. From 2pm to 4pm, shoppers can join a 30-minute ",
            { blank: 9 },
            " session where they learn to make their own beeswax wraps. Workshops are free, and participants who bring their own container get a 10% discount. This event will drive ",
            { blank: 10 },
            " on weekend afternoons and ",
            { blank: 11 },
            " families with young children \u2013 a ",
            { blank: 12 },
            " for the shopping centre."
          ],
          blanks: {
            9: {
              answers: ["hands-on"],
              options: ["hands-on", "theoretical", "silent", "online-only", "boring", "lengthy"]
            },
            10: {
              answers: ["foot traffic"],
              options: ["foot traffic", "bad reviews", "empty aisles", "late deliveries", "high costs", "long queues only"]
            },
            11: {
              answers: ["engage"],
              options: ["engage", "ignore", "exclude", "discourage", "replace", "confuse"]
            },
            12: {
              answers: ["win-win"],
              options: ["win-win", "problem", "loss", "mistake", "burden", "deadline"]
            }
          }
        }
      ]
    },
    {
      id: 2,
      label: "2021 Part A",
      title: "School Fair Morning Assembly Speech",
      titleYue: "學園祭早會演講",
      subsections: [
        {
          heading: "Speech",
          parts: [
            "Good morning, Principal, teachers and fellow students.\n\nI'm ",
            { blank: 1 },
            " to stand here today to announce the most ",
            { blank: 2 },
            " event of the year \u2013 our annual School Fair! Please ",
            { blank: 3 },
            " your calendars for Saturday, 29th May, from 12pm to 4pm right here on our school campus.\n\nTickets are just $10, and everyone is welcome \u2013 current students, teachers, families, friends, and even past graduates. Yes, ",
            { blank: 4 },
            "! This is a day for our entire school community.\n\nSo, what can you expect? We have something for everyone. Our food stalls will be serving ",
            { blank: 5 },
            " homemade treats and international snacks. Our talented students will ",
            { blank: 6 },
            " their talents on stage with live music, dance, and drama performances. You can also ",
            { blank: 7 },
            " at our game booths \u2013 with amazing prizes to be won! And don't miss the alumni football match where our ",
            { blank: 8 },
            " students will take on our current team.\n\nBut here's the important thing \u2013 we cannot do this ",
            { blank: 9 },
            ". We need YOU! If you want to help run a game stall, serve food, or help with ",
            { blank: 10 },
            ", simply email Chris Wong at chriswong@hkbs.edu.hk by this Wednesday.\n\nLet's work together and make this the best school fair ever. Thank you for your support \u2013 see you on the 29th!"
          ],
          blanks: {
            1: {
              answers: ["thrilled"],
              options: ["thrilled", "reluctant", "confused", "bored", "nervous only", "unwilling"]
            },
            2: {
              answers: ["anticipated"],
              options: ["anticipated", "forgotten", "cancelled", "minor", "secret", "unexpected"]
            },
            3: {
              answers: ["mark"],
              options: ["mark", "erase", "ignore", "delete", "forget", "cancel"]
            },
            4: {
              answers: ["alumni"],
              options: ["alumni", "strangers", "competitors", "detractors", "newcomers only", "staff only"]
            },
            5: {
              answers: ["mouth-watering"],
              options: ["mouth-watering", "tasteless", "bland", "stale", "boring", "plain"]
            },
            6: {
              answers: ["showcase"],
              options: ["showcase", "hide", "cancel", "ignore", "criticise", "replace"]
            },
            7: {
              answers: ["test your luck"],
              options: ["test your luck", "give up early", "leave immediately", "pay extra", "skip games", "stay silent"]
            },
            8: {
              answers: ["former"],
              options: ["former", "future", "rival", "visiting", "random", "current only"]
            },
            9: {
              answers: ["alone"],
              options: ["alone", "together already", "without effort", "for free", "by accident", "quickly"]
            },
            10: {
              answers: ["setup"],
              options: ["setup", "cleanup only", "complaints", "delays", "excuses", "resignations"]
            }
          }
        }
      ]
    },
    {
      id: 3,
      label: "2020 Part A",
      title: "Restaurant Review — Dim Sum One",
      titleYue: "點心餐廳評論",
      subsections: [
        {
          heading: "Review",
          parts: [
            "Title: Honest review of Dim Sum One \u2013 delicious but overrated?\n\nI finally tried Dim Sum One after weeks of hearing about it, and here's my ",
            { blank: 1 },
            " take.\n\nFood (4/5) \u2013 The dim sum were mostly excellent. The har gow had a nice ",
            { blank: 2 },
            " and freshness, with juicy prawns. The barbecue pork buns were fluffy, soft, and delicious. However, the siu mai were a ",
            { blank: 3 },
            " \u2013 they tasted like frozen supermarket ones and were too oily. So, a mixed bag.\n\nService (2/5) \u2013 This was the weakest part. The staff were friendly at first, but once the restaurant got busy, they became ",
            { blank: 4 },
            " and hard to ",
            { blank: 5 },
            ". We waited 15 minutes just to get our tea refilled. One waiter was helpful, but the rest seemed ",
            { blank: 6 },
            ".\n\nDining environment (3/5) \u2013 The atmosphere is ",
            { blank: 7 },
            " with a nice harbour view, but the tables are way too close together. I could ",
            { blank: 8 },
            " my neighbour's conversation. It's also quite noisy, so not great for a romantic date. Fine for families with older kids, though.\n\nPrice (3/5) \u2013 Most small dishes are $48\u2013$68, which is reasonable for decent dim sum. But a small plate of vegetables cost $88 \u2013 that's ridiculous! With tea and service charge, our bill for two was over $400.\n\nFinal ",
            { blank: 9 },
            " \u2013 Would I recommend it? Yes, but with ",
            { blank: 10 },
            ". Go for the food, but go during ",
            { blank: 11 },
            " hours when it's less crowded. Skip it if you want ",
            { blank: 12 },
            " service or a quiet, romantic dinner.\n\nRating: \u2b50\u2b50\u2b50 (3/5)"
          ],
          blanks: {
            1: {
              answers: ["honest"],
              options: ["honest", "biased", "fake", "paid", "confused", "silent"]
            },
            2: {
              answers: ["snap"],
              options: ["snap", "mush", "smell", "colour", "price", "delay"]
            },
            3: {
              answers: ["letdown"],
              options: ["letdown", "highlight", "surprise hit", "bargain", "masterpiece", "delight"]
            },
            4: {
              answers: ["inattentive"],
              options: ["inattentive", "attentive", "cheerful", "efficient", "eager", "rested"]
            },
            5: {
              answers: ["flag down"],
              options: ["flag down", "praise", "ignore", "hire", "replace", "promote"]
            },
            6: {
              answers: ["overwhelmed"],
              options: ["overwhelmed", "relaxed", "bored", "understaffed only", "excited", "ready"]
            },
            7: {
              answers: ["stylish"],
              options: ["stylish", "dirty", "plain", "cramped only", "dark", "cheap-looking"]
            },
            8: {
              answers: ["overhear"],
              options: ["overhear", "miss", "enjoy", "start", "finish", "record"]
            },
            9: {
              answers: ["verdict"],
              options: ["verdict", "menu", "receipt", "introduction", "joke", "question"]
            },
            10: {
              answers: ["caveats"],
              options: ["caveats", "guarantees", "refunds", "discounts", "apologies", "reservations"]
            },
            11: {
              answers: ["off-peak"],
              options: ["off-peak", "peak", "holiday", "lunch-only", "midnight", "weekend-only"]
            },
            12: {
              answers: ["attentive"],
              options: ["attentive", "slow", "rude", "silent", "expensive", "casual"]
            }
          }
        }
      ]
    }
  ]
};
