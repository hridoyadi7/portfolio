import {RiComputerLine} from 'react-icons/ri'
import { IProject, IService,ISkill } from './type'
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import {GiTeacher} from "react-icons/gi"
import {BsCircleFill} from "react-icons/bs"


export const services:IService[]=[
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using <b>Node API</b> ",
      },
      {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>GeeksforGeeks</b> and <b>Hackerrank</b> and <b>Codechef</b>",
      },
      {
        Icon: AiOutlineAntDesign,
        title: "Machine Learning",
        about:
          "worked in ML with various algorithms and libraries.",
      },
      {
        Icon: GiTeacher,
        title: "Teaching",
        about:
          "Teach DS & Algo and Chemistry.",
      },
]


export const languages:ISkill[]=[
  {
    Icon:BsCircleFill,
    name:'DS & Algo',
    level:'85%',
    
  },
  {
    Icon:BsCircleFill,
    name:'C++',
    level:'80%',
    
  },
  {
    Icon:BsCircleFill,
    name:'C',
    level:'80%',
  
  },
  {
    Icon:BsCircleFill,
    name:'Java',
    level:'75%'
  },
  {
    Icon:BsCircleFill,
    name:'Javascript',
    level:'70%',
  },
  {
    Icon:BsCircleFill,
    name:'MySQL',
    level:'75%',
  },
  {
    Icon:BsCircleFill,
    name:'MongoDB',
    level:'75%',
  },
  {
    Icon:BsCircleFill,
    name:'Python',
    level:'65%',
  },


];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "React-JS",
    level: "75%",
  },
  {
    Icon: BsCircleFill,
    name: "Node-JS",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Machine Learning",
    level: "65%",
  },
];


export const projects:IProject[]=[
  {
    id:1,
    name:"Chat Application",
    description:
    "This is a chat app used for online group chating with some features like profanity check, location sharing etc.(https://pure-cliffs-12459.herokuapp.com/)",
    image_path:"/images/chat.png",
    github_url:"https://github.com/hridoyadi7/Chat-app",
    category:['vanilla_js','express'],
    key_techs:['vanilla js','express','socket.io','GeoLocation API','mustache','moment.js'],

  },
  {
    id:2,
    name:"Restaurants App",
    description:
    "This is a multipage restaurant app supporting features of viewing item,ordering item etc",
    image_path:"/images/restaurant.png",
    github_url:"https://github.com/hridoyadi7/Confusion-React",
    category:['react'],
    key_techs:['react','json-server','react-redux'],

  },

  {
    id:3,
    name:"Task manager API",
    description:
    "This is used for authenticating users,sending mail to different users when needed,create tasks by users and delete by users",
    image_path:"/images/task.jpg",
    github_url:"https://github.com/hridoyadi7/task-manager-api",
    category:['express','mongoose'],
    key_techs:['express','mongoose'],

  },

  {
    id:4,
    name:"Real Time Ads recommendation system",
    description:
    "Tested on the different ads by different users at different time, and According to the record select which ad can give max profit",
    image_path:"/images/ads.jpg",
    github_url:"https://github.com/hridoyadi7/real-time-ads",
    category:['ml'],
    key_techs:['numpy','panda','matplotlib','Thompson sampling algorithm'],

  },

  

  
]