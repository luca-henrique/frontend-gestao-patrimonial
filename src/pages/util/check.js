function checkAttributesObj(obj) {
  // eslint-disable-next-line no-unused-vars
  for (var [key, value] of Object.entries(obj)) {
    if (typeof value === "undefined" || value === null || value === "") {
      throw new UserException("Null");
    }
  }
}

function UserException(message) {
  this.message = message;
  this.name = "UserException";
}
