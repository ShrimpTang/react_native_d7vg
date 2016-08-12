import alt from '../Alt';
import GaneAction from '../actions/GaneAction'
import GaneSource from '../sources/GaneSource'
import {decorate,bind,datasource}  from 'alt-utils/lib/decorators'

@datasource(GaneSource)
@decorate(alt)
class GaneStore {
    constructor() {
        this.state = {ganes: [], isRefreshing: false, page: 1}
    }

    @bind(GaneAction.ganesReceived)
    ganesReceived(ganes) {
        if (this.state.page != 1) {
            this.state.ganes.push(...ganes)
        } else {
            this.state.ganes = ganes;
        }
        this.setState({
            ganes: this.state.ganes,
            isRefreshing: false
        })
    }

    @bind(GaneAction.getGanes)
    getGanes(params = {page: 1}) {
        this.setState({
            page: params.page
        });
        if (params.page == 1) {
            this.setState({
                isRefreshing: true
            })
        }
        setTimeout(()=> {
            this.getInstance().getRemoteGanes(params)
        }, 1)

    }


}

export default alt.createStore(GaneStore, 'GaneStore')