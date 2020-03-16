export const setImageAmount = amount => ({
  type: "SET_IMAGE_AMOUNT",
  payload: amount
});

export const setQueryString = queryString => ({
  type: "SET_QUERY_STRING",
  payload: queryString
});

export const setQueryInfo = queryString => ({
  // only change displayed info-text when form is submitted, not on onChange like the query string
  type: "SET_QUERY_INFO",
  payload: queryString
});
