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
    module.exports = factory(require('../ApiClient'), require('./ProjectTemplate'), require('./Stage'));
  } else {
    // Browser globals (root is window)
    if (!root.RedHatOpenInnovationLabsConsoleApi) {
      root.RedHatOpenInnovationLabsConsoleApi = {};
    }
    root.RedHatOpenInnovationLabsConsoleApi.ApplicationTopology = factory(root.RedHatOpenInnovationLabsConsoleApi.ApiClient, root.RedHatOpenInnovationLabsConsoleApi.ProjectTemplate, root.RedHatOpenInnovationLabsConsoleApi.Stage);
  }
}(this, function(ApiClient, ProjectTemplate, Stage) {
  'use strict';




  /**
   * The ApplicationTopology model module.
   * @module model/ApplicationTopology
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ApplicationTopology</code>.
   * @alias module:model/ApplicationTopology
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ApplicationTopology</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApplicationTopology} obj Optional instance to populate.
   * @return {module:model/ApplicationTopology} The populated <code>ApplicationTopology</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('project_templates')) {
        obj['project_templates'] = ApiClient.convertToType(data['project_templates'], [ProjectTemplate]);
      }
      if (data.hasOwnProperty('promotion_process')) {
        obj['promotion_process'] = ApiClient.convertToType(data['promotion_process'], [Stage]);
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Integer');
      }
      if (data.hasOwnProperty('datetime_created')) {
        obj['datetime_created'] = ApiClient.convertToType(data['datetime_created'], 'String');
      }
      if (data.hasOwnProperty('datetime_modified')) {
        obj['datetime_modified'] = ApiClient.convertToType(data['datetime_modified'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/ProjectTemplate>} project_templates
   */
  exports.prototype['project_templates'] = undefined;
  /**
   * @member {Array.<module:model/Stage>} promotion_process
   */
  exports.prototype['promotion_process'] = undefined;
  /**
   * application topology version
   * @member {Integer} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {Date} datetime_created
   */
  exports.prototype['datetime_created'] = undefined;
  /**
   * @member {Date} datetime_modified
   */
  exports.prototype['datetime_modified'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


