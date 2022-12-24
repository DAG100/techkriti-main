import './slides.css';
import content from "./content.json";
import React, {useState, useCallback} from "react";

function basic_debounce(func, time) {
	let timer;
	return ((...args) => {
		if (timer === undefined) func.apply(this, args);
		clearTimeout(timer);
		timer = setTimeout(() => {timer = undefined;}, time);
	});
}

function basic_throttle(func, time) {
	let timer;
	return ((...args) => {
		if (timer === undefined) { 
			func.apply(this, args);
			timer = setTimeout(() => {timer = undefined;}, time);
		}
	});
}

function Slides() {
	const [pos, setPos] = useState(0);

	const contentList = content.map((el) => (
		<div key={content.indexOf(el)} className="slide" style={{backgroundColor:el.color}}>
			<h1>{el.title}</h1>
			<p>{el.text}</p>
			<button>Explore</button>
		</div>
	))
	
	function incrementPos(pos) {
		setPos((pos+1)%contentList.length);
	}
	
	function decrementPos() {
		setPos(pos - 1 < 0 ? pos - 1 + contentList.length : pos - 1);
	}
	
	

	
	const scrollHandlePre = (event) => {
		event.stopPropagation();
		console.log(event.deltaY);
		if (event.deltaY > 0) {
			setPos(pos => (pos+1)%contentList.length);
		} else {
			setPos(pos => pos < 1 ? pos - 1 + contentList.length : pos - 1);
		}
		
	};
	
	const scrollHandler = useCallback(basic_throttle(scrollHandlePre, 1000),[]);
	
	const clickNext = useCallback(basic_throttle(incrementPos, 1000),[]);
	/*
	idea: 3 displayed at a time - prev, current, next
	next button pressed -> re
	i.e:
	prev (hidden) 
	current 
	next (hidden)
	to
	current
	next (hidden)
	next-to-next(hidden)
	then
	current (hidden)
	next
	next-to-next(hidden)
	
	alt: normal slideshow, all loaded - doing this for now
	*/
	return (
		<div className="view-window" onWheel={(event) => scrollHandler(event)} onTouchStart={() => console.log("tapped")}>
			<div style={{left:`${-100*pos}%`}}>
			{contentList}
			</div>
		</div>
	);
}

export default Slides;
