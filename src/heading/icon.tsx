import React from "react";

function Icon(props: { svg: React.ReactNode; text: string }) {
	return (
		<>
			<div className='flex justify-start gap-3 items-center'>
				<div>{props.svg}</div>
				<div>{props.text}</div>
			</div>
		</>
	);
}

export default Icon;
