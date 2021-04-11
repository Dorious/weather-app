import { NextApiRequest, NextApiResponse } from 'next';
import { LocationForecast, OpenCage } from '@dorious/weather-api';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { lat, long } = req.query;
  const locLat = parseFloat(Array.isArray(lat) ? lat[0] : lat);
  const locLong = parseFloat(Array.isArray(long) ? long[0] : long);

  const locationResponse = await new LocationForecast.DataApi().completeGet(
    locLat,
    locLong
  );

  const cityResponse = await new OpenCage.DefaultApi().vversionFormatGet(
    1,
    'json',
    `${locLat}, ${locLong}`,
    'ce3818764ead4feea6be98e8c89f2d2d'
  );

  if (locationResponse.status === 200 && cityResponse.status === 200) {
    const data = {
      ...locationResponse.data,
      location: cityResponse.data.results[0],
    };
    res.status(200).json({ data });
  } else {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export default handler;
