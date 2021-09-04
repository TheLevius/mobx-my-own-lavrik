import userStore from '~/store/user'
import {observer} from '`/noobx/react-noobx'

onChangeName = (e) => {
    userStore.setName(e.target.value)
}

console.log(userStore.user.name)

export default observer(appComponent)