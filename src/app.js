//import  {openDb}  from './configDB.js';

import { Createtable, insertPessoa, updatePessoa, selectPessoas, selectPessoa } from './Controler/Pessoa.js';

import express from 'express';
const app = express();
app.use(express.json());

(async () => { await Createtable(); })();

app.get('/', (req, res) => {
    res.send('Samelinhoooo prewnnnn');
});

// Listar todas as pessoas
app.get('/pessoa', async (req, res) => {
    const pessoas = await selectPessoas();
    res.json(pessoas);
});

// Buscar pessoa por id
app.get('/pessoa/:id', async (req, res) => {
    const pessoa = await selectPessoa(req.params.id);
    if (pessoa) {
        res.json(pessoa);
    } else {
        res.status(404).json({ message: 'Pessoa não encontrada' });
    }
});

// Inserir pessoa
app.post('/pessoa', async (req, res) => {
    const result = await insertPessoa(req.body);
    if (result.success) {
        res.json({ statusCode: 200 });
    } else {
        res.status(500).json({ statusCode: 500, error: result.error });
    }
});

// Atualizar pessoa
app.put('/pessoa', async (req, res) => {
    if (!req.body || !req.body.id) {
        res.status(400).json({ statusCode: 400, message: 'Id da pessoa é obrigatório' });
    } else {
        const result = await updatePessoa(req.body);
        if (result.success) {
            res.json({ statusCode: 200 });
        } else {
            res.status(500).json({ statusCode: 500, error: result.error });
        }
    }
});

app.listen(3000, () => console.log('Api rodando'));