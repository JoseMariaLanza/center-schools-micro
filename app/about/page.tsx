import {GetStaticProps} from "next";

export default function About() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>School History</h1>
		</main>
	);
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	console.log("In school history");
	return {
		props: {},
	};
};
