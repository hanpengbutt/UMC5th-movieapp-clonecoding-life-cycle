import styled from 'styled-components';
import movies from '../../services/movieDummy';
import MovieItem from './MovieItem';

function MovieContainer() {
  return (
    <MovieContainerWrapper>
      {movies.results.map((item, index) => {
        return (
          <MovieItem
            key={index}
            title={item.title}
            poster={item.poster_path}
            voteAverage={item.vote_average}
            overview={item.overview}
          />
        );
      })}
    </MovieContainerWrapper>
  );
}

const MovieContainerWrapper = styled.div`
  width: 90vw;
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 1530px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-gap: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MovieContainer;
