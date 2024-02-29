import { PhCaretDown } from "./heading/info";

function Section(props: {
	title: string;
	links: Array<{ text: string; href: string }>;
}) {
	return (
		<>
			<div className='flex flex-col gap-3'>
				<div>{props.title}</div>
				<div className='flex flex-col gap-2 text-sm text-[#B6BDC4]'>
					{props.links.map(link => (
						<a href={link.href}>{link.text}</a>
					))}
					<div></div>
				</div>
			</div>
		</>
	);
}

export default function Footer() {
	return (
		<>
			<div className='flex flex-row justify-between bg-[#212731] text-white p-20'>
				<div className='flex md:flex-row flex-col gap-10 justify-between w-full p-10'>
					<div>
						<Section
							title='Categories'
							links={[
								{ text: "Web Builder", href: "#" },
								{ text: "Hosting", href: "#" },
								{ text: "Data Center", href: "#" },
								{ text: "Robotic-Automation", href: "#" },
							]}
						/>
					</div>
					<div>
						<Section
							title='Contact'
							links={[
								{ text: "Contact", href: "#" },
								{ text: "Privacy Policy", href: "#" },
								{ text: "Terms Of Service", href: "#" },
								{ text: "Categories", href: "#" },
								{ text: "About", href: "#" },
							]}
						/>
					</div>
					<div className='flex gap-2 h-6'>
						<div className='text-[#D1D6DA]'>United States</div>
						<div className='flex   items-center justify-center'>
							<PhCaretDown />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
