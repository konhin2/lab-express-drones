// Iteration #1
// 1. IMPORTACIONES
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// 2. SCHEMA
const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number,
}, {
    timestamps: true // Generar el momento en el que se creo el documento
})

// 3. MODELO
const Drone = mongoose.model('Drone', droneSchema)

// 4. EXPORTACION
module.exports = Drone