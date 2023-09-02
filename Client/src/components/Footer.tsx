import { Link } from "react-router-dom"
import { TbWorld } from "react-icons/tb"

const Footer = () => {
	return (
		<>
			<div className="border-t-8 border-[#5B5B5B] bg-black text-white p-[3%] text-[#FFFFFFB3]">
				<div className="wrapper lg:w-[1464px] mx-auto">
					{/* HEADER  */}
					<div className="contact py-[0.75rem] md:py-[12px] underline">
						<Link to="/">Questions? Contact us.</Link>
					</div>

					{/* MENUS */}
					<div className="menus py-[0.75rem] md:pt-[20px]">
						<ul className="grid grid-cols-1 gap-3 md:grid-cols-4">
							<li className="item underline">
								<Link to="/">FAQ</Link>
							</li>
							<li className="item underline">
								<Link to="/">Help Center</Link>
							</li>
							<li className="item underline">
								<Link to="/">Account</Link>
							</li>
							<li className="item underline">
								<Link to="/">Media Center</Link>
							</li>
							<li className="item underline">
								<Link to="/">Investor Relations</Link>
							</li>
							<li className="item underline">
								<Link to="/">Jobs</Link>
							</li>
							<li className="item underline">
								<Link to="/">Redeem Gift Cards</Link>
							</li>
							<li className="item underline">
								<Link to="/">Buy Gift Cards</Link>
							</li>
							<li className="item underline">
								<Link to="/">Ways to Watch</Link>
							</li>
							<li className="item underline">
								<Link to="/">FAQ</Link>Terms of Use
							</li>
							<li className="item underline">
								<Link to="/">Privacy</Link>
							</li>
							<li className="item underline">
								<Link to="/">Cookie Preferences</Link>
							</li>
							<li className="item underline">
								<Link to="/">Corporate Information</Link>
							</li>
							<li className="item underline">
								<Link to="/">Contact Us</Link>
							</li>
							<li className="item underline">
								<Link to="/">Speed Test</Link>
							</li>
							<li className="item underline">
								<Link to="/">Legal Notices</Link>
							</li>
							<li className="item underline">
								<Link to="/">Only on Netflix</Link>
							</li>
						</ul>
					</div>

					{/* LANGUAGE BTN */}
					<div className="language py-[0.75rem] md:pt-[20px] flex">
						<div className="border border-white px-[10px] py-[5px] rounded flex  items-center text-white ">
							<TbWorld className="white w-5 h-5" />
							<select
								id="fruitDropdown"
								className="bg-transparent text-white text-[14px]"
							>
								<option value="english">English</option>
								<option value="filipino">Filipino</option>
							</select>
						</div>
					</div>

					{/* FOOTER */}
					<div className="footer py-[0.75rem]">Netflix Philippines</div>
				</div>
			</div>
		</>
	)
}

export default Footer
