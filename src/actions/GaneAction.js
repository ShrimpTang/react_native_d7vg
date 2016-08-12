import alt from '../Alt'

class GaneAction {
    constructor() {
        this.generateActions(
            'ganesReceived',
            'ganesLoading',
            'getGanes'
        )
    }
}
export default alt.createActions(GaneAction);