import "./login.css"
import Navbar from "../../components/Navbar"

const Login = () => {
	return (
		<>
			<div className="login">
				<div className="wrapper ">
					<Navbar icon="none" />

					{/* <div className="block  w-full h-[45px] md:h-[90px]  ">
						<div className="logo ml-[3%] lg:h-[90px] leading-[45px] md:leading-[90px] ">
							<img
								className="w-[111px] md:h-[45px] md:w-[167px] inline-block "
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
								alt=""
							/>
						</div>
					</div> */}

					<div className="login-body bg-[#000] md:bg-opacity-0 ">
						<div className="px-[10%]">
							<div className="login-content py-[5%] mx-auto my min-h-[550px] w-[100%] flex flex-col md:max-w-[450px] md:px-[60px] md:pt-[68px] md:pb-[40px] md:bg-[#000] md:bg-opacity-75  ">
								<div className="form-main flex-1">
									<h1 className="text-white text-3xl font-medium mb-6">
										Sign In
									</h1>
									<form>
										<label className="block">
											<input
												type="email"
												placeholder="Email or phone number"
												className=" peer leading-[50px] h-[50px] px-[16px] pt-[20px] w-[100%] rounded bg-[#333] text-[20px] text-white placeholder:text-[#8c8c8c] placeholder:text-[14px] placeholder:absolute placeholder:top-[50%] focus:placeholder:top-[7px] invalid:border-b-2 invalid:border-[#e87c03]"
											/>
											<p className=" px-[6px] py-[3px] invisible peer-invalid:visible text-[#e87c03] text-sm peer-invalid:mb-[16px]">
												Please provide a valid email address.
											</p>
										</label>
										<label className="block">
											<input
												type="password"
												placeholder="Password"
												className="peer leading-[50px] h-[50px] px-[16px] pt-[20px] w-[100%]  rounded bg-[#333] text-[20px] text-white placeholder:text-[#8c8c8c] placeholder:text-[14px] placeholder:absolute placeholder:top-[50%] focus:placeholder:top-[7px] invalid:border-b-2 invalid:border-[#e87c03]"
											/>
											<p className=" px-[6px] py-[3px] invisible peer-invalid:visible text-[#e87c03] text-sm peer-invalid:mb-[16px]">
												Your password must contain between 4 and 60 characters.
											</p>
										</label>

										<button className="loginButton bg-[#e50914] text-white text-[16px] font-bold mt-[24px] mb-[12px] w-full leading-[50px] rounded">
											Sign In
										</button>

										<div className="flex justify-between">
											<div className=" text-[13px] text-[#b3b3b3]">
												Remember me
											</div>
											<div className="text-[#b3b3b3] text-[13px]">
												Need help?
											</div>
										</div>
									</form>
								</div>
								<div className="form-other h-48 lg:h-60 flex flex-col">
									<span className="text-[#737373] text-[16px] mt-[16px] lg:mt-[70px]">
										New to Netflix?{" "}
										<b className="text-white font-normal">Sign up now.</b>
									</span>
									<small className="mt-[16px] text-[#8c8c8c]">
										This page is protected by Google reCAPTCHA to ensure you're
										not a bot. <b className="text-[#0071eb]">Learn more</b>.
									</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
