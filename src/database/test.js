import Database from './db.js';
import saveOrphanage from './saveOrphanage.js';

Database.then(async db => {
    //insert data into table
    await saveOrphanage (db, {
        lat: "-27.2169063",
        lng: "-49.6438079",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e ou vulnerabilidade social.",
        whatsapp: "(11) 9.1234-5678",
        images: [
            "https://images.unsplash.com/photo-1573449595343-f5e436ae1091?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Veja como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h até 18h",
        open_on_weekends: "1"
    });
    
    //query (consultar) table data
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    //consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"');
    console.log(orphanage);

    //deletar dado da tabela
    /*console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"));
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'"));*/
});