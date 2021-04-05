const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const config = require('config');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

app.use(fileUpload({}))
app.use(express.json({ extented: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../dist')));
app.use('/auth', require('./routes/auth.routes'));
app.use('/guests', require('./routes/guests.routes'));


// app.use('/api/link', require('./routes/link.routes'));
// app.use('/api/cases', require('./routes/case.routes'));
// app.use('/api/settings', require('./routes/settings.routes'));
// app.use('/t', require('./routes/redirect.routes'));

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static(path.join(__dirname, 'client', 'build')));
//
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//     });
// }