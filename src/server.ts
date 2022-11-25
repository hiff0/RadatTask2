require('dotenv').config();

import api from './api';
import { getConfig } from './config';

const PORT = getConfig().PORT || 8080;

api.get('/', (req, res) => {
    res.send('Work');
})

api.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
