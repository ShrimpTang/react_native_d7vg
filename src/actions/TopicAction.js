import alt from '../Alt'

class TopicAction {
    constructor() {
        this.generateActions(
            'topicsReceived',
            'topicsLoading',
            'getTopics'
        )
    }
}
export default alt.createActions(TopicAction);