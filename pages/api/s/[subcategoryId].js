import { subcategory } from 'react-storefront-connector'

export default async function plp(req, res) {
  const { q, subcategoryId: slug, page, filters, sort } = req.query;

  let key = "9166e015ff82057cef020e1f067477aa"
  let password = "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"
  let sharedSecret = "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"
  let endpoint = "tiebar-demostore.myshopify.com/admin/api/2020-07"

  const Shopify = require('shopify-api-node');

  const shopify = new Shopify({
    shopName: 'tiebar2020.myshopify.com',
    apiKey: 'f915bbb6f289ed9b7fdf6444dc0badb6',
    password: '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'
  });

  let query = `
            query {
              shop {
                metafield( namespace: "plp_models", key: "shirts" ) {
                    id
                    key
                    value
                }
              }
          }
          `

  let fetcher = await fetch("https://tiebar2020.myshopify.com/admin/api/2020-07/graphql.json", {
                              method: "POST",
                              headers: {
                                "X-Shopify-Access-Token": "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",
                                "Content-Type":"application/json"
                              },
                              body: JSON.stringify({query})
                            })

  let data = await fetcher.json()
  let final = {
                pageData: JSON.parse(data.data.shop.metafield.value),
                appData: await subcategory({ q, slug, page, filters, sort }, req, res)['appData']
              }

  // res.json(await subcategory({ q, slug, page, filters, sort }, req, res))
  res.json(final)
}
