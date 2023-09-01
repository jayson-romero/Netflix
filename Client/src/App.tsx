import Login from "./pages/login/Login"
import HomeLayout from "./pages/home/HomeLayout"
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from "react-router-dom"

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<HomeLayout />}></Route>
				<Route path="login" element={<Login />} />
			</>
		)
	)

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
