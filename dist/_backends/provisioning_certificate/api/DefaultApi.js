/**
 * Provisioning endpoints - provisioning certificates.
 * A provisioning certificate is used to associate an mbed Cloud account with a specific installation of a Factory Tool. The certificate needs to be downloaded using this API and placed into the appropriate directory of the Factory Tool. 
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
    define(['ApiClient', 'model/ProvisioningCertificate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProvisioningCertificate'));
  } else {
    // Browser globals (root is window)
    if (!root.ProvisioningEndpointsProvisioningCertificates) {
      root.ProvisioningEndpointsProvisioningCertificates = {};
    }
    root.ProvisioningEndpointsProvisioningCertificates.DefaultApi = factory(root.ProvisioningEndpointsProvisioningCertificates.ApiClient, root.ProvisioningEndpointsProvisioningCertificates.ProvisioningCertificate);
  }
}(this, function(ApiClient, ProvisioningCertificate) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 0.8
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v3ProvisioningCertificateGet operation.
     * @callback module:api/DefaultApi~v3ProvisioningCertificateGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProvisioningCertificate} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the account&#39;s provisioning certificate.
     * @param {String} authorization \&quot;Bearer\&quot; followed by the reference token or API key.
     * @param {module:api/DefaultApi~v3ProvisioningCertificateGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProvisioningCertificate}
     */
    this.v3ProvisioningCertificateGet = function(authorization, callback) {
      var postBody = null;

      // verify the required parameter 'authorization' is set
      if (authorization == undefined || authorization == null) {
        throw "Missing the required parameter 'authorization' when calling v3ProvisioningCertificateGet";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
        'Authorization': authorization
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ProvisioningCertificate;

      return this.apiClient.callApi(
        '/v3/provisioning-certificate', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
