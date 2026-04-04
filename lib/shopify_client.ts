const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN; 
// Credentials moved to .env.local for security.

async function shopifyFetch({ query, variables }: { query: string, variables?: any }) {
  const endpoint = `https://${domain}/api/2026-01/graphql.json`;

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken || '',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Shopify API error: ${res.status} ${errorText}`);
  }

  return res.json();
}

/**
 * Fetch product details by handle
 */
export async function getProduct(handle: string) {
  const query = `
    query getProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        images(first: 5) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price { amount currencyCode }
            }
          }
        }
      }
    }
  `;
  return shopifyFetch({ query, variables: { handle } });
}

/**
 * Create a cart with custom attributes for the box dimensions and material
 */
export async function createCartWithCustomAttributes(variantId: string, quantity: number, attributes: { key: string, value: string }[]) {
  const query = `
    mutation createCart($lines: [CartLineInput!]!, $attributes: [AttributeInput!]!) {
      cartCreate(input: { lines: $lines, attributes: $attributes }) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  const variables = {
    lines: [
      {
        merchandiseId: variantId,
        quantity: quantity,
      }
    ],
    attributes: attributes
  };

  return shopifyFetch({ query, variables });
}

/**
 * Add custom attributes to an existing cart (for box dimensions/material)
 */
export async function addAttributesToCart(cartId: string, attributes: { key: string, value: string }[]) {
  const query = `
    mutation cartAttributesUpdate($cartId: ID!, $attributes: [AttributeInput!]!) {
      cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
        cart {
          id
          attributes {
            key
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  return shopifyFetch({ query, variables: { cartId, attributes } });
}
