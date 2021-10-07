const express = require("express");
const router = express.Router();
const DB = require("./teams");

router.get("/teams", (req, res) => {
    return res.json(DB.teams);
});

router.get("/teams/:id", (req, res) => {
    if(isNaN(req.params.id)){
       return res.sendStatus(400);  
    }else{
        const id = parseInt(req.params.id);
        const team = DB.teams.find((element) => element.id === id);

        if(team){
            return res.json(team);
        }else{
            return res.status(404).json({msg:"Time não encontrado"});
        }
    }
});

router.delete("/teams/:id", (req, res) => {
    if(isNaN(req.params.id)){

       return res.sendStatus(400);
    
    }else{
        const id = parseInt(req.params.id);
        const index = DB.teams.findIndex((element) => element.id === id);

        if(index === -1){
            return res.status(404).json({msg:"Time não encontrado!"});
        }else{
            DB.teams.splice(index, 1);
            return res.json({msg:"Time foi deletado!"});
        }
    }
});

router.put("/teams/:id", (req, res) => {
    if(isNaN(req.params.id)){

       return res.sendStatus(400);
    
    }else{
        const id = parseInt(req.params.id);
        const index = DB.teams.findIndex((element) => element.id === id);

        if(index != undefined){
            
        }else{
            
        }
    }
});



router.post("/teams", (req, res) => {
    const {
      name,
      city,
      state,
      league,
      titles,
      payroall
    } = req.body;


    if (name && city && state && titles && payroall !== undefined){
        console.log(league);
        const leagues = ['A', 'B', 'C', null, undefined];
        if (leagues.includes(league)) {
            DB.teams.push({
                name,
                city,
                state,
                league,
                titles,
                payroall
            });
            return res.status(201).json({msg:"Time cadastrado com sucesso"});
        }
        return res.status(400).json({msg:`A série \'${league}\' não é permitida`});
    } 
    return res.status(400).json({msg:"Favor informar todos os dados obrigatórios"});
});

module.exports = router;