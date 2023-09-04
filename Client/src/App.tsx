import Login from "./pages/login/Login"
import HomeLayout from "./pages/home/HomeLayout"
import AppLayout from "./pages/App/AppLayout"

// APP LAYOUT
import AppHomeLayout from "./pages/App/Pages/Home/AppHomeLayout"
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
				<Route path="browse" element={<AppLayout />}>
					<Route index element={<AppHomeLayout />} />
				</Route>
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
