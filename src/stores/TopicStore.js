import alt from '../Alt';
import TopicAction from '../actions/TopicAction'
import TopicSource from '../sources/TopicSource'
import {decorate,bind,datasource}  from 'alt-utils/lib/decorators'

@datasource(TopicSource)
@decorate(alt)
class TopicStore {
    constructor() {
        this.state = {topics: [], isRefreshing: false, page: 1}
    }

    @bind(TopicAction.topicsReceived)
    topicsReceived(topics) {
        if (this.state.page != 1) {
            this.state.topics.push(...topics)
        } else {
            this.state.topics = topics;
        }
        this.setState({
            topics: this.state.topics,
            isRefreshing: false
        })
    }

    @bind(TopicAction.getTopics)
    getTopics(params = {page: 1}) {
        this.setState({
            page: params.page
        });
        if (params.page == 1) {
            this.setState({
                isRefreshing: true
            })
        }
        setTimeout(()=> {
            this.getInstance().getRemoteTopics(params)
        }, 1)

    }


}

export default alt.createStore(TopicStore, 'TopicStore')