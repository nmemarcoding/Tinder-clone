import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

const app = express();
const port = process.env.PORT || 8001;
const Concection_url = "mongodb+srv://admin:Nima1377@cluster0.zzgb0.mongodb.net/tinderdb?retryWrites=true&w=majority"


app.use(express.json());
app.use(Cors());

mongoose.connect(Concection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})



app.get('/', (req, res) => {
    res.status(400).send("HELLO")
})

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })

})

// Cards.deleteOne({ _id: '62433e1822c3461d70360ec9' }, function(err) {
//     if (err) console.log(err);
//     console.log("Successful deletion");
// });


app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})


app.listen(port, () => {
    console.log(`Listening on localhost: ${port}`)
})