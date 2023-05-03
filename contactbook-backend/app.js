
const PDF_PATH = './assets/images';

const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/route");
const usersRouter = require("./app/routes/user.route");
const townsRouter = require("./app/routes/town.route");
const ApiError = require("./app/api-error");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use("/api/towns", townsRouter);
app.use("/api/users",usersRouter);
app.use('/assets/images/',express.static(PDF_PATH));

app.get("/",(req,res)=>{
    res.json({ message: "Welcome to contact book application."});
})

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(err.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});

// app.use(express.static('public'));
// app.use(fileUpload());
// app.post('/upload', (req, res) => {

//     if (!req.files) {
//         return res.status(500).send({ msg: "file is not found" })
//     }
//         // accessing the file
//     const myFile = req.files.file;

//     //  mv() method places the file inside public directory
//     myFile.mv(`${__dirname}/public/upload/${myFile.name}`, function (err) {
//         if (err) {
//             console.log(err)
//             return res.status(500).send({ msg: "Error occured" });
//         }
//         // returing the response with file path and name
//         return res.send({name: myFile.name, path: `/${myFile.name}`});
//     });
// })


// app.listen(4500, () => {
//     console.log('server is running at port 4500');
// })
module.exports = app;