import alt from '../Alt';
import BattleAction from '../actions/BattleAction'
import BattleSource from '../sources/BattleSource'
import {decorate,bind,datasource}  from 'alt-utils/lib/decorators'

@datasource(BattleSource)
@decorate(alt)
class BattleStore {
    constructor() {
        this.state = {battles: [], isRefreshing: false}
    }

    @bind(BattleAction.battlesReceived)
    battlesReceived(battles) {
        this.state.battles = battles;
        this.setState({
            battles: this.state.battles,
            isRefreshing: false
        })
    }

    @bind(BattleAction.getBattles)
    getBattles(params = {}) {
        this.setState({
            isRefreshing: true
        })
        setTimeout(()=> {
            this.getInstance().getRemoteBattles(params)
        }, 1)

    }
}

export default alt.createStore(BattleStore, 'BattleStore')