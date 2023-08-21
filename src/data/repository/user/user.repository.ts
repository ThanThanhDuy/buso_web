import userDatasource from '@/data/datasource/user/user.datasource'

class UserRepository {
    async getUser() {
        const user = userDatasource.getUser('1')
        return user
    }
}

const userReportsitory = new UserRepository()

export default userReportsitory
