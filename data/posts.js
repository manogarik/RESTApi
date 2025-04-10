// Creating the simple data structures we'll work with.
// How we choose to store and organize this data is very important!
// Different options and techniques for storing data and
// creating relationships between different data sets will be
// explored during lessons on database integrations and techniques.

// The "posts" data will include information about
// social media posts that the users make.
const posts = [
    {
      id: 1,
      userId: 1,
      title: "Inflation and economic growth remain key concerns, with potential policy shifts. ",
      content:
      "US inflation cooled to a six-month low in March, but tariff pressures are quickly mounting"   },
    {
      id: 2,
      userId: 1,
      title: "Here's when iPhones may get more expensive",
      content:
      "President Donald Trump's tariffs on foreign goods - specifically those sourced from China - are expected to heighten the prices of everyday tech products, from iPhones to laptops, cars and even smaller gadgets like headphones and computer mice"
    },
    {
      id: 3,
      userId: 1,
      title: "Trump to extend TikTok ban enforcement deadline after China tariffs derail deal",
      content:
        "President Donald Trump announced on Friday that he will again postpone enforcement of the TikTok sale-or-ban law for 75 days",
    },
    {
      id: 4,
      userId: 2,
      title: "AI might be scanning your resume. Here's what job hunters should know",
      content:
        "With some job postings attracting hundreds or thousands of applications, companies are increasingly using AI to sort through applicants before they reach a human recruiter",
    },
    {
      id: 5,
      userId: 2,
      title: "US stocks skyrocket higher after Trump signals shift in trade policy",
      content:
      "US stocks skyrocketed higher after President Donald Trump announced that he authorized a 90-day pause on the “reciprocal” tariffs that had gone into effect Wednesday, with the exception of China"
    },
    {
      id: 6,
      userId: 2,
      title: "Prices are rising. See how much the cost of basic grocery items has changed",
      content:
        "The cost of food in the US increased significantly amid the Covid-19 pandemic and the steep inflation that followed. While prices have stabilized more recently, new factors have already driven up the costs for eggs and threaten to increase them for other common household foods",
    },
    {
      id: 7,
      userId: 3,
      title: "Car prices will go up. Taking the train or a bus looks like a bargain",
      content:
        "President Donald Trump's auto tariffs are expected to lift car prices by thousands of dollars. That's an opportunity for America's trains and buses",
    },
    {
      id: 8,
      userId: 3,
      title: "Trump announces new auto tariffs in a major trade war escalation",
      content:
        "President Donald Trump on Wednesday announced 25% tariffs on all cars shipped to the United States, a significant escalation in a global trade war",
    },
    {
      id: 9,
      userId: 3,
      title: "The US-China trade escalation has no end in sight. Here's why Beijing's not backing down",
      content:
        "Trump announced a three-month pause Wednesday on all the “reciprocal” tariffs that had gone into effect hours earlier - with one exception, deepening a confrontation set to dismantle trade between the world's two largest economies",
    },
  ];
  
  module.exports = posts;