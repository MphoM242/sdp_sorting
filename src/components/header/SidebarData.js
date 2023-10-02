import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { BsFillSuitDiamondFill } from "react-icons/bs";

export const SidebarData = [
{
	title: "Bubble Sort",
	path: "/bubble",
	icon: <BsFillSuitDiamondFill />,
},
{
	title: "Insertion Sort",
	path: "/insertion",
	icon: <BsFillSuitDiamondFill />,
},
{
	title: "Selection Sort",
	path: "/selection",
	icon: <BsFillSuitDiamondFill />,
},
{
	title: "Merge Sort",
	path: "/merge",
	icon: <BsFillSuitDiamondFill />,
},
{
	title: "Quick Sort",
	path: "/quick",
	icon: <BsFillSuitDiamondFill />,
},
{
	title: "Other",
	path: "/other",
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
