import type { BackPage, GetServerSideProps } from 'backfr';
import Head from 'backfr/head';
import fetch from 'node-fetch';

export interface TimeAPI {
	abbreviation: string;
	client_ip: string;
	datetime: Date;
	day_of_week: number;
	day_of_year: number;
	dst: boolean;
	dst_from: Date;
	dst_offset: number;
	dst_until: Date;
	raw_offset: number;
	timezone: string;
	unixtime: number;
	utc_datetime: Date;
	utc_offset: string;
	week_number: number;
}

async function getExternalTime() {
	return (await (
		await fetch('https://worldtimeapi.org/api/timezone/America/New_York')
	).json()) as TimeAPI;
}

const programStart = await getExternalTime();

interface Props {
	currentTime: TimeAPI;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	return {
		props: {
			currentTime: await getExternalTime(),
		},
	};
};

const Time: BackPage<Props> = ({ currentTime }) => {
	return (
		<>
			<Head>
				<title>The Time:</title>
			</Head>
			<main>
				<p>Program Start:</p>
				<table border={1}>
					<thead>
						<td>Name</td>
						<td>Value</td>
					</thead>
					<tbody>
						{Object.entries(programStart).map(([name, value]) => (
							<tr key={name}>
								<td>{name}</td>
								<td>{value.toString()}</td>
							</tr>
						))}
					</tbody>
				</table>
				<p>Current Time:</p>
				<table border={1}>
					<thead>
						<td>Name</td>
						<td>Value</td>
					</thead>
					<tbody>
						{Object.entries(currentTime).map(([name, value]) => (
							<tr key={name}>
								<td>{name}</td>
								<td>{value.toString()}</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</>
	);
};

export default Time;
