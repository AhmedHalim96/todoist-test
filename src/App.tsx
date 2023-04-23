import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Weather from "./pages/Weather";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="/weather" element={<Weather />} />
			<Route path="*" element={<Home />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
