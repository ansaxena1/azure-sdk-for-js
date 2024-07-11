/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  FirewallPolicyRuleCollectionGroupDraftsDeleteOptionalParams,
  FirewallPolicyRuleCollectionGroupDraft,
  FirewallPolicyRuleCollectionGroupDraftsCreateOrUpdateOptionalParams,
  FirewallPolicyRuleCollectionGroupDraftsCreateOrUpdateResponse,
  FirewallPolicyRuleCollectionGroupDraftsGetOptionalParams,
  FirewallPolicyRuleCollectionGroupDraftsGetResponse,
} from "../models";

/** Interface representing a FirewallPolicyRuleCollectionGroupDrafts. */
export interface FirewallPolicyRuleCollectionGroupDrafts {
  /**
   * Delete Rule Collection Group Draft.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    options?: FirewallPolicyRuleCollectionGroupDraftsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Create or Update Rule Collection Group Draft.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param parameters Parameters supplied to the create or update FirewallPolicyRuleCollectionGroup
   *                   operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    parameters: FirewallPolicyRuleCollectionGroupDraft,
    options?: FirewallPolicyRuleCollectionGroupDraftsCreateOrUpdateOptionalParams,
  ): Promise<FirewallPolicyRuleCollectionGroupDraftsCreateOrUpdateResponse>;
  /**
   * Get Rule Collection Group Draft.
   * @param resourceGroupName The name of the resource group.
   * @param firewallPolicyName The name of the Firewall Policy.
   * @param ruleCollectionGroupName The name of the FirewallPolicyRuleCollectionGroup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    firewallPolicyName: string,
    ruleCollectionGroupName: string,
    options?: FirewallPolicyRuleCollectionGroupDraftsGetOptionalParams,
  ): Promise<FirewallPolicyRuleCollectionGroupDraftsGetResponse>;
}
