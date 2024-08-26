// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export type BlobIndexerDataToExtract = "storageMetadata" | "allMetadata" | "contentAndMetadata";
export type BlobIndexerImageAction =
  | "none"
  | "generateNormalizedImages"
  | "generateNormalizedImagePerPage";
export type BlobIndexerParsingMode =
  | "default"
  | "text"
  | "delimitedText"
  | "json"
  | "jsonArray"
  | "jsonLines";
export type BlobIndexerPDFTextRotationAlgorithm = "none" | "detectAngles";
export type CustomEntityLookupSkillLanguage =
  | "da"
  | "de"
  | "en"
  | "es"
  | "fi"
  | "fr"
  | "it"
  | "ko"
  | "pt";
export type EntityCategory =
  | "location"
  | "organization"
  | "person"
  | "quantity"
  | "datetime"
  | "url"
  | "email";
export type EntityRecognitionSkillLanguage =
  | "ar"
  | "cs"
  | "zh-Hans"
  | "zh-Hant"
  | "da"
  | "nl"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "el"
  | "hu"
  | "it"
  | "ja"
  | "ko"
  | "no"
  | "pl"
  | "pt-PT"
  | "pt-BR"
  | "ru"
  | "es"
  | "sv"
  | "tr";
export type ImageAnalysisSkillLanguage =
  | "ar"
  | "az"
  | "bg"
  | "bs"
  | "ca"
  | "cs"
  | "cy"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "et"
  | "eu"
  | "fi"
  | "fr"
  | "ga"
  | "gl"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "id"
  | "it"
  | "ja"
  | "kk"
  | "ko"
  | "lt"
  | "lv"
  | "mk"
  | "ms"
  | "nb"
  | "nl"
  | "pl"
  | "prs"
  | "pt-BR"
  | "pt"
  | "pt-PT"
  | "ro"
  | "ru"
  | "sk"
  | "sl"
  | "sr-Cyrl"
  | "sr-Latn"
  | "sv"
  | "th"
  | "tr"
  | "uk"
  | "vi"
  | "zh"
  | "zh-Hans"
  | "zh-Hant";
export type ImageDetail = "celebrities" | "landmarks";
export type IndexerExecutionEnvironment = "standard" | "private";
export type KeyPhraseExtractionSkillLanguage =
  | "da"
  | "nl"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "it"
  | "ja"
  | "ko"
  | "no"
  | "pl"
  | "pt-PT"
  | "pt-BR"
  | "ru"
  | "es"
  | "sv";
export type OcrSkillLanguage =
  | "af"
  | "sq"
  | "anp"
  | "ar"
  | "ast"
  | "awa"
  | "az"
  | "bfy"
  | "eu"
  | "be"
  | "be-cyrl"
  | "be-latn"
  | "bho"
  | "bi"
  | "brx"
  | "bs"
  | "bra"
  | "br"
  | "bg"
  | "bns"
  | "bua"
  | "ca"
  | "ceb"
  | "rab"
  | "ch"
  | "hne"
  | "zh-Hans"
  | "zh-Hant"
  | "kw"
  | "co"
  | "crh"
  | "hr"
  | "cs"
  | "da"
  | "prs"
  | "dhi"
  | "doi"
  | "nl"
  | "en"
  | "myv"
  | "et"
  | "fo"
  | "fj"
  | "fil"
  | "fi"
  | "fr"
  | "fur"
  | "gag"
  | "gl"
  | "de"
  | "gil"
  | "gon"
  | "el"
  | "kl"
  | "gvr"
  | "ht"
  | "hlb"
  | "hni"
  | "bgc"
  | "haw"
  | "hi"
  | "mww"
  | "hoc"
  | "hu"
  | "is"
  | "smn"
  | "id"
  | "ia"
  | "iu"
  | "ga"
  | "it"
  | "ja"
  | "Jns"
  | "jv"
  | "kea"
  | "kac"
  | "xnr"
  | "krc"
  | "kaa-cyrl"
  | "kaa"
  | "csb"
  | "kk-cyrl"
  | "kk-latn"
  | "klr"
  | "kha"
  | "quc"
  | "ko"
  | "kfq"
  | "kpy"
  | "kos"
  | "kum"
  | "ku-arab"
  | "ku-latn"
  | "kru"
  | "ky"
  | "lkt"
  | "la"
  | "lt"
  | "dsb"
  | "smj"
  | "lb"
  | "bfz"
  | "ms"
  | "mt"
  | "kmj"
  | "gv"
  | "mi"
  | "mr"
  | "mn"
  | "cnr-cyrl"
  | "cnr-latn"
  | "nap"
  | "ne"
  | "niu"
  | "nog"
  | "sme"
  | "nb"
  | "no"
  | "oc"
  | "os"
  | "ps"
  | "fa"
  | "pl"
  | "pt"
  | "pa"
  | "ksh"
  | "ro"
  | "rm"
  | "ru"
  | "sck"
  | "sm"
  | "sa"
  | "sat"
  | "sco"
  | "gd"
  | "sr"
  | "sr-Cyrl"
  | "sr-Latn"
  | "xsr"
  | "srx"
  | "sms"
  | "sk"
  | "sl"
  | "so"
  | "sma"
  | "es"
  | "sw"
  | "sv"
  | "tg"
  | "tt"
  | "tet"
  | "thf"
  | "to"
  | "tr"
  | "tk"
  | "tyv"
  | "hsb"
  | "ur"
  | "ug"
  | "uz-arab"
  | "uz-cyrl"
  | "uz"
  | "vo"
  | "wae"
  | "cy"
  | "fy"
  | "yua"
  | "za"
  | "zu"
  | "unk";
export type PIIDetectionSkillMaskingMode = "none" | "replace";
export type RegexFlags =
  | "CANON_EQ"
  | "CASE_INSENSITIVE"
  | "COMMENTS"
  | "DOTALL"
  | "LITERAL"
  | "MULTILINE"
  | "UNICODE_CASE"
  | "UNIX_LINES";
export type SearchIndexerDataSourceType =
  | "azuresql"
  | "cosmosdb"
  | "azureblob"
  | "azuretable"
  | "mysql"
  | "adlsgen2"
  | "onelake";
export type SemanticErrorMode = "partial" | "fail";
export type SemanticErrorReason = "maxWaitExceeded" | "capacityOverloaded" | "transient";
export type SemanticSearchResultsType = "baseResults" | "rerankedResults";
export type SentimentSkillLanguage =
  | "da"
  | "nl"
  | "en"
  | "fi"
  | "fr"
  | "de"
  | "el"
  | "it"
  | "no"
  | "pl"
  | "pt-PT"
  | "ru"
  | "es"
  | "sv"
  | "tr";
export type SplitSkillLanguage =
  | "am"
  | "bs"
  | "cs"
  | "da"
  | "de"
  | "en"
  | "es"
  | "et"
  | "fi"
  | "fr"
  | "he"
  | "hi"
  | "hr"
  | "hu"
  | "id"
  | "is"
  | "it"
  | "ja"
  | "ko"
  | "lv"
  | "nb"
  | "nl"
  | "pl"
  | "pt"
  | "pt-br"
  | "ru"
  | "sk"
  | "sl"
  | "sr"
  | "sv"
  | "tr"
  | "ur"
  | "zh";
export type TextSplitMode = "pages" | "sentences";
export type TextTranslationSkillLanguage =
  | "af"
  | "ar"
  | "bn"
  | "bs"
  | "bg"
  | "yue"
  | "ca"
  | "zh-Hans"
  | "zh-Hant"
  | "hr"
  | "cs"
  | "da"
  | "nl"
  | "en"
  | "et"
  | "fj"
  | "fil"
  | "fi"
  | "fr"
  | "de"
  | "el"
  | "ht"
  | "he"
  | "hi"
  | "mww"
  | "hu"
  | "is"
  | "id"
  | "it"
  | "ja"
  | "sw"
  | "tlh"
  | "tlh-Latn"
  | "tlh-Piqd"
  | "ko"
  | "lv"
  | "lt"
  | "mg"
  | "ms"
  | "mt"
  | "nb"
  | "fa"
  | "pl"
  | "pt"
  | "pt-br"
  | "pt-PT"
  | "otq"
  | "ro"
  | "ru"
  | "sm"
  | "sr-Cyrl"
  | "sr-Latn"
  | "sk"
  | "sl"
  | "es"
  | "sv"
  | "ty"
  | "ta"
  | "te"
  | "th"
  | "to"
  | "tr"
  | "uk"
  | "ur"
  | "vi"
  | "cy"
  | "yua"
  | "ga"
  | "kn"
  | "mi"
  | "ml"
  | "pa";
export type VectorFilterMode = "postFilter" | "preFilter";
export type VectorQueryKind = "vector" | "text" | "imageUrl" | "imageBinary";
export type VectorSearchAlgorithmKind = "hnsw" | "exhaustiveKnn";
export type VectorSearchAlgorithmMetric = "cosine" | "euclidean" | "dotProduct" | "hamming";
export type VectorSearchVectorizerKind =
  | "azureOpenAI"
  | "customWebApi"
  | "aiServicesVision"
  | "aml";
export type VisualFeature =
  | "adult"
  | "brands"
  | "categories"
  | "description"
  | "faces"
  | "objects"
  | "tags";
