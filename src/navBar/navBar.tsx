// import { useState } from "react";
import { useState } from "react";
import Links from "./links";
import Search from "./search";

function NavBar() {
	const [open, setOpen] = useState(false);
	const toggleMenu = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className='bg-[#212731]  flex md:flex-col flex-row gap-5 px-3 justify-center top-0 sticky w-screen items-center'>
				<div className='container flex justify-center'>
					<div className='max-w-[1024px] px-4 flex justify-between w-full'>
						<div className='flex flex-col gap-5  w-full justify-between items-center md:hidden'>
							<div className='flex flex-row w-full justify-between items-center'>
								<div
									className='flex gap-2 flex-col transition-all duration-100'
									onClick={toggleMenu}
								>
									<div
										className={`w-10 h-1 bg-white rounded-lg ${
											open ? "hidden" : ""
										}`}
									></div>
									<div
										className={`w-10 h-1 bg-white rounded-lg ${
											open ? "rotate-45" : ""
										}`}
									></div>
									<div
										className={`w-10 h-1 bg-white rounded-lg ${
											open ? "-rotate-45 -translate-y-3" : ""
										}`}
									></div>
								</div>
								<div className='container flex justify-center md:gap-20 py-4 flex-col md:flex-row items-center gap-10'>
									<Search />
								</div>
							</div>

							{open && (
								<>
									<Links text='Categories' />
									<Links text="Today's Deal" />
									<Links text='Website Builder' />
									<Links text='Categories' />
								</>
							)}
						</div>

						<div className=' flex-row gap-5  w-full justify-between items-center hidden md:flex'>
							<div className='container flex justify-center md:gap-20 py-4 flex-col md:flex-row items-center gap-10'>
								<Search />
								<Links text='Categories' />
								<Links text="Today's Deal" />
								<Links text='Website Builder' />
								<Links text='Categories' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NavBar;
