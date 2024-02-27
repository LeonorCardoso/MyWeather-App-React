import React from "react";

export default function FormattedDate(props) {
	const daysOfTheWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const date = props.date;

	let day = daysOfTheWeek[date.getDay()];
	let hours = date.getHours();
	if (hours < 10) {
		hours = `0${hours}`;
	}
	let minutes = date.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}

	return (
		<span>
			{day} {hours}:{minutes}
		</span>
	);
}
