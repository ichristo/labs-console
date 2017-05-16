/**
 * Red Hat Open Innovation Labs Console API
 * Specification for interaction between the Labs Console front-end and back-end.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: rhc-open-innovation-labs@redhat.com
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
  if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ApplicationTemplate'), require('./PersistentVolumeClaimTemplate'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.ProjectTemplate = factory(root.RedHatOpenInnovationLabsConsoleApi.ApiClient, root.RedHatOpenInnovationLabsConsoleApi.ApplicationTemplate, root.RedHatOpenInnovationLabsConsoleApi.PersistentVolumeClaimTemplate);
  }
}(this, function(ApiClient, ApplicationTemplate, PersistentVolumeClaimTemplate) {
  'use strict';




  /**
   * The ProjectTemplate model module.
   * @module model/ProjectTemplate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ProjectTemplate</code>.
   * @alias module:model/ProjectTemplate
   * @class
   * @param name {String} 
   */
  var exports = function(name) {
    var _this = this;


    _this['name'] = name;


  };

  /**
   * Constructs a <code>ProjectTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProjectTemplate} obj Optional instance to populate.
   * @return {module:model/ProjectTemplate} The populated <code>ProjectTemplate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('display_name')) {
        obj['display_name'] = ApiClient.convertToType(data['display_name'], 'String');
      }
      if (data.hasOwnProperty('infrastructure')) {
        obj['infrastructure'] = ApiClient.convertToType(data['infrastructure'], 'Integer');
      }      
      if (data.hasOwnProperty('infrastructureProvider')) {
        obj['infrastructureProvider'] = ApiClient.convertToType(data['infrastructureProvider'], 'String');
      }
      if (data.hasOwnProperty('infrastructureName')) {
        obj['infrastructureName'] = ApiClient.convertToType(data['infrastructureName'], 'String');
      }
      if (data.hasOwnProperty('apps')) {
        //I am overriding this to make the ApplicationTemplate more flexible for now...
        // obj['apps'] = ApiClient.convertToType(data['apps'], [ApplicationTemplate]);
        obj['apps'] = ApiClient.convertToType(data['apps'], [Object]);
      }
      if (data.hasOwnProperty('persistent_volume_claim_templates')) {
        obj['persistent_volume_claim_templates'] = ApiClient.convertToType(data['persistent_volume_claim_templates'], [PersistentVolumeClaimTemplate]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} display_name
   */
  exports.prototype['display_name'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['infrastructure'] = undefined;  
  /**
   * @member {String} display_name
   */
  exports.prototype['infrastructureProvider'] = undefined;
  /**
   * @member {String} display_name
   */
  exports.prototype['infrastructureName'] = undefined;
  /**
   * @member {module:model/ProjectTemplate.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Array.<module:model/ApplicationTemplate>} apps
   */
  exports.prototype['apps'] = undefined;
  /**
   * @member {Array.<module:model/PersistentVolumeClaimTemplate>} persistent_volume_claim_templates
   */
  exports.prototype['persistent_volume_claim_templates'] = undefined;

  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "OpenShift"
     * @const
     */
    "OpenShift": "OpenShift",
    /**
     * value: "OpenStack"
     * @const
     */
    "OpenStack": "OpenStack",
    /**
     * value: "AWS"
     * @const
     */
    "AWS": "AWS",
    /**
     * value: "Google Cloud"
     * @const
     */
    "Google Cloud": "Google Cloud",
    /**
     * value: "Azure"
     * @const
     */
    "Azure": "Azure",
    /**
     * value: "RHEV"
     * @const
     */
    "RHEV": "RHEV",
    /**
     * value: "VMWare"
     * @const
     */
    "VMWare": "VMWare"  };


  return exports;
}));


