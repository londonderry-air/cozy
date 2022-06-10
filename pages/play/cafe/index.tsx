import { cozyList } from "cozy/utils/variable/cozy"
import { CozyView } from "cozy/elements/cozy"

export default () => {
    return (
        <CozyView cozy={cozyList[0]} />
    )
}