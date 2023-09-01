import { TbWorld } from "react-icons/tb"
import { Link } from "react-router-dom"

const Navbar = ({ icon }) => {
	return (
		<>
			<div className="navbar p-[3%] md:pt-[3px] ">
				<div className="wrapper flex justify-between  items-center">
					<div className="block h-[45px] md:h-[90px]  ">
						<div className="logo ml-[3%] lg:h-[90px] leading-[45px] md:leading-[90px] ">
							<img
								className="w-[100px] md:h-[45px] md:w-[167px] inline-block "
								src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
								alt=""
							/>
						</div>
					</div>

					{icon === "yes" && (
						<div className="icons flex items-center gap-2 ">
							<div className="border border-white px-[10px] py-[5px] rounded flex items-center text-white ">
								<TbWorld className="white w-5 h-5" />
								<select
									id="fruitDropdown"
									className="bg-transparent text-white text-[14px]"
								>
									<option value="english">English</option>
									<option value="filipino">Filipino</option>
								</select>
							</div>
							<Link to="/login">
								<button className="bg-[#e50914] text-white text-[14px] font-bold px-[10px] py-[5px] rounded">
									Sign In
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	)
}

export default Navbar
