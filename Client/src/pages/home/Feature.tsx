import React from "react"

const Feature = ({ header, desc, img, reverse }) => {
	return (
		<>
			<div className="feature border-t-8 border-[#5B5B5B] bg-black text-white">
				<div
					className={`wrapper py-[56px] text-center lg:flex lg:items-center lg:justify-center ${
						reverse ? "lg:flex-row-reverse" : ""
					} lg:max-w-[1464px] mx-auto`}
				>
					<div className="text flex-1 lg:text-left">
						<h1 className="text-[32px] font-black lg:text-[48px]">{header}</h1>
						<p className="my-[16px] px-5 lg:px-0 lg:text-[24px]">{desc}</p>
					</div>
					<div className="image flex justify-center flex-1">
						<img src={img} alt="" />
					</div>
				</div>
			</div>
		</>
	)
}

export default Feature
