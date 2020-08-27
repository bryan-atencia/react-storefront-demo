import React, { useContext } from "react"
import { home } from 'react-storefront-connector'

export default async function(req, res) {

  // let key = "9166e015ff82057cef020e1f067477aa"
  // let password = "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"
  // let sharedSecret = "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"
  // let endpoint = "tiebar-demostore.myshopify.com/admin/api/2020-07"

  // const Shopify = require('shopify-api-node');
  //
  // const shopify = new Shopify({
  //   shopName: 'tiebar-demostore.myshopify.com',
  //   apiKey: '9166e015ff82057cef020e1f067477aa',
  //   password: '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'
  // });

  // let fetchProductData = await fetch(`https://${key}:${password}@${endpoint}/products.json`)
  // let productData = await fetchProductData.json()
  // let mainData = productData.products;

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
