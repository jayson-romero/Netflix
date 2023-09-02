import CTA from "../../../components/CTA"
import FAQItem from "./FAQItem"

const faqs = [
	{
		question: "What is Netflix?",
		answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. 

		You can watch as much as you want, whenever you want without a single commercial all for one low.  monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
	},
	{
		question: "How much does Netflix cost?",
		answer:
			"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱149 to ₱549 a month. No extra costs, no contracts.",
	},
	{
		question: "Where can I watch?",
		answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

			You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
	},
	{
		question: "How do I cancel?",
		answer:
			"Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
	},
	{
		question: "What can I watch on Netflix?",
		answer:
			"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
	},
	{
		question: "Is Netfli good for kids?",
		answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

		Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
	},
	// Add more FAQ items as needed
]
const FAQ = () => {
	return (
		<>
			<div className="feature border-t-8 border-[#5B5B5B] bg-black text-white">
				<div className=" wrapper py-[56px] text-center">
					{/* HEADER */}
					<div className="header">
						<h1 className="text-[32px] font-black lg:text-[60px]">
							Frequently Asked Questions
						</h1>
					</div>

					{/* FAQ */}
					<div className="FAQ p-[5%] lg:p-[1%]">
						{faqs.map((faq, index) => (
							<FAQItem
								key={index}
								question={faq.question}
								answer={faq.answer}
							/>
						))}
					</div>

					{/* CTA */}
					<div className="CTA">
						<CTA />
					</div>
				</div>
			</div>
		</>
	)
}

export default FAQ
