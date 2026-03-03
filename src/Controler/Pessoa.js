import { openDb } from "../configDB.js";

export async function Createtable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    })
}

export async function insertPessoa(pessoa){
    openDb().then(db=>{
        db.run('INSERT INTO pessoa (nome, idade) VALUES (?, ?)', [pessoa.nome, pessoa.idade]);

    })
}

export async function updatePessoa(pessoa){
    openDb().then(db=>{
        db.run('UPDATE pessoa SET nome = ?, idade = ? WHERE id = ?', [pessoa.nome, pessoa.idade, pessoa.id]);

    })
}

export async function selectPessoas(pessoa){
    return openDb().then(db=>{
        return db.all('SELECT * FROM pessoa')
        .then(res=>res)
            
        

    })
}

export async function selectPessoa(id){
    return openDb().then(db=>{
        return db.all('SELECT * FROM pessoa WHERE id = ?', [pessoa.id])
        .then(res=>res)
    })
}