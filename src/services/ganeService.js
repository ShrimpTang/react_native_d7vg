/**
 * Created by Shrimp on 16/7/31.
 */
import {get} from './requeset';
export function getGane(params = {page: 1}) {
    return get('gene', params);
}