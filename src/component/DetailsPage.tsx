import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Paper, Typography } from "@mui/material";
import "../App.css";

export const DetailsPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <Paper>
      <Paper className="details-container">
        <h4>Movie Details</h4>
        <button
        data-testid="btn"
          onClick={() => navigate("/")}
          style={{ border: "none", backgroundColor: "transparent" }}
        >
          <HomeIcon className="icon" />
        </button>
      </Paper>
      <Grid container>
        <Grid item lg={3} xs={5}>
          <img
            className="details-image"
            src={`https://image.tmdb.org/t/p/original/${state?.poster_path}`}
            alt={`No Data ${state?.title}`}
          />
        </Grid>
        <Grid item lg={9} xs={7} className="details-info">
          <div className="row">
            <Typography fontWeight={900} paddingLeft={"4px"} fontSize={16}>
              {state?.title}
            </Typography>
            <Typography fontWeight={900} paddingLeft={"16px"} fontSize={16}>
              ({state?.vote_average})
            </Typography>
          </div>

          <div className="row">
            <Typography fontWeight={500} paddingLeft={"4px"} fontSize={14}>
              Release Date
            </Typography>
            <Typography fontWeight={500} paddingLeft={"16px"} fontSize={14}>
              {state?.release_date}
            </Typography>
          </div>

          <div className="row">
            <Typography fontWeight={500} paddingLeft={"4px"} fontSize={14}>
              Original language
            </Typography>
            <Typography fontWeight={500} paddingLeft={"16px"} fontSize={14}>
              {state?.original_language}
            </Typography>
          </div>
          <div className="row">
            <Typography fontWeight={500} paddingLeft={"4px"} fontSize={14}>
              Popularity Index
            </Typography>
            <Typography fontWeight={500} paddingLeft={"16px"} fontSize={14}>
              {state?.popularity}
            </Typography>
          </div>
          <div className="row">
            <Typography fontWeight={500} paddingLeft={"4px"} fontSize={14}>
              Vote Count
            </Typography>
            <Typography fontWeight={500} paddingLeft={"16px"} fontSize={14}>
              {state?.vote_count}
            </Typography>
          </div>
          <Typography
            fontWeight={400}
            fontSize={14}
            paddingLeft={"4px"}
            className="details-overview"
          >
            {state?.overview}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
