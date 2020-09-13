const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HPwfJJhGEF1DNHktd9ehB9bGJacxO6HZdq90FpxPebGYz2B4anunhTWBQZN3NIHWxH3ss8RZh9RW390afUjzlq000rhgfW60E"
);

//API

// App config
const app = express();

// Midllewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
// app.get("/", (request, response) => response.status(200).send("hello world"));
// app.get("/mostzac", (request, response) => response.status(200).send("mostzac"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Commmand
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
