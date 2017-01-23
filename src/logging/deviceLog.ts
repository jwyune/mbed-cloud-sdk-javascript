/* 
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { DeviceLogType } from "./types";
import { DeviceLogSerializerData as apiDeviceLogType } from "../_api/device_catalog";

/*
 * Device Log
 */
export class DeviceLog {

    constructor(options: DeviceLogType) {
        for(var key in options) {
            this[key] = options[key];
        }
    }

    static map(from: apiDeviceLogType): DeviceLog {
        let type = {
            changes:                 from.changes,
            data:                    from.data,
            eventDate:               from.date_time,
            description:             from.description,
            deviceId:                from.device_id,
            logId:                   from.device_log_id,
            eventType:               from.event_type,
            eventTypeDescription:    from.event_type_description,
            stateChanged:            from.state_change
        };

        return new DeviceLog(type);
    }
}
export interface DeviceLog extends DeviceLogType {}