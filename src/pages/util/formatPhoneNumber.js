const formatPhoneNumber = (number) => {
  var formatted = number.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  return formatted;
};

export default formatPhoneNumber;
