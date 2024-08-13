export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
  },
  {
      id: 2,
      title: "I can easily accommodate different time zones for communication.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
  },
  {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
  },
  {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
  },

  {
      id: 5,
      title: "Currently building various JS projects",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
  },
  {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
  },
];

export const projects = [
  {
      id: 1,
      title: "BrainHance An AI Chatting Assistant",
      des: "Unleash the Power of the Artificial Intelligence Using brainhance,It will help you to generate images, Solving your coding problems .",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://brainhance.netlify.app/"
  },
  {
      id: 2,
      title: "Convo - A Video Conferencing App",
      des: "Simplify your video conferencing experience with Convo. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https:/convo-dusky.vercel.app",
  },
  {
      id: 3,
      title: "Imaginify",
      des: "Coming Super Soon....",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "",
  },
  {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://ayephone.netlify.app",
  },
];

export const testimonials = [
  {
      quote:
          "Muhammad has not only been incredibly professional throughout since the start of my company, they have been found to become a pillar to the foundation of my success. There is no going wrong by hiring them, as the work is precise and always on time. I've been working with them since 2022 and their experience still shines today. You will get your moneys worth with Muhammad!",
      name: "Rizvi Alakh",
      title: "Owner HypestTeam",
  },
  {
      quote:
          "I've been working with Muhammad for many years, and they are always very diligent and work hard to make sure everything is completed on schedule and on budget. Highly recommended!",
      name: "Ayesha Sheikh",
      title: "Owner Mindfulfullness",
  },
  {
      quote:
          "Working with Muhammad Saif has been an absolute game-changer for our business. His commitment to delivering high-quality results is unmatched. Every project we've collaborated on has been completed with precision and ahead of schedule. I highly recommend Muhammad to anyone looking to elevate their brand.",
      name: "Sarah Patel,",
      title: "CEO of Digital Innovators",
  },
  {
      quote:
          "I've had the pleasure of working with Muhammad Saif on multiple projects, and his expertise and dedication never cease to amaze me. His work is consistently top-notch, and he always goes above and beyond to ensure client satisfaction. Highly recommended!",
      name: "Priya Desai",
      title: "Director of Alpha Technologies",
  },
  {
      quote:
          "Collaborating with Muhammad Saif has been an incredible experience. His knowledge, skill, and dedication have significantly contributed to our success. I highly recommend him to anyone looking for a reliable and talented partner.",

      name: "Neha Sharma",
      title: "CEO of Visionary Solutions",
  },
];

export const companies = [
  {
      id: 1,
      name: "app",
      img: "/app.svg",
      nameImg: "/appName.svg    ",
  },
  {
      id: 2,
      name: "host",
      img: "/host.svg",
      nameImg: "/hostName.svg",
  },
  {
      id: 3,
      name: "cloud",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
  },
  {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
  },
  {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
      id: 1,
      title: "Frontend Engineer",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
  },
  {
      id: 2,
      title: "Freelance Fullstack Developer",
      desc: "Assisted in making web applications with various tech stacks.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
  },
  {
      id: 3,
      title: "Freelance Web Developer",
      desc: "Led the dev of a website for a client, from initial concept to deployment on the internet.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
  },
  {
      id: 4,
      title: "Shopify Developer",
      desc: "Developed a Shopify website for clients using various themes and technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        name: "github",
        link: "https://github.com/saiiffuuu",
    },
    {
        id: 2,
        img: "/twit.svg",
        name: "twitter",
        link: "https://x.com/iammuhammadsaif",
    },
    {
        id: 3,
        img: "/link.svg",
        name: "linkedin",
        link: "https://www.linkedin.com/in/iammuhammadsaif",
    },
    {
        id: 4,
        img: "/insta.svg",
        name: "insta",
        link: "https://www.instagram.com/_saiiffxx",
    }
  ];
  