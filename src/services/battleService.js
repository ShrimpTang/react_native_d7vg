/**
 * Created by Shrimp on 16/7/31.
 */
import {get} from './requeset';
export function getBattle(params = {}) {
    return get('battle', params);
}