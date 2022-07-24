//const debug = require('debug')('app:module-products-controller');
const createError = require('http-errors');
const { UsersService } = require('./services');
const { Response } = require('../common/response')

module.exports.UsersController = {
    getUsers: async (req, res) => {
        try {
            let users = await UsersService.getAll()
            Response.success(res, 200, 'Lista de usuarios', users)
        } catch (error) {
            console.log("error en get products");
            Response.error(res);
        }
    },
    getUser: async (req, res) => {
        try {
            const { params: { id } } = req;
            let user = await UsersService.getById(id);
            if (!user) {
                Response.error(res, new createError.NotFound())
            } else {
                Response.success(res, 200, `usuario ${id}`, user);

            }
        } catch (error) {
            Response.error(res);
        }
    },
    createUser: async (req, res) => {
        try {
            const { body } = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            } else {
                const insertedId = await UsersService.create(body)
                Response.success(res, 201, 'usuario agregado', insertedId);
            }

        } catch (error) {
            console.log("error en create usuario")
            Response.error(res)
        }
    },
    //update
    //delete

};