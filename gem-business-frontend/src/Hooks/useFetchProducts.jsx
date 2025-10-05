import { useState, useEffect } from "react";

const useFetchProducts = (id = null) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        let url = "https://gem-business.onrender.com/products";
        if (id) {
          url = `${url}/${id}`; // Append ID for single product fetch
        }
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${id ? "product" : "products"}`);
        const data = await res.json();
        setProducts(id ? [data] : data); // Set single product as array or full list
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]); // Re-run effect when id changes

  return { products, error, loading };
};

export default useFetchProducts;