import * as Database from 'sqlite-async';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)
}

export default Database.Database.open(path.join(__dirname, 'database.sqlite')).then(execute); //db