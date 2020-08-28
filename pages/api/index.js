import React, { useContext } from "react"
import { home } from 'react-storefront-connector'

export default async function(req, res) {

  const contentful = require('contentful')
  const client = contentful.createClient({
    space: '8x9h02x0glox',
    environment: 'master',
    accessToken: 'FA0YXUdosKtX2pFUzZ0RjDdOjq-Vqk3rhsQZH1pNZNA'
  });

  let fetcher = await client.getEntries({ include: 2, 'sys.id':'4rKXzT1mPqbTS9GvOwKpVu' });
  let homeData = await(home(req, res));
  fetcher.items[0].fields['pageData'] = homeData['pageData'];
  fetcher.items[0].fields['appData'] = homeData['appData'];

  return res.json(fetcher.items[0].fields);
}
