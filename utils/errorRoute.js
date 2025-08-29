const errorRoute = (err, request, response, next) => {
    return response.status(404).json({
        message: "404 Not Found"
    });
}

module.exports = errorRoute;