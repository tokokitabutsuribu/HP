"use client";
import Prism from 'prismjs';
import { useEffect } from 'react';

export default function myprism() {
	console.log("prism")
	useEffect(() => {
		try {
			Prism.highlightAll();
		} catch (e) {
			console.log(e);
		}
	});

	return (<span>
		<script src="https://code.jquery.com/jquery-3.7.1.min.js"
			integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" />
		<script type="text/javascript" src="https://tkbutsuribu.vercel.app/jquery.arbitrary-anchor.js" />
	</span>);
}