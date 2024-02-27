import React from "react";
import FormattedDate from "./FormattedDate";
import "./CurrentDayInfo.css";

export default function CurrentDayInfo(props) {
	return (
		<div className="CurrentDayInfo">
			<div className="row">
				<div className="col-6">
					<h1 className="text-white">{props.data.city}</h1>
					<ul>
						<li>
							<FormattedDate date={props.data.date} />,{" "}
							{props.data.description
								.split(" ")
								.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
								.join(" ")}
						</li>
						<li>
							Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/hr
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
