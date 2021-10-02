import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"


class ListUserSenderComplimentsService {

    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)

        const compliemts = await complimentsRepositories.find({
            where: {
                user_sender: user_id
            }
        })

        return compliemts;
    }

}

export { ListUserSenderComplimentsService }