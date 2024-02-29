import NavBar from "./navBar/navBar";
import Header from "./heading/Header";
import Content from "./content";
import ThingsYouMightLike from "./thingsYouMightLike";
import Footer from "./footer";

function App() {
	return (
		<>
			<div className='flex justify-center items-center w-full flex-grow flex-col'>
				<NavBar />
				<div className='container flex justify-center'>
					<div className='max-w-[1024px] px-4'>
						<div className='mt-10'>
							<Header />
						</div>
						<div>
							<Content />
						</div>
						<div className='mt-20'>
							<ThingsYouMightLike />
						</div>
					</div>
				</div>
				<div className='mt-20 w-screen'>
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
