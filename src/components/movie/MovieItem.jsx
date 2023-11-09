import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieItemDetail from './MovieItemDetail';

function MovieItem({ title, voteAverage, overview, poster }) {
  const [detail, setDetail] = useState(false);

  return (
    <MovieItemWrapper
      onMouseOver={() => setDetail(true)}
      onMouseOut={() => setDetail(false)}
    >
      <ItemPoster
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt='영화 포스터 사진'
      />
      <ItemInfo>
        <ItemTitle>{title}</ItemTitle>
        <div>{voteAverage}</div>
      </ItemInfo>
      <MovieItemDetail title={title} overview={overview} display={detail} />
    </MovieItemWrapper>
  );
}

MovieItem.propTypes = {
  voteAverage: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

const MovieItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ItemPoster = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1.5;
  object-fit: cover;
`;

const ItemInfo = styled.div`
  width: 100%;
  aspect-ratio: 2 / 1;
  background-color: #373b69;
  color: white;
  display: flex;
  box-sizing: border-box;
  padding: 14px;
  line-height: 1.4;
  justify-content: space-between;
`;

const ItemTitle = styled.div`
  width: 80%;
  height: 100%;
  word-break: keep-all;
`;

export default MovieItem;
