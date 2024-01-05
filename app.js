import express from 'express'
import { fileURLToPath } from 'url';
import path from 'path'

const app = express()
const port = 5000
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/src/employees.jsx', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/employees.jsx'))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})