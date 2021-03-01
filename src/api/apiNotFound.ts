export const apiNotFound = (_, res) => {
  res.status(404).json({
    statusCode: 404,
    message: "Not Found",
  });
};
