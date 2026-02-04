const PermissionsService = require('../services/permissions.service');

class PermissionsController {

    async createPermission(req, res) {
        try {
            const permission = await PermissionsService.createPermission(req.body);
            res.status(201).json(permission);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new PermissionsController();