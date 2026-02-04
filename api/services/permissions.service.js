const PermissionsRepository = require('../repository/permissions.repository');

class PermissionsService{
    async createPermission(permission){
        return await PermissionsRepository.createPermission(permission);
    }


}

module.exports = new PermissionsService();