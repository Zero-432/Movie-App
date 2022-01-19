import React from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/pageHeader/PageHeader";
import { category as cate } from "../api/tmdbApi";
import Grid from "../components/grid/Grid";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader category={category}>
        {category === cate.movie ? "Movies" : "Tv Series"}
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <Grid category={category} />
        </div>
      </div>
    </>
  );
};

export default Catalog;
