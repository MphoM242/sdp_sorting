import React from "react";
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

	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Overview", 
		path: "/practice/merge", 
		icon: <IoIcons.IoIosPaper />},
	{
		title: "Practice Quizzes",
		path: "/practice/merge/quizzes",
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
		title: "Overview", 
		path: "/practice/merge", 
		icon: <IoIcons.IoIosPaper />},
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
	title: "Release Notes",
	path: "/Release_Notes",
	icon: <IoIcons.IoIosPaper />,
},
{
	title: "User Manual",
	path: "/User_Manual",
	icon: <IoIcons.IoIosPaper />,
},
];
