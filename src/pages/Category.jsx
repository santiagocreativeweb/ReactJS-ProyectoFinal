import React, { useEffect, useState } from "react";
import ItemListContainer from "../components/ItemListContainer";
import { useParams } from "react-router-dom";

import { collection, getDocs, getFirestore } from "firebase/firestore";
const Category = () => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { categoryId } = useParams();
  console.log(categoryId)

  useEffect(() => {
    const db = getFirestore();

    const productCollection = collection(db, "products");
    getDocs(productCollection)
      .then((snapshot) => {
        
        console.log(snapshot)
        const productsFilter = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));


        if (categoryId === "allproducts") {
          setProductsData(productsFilter)
        } else {
          setProductsData(
            productsFilter.filter((product) => product.category === categoryId)
          );
        }

      })
      .catch((error) => setError(true))
      .then(() => setLoading(false));
  }, [categoryId]);


  return <ItemListContainer productsData={productsData} />;
};

export default Category;
