
import React from "react";
import profile from "./assets/images/profile.jpg";
import machine from "./assets/images/machine.png"
import analysis from "./assets/images/analysis.png"
import web from "./assets/images/web.png"
import dev from "./assets/images/dev.png"
import graphics from "./assets/images/graphics.png"


const logotext = "MUGANE";
const meta = {
    title: "WAHOME MUGANE",
    description: "I’m wahome mugane: data scientist _ Full stack devloper",
};

const introdata = {
    title: "I’m Mugane Wahome",
    animated: {
        first: "Passionate about coding",
        second: "Crafting cool websites",
        third: "Enthusiastic about data analysis",
    },
    
    description:  "I'm Samuel Mugane, a passionate full-stack developer with a background in Actuarial Science. I bring a unique perspective to problem-solving and data analysis, leveraging my expertise to create innovative solutions. I have a keen focus on making data-driven decisions, using insights to guide my development process. When I'm not crafting web applications, I'm deeply focused on exploring new technologies and finding creative solutions to complex challenges, driven by my passion for continuous learning and growth.",
    your_img_url: profile,
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",

};

const dataabout = {
    title: "INTRODUCTION",
    aboutme: "I'm Samuel Mugane, a full-stack developer with a background in Actuarial Science. I bring a unique perspective to problem-solving and data analysis. When I'm not crafting web applications, you can find me exploring new technologies and finding creative solutions to complex challenges. My passion lies in bringing ideas to life through code and creating memorable user experiences.",
};
const workExperience = [
    {
        jobtitle: "Web developer intern",
        where: "Nyeri ~ Kenya",
        date: "2024",
    },
    {
        jobtitle: "Data analyst intern",
        where: "remote ~ India",
        date: "2023",
    },
    {
        jobtitle: "Peer teacher",
        where: "kenya",
        date: "2020",
    },
];

const skills = [{
        name: "R, Python, SPSS AND STATA",
        value: 90,
    },
    {
        name: "POWER BI",
        value: 70,
    },
    {
        name: "Javascript",
        value: 70,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Node.js",
        value: 70,

    },
    {
        name: "express",
        value: 70,
    },

    {
        name: "mysql, mongo, postgressql",
        value: 70,
    },
];

const services = [{
    
        title: "WEB DEVELOPMENT (UI & UX Design)",
        description: "Creating captivating user experiences that drive engagement and satisfaction. From intuitive user interfaces to seamless interactions, I craft designs that resonate with your audience and elevate your brand. Whether you're launching a new website or refreshing an existing one, I can help you create a digital experience that sets your company apart.",
        img: web,
    },
    {
        title: "DATA ANALYSIS",
        description: "Harnessing the power of data to uncover valuable insights and drive informed decision-making. I specialize in analyzing complex datasets to identify trends, patterns, and opportunities for optimization. Whether you're a startup or an established enterprise, I can provide data-driven solutions that propel your company forward.",
        img: analysis,
    },
    {
        title: "MACHINE LEARNING",
        description: "Utilizing cutting-edge machine learning algorithms, including linear regression, logistic regression, decision trees, random forest, support vector machines (SVM), k-nearest neighbors (KNN), and naive Bayes, to build predictive models and enhance business intelligence. From recommendation systems to predictive analytics, I leverage these algorithms to help you stay ahead of the competition and make data-driven decisions that impact your company's success.",
        img: machine
    },

    {
        title: "GRAPHIC DESIGN",
        description: "I specialize in graphic design, using a variety of tools to bring your ideas to life. With expertise in Adobe Illustrator, Adobe Photoshop, Adobe InDesign, and Canva, I create visually stunning designs for various purposes. Whether you need logos, brochures, posters, or digital illustrations, I leverage these tools to deliver high-quality graphics tailored to your needs. Additionally, I utilize Adobe Lightroom to enhance and retouch photographs, ensuring that your images stand out and make an impact. Let's work together to create visually captivating designs that elevate your brand and captivate your audience.",
        img: graphics
    },
    
];

const dataportfolio = [{
        img: profile,
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "muganewahome@gmail.com",
    YOUR_FONE: "+254719472162",
    description: "Hey there! If you're interested in collaborating, have a project in mind, or just want to chat, feel free to reach out to me. I'm always excited to connect with like-minded individuals and explore new opportunities. Looking forward to hearing from you! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_55yoyia",
    YOUR_TEMPLATE_ID: "template_wdyf1uk",
    YOUR_USER_ID: "M6szqSDnEmdZgk7Jh",
};

const socialprofils = {
    github: "https://github.com/mugane-wahome",
    facebook: "https://facebook.com",
    linkedin: "www.linkedin.com/in/wahome-mugane",
    twitter: "hhttps://x.com/MeMugane?t=xECC7sCk3MAHCrPJn4GjDA&s=09",
};

export {
    meta,
    dataabout,
    dataportfolio,
    workExperience,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
