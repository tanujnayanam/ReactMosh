import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetch product in ", category);
    setProducts(["paper", "helloworld"]);
  }, [category]);

  return <div>Hello</div>;
};

export default ProductList;
