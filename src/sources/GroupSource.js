import GroupAction from '../actions/GroupAction'
import {getGroup} from '../services/groupService'
let GroupSource = {
    getRemoteGroups: {
        remote(state, params){
            return getGroup(params);
        },
        success: GroupAction.groupsReceived
    }
}
export default GroupSource