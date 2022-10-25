import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
	AiOutlineHtml5,
	AiFillPhone,
	AiFillTwitterCircle,
	AiFillYoutube,
	AiFillCodepenCircle,
	AiOutlineMail,
} from "react-icons/ai";
import {
	SiTailwindcss,
	SiJavascript,
	SiReact,
	SiNodedotjs,
	SiMongodb,
	SiGit,
	SiFlutter,
	SiDart,
	SiAdobeaftereffects,
	SiAdobepremierepro,
	SiPython,
	SiExpress
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import chattapp from "../assets/chattapp.png";
import crypto from "../assets/crypto.png";
import memories from "../assets/memories.png";
import karini from "../assets/karini.png";
import freeclass from "../assets/freeclass.png";
import vidvet from "../assets/vidvet.png";

export const socials = [
	{
		name: "Instagram",
		url: "https://www.instagram.com/nassim.xii",
		icon: FaInstagram,
	},
	{
		name: "Github",
		url: "https://github.com/NassimFatmi",
		icon: FaGithub,
	},
	{
		name: "Linkedin",
		url: "www.linkedin.com/in/NassimFatmi",
		icon: FaLinkedin,
	},
];

export const frontDevSkills = [
	{
		name: "HTML",
		icon: AiOutlineHtml5,
	},

	{
		name: "CSS",
		icon: DiCss3,
	},
	{
		name: "Tailwind",
		icon: SiTailwindcss,
	},
	{
		name: "Javascript",
		icon: SiJavascript,
	},
	{
		name: "ReactJS",
		icon: SiReact,
	},
	{
		name: "Flutter",
		icon: SiFlutter,
	},
];

export const backDevSkills = [
	{
		name: "NodeJs",
		icon: SiNodedotjs,
	},
	{
		name: "ExpressJs",
		icon: SiExpress,
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
	},

	{
		name: "Dart",
		icon: SiDart,
	},
	{
		name: "Git",
		icon: SiGit,
	},
	{
		name: "Python",
		icon: SiPython,
	},
];

export const motionSkills = [
	{
		name: "After Effects",
		icon: SiAdobeaftereffects,
	},
	{
		name: "Premiere Pro",
		icon: SiAdobepremierepro,
	},
];

export const projects = [
	{
		name: "Real time chat",
		code: "https://github.com/NassimFatmi/realtime-chat-api",
		live: "https://my-chat-app-nf.netlify.app/",
		image: chattapp,
		overview: "creat an account then chat with your friends on realtime.",
		technologies: [
			"React",
			"Node",
			"express",
			"html",
			"css",
			"js",
			"socket.io",
			"mongodb",
		],
	},
	{
		name: "My memories",
		code: "https://github.com/NassimFatmi/my_memories_api",
		live: "https://my-memories-nf.netlify.app",
		image: memories,
		overview:
			"Store your memories or anything hapend to you and share it with others.",
		technologies: ["React", "Node", "express", "html", "css", "js", "mongodb"],
	},
	{
		name: "Crypto World",
		code: "https://github.com/NassimFatmi/cryptocurreny-application",
		live: "https://cryptocurrencies-world.netlify.app/",
		image: crypto,
		overview: "Visualize latest Cryptocurrencies news and exchanges.",
		technologies: ["React", "html", "css", "js", "RapidAPI", "Tailwind"],
	},
];

export const flutterProjects = [
	{
		name: "Dars Delivery (ex: Karini - قريني)",
		app: "https://play.google.com/store/apps/details?id=dz.createch.karini",
		image: karini,
		overview: "dars delivery is an app that link students with teachers to do online sessions through a google meet link or in person sessions by setting the location of the teacher using google maps , it also help them communicate through chat.",
		libs: [
			"Dart",
			"Flutter",
			"Provider",
			"Intl",
			"Google Maps",
		],
	},
	{
		name: "Freeclass",
		image: freeclass,
		overview: "Freeclasse is a solution that helps students find teachers and do online sessions to help them improve their studies.",
		libs: [
			"Dart",
			"Flutter",
			"Provider",
			"Intl",
		],
	},
	{
		name: "Vidvet",
		image: vidvet,
		overview: "Vidvet is an online market for brand new and used clothes.",
		libs: [
			"Dart",
			"Flutter",
			"Provider",
			"Intl",
		],
	},
];

export const contacts = [
	{
		contact: "in_fatmi@esi.dz",
		icon: AiOutlineMail,
	},
	{
		contact: "fatminsm@gmail.com",
		icon: AiOutlineMail,
	},
	{
		contact: "+213790016786",
		icon: AiFillPhone,
	},
];


export const allSocials = [
	...socials,
	{
		name: "Twitter",
		url: "https://twitter.com/NassimFatmi",
		icon: AiFillTwitterCircle,
	},
	{
		name: "Youtube",
		url: "https://www.youtube.com/channel/UC7_8_N31P1Z9Tw2aJ-hTpeA",
		icon: AiFillYoutube,
	},
	{
		name: "Codepen",
		url: "https://codepen.io/nassimfatmi-xii",
		icon: AiFillCodepenCircle,
	},
];
