window.Seed = (function () {
    const projects = [
      {
        id: 1,
        title: "MoodMedia",
        description:
          "MoodMedia is a web application that is design to play music based on the weather",
        image: "images/undraw_moodmedia.svg",
        gitHub: "https://github.com/Invoke-STPE/MoodMedia",
        livePreview: "https://www.google.com",
        construction: false,
      },
      {
        id: 2,
        title: "MonaLund",
        description:
          "This is a personal website, created for my mother-in-law.",
        image: "images/undraw_under_construction.svg",
        gitHub: "https://github.com/Invoke-STPE/MoodMedia",
        livePreview: "#",
        construction: true,
      },
      {
        id: 3,
        title: "JokeApp",
        description:
          "A Mandatory Assigment for my Web Development subject.",
        image: "images/undraw_jokeapp.svg",
        gitHub: "https://github.com/Invoke-STPE/JokeApp",
        livePreview: "#",
        construction: false,
      },
      {
        id: 4,
        title: "VideoTime",
        description:
          "A personal project, create for IAmTimCorey Challenge, gets duration of videos in a folder.",
        image: "images/undraw_under_construction.svg",
        gitHub: "https://github.com/Invoke-STPE/VideoTime",
        livePreview: "#",
        construction: true,
      },
      {
        id: 5,
        title: "EmailSystem",
        description:
          "A small project for my self-chosen learning class, focusing on dependency injection and Appsettings.json",
        image: "images/undraw_emailsystem.svg",
        gitHub: "https://github.com/Invoke-STPE/EmailSystem",
        livePreview: "#",
        construction: false,
      },
      {
        id: 6,
        title: "ZealandDimselab",
        description:
          "Group Project, created for 2. semester assigment, this is a refactored forked by me.",
        image: "images/undraw_zealanddimselab.svg",
        gitHub: "https://github.com/Invoke-STPE/EmailSystem",
        livePreview: "#",
        construction: false,
      },
    ];

    const timelineEvents = [
        {
          id: 1,
          year: "2011",
          title: "landscape gardener",
          description:
            "My first entry into adult life, while my gardening skills didn't exactly transfer towards my career change, I've still learned valuable life skills.",
          skills: [
            "Punctuality, meeting on time is important.",
            "Responsibility, being accountable for your failures and successes. ",
            "Provide service, and deliver a nice piece of work ",
          ],
        },
        {
          id: 2,
          year: "2016",
          title: "10th class VUC Vestegnen",
          description:
            "My first entry into adult life, while my gardening skills didn't exactly transfer towards my career change, I've still learned valuable life skills.",
          skills: [
            "Punctuality, meeting on time is important.",
            "Responsibility, being accountable for your failures and successes. ",
            "Provide service, and deliver a nice piece of work ",
          ],
        },
        {
          id: 3,
          year: "2017",
          title: "IT-Support Student at Kommunernes Landsforening (KL)",
          description:
            "My job at Kommernes LandsForening was a first step into the IT field, this is where I first had a taste for scripting which would lead to towards software development.",
          skills: [
            "Punctuality, meeting on time is important.",
            "Responsibility, being accountable for your failures and successes. ",
            "Provide service, and deliver a nice piece of work ",
          ],
        },
        {
          id: 4,
          year: "2020",
          title: "Computer Science Student at Zealand Bussiness College.",
          description: "Current level.",
          skills: [
            "Punctuality, meeting on time is important.",
            "Responsibility, being accountable for your failures and successes. ",
            "Provide service, and deliver a nice piece of work ",
          ],
        },
      ];
  
    return { projects: projects, timelineEvents: timelineEvents  };
  })();