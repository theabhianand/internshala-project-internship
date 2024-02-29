function Links(props: { text: string }) {
	return (
		<>
			<div className='text-white hover:underline cursor-pointer'>
				{props.text}
			</div>
		</>
	);
}

export default Links;
