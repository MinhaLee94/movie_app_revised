import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({nowPlaying, popular, upcoming, loading, error}) => 
  <>
    <Helmet>
      <title>Movies | Movie app</title>
    </Helmet>
    {loading ? (
      <Loader /> 
    ) : (
      <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster 
              key={movie.id} 
              id={movie.id}
              title={movie.original_title} 
              imageUrl={movie.poster_path} 
              rating={movie.vote_average}
              isMovie={true}
              year={movie.release_date?.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="Upcoming Movies">
          {upcoming.map(movie => (
            <Poster 
              key={movie.id} 
              id={movie.id}
              title={movie.original_title} 
              imageUrl={movie.poster_path} 
              rating={movie.vote_average}
              isMovie={true}
              year={movie.release_date?.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular Movies">
          {popular.map(movie => (
            <Poster 
              key={movie.id} 
              id={movie.id}
              title={movie.original_title} 
              imageUrl={movie.poster_path} 
              rating={movie.vote_average}
              isMovie={true}
              year={movie.release_date?.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {error && <Message text={error} color="#e74c3c" />}
    </Container>
  )}
</>;

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;