import alt from '../Alt'

class BattleAction {
    constructor() {
        this.generateActions(
            'battlesReceived',
            'battlesLoading',
            'getBattles'
        )
    }
}
export default alt.createActions(BattleAction);