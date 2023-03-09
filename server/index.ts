import app from './app';
import { startConnection } from './database'

startConnection();
app.listen(3000);
console.log('server is running on port 3000');