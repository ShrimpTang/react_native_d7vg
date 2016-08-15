import alt from '../Alt';
import GeneAction from '../actions/GeneAction'
import GeneSource from '../sources/GeneSource'
import {decorate,bind,datasource}  from 'alt-utils/lib/decorators'

@datasource(GeneSource)
@decorate(alt)
class GeneStore {
    constructor() {
        this.state = {genes: [], isRefreshing: false, page: 1}
    }

    @bind(GeneAction.genesReceived)
    genesReceived(genes) {
        if (this.state.page != 1) {
            this.state.genes.push(...genes)
        } else {
            this.state.genes = genes;
        }
        this.setState({
            genes: this.state.genes,
            isRefreshing: false
        })
    }

    @bind(GeneAction.getGenes)
    getGenes(params = {page: 1}) {
        this.setState({
            page: params.page
        });
        if (params.page == 1) {
            this.setState({
                isRefreshing: true
            })
        }
        setTimeout(()=> {
            this.getInstance().getRemoteGenes(params)
        }, 1)

    }


}

export default alt.createStore(GeneStore, 'GeneStore')