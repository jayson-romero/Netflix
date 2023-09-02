import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { RiNotification3Line } from "react-icons/ri"
import { AiFillCaretDown } from "react-icons/ai"

const AppNavBar = ({ isOpen, setIsOpen, toggleAccordion }) => {
	return (
		<>
			<div className="Navbar bg-black text-white fixed w-full">
				<div className="wrapper leading-[50px] px-[3%] flex justify-between">
					{/* MENUIcon and LOGO  */}
					<div className="menu-logo flex gap-5 items-center">
						{/* MENUIcon  */}
						<div className="menu lg:hidden">
							<GiHamburgerMenu className="w-7 h-7" onClick={toggleAccordion} />
						</div>

						{/* LOGO and MENUS  */}
						<div className="div flex gap-5 ">
							<div className="logo">
								<img
									className="w-[90px] inline-block "
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
									alt=""
								/>
							</div>

							<div className="menu hidden lg:flex gap-5 text-[14px]  text-[#E5E5E5] font-semibold">
								<Link to="/browse" className="hover:text-white">
									Home
								</Link>
								<Link to="/browse" className="hover:text-white">
									TV Shows
								</Link>
								<Link to="/browse" className="hover:text-white">
									Movies
								</Link>
								<Link to="/browse" className="hover:text-white">
									New & Popular
								</Link>
								<Link to="/browse" className="hover:text-white">
									My List
								</Link>
								<Link to="/browse" className="hover:text-white">
									Browse by Language
								</Link>
							</div>
						</div>
					</div>
					{/* SEARCH  */}
					<div className="search flex justify-end items-center leading-[20px] lg:hidden">
						<input
							type="text"
							placeholder="search"
							className="text-[16px] border bg-[#333] w-[50%]  p-1 "
						/>
					</div>
					<div className="hidden lg:flex justify-center gap-5 items-center   ">
						<BsSearch className="w-5 h-5" />
						<RiNotification3Line className="w-5 h-5" />
						<div className="profile flex justify-center items-center">
							<img
								src="https://occ-0-1892-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT980E7afJBlYZzvyMECBb6z3BkkG0XqY_oXyYfxim5c7pcrWM0lRzT-cKIImpMzTOhbBGslrEIb7ORMvOpHdkWMU4109Eo.png?r=2c8"
								alt=""
								className="w-8 h-8"
							/>
							<AiFillCaretDown />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AppNavBar
