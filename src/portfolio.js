/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pooja's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pooja Katpale's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Pooja Katpale",
  logo_name: "poojakatpale4588",
 

  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",

  portfolio_repository: "https://github.com/poojakatpale4588/portfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/poojakatpale4588",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/pooja-katpale-283208191",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:poojakatpale4588@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/PKatpale",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },

  {
    name: "Instagram",
    link: "https://www.instagram.com/poojakatpale4588/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "App Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Creating fun gaming apps",
        "⚡ Familiar with working with Flutter and Pycharm",

      ],
      softwareSkills: [
        
      
        {
          skillName: "PyCharm",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },

      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website.",
        "⚡ Familiar with HTML5, CSS, JAVASCRIPT, NODE.JS"

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
 
    
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },

        
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },

      
      ],
    },
   
  ],
},

  
// Education Page


  competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/poojakatpale4588",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/poojakatpale",
    },

  ],
};



const certifications = {
  certifications: [
    {
      title: "Python Specialization Course",
      subtitle: "- University of Michigan",
      logo_path: "download_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Michigan",
      color_code: "#8C151599",
    },
    {
      title: "Data Structure",
      subtitle: "- UC San Diego",
      logo_path: "ussan_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "UC San Diego",
      color_code: "#00000099",
    },

    {
      title: "Covid-19 Contact Tracing",
      subtitle: "- Johns Hopkins University",
      logo_path: "john_logo.png",
      certificate_link:
        "https://coursera.org/share/512dffa75a272349a1ba9f661001fe27",
      alt_name: "Johns Hopkins University",
      color_code: "#1F70C199",
    },
    {
      title: "Blockchain ",
      subtitle: "- IBI",
      logo_path: "block_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "IBI",
      color_code: "#D83B0199",
    },

  ],
};

// Experience Page
// const experience = {
//   title: "Experience",
//   subtitle: "Volunteership",
//   description:
//     "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
//   header_image_path: "experience.svg",
//   sections: [
    
//     {
//       title: "Volunteerships",
//       experiences: [
//         {
//           title: "PCCOE CSI STUDENT CHAPTER",
//           company: "CSI STUDENT CHAPTER",
//           company_url: "https://about.google/",
//           logo_path: "google_logo.png",
//           duration: "June 2019 - April 2020",
          
//           description:
//             "My responsibility was to manage each and every event of the team. And to keep all the documentation of the events",
//           color: "#4285F4",
//         },
//         {
//           title: "Representative Head at PCCOE ACM-W",
//           company: "ACM-W",
//           company_url: "https://www.microsoft.com/",
//           logo_path: "microsoft_logo.png",
//           duration: "Aug 2019 - May 2020",
          
//           description:
//             "To manage and volunteer every event and to be a part of design and social media team.",
//           color: "#D83B01",
//         },
//         {
//           title: "Event Management Team at PCCOE CodeChef",
//           company: "CODE-CHEF",
//           company_url: "https://www.mozilla.org/",
//           logo_path: "mozilla_logo.png",
//           duration: "Oct 2019 - May 2020",
        
//           description:
//             "My responsibility for this chapter was to manage each and every event and also create catchy messages and to manage the documentation as well",
//           color: "#000000",
//         },

//       ],
//     },
//   ],
// };

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create fun games and to build responsive and attractive websites.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "photo.jpg",
    description:
      "I am available on Twitter, Github and other social media Platforms. I can help with web devlopment,flutter.",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "Shivam Villa, Indrayaninagar, Bhosari, Pune-411039",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/6waz6zh8wjDQhsqr6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9373755xxx",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,

  certifications,
  
  projectsHeader,
  contactPageData,
};
