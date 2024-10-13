

class BadRequestError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 400;
    }
  }
  
  class UnauthenticatedError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 401;
    }
  }
  
  module.exports = {
    BadRequestError,
    UnauthenticatedError,

  };
  