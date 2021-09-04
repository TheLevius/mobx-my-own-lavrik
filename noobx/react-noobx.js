import { onUpdate } from './noobx';

const observedComponents = []

onUpdate(() => {
    observedComponents.forEach(cm => cm.forceUpdate())
})

function observer(component) {
    class extends component {
        constructor(props) {
            super(props)
            observedComponents.push(this)
        }
    }
}

export {observer}