import ListItems from "./ListItems"
import { MdKeyboardArrowRight } from "react-icons/md"
import { useRef, useState } from "react"

const List = () => {
	// const [isMoved, setIsMoved] = useState(false)
	// const [slideNumber, setSlideNumber] = useState(0)

	// const listRef = useRef()

	// const handleClick = (direction) => {
	// 	setIsMoved(true)
	// 	let distance = listRef.current.getBoundingClientRect().x - 50
	// 	if (direction === "left" && slideNumber > 0) {
	// 		setSlideNumber(slideNumber - 1)
	// 		listRef.current.style.transform = `translateX(${230 + distance}px)`
	// 	}
	// 	if (direction === "right" && slideNumber < 5) {
	// 		setSlideNumber(slideNumber + 1)
	// 		listRef.current.style.transform = `translateX(${-230 + distance}px)`
	// 	}
	// }
	return (
		<>
			<div className="list">
				<div className="containner">
					<span className="">Continue to watch</span>
					<div className="wrapper w-[100%]  h-max flex justify-center items-center">
						{/* LEFT ARROW  */}
						<div className="flex max-h-full h-full bg-red-600 block ">
							<div className=" w-[3rem] ">&#8249;</div>
						</div>

						{/* CONTENT  */}
						<div className="flex  ">
							<img
								src="https://placehold.co/210/FFFFFF/000000?text=1"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover shrink h-full flex-0   w-[calc(100%/2.5)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)]   "
							/>
							<img
								src="https://placehold.co/210/FFFFFF/000000?text=1"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover shrink h-full flex-0   w-[calc(100%/2.5)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)]   "
							/>
							<img
								src="https://placehold.co/210/FFFFFF/000000?text=1"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover shrink h-full flex-0   w-[calc(100%/2.5)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)]   "
							/>
							{/* 
							<img
								src="https://placehold.co/220/FFFFFF/000000?text=2"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover shrink h-full flex-0  w-[calc(100%/2.5)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] "
							/>
							<img
								src="https://placehold.co/230/FFFFFF/000000?text=3"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover h-full flex-0 shrink-0 w-[calc(100%/2.5)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] "
							/>
							<img
								src="https://placehold.co/230/FFFFFF/000000?text=3"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover h-full flex-0 shrink-0 w-[calc(100%/2.5)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] "
							/> */}
							{/* <img
								src="https://placehold.co/240/FFFFFF/000000?text=4"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover h-full flex-0 shrink-0 w-[calc(100%/2)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] "
							/>
							<img
								src="https://placehold.co/240/FFFFFF/000000?text=5"
								alt=""
								className="m-1 max-w-[1/5] aspect-video object-cover h-full flex-0 shrink-0 w-[calc(100%/2)] md:w-[calc(100%/4)] lg:w-[calc(100%/5)] "
							/> */}
						</div>

						{/* RIGHT ARROW  */}
						<button className="w-[5rem] bg-red-600 shrink-1">
							<div className="text">&#8250;</div>
						</button>
						{/* <MdKeyboardArrowRight
							className="sliderArrow right"
							// onClick={() => handleClick("right")}
						/> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default List
