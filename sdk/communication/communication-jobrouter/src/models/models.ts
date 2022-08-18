// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Arguments for retrieving the next page of search results.
 */
export interface ListPageSettings {
  /**
   * A token used for retrieving the next page of results when the server
   * enforces pagination.
   */
  continuationToken?: string | null;
}

export {
  DistributionPolicy,
  ExceptionPolicy,
  ClassificationPolicy,
  JobQueue,
  RouterWorker,
  RouterJob,
  ExceptionRule,
  JobAssignment,
  ChannelConfiguration,
  WorkerAssignment,
  JobOffer,
  RouterWorkerState,
  KnownRouterWorkerState,
  WorkerSelector,
  JobPositionDetails,
  WorkerStateSelector,
  JobStateSelector,
  LabelOperator,
  DistributionModeUnion,
  DistributionMode,
  BestWorkerMode,
  LongestIdleMode,
  RoundRobinMode,
  WorkerSelectorAttachmentUnion,
  WorkerSelectorAttachment,
  QueueSelectorAttachmentUnion,
  QueueSelectorAttachment,
  QueueSelector,
  QueueWeightedAllocation,
  WorkerWeightedAllocation,
  ScoringRuleOptions,
  RouterRuleUnion,
  RouterRule,
  DirectMapRule,
  ExpressionRule,
  StaticRule,
  JobExceptionTriggerUnion,
  JobExceptionTrigger,
  QueueLengthExceptionTrigger,
  WaitTimeExceptionTrigger,
  ScoringRuleParameterSelector,
  JobRouterUpsertJobOptionalParams,
  JobRouterUpsertWorkerOptionalParams,
  JobRouterReclassifyJobActionOptionalParams,
  ClassificationPolicyItem,
  DistributionPolicyItem,
  ExceptionPolicyItem,
  JobQueueItem,
  RouterJobItem,
  RouterWorkerItem,
  JobRouterCancelJobActionOptionalParams,
  JobRouterCloseJobActionOptionalParams,
  JobRouterCompleteJobActionOptionalParams,
  JobRouterAdministrationUpsertClassificationPolicyOptionalParams,
  JobRouterAdministrationUpsertDistributionPolicyOptionalParams,
  JobRouterAdministrationUpsertExceptionPolicyOptionalParams,
  JobRouterAdministrationUpsertQueueOptionalParams,
  ConditionalQueueSelectorAttachment,
  PassThroughQueueSelectorAttachment,
  RuleEngineQueueSelectorAttachment,
  StaticQueueSelectorAttachment,
  WeightedAllocationQueueSelectorAttachment,
  AcceptJobOfferResult,
  JobRouterReclassifyJobActionResponse,
  RouterJobStatus,
  FunctionRule,
  WorkerSelectorState,
  ConditionalWorkerSelectorAttachment,
  PassThroughWorkerSelectorAttachment,
  RuleEngineWorkerSelectorAttachment,
  StaticWorkerSelectorAttachment,
  WeightedAllocationWorkerSelectorAttachment,
  FunctionRuleCredential
} from "../generated/src/models";
