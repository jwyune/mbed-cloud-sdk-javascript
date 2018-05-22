import { Observer } from "./observer";
import { ResourceValuesFilter, NotificationData, PresubscriptionObject, FirstValueEnum } from "../../connect/types";
import { ConnectApi } from "../../connect/connectApi";
export declare class ResourceValuesObserver extends Observer<NotificationData> {
    firstValue: FirstValueEnum;
    private _subscribed;
    private connect;
    private filter;
    localPresubscriptions: Array<PresubscriptionObject>;
    constructor(_filter?: ResourceValuesFilter, _connect?: ConnectApi, firstValue?: FirstValueEnum);
    /**
     * Notify this observer
     * @param data
     */
    notify(data: NotificationData): void;
    /**
     * Stop this observer from recieving notifications
     */
    unsubscribe(): void;
    private compareData(data);
    private syncPresubscriptions();
}
