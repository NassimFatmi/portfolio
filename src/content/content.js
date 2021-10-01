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
	SiNodeDotJs,
	SiMongodb,
	SiGit,
	SiFlutter,
	SiDart,
	SiAdobeaftereffects,
	SiAdobepremiere,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import chattapp from "../assets/chattapp.png";
import crypto from "../assets/crypto.png";
import memories from "../assets/memories.png";

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
		name: "EXPRESS",
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
];

export const backDevSkills = [
	{
		name: "NodeJs",
		icon: SiNodeDotJs,
	},

	{
		name: "MongoDB",
		icon: SiMongodb,
	},
	{
		name: "Flutter",
		icon: SiFlutter,
	},
	{
		name: "Dart",
		icon: SiDart,
	},
	{
		name: "Git",
		icon: SiGit,
	},
];

export const motionSkills = [
	{
		name: "After Effects",
		icon: SiAdobeaftereffects,
	},
	{
		name: "Premiere Pro",
		icon: SiAdobepremiere,
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

export const contacts = [
	{
		contact: "in_fatmi@esi.dz",
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
