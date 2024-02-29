import Finder from "./finder";
import Info from "./info";
import Links from "./links";

function Header() {
	return (
		<>
			<div className='flex flex-col gap-2'>
				<div className=' text-xl md:text-5xl font-bold'>
					Best Website Builder in USA
				</div>
				<div>
					<div className='w-full bg-slate-200 h-[2px] mt-2'></div>
					<Info />
					<div className='w-full bg-slate-200 h-[2px] mt-2'></div>
				</div>

				<div>
					<Links />
				</div>
				<div>
					<Finder />
				</div>
			</div>
		</>
	);
}

export default Header;
