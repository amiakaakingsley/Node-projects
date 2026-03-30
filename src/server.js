import express from 'express';
const app = express();
app.use(express.static("./public"));


app.get("/home", (requset, response) => {
    response.json({message: "Welcome to the Home Page"});
})



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
})
