import alt from '../Alt'

class GeneAction {
    constructor() {
        this.generateActions(
            'genesReceived',
            'genesLoading',
            'getGenes'
        )
    }
}
export default alt.createActions(GeneAction);