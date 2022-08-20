import type { BackPage } from 'backfr';
import Head from 'backfr/head';
import screenshot1 from 'backfr/image?quality=10,../assets/screenshot.png';
import screenshot2 from 'backfr/image?quality=90&width=200,../assets/screenshot.png';

const Image: BackPage = () => {
	return (
		<>
			<Head>
				<title>The Image:</title>
			</Head>
			<main>
				<img src={screenshot1} />
				<br />
				<img src={screenshot2} />
			</main>
		</>
	);
};

export default Image;
