import React from "react"

const CTA = () => {
	return (
		<>
			<div className="call-to-action m-8 md:px-16">
				<p className="text-[18px] mt-[16px] font-light lg:text-[24px] lg:font-normal leading-7">
					Ready to watch? Enter your email to create or restart your membership.
				</p>
				<div className="CTA md:flex md md:gap-2 md:items-start mt-[16px] md:px-5 lg:px-[100px] max-w-[700px] m-auto">
					<label className="md:flex-1 ">
						<input
							type="email"
							placeholder="Email address"
							className="peer w-full border leading-[50px] h-[50px] px-[16px] pt-[20px] rounded bg-[#333] text-[16px] text-white placeholder:text-[#8c8c8c] placeholder:text-[16px] placeholder:absolute placeholder:top-[40%] focus:placeholder:top-[7px]  invalid:border-[#e87c03] lg:text-[24px]"
						/>
						<p className=" px-[6px] py-[3px] invisible peer-invalid:visible text-[#e87c03] text-sm peer-invalid:mb-[16px]">
							Email is required.
						</p>
					</label>
					<button className="bg-[#e50914] text-white text-[16px] font-bold leading-[50px] px-[12px] rounded">
						Get Started
					</button>
				</div>
			</div>
		</>
	)
}

export default CTA
