import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route,Routes } from 'react-router-dom';4
import Genetator from './pages/Genetator';
import Community from './pages/Community';
import MyGenerations from './pages/MyGenerations';
import Plans from './pages/Plans';
import Loading from './pages/Loading';
import Result from './pages/Result';


function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/generator' element={<Genetator />}/>
				<Route path='/result/:projectId' element={<Result />}/>
				<Route path='/my-generations' element={<MyGenerations />}/>
				<Route path='/community' element={<Community />}/>
				<Route path='/plans' element={<Plans />}/>
				<Route path='/loading' element={<Loading />}/>
				
				
			</Routes>
			

			<Footer />
		</>
	);
}
export default App;