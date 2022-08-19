import { BackPage, Head } from 'backfr';
import screenshot from 'optimizeImage?quality=10,../assets/screenshot.png';

const Image: BackPage = () => {
	return (
		<>
			<Head>
				<title>The Image:</title>
			</Head>
			<main>
				<img src={screenshot} />
			</main>
		</>
	);
};

export default Image;
