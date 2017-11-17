
const badRequest = (res, statement) => {
    return res.status(400).json(`An Error occurred while trying ${statement}`)
}

const missingData = (res, item) => {
    return res.status(400).json(`You did not provide ${item}`)
}

module.exports = {
     badRequest, missingData
}