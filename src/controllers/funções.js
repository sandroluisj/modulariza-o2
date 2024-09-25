const Time = require("../models/controletimes");

async function criarTime(req, res) {
    const { nome, valor, artilheiros } = req.body;
    try {
        const novoTime = new Time({ nome, valor, artilheiros });
        const timeSalvo = await novoTime.save();
        res.status(201).json({ mensagem: "Time criado com sucesso", time: timeSalvo });
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao criar time", erro: erro.message });
    }
}

async function listarTimes(req, res) {
    try {
        const times = await Time.find();
        res.status(200).json(times);
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao obter times", erro: erro.message });
    }
}

async function atualizarTime(req, res) {
    const { id } = req.params;
    const { nome, valor, artilheiros } = req.body; // Alterar para artilheiros se necessário
    try {
        const timeAtualizado = await Time.findByIdAndUpdate(
            id,
            { nome, valor, artilheiros }, // Alterar para artilheiros se necessário
            { new: true, runValidators: true }
        );
        if (timeAtualizado) {
            res.status(200).json({
                mensagem: "Time atualizado com sucesso!",
                time: timeAtualizado,
            });
        } else {
            res.status(404).json({ mensagem: "O time não foi encontrado..." });
        }
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro na atualização do time", erro: erro.message });
    }
}

async function deletarTime(req, res) {
    const { id } = req.params;
    try {
        const timeDeletado = await Time.findByIdAndDelete(id);
        if (timeDeletado) {
            res.status(200).json({ mensagem: "Time deletado com sucesso", time: timeDeletado });
        } else {
            res.status(404).json({ mensagem: "O time não foi encontrado..." });
        }
    } catch (erro) {
        res.status(500).json({ mensagem: "Erro ao deletar o time", erro: erro.message });
    }
}

module.exports = { criarTime, listarTimes, atualizarTime, deletarTime };
