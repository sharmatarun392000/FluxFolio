const logotext = "Tarun";
const meta = {
    title: "Tarun Sharma",
    description: "I’m Tarun Sharma Full stack devloper",
};


const introdata = {
    title: "Hello Friend! I’m Tarun Sharma",
    animated: {
        first: "I love Computers ...",
        second: "I develope websites ...",
    },
    description: "I am pursuing my B.Tech in Software Engineering from  Delhi Technological University(Formely Delhi college of Engineering)",
};


const socialicons=
{
    instagram:require('../src/assets/images/instagram.webp'),
    github:require('../src/assets/images/Github.webp'),
    linkedin:require('..//src/assets/images/LinkedIn.webp') 
}
const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
       img: require('../src/assets/images/DarkMode.png'),
        description: "BuzzBulletein is a web app which can be used to read news head lines from 50+ countries",
        link: "https://github.com/sharmatarun392000/BuzzBulletin",
        projectname: "BuzzBulletein"
    },
    {
        img: require('../src/assets/images/WordCraft.png'),
        description: "WordCraft is a text Utility web app",
        link: "https://github.com/sharmatarun392000/WordCraft",
        projectname: "WordCraft"
    },
    {
        img: require('../src/assets/images/Fluxfolio.png'),
        description: "It is a Portfolio website",
        link: "https://github.com/sharmatarun392000/FluxFolio",
        projectname: "FluxFolio"
    },
    ,
];

const contactConfig = {
    YOUR_EMAIL: "tarunkumar392000@gmail.com",
    YOUR_FONE: "+91 7495040645",
    description: " Please mail your concern i will try to response within 24 Hours.",
};

const socialprofils = {
    github: "https://github.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
};

const portfoliodata=
[
    {
    img:require('./assets/images/cpp.png'),
    text:"C++"
    },
    {
    img:require('./assets/images/PYTHON.webp'),
    text:"Python"
    },
    {
    img:require('./assets/images/html.webp'),
    text:"HTML"
    },
    {
        img:require('./assets/images/css.png'),
        text:"CSS"
        },
        {
        img:require('./assets/images/JavaScript-Logo.png'),
        text:"JavaScript"
        },
        {
        img:require('./assets/images/react.png'),
        text:"React"
        },
        {
            img:require('./assets/images/MySQL.png'),
            text:"MySQL"
            },
            {
            img:require('./assets/images/OOPs.png'),
            text:"OOPS"
            },
            {
            img:require('./assets/images/computer networks.jpg'),
            text:"Computer Networks"
            },
            {
                img:require('./assets/images/Operating Systems.webp'),
                text:"Operating System"
                },
                {
                img:require('./assets/images/DBMS.png'),
                text:"Database Management"
                },
                {
                img:require('./assets/images/Linux.jpg'),
                text:"Linux"
                },
                {
                    img:require('./assets/images/Data Structures.png'),
                    text:"Data Structures"
                    },
                    {
                    img:require('./assets/images/Algorithms.png'),
                    text:"Algorithms"
                    },
                    {
                    img:require('./assets/images/Github.png'),
                    text:"Github"
                    },

]

export {
    meta,
    dataportfolio,
    skills,
    introdata,
    socialicons,
    contactConfig,
    socialprofils,
    portfoliodata,
    logotext,
};