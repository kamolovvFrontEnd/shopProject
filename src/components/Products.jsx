import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { setData, setIsLoading, add } from "./store/cartReducer";
import { useDispatch } from "react-redux";
import { useProductSelector } from "./hooks/useProductSelector";
import Cards from "./Cards";

function Products() {
  const dispatch = useDispatch();
  const { data, isLoading } = useProductSelector();
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const card = await response.json();
        dispatch(setData(card));
        dispatch(setIsLoading(false));
        setFilter(card);
      } catch (error) {
        console.message(error);
      }
    }
    fetchData();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ButtonCategory = () => {
    const filterProduct = (categories) => {
      const update = data.filter((e) => e.category === categories);
      setFilter(update);
    };

    return (
      <>
        <div className="button d-flex justify-content-center mb-5">
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            All
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's clothes
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's clothes
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </div>
          <div
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronic
          </div>
        </div>
        {filter.map((cards) => {
          return <Cards cards={cards} handleClick={add} name="add to cart" />;
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Categories</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading /> : <ButtonCategory />}
        </div>
      </div>
    </div>
  );
}

export default Products;
