import { Subscription } from 'rxjs';

export function isSubscription(val: any): val is Subscription {
    return !!val &&
        (val instanceof Subscription
            || (typeof val.unsubscribe === 'function'));
}
