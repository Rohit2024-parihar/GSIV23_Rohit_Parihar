/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Box, Paper, Typography } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../app/slices/latestProductSlice";
import { AppDispatch, RootState } from "../app/store";
import "../App.css";
import ShimmerPage from "./ShimmerPage";

const ListPage = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const { loading, data} = useSelector(
    (state: RootState) => state.latestProduct
  );
  const loader = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setQuery(e.target.value);
    dispatch(fetchProduct({ query: e.target.value, page: page }));
  };

  const handleObserver = useCallback((entries: any[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    dispatch(fetchProduct({ query: query, page: page }));
  }, [query, page]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "10px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]); 

  return (
    <Box>
      <Paper className="container">
        <TextField
          onChange={(e) => handleChange(e)}
          id="filled-basic"
          variant="filled"
          placeholder="Search"
          data-testid="searchBox"
          className="search"
          inputProps={{ "data-testid": "search" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <HomeIcon className="icon" />
      </Paper>
      <div className="card-container">
        {data.length === 0
          ? <ShimmerPage/>
          : data?.map((item, index) => {
              return (
                <Paper
                  key={item.id}
                  className="card-head"
                  onClick={() => navigate("/details", { state: item })}
                >
                  <img
                    className="image"
                    src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={`No Data ${item.title}`}
                  />
                  <div className="card-child">
                    <Typography fontWeight={900} fontSize={14}>
                      {item.title?.slice(0, 20)}
                    </Typography>
                    <Typography
                      fontWeight={700}
                      fontSize={14}
                     className="icon"
                    >
                      ({item.vote_average})
                    </Typography>
                  </div>
                  <Typography fontWeight={400} fontSize={12} className="summary">
                    {item.overview?.slice(0, 80)}
                  </Typography>
                </Paper>
              );
            })}
      </div>
      {loading && <h2 style={{ margin: "auto" }}><ShimmerPage/></h2>}
      <div ref={loader} />
    </Box>
  );
};

export default ListPage;
