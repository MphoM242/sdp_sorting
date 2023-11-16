import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { BsFillSuitDiamondFill } from "react-icons/bs";

export const SidebarData = [
{
	title: "Bubble Sort",
	path: "/practice/bubble",
	icon: <BsFillSuitDiamondFill />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Practice Quizzes",
		path: "/practice/bubble/quizzes",
		icon: <IoIcons.IoIosPaper />,
	},
	]
},
{
	title: "Merge Sort",
	path: "/practice/merge",
	icon: <BsFillSuitDiamondFill />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Practice Quizzes",
		path: "/practice/merge/quizzes",
		icon: <IoIcons.IoIosPaper />,
	},
	]
},
{
	title: "Quick Sort",
	path: "/practice/quick",
	icon: <BsFillSuitDiamondFill />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Practice Quizzes",
		path: "/practice/quick/quizzes",
		icon: <IoIcons.IoIosPaper />,
	},
	]
},
{
	title: "Release Notes",
	path: "/practice/other",
	icon: <IoIcons.IoMdHelpCircle />,
},
{
	title: "User Manual",
	path: "/practice/other",
	icon: <IoIcons.IoMdHelpCircle />,
},
];
