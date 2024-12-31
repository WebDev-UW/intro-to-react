import HomeButton from "../../home-button"

/* 
	More reading on why React needs a key prop for rendering list elements: https://www.epicreact.dev/why-react-needs-a-key-prop
*/

export default function Page() {
	const lines = ["Hello, this is line 1", "And this is line 2", "This is line 3!", "Line 4 is here"]

	const cards = [
		{
			title: "Card 1",
			description: "blah blah blah"
		},
		{
			title: "Card 2",
			description: "foo bar baz"
		},
		{
			title: "Card 3",
			description: "join webdevuw"
		}
	]

	const showLines = false

	console.log(showLines ? "true!" : "false!")
	// Python equivalent: "true!" if showLines else "false"

	return (
		<>
			<div className="card flex flex-col gap-4 w-[40em] items-start">
				<h1 className="w-full text-3xl text-center">Rendering</h1>

				{/* TODO 3: Show the lines only if showLines is true (show/hide entire div below) */}
				<div className="flex flex-col flex-wrap w-full gap-2">
					{/* TODO 1: Map all the lines from the lines variable as <p> elements */}

				</div>
				
				{/* TODO 4: Show the lines only if showLines is true, otherwise show the cards only (show/hide entire div below) */}
				<div className="flex flex-row flex-wrap w-full gap-2">
					{/* TODO 2: Map all the card objects from the cards variable as Card components */}

				</div>
			</div>

			<HomeButton />
		</>

	)
}

function Card({ title, description }) {
	return (
		<div className="px-4 py-3 card">
			<h1 className="text-xl">{title}</h1>
			<p>{description}</p>
		</div>
	)
}