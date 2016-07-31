/**
 * Created by Shrimp on 16/7/31.
 */
import {get} from './requeset';
export function getTopic(params = {page: 1}) {
    return get('topic', params);
}