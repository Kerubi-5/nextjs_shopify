import { ImageEdge, Product as ShopifyProduct } from "../schema";

import { Product, ProductImage } from "./../../common/types/product";

function normalizeImages({ edges }: { edges: Array<ImageEdge> }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct) {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imagesConnection,
    ...rest
  } = productNode;

  const product = {
    id,
    name,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    images: normalizeImages(imagesConnection),
    ...rest,
  };

  return product;
}
