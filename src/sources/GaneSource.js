import GaneAction from '../actions/GaneAction'
import {getGane} from '../services/ganeService'
let GaneSource = {
    getRemoteGanes: {
        remote(state, params){
            return getGane(params);
        },
        success: GaneAction.ganesReceived
    }
}
export default GaneSource