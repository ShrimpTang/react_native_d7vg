/**
 * Created by Shrimp on 16/7/31.
 */
import {get} from './requeset';
export function getGroup(params = {page: 1}) {
    return get('group/'+params.groupid, params);
}