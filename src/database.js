import { Database } from 'mongorito'
const db = new Database( 'localhost/lexmin' )
import Question from './routes/questions'

async function connect() {
  try {
    let connected = await db.connect();
  } catch ( e ) {
    console.error( e )
  }
}

connect().then(() => db.register( Question ));
export default db
