import { BackPage, Head } from 'backfr';
import styles from '../styles/wallpaper.module.scss';

const Wallpaper: BackPage = () => {
	return (
		<>
			<Head>
				<title>The Wallpaper:</title>
			</Head>
			<main className={styles.main}>
				<p className={styles.text}>Cool</p>
			</main>
		</>
	);
};

export default Wallpaper;
