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
},
{
	title: "Insertion Sort",
	path: "/practice/insertion",
	icon: <BsFillSuitDiamondFill />,
},
{
	title: "Selection Sort",
	path: "/practice/selection",
	icon: <BsFillSuitDiamondFill />,
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
},
{
	title: "Other",
	path: "/practice/other",
	icon: <IoIcons.IoMdHelpCircle />,

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Brief Overview",
		path: "/other/overview",
		icon: <IoIcons.IoIosPaper />,
	},
	{
		title: "Practice",
		path: "/other/practice",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},
];
