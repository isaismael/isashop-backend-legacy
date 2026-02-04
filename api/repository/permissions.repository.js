const { Permissions } = require('../models/index');

class PermissionsRepository{

    async createPermission(permission){
        return await Permissions.create(permission);
    }

}

module.exports = new PermissionsRepository();