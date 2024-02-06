"use client";
import Prism from 'prismjs';
import { useEffect } from 'react';

export default function myprism() {
	console.log("prism")
	try {
		useEffect(() => {
			try {
				Prism.highlightAll();
			} catch (e) {
				console.log(e)
				console.log("at prism");
			}
		});
	} catch (e) {
		console.log(e)
		console.log("at prism");

	}
	return (<>
		<script src="https://code.jquery.com/jquery-3.7.1.min.js"
			integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" />
		<script type="text/javascript" src="https://tkbutsuribu.vercel.app/jquery.arbitrary-anchor.js" />
	</>);
}