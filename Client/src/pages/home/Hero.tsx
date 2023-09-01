import Navbar from "../../components/Navbar"

const Hero = () => {
	return (
		<>
			<div className="bg-hero-pattern bg-cover">
				<div className="bg-gradient-to-b from-black/90 via-black/10 to-black/90 flex flex-col gap-20 lg:gap-0">
					{/* NAVBAR */}
					<Navbar icon="yes" />

					<div className="hero text-white text-center px-5 lg:px-[100px] lg:mx-20 lg:my-32">
						<div className="max-w-[1400px] m-auto">
							<h1 className="hero-desc text-[36px] font-black leading-[45px] lg:text-[3.5rem] lg:leading-[60px]">
								The biggest local and international hits. All here from ₱149.
							</h1>
							<p className="text-[18px] mt-[16px] font-light lg:text-[24px] lg:font-normal leading-7">
								Join today. Cancel anytime.
							</p>
						</div>
						<div className="call-to-action m-8 md:px-16">
							<p className="text-[18px] mt-[16px] font-light lg:text-[24px] lg:font-normal leading-7">
								Ready to watch? Enter your email to create or restart your
								membership.
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
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
