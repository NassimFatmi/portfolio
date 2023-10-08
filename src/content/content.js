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
import ytbanalyser from "../assets/ytbanalyser.png";
import memories from "../assets/memories.png";
import karini from "../assets/karini.png";
import freeclass from "../assets/freeclass.png";
import vidvet from "../assets/vidvet.png";
import adsil from "../assets/adsil.png";

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
		url: "https://www.linkedin.com/in/nassimfatmi",
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
		name: "Youtube Comments Analyzer",
		code: "https://github.com/NassimFatmi/hackit-solution",
		live: "https://chupakabra.netlify.app/",
		image: ytbanalyser,
		overview: "A third place winning prize on an AI hackathon organized in Algiers by the CSE club. The solution we proposed consists of browser extension that detects youtube videos and make a sentiment analysis on it and display some statistics along with its polarity.",
		technologies: ["React", "Flask", "Python", "js", "Google Charts", "Tailwind"],
	},
	{
		name: "ADSIL Website",
		// code: "",
		live: "https://adsil.netlify.app/",
		image: adsil,
		overview: "This is a website made during summer internship for a multiservice company called Adsil which is based in Algiers-Algeria. However the github repo for this project is private.",
		technologies: ["React", "Tailwind"],
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
		contact: "fatminsm@gmail.com",
		icon: AiOutlineMail,
	},
	{
		contact: "+33 744401840",
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

export const blogs = [
	{
		image: "https://miro.medium.com/max/828/1*5n_1gQOx1_a6o8T00No6GQ.png",
		title: "Create a nested navigation system in Flutter",
		resume: "In this article i explain the best way to create a navigation system in flutter using bottom nav bar widget",
		link: "https://medium.com/@in_fatmi/create-a-nested-navigation-system-in-flutter-cf7598fef767",
	}
]