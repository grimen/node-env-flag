
/* =========================================
      CONSTANTS
-------------------------------------- */

const TRUTHY_PATTERN = /^1|true$/i


/* =========================================
      FUNCTIONS
-------------------------------------- */

function envFlag (value, defaultValue) {
    if (typeof value === 'undefined' || value === null) {
        return (defaultValue === undefined) ? false : TRUTHY_PATTERN.test('' + defaultValue)

    } else {
      return TRUTHY_PATTERN.test('' + value) // avoid the boolean/truthy ghetto
    }
}


/* =========================================
      EXPORTS
-------------------------------------- */

module.exports = envFlag
