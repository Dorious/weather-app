import { NextApiRequest, NextApiResponse } from 'next';
import { OpenCage } from '@dorious/weather-api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { q } = req.query;

  const cityResponse = await new OpenCage.DefaultApi().vversionFormatGet(
    1,
    'json',
    `${q}`,
    'ce3818764ead4feea6be98e8c89f2d2d'
  );

  if (cityResponse.status === 200) {
    const data = cityResponse.data.results;
    res.status(200).json({ data });
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default handler;
