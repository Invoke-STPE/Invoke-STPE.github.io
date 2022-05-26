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

    const experience = [
        {
          year: "Apr 2022 - Present",
          title: "Teacher Assistant",
          description:
            "Part-time work. was asked to  help out 1. semester students with their asp.net core assignments.",
          location: "ZBC - Zealand Business College"
        },
        {
          year: "Feb 2018 - Dec 2019",
          title: "IT Support Student",
          description:
            "My work included in-house support, as well as good communication with customers.",
          location: "KL - Kommunernes Landsforening"
        },
      ];
      const education = [
        {
          year: "Sep 2020 - Present",
          title: "Computer Science",
          description:
            "We have learned a lot of various subjects, C#, JavaScript, Internet Technologies, agile developement.",
          location: "ZBC - Zealand Business College"
        },
        {
          year: "Aug 2017 - Dec 2019",
          title: "IT Support Student",
          description:
            "Activities: Troubleshooting, Backup Technology, Mail Server, Networking (Cisco CCNA-Certificering), Computer Technology, Server Technology, Scripting, Wireless Network, Windows Deployment Service, Communication with Customers.",
          location: "ZBC - Ringsted"
        },
      ];
  
    return { projects: projects, experience: experience, education: education  };
  })();
