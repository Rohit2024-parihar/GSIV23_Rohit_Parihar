/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface params {
  query: React.SetStateAction<string>;
  page: string | number;
}
interface movieData {
  adult: boolean;
  backdrop_path: boolean;
  id: number;
  overview: string;
  title: string;
  vote_average: number;
  poster_path: string;
}
interface productData {
  loading: boolean;
  data: movieData[];
  error: boolean;
}
export const fetchProduct = createAsyncThunk(
  "get/displayAllProducts",
  async (params: params) => {
    const options = {
      method: "GET",
      url: params.query
        ? `https://api.themoviedb.org/3/search/movie?query=${params.query}&page=${params.page}&api_key=0d9716441af16cabfd206089c8704b16`
        : `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${params.page}&sort_by=popularity.desc&api_key=0d9716441af16cabfd206089c8704b16`,
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDk3MTY0NDFhZjE2Y2FiZmQyMDYwODljODcwNGIxNiIsInN1YiI6IjYxMDIyNDdhZTljMGRjMDA1ZTM4N2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pK8YU2zUyDEpBFpVwAZu_7uAUeqRCHSSMznwlvClBWE",
      },
    };
    const res = await axios.request(options);
    return { query: params.query, result: res.data.results };
  }
);

const initialState: productData = {
  loading: true,
  data: [],
  error: false,
};

export const latestProductSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        action.payload.query
          ? (state.data = action.payload.result)
          : action.payload.result.map((value: any, index: number) => {
              if (state.data[index]?.id !== value?.id) {
                state.data.push(value);
              }
            });
        state.loading = false;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default latestProductSlice.reducer;
