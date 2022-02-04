import React, { useEffect, useState } from "react";
import { Data } from "../api/api";
import Product from "../product/product";
import styled from "styled-components";
import SkeletonProduct from "../skeletonProduct/skeletonProduct";

const data = new Data();

const Container = (props) => {
  const hello = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    setTimeout(async () => {
      const loadData = await data.getData();
      setCompany(loadData);
      setLoading(false);
    }, 3000);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Skeleton Test!</h2>
      <ProductListWrapper>
        {loading
          ? hello.map((item) => <SkeletonProduct />)
          : company.map((item) => (
              <Product
                name={item.name}
                image={item.image}
                category={item.category}
                info={item.info}
                location={item.location}
                id={item.id}
              />
            ))}
      </ProductListWrapper>
    </div>
  );
};
const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
  justify-content: space-between;
`;

export default Container;
