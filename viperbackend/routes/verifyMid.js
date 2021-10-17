const express = require('express')
const router = express.Router()


// config mongo
const mongoose = require('mongoose')
const userSchema = require('../models/userModel')
userSchema()
const users = mongoose.model('Users')

