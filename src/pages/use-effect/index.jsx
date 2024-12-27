/* If we have time, we can go through another exercise to render posts fetched with this function:
	async function fetchPosts() {
		return await fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
	}
*/
export default function Page() {
	// TODO 1: Create a useState for a count variable

	// TODO 3: Create a useEffect to set an interval that increments count every 1 second.
	// 		   Make sure to include a cleanup function that clears the interval!
	return (
		<div className="card flex flex-col gap-4 w-[40em] items-start">
			<h1 className="w-full text-3xl text-center">useEffect Hook</h1>
			
			{/* TODO 2: Insert count into the <h1> below */}
			<h1 className="text-2xl">Count: {}</h1>

			
		</div>
	)
}