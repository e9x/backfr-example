import { BackPage, Head } from 'backfr';
import { ReactComponent as FordFocus } from '../assets/compuserver_msn_Ford_Focus.svg';

const Image: BackPage = () => {
	return (
		<>
			<Head>
				<title>The SVG:</title>
			</Head>
			<main>
				<a
					title="Large SVG sample"
					href="https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/"
				>
					<FordFocus />
				</a>
			</main>
		</>
	);
};

export default Image;
