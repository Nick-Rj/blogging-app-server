const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
      .catch((error) => next(error))
      .finally(() => {
        console.log("Async task handled!");
      });
  };
};

export { asyncHandler };
