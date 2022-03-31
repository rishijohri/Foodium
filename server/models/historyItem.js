var mongoose=  require("mongoose")

var HistoryItemSchema = mongoose.Schema({
    dateTime: String,
    payment: Number,
    currBalance: Number
},{ timestamps: true })

module.exports = mongoose.model("HistoryItem", HistoryItemSchema)
