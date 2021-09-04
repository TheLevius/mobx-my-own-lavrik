import { observable } from '~/noobx/noobx'

export default {
    user: observable({
        name: ''
    }),
    setName(name) {
        this.user.name = name
    }
}