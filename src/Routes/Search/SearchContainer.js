import React from "react";
import { moviesApi } from "../../api";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component{
  state={
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  }

  handleSubmit = () => {
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm()
    }
  }

  searchByTerm = async() => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const { data: { result: movieResults }} = await moviesApi.search(searchTerm);
      const { data: { result: tvResults }} = await moviesApi.search(searchTerm);
      this.setState({ 
        movieResults, 
        tvResults, 
      });
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, error, loading, handleSubmit } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={handleSubmit}
      />
    );
  }
}