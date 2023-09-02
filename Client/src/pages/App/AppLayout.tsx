import AppNavBar from "./AppNavBar"
import AppSideBar from "./AppSideBar"

import AppHomeLayout from "./Pages/Home/AppHomeLayout"

import { useState } from "react"
const AppLayout = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleAccordion = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<AppNavBar
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				toggleAccordion={toggleAccordion}
			/>
			{isOpen && <AppSideBar toggleAccordion={toggleAccordion} />}
			<AppHomeLayout />
		</>
	)
}

export default AppLayout
