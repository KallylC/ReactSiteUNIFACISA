require('dotenv').config(); // 1. Carrega as variáveis do arquivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// 2. Conexão com MongoDB (Atlas ou Local)
// Ele tenta pegar do arquivo .env, se não achar, tenta local (bom para não quebrar se a internet cair)
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://kallyl:kallyl321@cluster0.jllcyqs.mongodb.net/refugioapp';

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB Conectado!'))
    .catch(err => console.error('Erro ao conectar Mongo:', err));

// 3. Modelos (Schemas)
const VoluntarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    opcao: String,
    mensagem: String,
    data: { type: Date, default: Date.now }
});

const UsuarioSchema = new mongoose.Schema({
    nome: String,
    email: { type: String, unique: true },
    senha: String, 
    nacionalidade: String,
    necessidades: String
});

const Voluntario = mongoose.model('Voluntario', VoluntarioSchema);
const Usuario = mongoose.model('Usuario', UsuarioSchema);

// 4. Rotas

// --- VOLUNTÁRIOS ---
// Salvar voluntário
app.post('/api/voluntarios', async (req, res) => {
    try {
        const novoVoluntario = new Voluntario(req.body);
        await novoVoluntario.save();
        res.status(201).json(novoVoluntario);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Listar voluntários para o mural
app.get('/api/voluntarios', async (req, res) => {
    try {
        const lista = await Voluntario.find().sort({ data: -1 }); // Mais recentes primeiro
        res.json(lista);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- AUTENTICAÇÃO (LOGIN/REGISTRO) ---
// Registrar Refugiado
app.post('/api/register', async (req, res) => {
    try {
        const { nome, email, senha, nacionalidade, necessidades } = req.body;
        // Verifica se já existe
        const existe = await Usuario.findOne({ email });
        if (existe) return res.status(400).json({ msg: 'Email já cadastrado' });

        const novoUsuario = new Usuario({ nome, email, senha, nacionalidade, necessidades });
        await novoUsuario.save();
        
        // Retorna o usuário (sem a senha) para o front já logar
        res.status(201).json({ id: novoUsuario._id, nome: novoUsuario.nome, email: novoUsuario.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
app.post('/api/login', async (req, res) => {
    try {
        const { email, senha } = req.body;
        const usuario = await Usuario.findOne({ email });
        
        if (!usuario || usuario.senha !== senha) {
            return res.status(400).json({ msg: 'Email ou senha inválidos' });
        }

        res.json({ id: usuario._id, nome: usuario.nome, email: usuario.email });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});