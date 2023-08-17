const mongoose = require('mongoose')

const Interactions = require('../../models/PublicationsModels/interactions')
const Publication = require('../../models/PublicationsModels/publications')

const interacControllers = {

    create: async (req,res) =>{

        try{
        const {reactions,comments} = req.body

        const publications = await Publication.findById(publicationid)
        if(!publication){
            return res.status(404).json({error:'this action is not possible'})
        }

        await Interactions.create({
            publications: publications._id,
            reactions: reactions,
            comments: comments
        })
        }catch(error){
            return res.status(500).json({ msg: error.message })
        }
    },

    getInreract: async(req,res) =>{
        try{
            const interactions = await Interactions.find({})
            res.json(interactions)
        }catch (error){
            return res.status(500).json({ msg: error.message })
        }
    },
    getInteraById: async (req, res) => {
        try {
            const { id } = req.params
            const interaction = await Interactions.findById(id)
            res.json(interaction)
        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }
    },
    updateInterac: async (req,res) =>{
        try{
            const {id} = req.params
            const {reactions,comments,publications} = req.body

            await Interactions.findByIdAndUpdate(id,{
                publications: publications._id,
                reactions: reactions,
                comments: comments
            })
            res.json({msg: 'Update'})
            console.log(Interactions)

        }catch(error){
            return res.status(404).json({msg: error.message})
        }
    },
    deleteInterac: async (req,res) =>{
        try{
            const {id} = req.params
            await interaction.findByIdAndDelete(id)
            res.json({msg: 'Deleted'})
        }catch (error){
            return res.status(400).json({msg: error.message})
        }
    }
}

module.exports = interacControllers