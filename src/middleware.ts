import type { BackHandler } from 'backfr';
import createError from 'http-errors';

const handler: BackHandler = (req, res, next) => {
	res.setHeader('x-test', 'Hello, World!');

	if (req.originalUrl.includes('.hta')) throw new createError.Forbidden();

	next();
};

export default handler;
