module.exports = (status, message, data, error) => {
    if(error) {
        return {
            status,
            message,
            error
        }
    }
    else {
        return {
            status,
            message,
            data
        }
    }
}