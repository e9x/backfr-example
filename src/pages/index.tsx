import type { BackPage } from 'backfr';
import Head from 'backfr/head';
import styles from '../styles/home.module.scss';

const Index: BackPage = () => {
	return (
		<>
			<Head>
				<title>The Home:</title>
			</Head>
			<main>
				<h1>Hello, World!</h1>
				<p className={styles.center}>
					This <span className={styles.s1}>is</span> a{' '}
					<span className={styles.s2}>Test</span>.
				</p>
				<ul>
					<li>
						<a href="/javascript">Go to JavaScript</a>.
					</li>
					<li>
						<a href="/image">Go to image</a>.
					</li>
					<li>
						<a href="/svg">Go to SVG</a>.
					</li>
					<li>
						<a href="/wallpaper">Go to wallpaper</a>.
					</li>
					<li>
						<a href="/time">Go to time</a>.
					</li>
				</ul>
			</main>
		</>
	);
};

export default Index;
