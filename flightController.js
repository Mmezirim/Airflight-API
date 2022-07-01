let flight = require('../models/Flight.js').exampleModel;
exports.example = (req, res) => {
    console.log("example")
    res.send("Flight example")
}
exports.newFLight = (req, res) => {
    const id = flight.length+1
    const title = req.body.title
    const price = req.body.price
    const date = req.body.date
    const time = req.body.time
    flight.push({id:id, title: title, time:time, price:price, date:date})
    return res.status(201).json({
        message : "here's my flight", title
    })
}
exports.allFlight = (req, res) => {
    return res.status(200).send(model)
}

exports.singleFlight = (req, res) => {
 
    const flight = model.find(m=>m.id==req.params.id)
    console.log(flight)
    if(flight){
        return res.status(200).send(flight)
    }

    return res.status(404).send({message: "No Flight found"})
}

exports.updateFlight = (req, res) => {
    const {title, time, price, date}  = req.body

    for( let i = 0; i < model.length; i++){ 
            if (model[i].id == req.params.id) {
                model[i].title= title
                model[i].time = time
                model[i].price = price
                model[i].date = date
                return res.status(202).send(model[i])
        }
    }

    return res.status(404).send({message: `No Flight with id ${req.params.id} found`})
}
exports.deleteFlight = (req, res) => {
    let found = false
    for( let i = 0; i < model.length; i++){ 
        if ( model[i].id == parseInt(req.params.id)) { 
            model.splice(i,1)
            found = true
            break
        }
    }

    if(found){
        return res.status(200).send({message: "Deleted"})
    }
    return res.status(404).send({message: `No Flight with id ${req.params.id} found`})
}


