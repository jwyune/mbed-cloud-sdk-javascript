/**
 * Provisioning endpoints - production line certificates.
 * A producton line certificate is used to associate a specific installation of the Factory Tool with an mbed Cloud account.  The production line certificate is generated by the Factory Tool, and needs to be uploaded using these APIs. 
 *
 * OpenAPI spec version: 0.8
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningEndpointsProductionLineCertificates) {
      root.ProvisioningEndpointsProductionLineCertificates = {};
    }
    root.ProvisioningEndpointsProductionLineCertificates.Body = factory(root.ProvisioningEndpointsProductionLineCertificates.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Body model module.
   * @module model/Body
   * @version 0.8
   */

  /**
   * Constructs a new <code>Body</code>.
   * @alias module:model/Body
   * @class
   * @param comment {String} Comment of the production line certificate (max length is 256 characters).
   * @param productionLineCertificate {String} Production line certificate public key (from the Factory Tool, raw format - 65 bytes, Base64 encoded).
   */
  var exports = function(comment, productionLineCertificate) {
    var _this = this;

    _this['comment'] = comment;
    _this['production-line-certificate'] = productionLineCertificate;
  };

  /**
   * Constructs a <code>Body</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body} obj Optional instance to populate.
   * @return {module:model/Body} The populated <code>Body</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('production-line-certificate')) {
        obj['production-line-certificate'] = ApiClient.convertToType(data['production-line-certificate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Comment of the production line certificate (max length is 256 characters).
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * Production line certificate public key (from the Factory Tool, raw format - 65 bytes, Base64 encoded).
   * @member {String} production-line-certificate
   */
  exports.prototype['production-line-certificate'] = undefined;



  return exports;
}));


