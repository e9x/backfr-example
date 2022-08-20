import type { BackPage } from 'backfr';
import Head from 'backfr/head';

const JsPage: BackPage = () => {
	return (
		<>
			<Head>
				<title>The JS:</title>
			</Head>
			<main>
				<button id="alert_btn">Alert</button>
				<script
					dangerouslySetInnerHTML={{
						__html: 'alert_btn.onclick = function(){alert("Hello, World!")}',
					}}
				/>
			</main>
		</>
	);
};

export default JsPage;
