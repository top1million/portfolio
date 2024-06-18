/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "AbuHashish",
  title: "Hi all, I'm Amro Abu Hashish",
  subTitle: emoji(
    // i have experince with mern ,django m springboot , android
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Mern , Django , SpringBoot , Android and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1cl_5PEdDvga0ehaf4Ph8S9RjTfZs8hmK/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/top1million",
  linkedin: "https://www.linkedin.com/in/amro-abuhashish-b3077a202/",
  gmail: "aasahashish@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and android"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
    emoji("⚡ Experience with Docker and Kubernetes , Linux Servers"),
    emoji("⚡ Experience with Manual and Automation Testing , using Selenium and Junit"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birzeit University",
      logo: require("./assets/images/birezeitlogo.jpeg"),
      subHeader: "Bachelor in Computer Engineering",
      duration: "September 2018 - Aug 2023",
      // gained robust background in how the computer works , from the circuits and electronics all the way up to high level coding languages
      desc: "Developed a comprehensive understanding of computer systems, spanning from the intricate workings of circuits and electronics to proficiency in high-level coding languages."
      // descBullets: [
      //   "Took"
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "FrontEnd", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "BackEnd",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "70%"
    },
    {
      Stack: "Devops(CI/CD)",
      progressPercentage: "60%"
    },
    {
      Stack: "Android",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Progmix",
      companylogo: require("./assets/images/progmixLogo.jpeg"),
      date: "Jul 2023 – Feb 2024",
      desc: "Mastered front-end technologies, excelling in QA, reported and resolved security issues, transitioned seamlessly to deployment using Laravel and Livewire, demonstrated robust server management, ensured project success, engaged in R&D, and reported findings for strategic decision-making.",
      descBullets: [
        "Created several full-stack projects, including crm and cms.",
        "Developed the companies servers and managed them.",
        "Engaged in R&D and reported findings for strategic decision-making."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "MashVisor",
      companylogo: require("./assets/images/msahvisorLogo.jpeg"),
      date: "Jul 2022 – Dec 2022",
      desc: "Remote Internship, got the opportunity to work with a real estate data analytics company that provides real estate data analysis and insights to help investors find the best investment properties.",
      descBullets: [
        "Participated in the development of a Full Stack assignment, leveraging React, MongoDB, Express, and Node.js technologies.",
        "Acquired practical skills in Redis, data logging methods, and cookie implementation.",
        "Successfully deployed applications on platforms such as Heroku, refining expertise in deployment practices."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/meflix.png"),
      projectName: "Netflix Clone (Meflix)",
      // built using nextjs , prisma , tailwindcss , and vercel
      projectDesc:  "A Netflix clone built using Next.js, Prisma, Tailwind CSS, and Vercel. The project is a full-stack application that allows users to browse movies, watch trailers, and search for their favorite movies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://movies.amroabuhashish.com"
        }
      ]
    },

    {
      image: require("./assets/images/msahvisorLogo.jpeg"),
      projectName: "MashVisor",
      projectDesc: "a real estate data analytics company that provides real estate data analysis and insights to help investors find the best investment properties. I participated in the development of a Full Stack assignment, leveraging React, MongoDB, Express, and Node.js technologies.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mashvisor.com"
        }
      ]
    },
    {
      image: require("./assets/images/jerusalem.jpeg"),
      projectName: "Latin Patriarchate of Jerusalem website",
      projectDesc: "Developed and fixed bugs in the website of the Latin Patriarchate of Jerusalem, a project that required a high level of attention to detail and a deep understanding of the client's needs.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lpj.org/en/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Aws Cloud Practitioner",
      subtitle:
        "AWS Certified Cloud Practitioner",
      image: require("./assets/images/aws.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1pfsKHpSDlxwPK05HvTToDeGe1xokC6oB/view?usp=sharing"
        },
      ]
    },


    {
      title: "Elevation data analytics",
      subtitle:
        "Learned Data Analysis and Data Visualization using Python, Google Sheets, and PowerBI.",
      image: require("./assets/images/elevation.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jsPG5Cz2HbWh0SuQpKsov9LQiSFuruGj/view?usp=sharing"
        }
      ]
    },

    {
      title: "Manara Software Engineer",
      subtitle: "Completed Certifcation from Manara for Software Engineering",
      image: require("./assets/images/manara.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/b1e4c1e8-c115-4f45-8e1d-bc0d30573295"
        }
      ]
    },
    {
      title: "Axsos Academy / Coding Dojo",
      subtitle:
        "FullStack Bootcamp 1200+ Hours of Coding , 3 FullStack Projects, Mern , Django , Spring Boot",
      image: require("./assets/images/axsosLogo.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://app.diplomasafe.com/en-US/diploma/d941dad3f95b080018a3aef383b3e98ce12e4fd70"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+972-594607873",
  email_address: "aasahashish@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
