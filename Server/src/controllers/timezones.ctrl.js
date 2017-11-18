

const utility = require('../helpers/utility.js')
const usersModel = require('../models/users.model')

function removeTimeZone(req, res) {
    return usersModel.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { timeZones: { _id: req.params.timeZoneId } } },
        { new: true }
    )
        .then((user) => {
            return res.status(200).json(user)
        })
        .catch(err => {
            utility.badRequest(res, 'to delete timeZone')
        })
}

function addTimeZone(req, res) {
    return usersModel.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { timeZones: req.body } },
        { new: true }
    )
        .then((user) => {
            return res.status(200).json(user)
        })
        .catch(err => {
            utility.badRequest(res, 'to add timeZone')
        })
}

function updateTimeZone(req, res) {
    return usersModel.findOneAndUpdate(
        { _id: req.params.id, "timeZones._id": req.params.timeZoneId },
        { $set: { "timeZones.$": req.body } },
        { new: true }
    )
        .then(user => {
            return res.status(200).json(user)
        })
        .catch(err => {
            utility.badRequest(res, 'to remove timeZone')
        })
}

module.exports = { updateTimeZone, addTimeZone, removeTimeZone }