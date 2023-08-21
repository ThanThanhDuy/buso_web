import userReportsitory from '@/data/repository/user/user.repository'

export function getUserUseCase() {
    return {
        async execute() {
            const user = await userReportsitory.getUser()
            return user
        }
    }
}
