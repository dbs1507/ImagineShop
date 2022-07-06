import 'dotenv/config'

import express from "express";
import { UserService } from "./services/user-service.js";

const app = express()
const port = 'localhost:3000'


app.get('/', async (req, res) => {
    const userService = new UserService();

    await userService.add(
        {
            name: 'daniel',
            email: 'daniel@gmail.com',
            password: '12345',
        }
    );

    res.send('hello')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})