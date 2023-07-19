/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('pk_test_51NU1bpHxHD2uIuppkckGynpiCziu8K028feVD4mACZlw96Sa4ZFPOSNnCzYDUquteUECpzvi0HFGrEFGoMoTcyaU00QYAlB9cS')

const app = express();

app.use(cors({origin : true}));
app.use(express.json());

app.get('/',(request,response) => response.status(200).send('hello world'))

express.api = functions.https.onRequest(app)


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
