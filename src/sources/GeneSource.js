import GeneAction from '../actions/GeneAction'
import {getGene} from '../services/geneService'
let GeneSource = {
    getRemoteGenes: {
        remote(state, params){
            return getGene(params);
        },
        success: GeneAction.genesReceived
    }
}
export default GeneSource