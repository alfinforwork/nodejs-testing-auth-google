module.exports.format_json = (status = true, message = null, data = null) => {
    return {
        status: status,
        message: message,
        data: data
    }
}
module.exports.isLoggedIn = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.status(401).json({
            errors: 'Unauthorized'
        })
    }
}