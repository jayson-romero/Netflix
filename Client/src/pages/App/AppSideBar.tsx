import { Link, NavLink } from "react-router-dom"

const AppSideBar = ({ toggleAccordion }) => {
	const genres = [
		{ title: "Thrillers" },
		{ title: "Kids & Family" },
		{ title: "Filipin Movies & TV" },
		{ title: "Reality TV" },
		{ title: "Action" },
		{ title: "Anime" },
		{ title: "Comedies" },
		{ title: "Fantasy" },
		{ title: "Sci-Fi" },
		{ title: "Horror" },
		{ title: "K-Dramas" },
		{ title: "Stand-Up Comedy" },
		{ title: "Documentaries" },
		{ title: "Hollywood Movies" },
		{ title: "Music & Musicals" },
		{ title: "Romance" },
		{ title: "Dramas" },
	]

	return (
		<>
			<div className="fixed mt-[50px] bg-black w-[240px] text-[#808080] font-semibold min-h-screen">
				<div className="wrapper">
					<div className="settings flex flex-col py-[10px] gap-[4px] border-b border-[#808080] ">
						<Link
							to="/browse"
							className="flex gap-2 pl-[20px]"
							onClick={toggleAccordion}
						>
							<img
								src="https://occ-0-1892-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABT980E7afJBlYZzvyMECBb6z3BkkG0XqY_oXyYfxim5c7pcrWM0lRzT-cKIImpMzTOhbBGslrEIb7ORMvOpHdkWMU4109Eo.png?r=2c8"
								alt=""
								className="w-8 h-8"
							/>
							<div className="account leading-[16px] hover:text-white">
								<p className="text-[16px] ">NAME</p>
								<p className="text-[12px] font-light ">Switch Profile</p>
							</div>
						</Link>
						<Link
							to="/browse"
							className="pl-[20px] hover:text-white"
							onClick={toggleAccordion}
						>
							Account
						</Link>
						<Link
							to="/browse"
							className="pl-[20px] hover:text-white"
							onClick={toggleAccordion}
						>
							Help Center
						</Link>
						<Link
							to="/browse"
							className="pl-[20px] hover:text-white"
							onClick={toggleAccordion}
						>
							Sign Out of Netflix
						</Link>
					</div>

					{/* SECTIONS */}
					<div className="sections flex flex-col pt-[10px] gap-[4px]">
						<NavLink
							to="/browse"
							className={({ isActive }) =>
								isActive
									? "pl-[20px] hover:text-white border-l-2 border-red-600"
									: "pl-[20px] hover:text-white"
							}
							onClick={toggleAccordion}
						>
							Home
						</NavLink>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "pl-[20px] hover:text-white border-l border-red"
									: "pl-[20px] hover:text-white"
							}
							onClick={toggleAccordion}
						>
							My List
						</NavLink>
					</div>

					{/* GENRES */}
					<div className="genres flex flex-col mt-[5px] gap-[4px]">
						{genres.map((genre) => (
							<Link
								to="/browse"
								className="pl-[20px] hover:text-white"
								onClick={toggleAccordion}
							>
								{genre.title}
							</Link>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default AppSideBar
