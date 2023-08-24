/* eslint-disable max-len */

// ERROR MESSAGES
export const ERROR_OCCURRED_ON_OPERATION =
  "Ocorreu um erro durante a operação.";

// WARNING MESSAGES

// INFO MESSAGES
export const INFO_SUCCESS_RECORD_SAVED = "Registro salvo com sucesso.";
export const INFO_SUCCESS_RECORD_REMOVED = "Registro removido com sucesso.";

// TEMPLATE MESSAGES
export const TEMPLATE_CHAR_NUMBER_MAX_LIMIT = (limit: string | number) =>
  `O número de caracteres não deve ser superior à ${limit}.`;
export const TEMPLATE_CHAR_NUMBER_MIN_LIMIT = (limit: string | number) =>
  `O número de caracteres não deve ser inferior à ${limit}.`;
export const TEMPLATE_NUMBER_MIN_LIMIT = (limit: string | number) =>
  `O valor do campo não deve ser inferior à ${limit}.`;
export const TEMPLATE_NUMBER_MIN_LENGTH = (limit: string | number) =>
  `A extensão do campo não deve ser inferior à ${limit}.`;
export const TEMPLATE_NUMBER_MUST_BE_BETWEEN = (
  minLimit: string | number,
  maxLimit: string | number
) => `O valor do campo deve estar entre ${minLimit} e ${maxLimit}.`;
export const TEMPLATE_REQUIRED_FIELD = (fieldName: string) =>
  `O campo ${fieldName} é obrigatório.`;
export const TEMPLATE_FINAL_DATE_MUST_BE_GREATER_THAN_START_DATE = (
  endDateName: string,
  startDateName: string
) => `A ${endDateName} inserida precisa ser maior que a ${startDateName}.`;
export const TEMPLATE_INVALID_VALUE = (fieldName: string) =>
  `${fieldName} inválido.`;
