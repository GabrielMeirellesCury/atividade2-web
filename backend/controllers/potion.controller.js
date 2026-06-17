import model from "../models/potion.model.js"

async function findAll(request, response) {
    try {
    const results = await model.findAll()
    // response.json(results).status(200)
    response.status(200).json(results)
    } catch (error) {
    console.log(error)
    }
}

async function create(request, response) {
    try {
        const result = await model.create({
            name: request.body.name,
            description: request.body.description,
            image: request.body.image,
            price : request.body.price
        })
        response.json(result).status(201)
        // response.status(201).json(result)
    } catch (error) {
        console.log(error)
    }
}

async function deleteById(request, response) {
    try {
        const success = await model.destroy({ where: {id: request.params.id } })
        if (success == 1){
            response.status(200).send()
        }
        else {
            response.status(404).send()
        }
    } catch (error) {
        console.log(error)
    }
}


export default { findAll, create, deleteById}