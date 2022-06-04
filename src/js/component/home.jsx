import React from "react";
import { useState } from "react";

//create your first component
const TrafficLight = () => {
	const [color, setColor] = useState("yellow");
	return (
		<div className="container">
			<div className="lights">
				<div
					onClick={() => setColor("red")}
					className={
						"light red " + (color === "red" ? "glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow " + (color === "red" ? "glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green " + (color === "red" ? "glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
