import http from '@/http/http'

class UserDatasouce {
    getUser(id: string | number) {
        return http.get('url')
    }
}

const userDatasource = new UserDatasouce()

export default userDatasource
