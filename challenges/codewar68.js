// Regex Password Validation
const REGEXP = /(?<!.*\W)(?!.*\W)(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[A-Za-z\d]{6,}/;

// Pseudocode

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)
