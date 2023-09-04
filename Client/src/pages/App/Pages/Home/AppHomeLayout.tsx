import List from "../../Components/List"

const AppHomeLayout = () => {
	return (
		<>
			<div className="text-white bg-black pt-[50px] min-h-screen">
				<div className="wrapper">
					<div className="newRelease ">
						<List />
					</div>
				</div>
			</div>
		</>
	)
}

export default AppHomeLayout
