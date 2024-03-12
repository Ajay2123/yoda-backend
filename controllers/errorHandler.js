// Function to handle 404 errors (Not Found)
const handle404Error = (req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
};

// Function to handle all errors (Global Error Handler)
const handleGlobalError = (err, req, res, next) => {
    res.status(err.status || 500).json({
        error: {
            message: err.message || "Internal Server Error",
        },
    });
};

module.exports = {
    handle404Error,
    handleGlobalError,
};
