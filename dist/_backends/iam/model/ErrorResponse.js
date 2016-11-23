/**
 * IAM Identities REST API
 * REST API to manage accounts, groups, users and api-keys
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Field'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Field'));
  } else {
    // Browser globals (root is window)
    if (!root.IamIdentitiesRestApi) {
      root.IamIdentitiesRestApi = {};
    }
    root.IamIdentitiesRestApi.ErrorResponse = factory(root.IamIdentitiesRestApi.ApiClient, root.IamIdentitiesRestApi.Field);
  }
}(this, function(ApiClient, Field) {
  'use strict';




  /**
   * The ErrorResponse model module.
   * @module model/ErrorResponse
   * @version v3
   */

  /**
   * Constructs a new <code>ErrorResponse</code>.
   * This object represents an error message
   * @alias module:model/ErrorResponse
   * @class
   * @param code {Integer} response code
   * @param _object {module:model/ErrorResponse.ObjectEnum} entity name, always 'error'
   * @param requestId {String} request id
   * @param message {String} a human readable message with detailed info
   * @param type {module:model/ErrorResponse.TypeEnum} error type
   */
  var exports = function(code, _object, requestId, message, type) {
    var _this = this;

    _this['code'] = code;

    _this['object'] = _object;
    _this['request_id'] = requestId;
    _this['message'] = message;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Integer');
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [Field]);
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('request_id')) {
        obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * response code
   * @member {Integer} code
   */
  exports.prototype['code'] = undefined;
  /**
   * failed input fields during request object validation
   * @member {Array.<module:model/Field>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * entity name, always 'error'
   * @member {module:model/ErrorResponse.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * request id
   * @member {String} request_id
   */
  exports.prototype['request_id'] = undefined;
  /**
   * a human readable message with detailed info
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * error type
   * @member {module:model/ErrorResponse.TypeEnum} type
   */
  exports.prototype['type'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "apikey"
     * @const
     */
    "apikey": "apikey",
    /**
     * value: "group"
     * @const
     */
    "group": "group",
    /**
     * value: "account"
     * @const
     */
    "account": "account",
    /**
     * value: "list"
     * @const
     */
    "list": "list",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "success"
     * @const
     */
    "success": "success",
    /**
     * value: "created"
     * @const
     */
    "created": "created",
    /**
     * value: "accepted"
     * @const
     */
    "accepted": "accepted",
    /**
     * value: "permanently_deleted"
     * @const
     */
    "permanently_deleted": "permanently_deleted",
    /**
     * value: "validation_error"
     * @const
     */
    "validation_error": "validation_error",
    /**
     * value: "invalid_token"
     * @const
     */
    "invalid_token": "invalid_token",
    /**
     * value: "access_denied"
     * @const
     */
    "access_denied": "access_denied",
    /**
     * value: "account_limit_exceeded"
     * @const
     */
    "account_limit_exceeded": "account_limit_exceeded",
    /**
     * value: "not_found"
     * @const
     */
    "not_found": "not_found",
    /**
     * value: "method_not_supported"
     * @const
     */
    "method_not_supported": "method_not_supported",
    /**
     * value: "duplicate"
     * @const
     */
    "duplicate": "duplicate",
    /**
     * value: "precondition_failed"
     * @const
     */
    "precondition_failed": "precondition_failed",
    /**
     * value: "unsupported_media_type"
     * @const
     */
    "unsupported_media_type": "unsupported_media_type",
    /**
     * value: "rate_limit_exceeded"
     * @const
     */
    "rate_limit_exceeded": "rate_limit_exceeded",
    /**
     * value: "internal_server_error"
     * @const
     */
    "internal_server_error": "internal_server_error",
    /**
     * value: "system_unavailable"
     * @const
     */
    "system_unavailable": "system_unavailable"  };


  return exports;
}));


