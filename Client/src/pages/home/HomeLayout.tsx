import Hero from "./Hero"
import Feature from "./Feature"

const HomeLayout = () => {
	return (
		<>
			<Hero />
			<Feature
				header="Enjoy on your TV"
				desc="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
				img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
				reverse={false}
			/>
			<Feature
				header="Download your shows to watch offline"
				desc="Save your favorites easily and always have something to watch."
				img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
				reverse={true}
			/>
			<Feature
				header="Watch everywhere"
				desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
				img=""
				reverse={false}
			/>
			<Feature
				header="Create profiles for kids"
				desc="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
				img="https://occ-0-1894-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
				reverse={true}
			/>
		</>
	)
}

export default HomeLayout
