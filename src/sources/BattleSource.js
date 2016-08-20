import BattleAction from '../actions/BattleAction'
import {getBattle} from '../services/battleService'
let BattleSource = {
    getRemoteBattles: {
        remote(state, params){
            return getBattle(params);
        },
        success: BattleAction.battlesReceived
    }
}
export default BattleSource