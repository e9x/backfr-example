import { BackPage, Head } from 'backfr';

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
