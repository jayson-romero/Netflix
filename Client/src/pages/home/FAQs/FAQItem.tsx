import { useState } from "react"
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"

const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<div className="mb-2 lg:max-w-[1400px] lg:mx-auto">
				<button
					className="flex justify-between items-center w-full p-[1.5rem] bg-[#2d2d2d]  hover:bg-[#3c3c3c] "
					onClick={toggleAccordion}
				>
					<span className="font-light md:font-normal text-[18px] lg:text-[24px]">
						{question}
					</span>
					<span
						className={`transform  ${
							isOpen ? "rotate-180" : "rotate-80"
						} transition-transform`}
					>
						{isOpen ? (
							<AiOutlineClose className="w-8 h-8" />
						) : (
							<AiOutlinePlus className="w-8 h-8" />
						)}
					</span>
				</button>
				{isOpen && (
					<p className="p-5 mt-[1px] bg-[#2d2d2d] whitespace-pre-line text-[18px] lg:text-[24px] text-left  font-light md:font-normal">
						{answer}
					</p>
				)}
			</div>
		</>
	)
}

export default FAQItem
