import alt from '../Alt'

class GroupAction {
    constructor() {
        this.generateActions(
            'groupsReceived',
            'groupsLoading',
            'getGroups'
        )
    }
}
export default alt.createActions(GroupAction);