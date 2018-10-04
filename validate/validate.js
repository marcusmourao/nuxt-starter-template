import isTextValid from './sanitizers/textExists';

const Validate = {};

const validateMap = {
  'text-exists': isTextValid,
};

function getFunctionBySlug(slug) {
  return validateMap[slug];
}

Validate.getValidateFunctionBySlug = getFunctionBySlug;

export default Validate;

export function getValidateFunctionBySlug(slug) {
  return getFunctionBySlug(slug);
}

