import moment from "moment";

export const formatDate = (data) => {
  const date = moment(data).format("YYYY-MM-DD");
  return date;
};
