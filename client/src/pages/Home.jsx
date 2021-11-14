import React from "react";
import wallet from "../svg/wallet.svg";

export default function Home() {
	return (
		<div className="center flex mx-12 text-center p-4 m-12 bg-orange-100 w-3/4 justify-items-center">
			<img className="w-1/2 max-h-60 p-3" src={wallet} alt="A wallet" />

			<div className="w-1/2 flex flex-col min-h-1/2-space-y-3 text-center">
				<h1 className="font-bold text-xl text-center">
					Welcome to Third Coast Bank!
				</h1>
				<p className="font-normal text-center">
					We aim to make banking run as smoothly as the gentle waves rolling by
					on the freshest coast around.
				</p>
			</div>
		</div>
	);
}
