import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { MOVIE_DETAILS } from "./queries";

const Detail = ({
  match: {
    params: { movieId }
  }
}) => (
  <Query query={MOVIE_DETAILS} variables={{ movieId }}>
    {({ loading, data, error }) => {
      if (loading) return "loading";
      if (error) return "error has occured!";
      return (
        <Fragment>
          {data.movie.title}
          {data.movie.medium_cover_image}
          {data.movie.rating}
          {data.movie.description_intro}
        </Fragment>
      );
    }}
  </Query>
);

export default Detail;
