'use strict'

class PostController {
  async criar({request, response}){
    const Database = use('Database')
    let post = {
        titulo: 'none',
        texto: 'none',
        foto: 'none'
    }


    post.titulo = request.body.titulo
    post.texto = request.body.texto
    post.foto = request.body.foto


    try {
        await Database.insert(post).into('posts')
        response.json({status: 'ok', statusCode: 200})
    } catch (error) {
        response.json({status: 'error', error: error, statusCode: 400})
    }
}

async delete({request, response}){
    const Database = use('Database')
    try {
        if(request.body.id === "all"){
            await Database.table('posts').delete()
            response.json({status: "ok", message: "Deleted all data"})
        }else{
            await Database.table('posts').where({id: request.body.id}).delete()
            response.json({status: "ok", message: `Deleted all data from post with id ${request.body.id}`})
        }
    } catch (error) {
        response.json({
            status: error,
            error: error,
            statusCode: 400
        })
    }
}

async edit({request, response}){
    const Database = use('Database')
    const field = request.body.field
    try {
            await Database.table('posts').where({id: request.body.id}).update(field, request.body.changeTo)
            response.json({status: "ok", message: `Changed the field ${field} to ${request.body.changeTo} from post with id ${request.body.id}`, statusCode: 200})
        } catch (error) {
            response.json({
                status: error,
                error: error,
                statusCode: 400
            })
        }
}

async list({response}){
    const Database = use('Database')
    try {
        response.json({
            status: "ok",
            data: await Database.table('posts').select('*'),
            statusCode: 200
        })
    } catch (error) {
        response.json({
            satus: "error",
            error: error,
            statusCode: 400
        })
    }
}

async listOne({request, response}){
  const Database = use('Database')
  try {
    response.json({
        status: "ok",
        data: await Database.table('posts').where({id: request.get().id}),
        statusCode: 200
    })
} catch (error) {
    response.json({
        satus: "error",
        error: error,
        statusCode: 400
    })
}
}
}

module.exports = PostController
