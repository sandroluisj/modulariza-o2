const express = require("../models/controletimes")

async function criarTime(req, res) {
    const { nome, valor, artilheiros } = req.body;
    try {
        const novoTimes = new Time({ nome, valor, artilheiros });
        const novoTime = await novoTimes.save();
    res.status(201).json({ mensagem: "Time criado com sucesso", time: novoTime });
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao criar time", erro: erro.message });
  }}
  async function listarTimes(req,res ){
  try {
    const times = await Time.find();
    res.status(200).json(times);
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao obter times", erro: erro.message });
  }
  }
  async function atualizarTime (req, res){
    const { id } = req.params;
    const { nome, valor, artilheiro } = req.body;
    try{
        const timeAtualizado = await Time.findByIdAndUpdate(
        id,
        {nome, valor, artilheiro},
        { new: true, runValidators: true })
    if (timeAtualizado) {
      res.status(200).json({
        mensagem: "Time atualizado com sucesso!",
        Time: timeAtualizado,
      });
    } else {
      res.status(404).json({ mensagem: "O time não foi encontrado..." });
    }
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro na atualização do time", erro: erro.message });
  }
}
async function deletarTime(req, res){
const { id } = req.params;
try {
    const timeDeletado = await Time.findByIdAndUpdate(id)
    if (timeDeletado) {
      res.status(200).json({ mensagem: "Time deletado com sucesso", Time: timeDeletado });
    } else {
      res.status(404).json({ mensagem: "O time não foi encontrado..." });
    }
  } catch (erro) {
    res.status(500).json({ mensagem: "Erro ao deletar o time", erro: erro.message });
  }}
  module.exports = {criarTime, listarTimes, atualizarTime, deletarTime}
