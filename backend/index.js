require('dotenv').config();

const express = require ('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Port = process.env.PORT || 3001;
const MongooseUrl = process.env.MONGOOSE_URL;
const {HoldingsModel} = require('./models/HoldingsModel');
const {PositionsModel} = require('./models/PositionsModel');
const {OrdersModel} = require('./models/OrdersModel');
const cookieParser = require("cookie-parser");
const router = require("./Routes/AuthRoute");


const allowedOrigins =  ['http://localhost:5173','http://localhost:5174'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use(bodyParser.json());


app.listen(Port, async () =>{
    console.log('port was listing',Port);
    await mongoose.connect(MongooseUrl);
    console.log('db connect');
});

// app.get("/addposition", async (req,res) =>{
//     let tempData = [data.js me se data];
//   tempData.forEach((items) =>{
//     let newData = new PositionsModel({schema});
//      newData.save()
//   });
//   res.send('done');
// });


app.use("/", router);

app.get('/holdings',async (req,res)=>{
    let allHolding = await HoldingsModel.find({}) 
    res.json(allHolding);
    console.log(allHolding)
});

app.get('/position',async (req,res)=>{
    let allPosition = await PositionsModel.find({})
    res.json(allPosition)
    console.log(allPosition)

});

app.get('/order',async (req,res)=>{
    let allOrders = await OrdersModel.find({})
    res.json(allOrders)
    console.log(allOrders)

});

app.post('/newOrder',async (req,res)=>{
    let newOrder = await new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
        created_at:req.body.createdAt
    });
    newOrder.save();
    res.send('order save');
});