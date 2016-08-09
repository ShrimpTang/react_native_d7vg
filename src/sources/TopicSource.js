import TopicAction from '../actions/TopicAction'
import {getTopic} from '../services/topicService'
let TopicSource = {
    getRemoteTopics: {
        remote(state, params){
            return getTopic(params);
        },
        success: TopicAction.topicsReceived
    }
}
export default TopicSource