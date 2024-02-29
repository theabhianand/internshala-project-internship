import type { SVGProps } from "react";

export function PhCaretRightBold(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			viewBox='0 0 256 256'
			{...props}
		>
			<path
				fill='currentColor'
				d='m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17'
			></path>
		</svg>
	);
}

const paths = [
	{ text: "Home", href: "#" },
	{ text: "Hosting for all", href: "#" },
	{ text: "Hosting", href: "#" },
	{ text: "Hosting6", href: "#" },
	{ text: "Hosting5", href: "#" },
];

function Finder() {
	return (
		<>
			<div className='flex gap-0 md:gap-2 text-xm md:text-base'>
				{paths.map((path, idx) => (
					<div className='flex gap-1 items-center'>
						<div>
							<a href={path.href} className='hover:underline'>
								{path.text}
							</a>
						</div>
						{idx !== paths.length - 1 && (
							<div>
								<PhCaretRightBold />
							</div>
						)}
					</div>
				))}
			</div>
		</>
	);
}

export default Finder;
