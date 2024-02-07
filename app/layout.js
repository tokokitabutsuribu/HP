import "./normalize.css";
import GTM from "./gtm.js";

export default function RootLayout({ children }) {
	try{
	return (
		<html lang="ja">
			<head />
			<body>
				<GTM />

				{(process.env.NODE_ENV === "development" ||
					process.env.VERCEL_ENV === "preview") && (
						// eslint-disable-next-line @next/next/no-sync-scripts
						<script
							data-project-id="cy4LiIr4fnVnIeHpS860b4iP9OxJkgyFFyYe6grP"
							data-is-production-environment="false"
							src="https://snippet.meticulous.ai/v1/meticulous.js"
						/>
					)}

				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-TVKWHB4T"
						title="GTM(noscript)"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					/>
				</noscript>
				{children}
			</body>
		</html>
	);
}catch(e){
	console.log(e);
	console.log("at top layout")
	return{children}
}
}
