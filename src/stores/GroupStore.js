import alt from '../Alt';
import GroupAction from '../actions/GroupAction'
import GroupSource from '../sources/GroupSource'
import {decorate,bind,datasource}  from 'alt-utils/lib/decorators'

@datasource(GroupSource)
@decorate(alt)
class GroupStore {
    constructor() {
        this.state = {groups: [], isRefreshing: false, page: 1}
    }

    @bind(GroupAction.groupsReceived)
    groupsReceived(groups) {
        if (this.state.page != 1) {
            this.state.groups.push(...groups)
        } else {
            this.state.groups = groups;
        }
        this.setState({
            groups: this.state.groups,
            isRefreshing: false
        })
    }

    @bind(GroupAction.getGroups)
    getGroups(params = {page: 1}) {
        this.setState({
            page: params.page
        });
        if (params.page == 1) {
            this.setState({
                isRefreshing: true
            })
        }
        setTimeout(()=> {
            this.getInstance().getRemoteGroups(params)
        }, 1)

    }


}

export default alt.createStore(GroupStore, 'GroupStore')