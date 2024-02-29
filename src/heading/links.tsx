const links = [
	{ text: "Tools", href: "#" },
	{ text: "AWS Builder", href: "#" },
	{ text: "Start Builds", href: "#" },
	{ text: "Build Supplies", href: "#" },
	{ text: "Tooling", href: "#" },
	{ text: "BlueHosting", href: "#" },
];

function Links() {
	return (
		<>
			<div className='flex gap-5 justify-between flex-wrap'>
				{links.map(link => (
					<div className='cursor-pointer py-3 bg-white rounded-2xl p-3'>
						<a href={link.href}>{link.text}</a>
					</div>
				))}
			</div>
		</>
	);
}

export default Links;
