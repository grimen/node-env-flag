
/* =========================================
      IMPORTS
-------------------------------------- */

const helper = require('./helper'),
    assert = helper.assert,
    expect = helper.expect,
    debug = helper.debug

const flag = require('../')


/* =========================================
      TESTS
-------------------------------------- */

module.exports = {

    before: () => {
        expect(flag).to.be.a('function')
    },

    '()': () => {
        expect(flag()).to.equal(false)
    },

    '(<truthy>)': {
        '(1)': () => {
            expect(flag(1)).to.equal(true)
        },

        '("1")': () => {
            expect(flag("1")).to.equal(true)
        },

        '(true)': () => {
            expect(flag(true)).to.equal(true)
        },

        '("true")': () => {
            expect(flag("true")).to.equal(true)
        },

        '("TRUE")': () => {
            expect(flag("TRUE")).to.equal(true)
        },

        'with defaults': {
            '(<truthy>, <falsy>)': {
                '(<truthy>, undefined)': {
                    '(1, undefined) => true': () => {
                        expect(flag(1, undefined)).to.equal(true)
                    },

                    '("1", undefined) => true': () => {
                        expect(flag("1", undefined)).to.equal(true)
                    },

                    '(true, undefined) => true': () => {
                        expect(flag(true, undefined)).to.equal(true)
                    },

                    '("true", undefined) => true': () => {
                        expect(flag("true", undefined)).to.equal(true)
                    },

                    '("TRUE", undefined) => true': () => {
                        expect(flag("TRUE", undefined)).to.equal(true)
                    }
                },

                '(<truthy>, null)': {
                    '(1, null) => true': () => {
                        expect(flag(1, null)).to.equal(true)
                    },

                    '("1", null) => true': () => {
                        expect(flag("1", null)).to.equal(true)
                    },

                    '(true, null) => true': () => {
                        expect(flag(true, null)).to.equal(true)
                    },

                    '("true", null) => true': () => {
                        expect(flag("true", null)).to.equal(true)
                    },

                    '("TRUE", null) => true': () => {
                        expect(flag("TRUE", null)).to.equal(true)
                    }
                },

                '(<truthy>, 0)': {
                    '(1, 0) => true': () => {
                        expect(flag(1, 0)).to.equal(true)
                    },

                    '("1", 0) => true': () => {
                        expect(flag("1", 0)).to.equal(true)
                    },

                    '(true, 0) => true': () => {
                        expect(flag(true, 0)).to.equal(true)
                    },

                    '("true", 0) => false': () => {
                        expect(flag("true", 0)).to.equal(true)
                    },

                    '("TRUE", "0") => false': () => {
                        expect(flag("TRUE", 0)).to.equal(true)
                    }
                },

                '(<truthy>, "0")': {
                    '(1, "0") => true': () => {
                        expect(flag(1, "0")).to.equal(true)
                    },

                    '("1", "0") => true': () => {
                        expect(flag("1", "0")).to.equal(true)
                    },

                    '(true, "0") => true': () => {
                        expect(flag(true, "0")).to.equal(true)
                    },

                    '("true", "0") => true': () => {
                        expect(flag("true", "0")).to.equal(true)
                    },

                    '("TRUE", "0") => true': () => {
                        expect(flag("TRUE", "0")).to.equal(true)
                    }
                },

                '(<truthy>, false)': {
                    '(1, false) => true': () => {
                        expect(flag(1, false)).to.equal(true)
                    },

                    '("1", false) => true': () => {
                        expect(flag("1", false)).to.equal(true)
                    },

                    '(true, false) => true': () => {
                        expect(flag(true, false)).to.equal(true)
                    },

                    '("true", false) => true': () => {
                        expect(flag("true", false)).to.equal(true)
                    },

                    '("TRUE", false) => true': () => {
                        expect(flag("TRUE", false)).to.equal(true)
                    }
                },

                '(<truthy>, "false")': {
                    '(1, "false") => true': () => {
                        expect(flag(1, "false")).to.equal(true)
                    },

                    '("1", "false") => true': () => {
                        expect(flag("1", "false")).to.equal(true)
                    },

                    '(true, "false") => true': () => {
                        expect(flag(true, "false")).to.equal(true)
                    },

                    '("true", "false") => true': () => {
                        expect(flag("true", "false")).to.equal(true)
                    },

                    '("TRUE", "false") => true': () => {
                        expect(flag("TRUE", "false")).to.equal(true)
                    }
                },

                '(<truthy>, "FALSE")': {
                    '(1, "FALSE") => true': () => {
                        expect(flag(1, "FALSE")).to.equal(true)
                    },

                    '("1", "FALSE") => true': () => {
                        expect(flag("1", "FALSE")).to.equal(true)
                    },

                    '(true, "FALSE") => true': () => {
                        expect(flag(true, "FALSE")).to.equal(true)
                    },

                    '("true", "FALSE") => true': () => {
                        expect(flag("true", "FALSE")).to.equal(true)
                    },

                    '("TRUE", "FALSE") => true': () => {
                        expect(flag("TRUE", "FALSE")).to.equal(true)
                    }
                }
            },

            '(<truthy>, <truthy>)': {
                '(<truthy>, 1)': {
                    '(1, 1) => true': () => {
                        expect(flag(1, 1)).to.equal(true)
                    },

                    '("1", 1) => true': () => {
                        expect(flag("1", 1)).to.equal(true)
                    },

                    '(true, 1) => true': () => {
                        expect(flag(true, 1)).to.equal(true)
                    },

                    '("true", 1) => true': () => {
                        expect(flag("true", 1)).to.equal(true)
                    },

                    '("TRUE", "1") => true': () => {
                        expect(flag("TRUE", 1)).to.equal(true)
                    }
                },

                '(<truthy>, "1")': {
                    '(1, "1") => true': () => {
                        expect(flag(1, "1")).to.equal(true)
                    },

                    '("1", "1") => true': () => {
                        expect(flag("1", "1")).to.equal(true)
                    },

                    '(true, "1") => true': () => {
                        expect(flag(true, "1")).to.equal(true)
                    },

                    '("true", "1") => true': () => {
                        expect(flag("true", "1")).to.equal(true)
                    },

                    '("TRUE", "1") => true': () => {
                        expect(flag("TRUE", "1")).to.equal(true)
                    }
                },

                '(<truthy>, true)': {
                    '(1, true) => true': () => {
                        expect(flag(1, true)).to.equal(true)
                    },

                    '("1", true) => true': () => {
                        expect(flag("1", true)).to.equal(true)
                    },

                    '(true, true) => true': () => {
                        expect(flag(true, true)).to.equal(true)
                    },

                    '("true", true) => true': () => {
                        expect(flag("true", true)).to.equal(true)
                    },

                    '("TRUE", true) => true': () => {
                        expect(flag("TRUE", true)).to.equal(true)
                    }
                },

                '(<truthy>, "true")': {
                    '(1, "true") => true': () => {
                        expect(flag(1, "true")).to.equal(true)
                    },

                    '("1", "true") => true': () => {
                        expect(flag("1", "true")).to.equal(true)
                    },

                    '(true, "true") => true': () => {
                        expect(flag(true, "true")).to.equal(true)
                    },

                    '("true", "true") => true': () => {
                        expect(flag("true", "true")).to.equal(true)
                    },

                    '("TRUE", "true") => true': () => {
                        expect(flag("TRUE", "true")).to.equal(true)
                    }
                },

                '(<truthy>, "TRUE")': {
                    '(1, "TRUE") => true': () => {
                        expect(flag(1, "TRUE")).to.equal(true)
                    },

                    '("1", "TRUE") => true': () => {
                        expect(flag("1", "TRUE")).to.equal(true)
                    },

                    '(true, "TRUE") => true': () => {
                        expect(flag(true, "TRUE")).to.equal(true)
                    },

                    '("true", "TRUE") => true': () => {
                        expect(flag("true", "TRUE")).to.equal(true)
                    },

                    '("TRUE", "TRUE") => true': () => {
                        expect(flag("TRUE", "TRUE")).to.equal(true)
                    }
                }
            }
        }
    },

    '(<falsy>)': {
        '(undefined) => false': () => {
            expect(flag(undefined)).to.equal(false)
        },

        '(null) => false': () => {
            expect(flag(null)).to.equal(false)
        },

        '(0) => false': () => {
            expect(flag(0)).to.equal(false)
        },

        '("0") => false': () => {
            expect(flag("0")).to.equal(false)
        },

        '(false) => false': () => {
            expect(flag(false)).to.equal(false)
        },

        '("false") => false': () => {
            expect(flag("false")).to.equal(false)
        },

        '("FALSE") => false': () => {
            expect(flag("FALSE")).to.equal(false)
        },

        'with defaults': {
            '(<falsy>, <falsy>)': {
                '(<falsy>, undefined)': {
                    '(undefined, undefined) => false': () => {
                        expect(flag(undefined, undefined)).to.equal(false)
                    },

                    '(null, undefined) => false': () => {
                        expect(flag(null, undefined)).to.equal(false)
                    },

                    '(0, undefined) => false': () => {
                        expect(flag(0, undefined)).to.equal(false)
                    },

                    '("0", undefined) => false': () => {
                        expect(flag("0", undefined)).to.equal(false)
                    },

                    '(false, undefined) => false': () => {
                        expect(flag(false, undefined)).to.equal(false)
                    },

                    '("false", undefined) => false': () => {
                        expect(flag("false", undefined)).to.equal(false)
                    },

                    '("FALSE", undefined) => false': () => {
                        expect(flag("FALSE", undefined)).to.equal(false)
                    }
                },

                '(<falsy>, null)': {
                    '(undefined, null) => false': () => {
                        expect(flag(undefined, null)).to.equal(false)
                    },

                    '(null, null) => false': () => {
                        expect(flag(null, null)).to.equal(false)
                    },

                    '(0, null) => false': () => {
                        expect(flag(0, null)).to.equal(false)
                    },

                    '("0", null) => false': () => {
                        expect(flag("0", null)).to.equal(false)
                    },

                    '(false, null) => false': () => {
                        expect(flag(false, null)).to.equal(false)
                    },

                    '("false", null) => false': () => {
                        expect(flag("false", null)).to.equal(false)
                    },

                    '("FALSE", null) => false': () => {
                        expect(flag("FALSE", null)).to.equal(false)
                    }
                },

                '(<falsy>, 0)': {
                    '(undefined, 0) => false': () => {
                        expect(flag(undefined, 0)).to.equal(false)
                    },

                    '(null, 0) => false': () => {
                        expect(flag(null, 0)).to.equal(false)
                    },

                    '(0, 0) => false': () => {
                        expect(flag(0, 0)).to.equal(false)
                    },

                    '("0", 0) => false': () => {
                        expect(flag("0", 0)).to.equal(false)
                    },

                    '(false, 0) => false': () => {
                        expect(flag(false, 0)).to.equal(false)
                    },

                    '("false", 0) => false': () => {
                        expect(flag("false", 0)).to.equal(false)
                    },

                    '("FALSE", "0") => false': () => {
                        expect(flag("FALSE", 0)).to.equal(false)
                    }
                },

                '(<falsy>, "0")': {
                    '(undefined, "0") => false': () => {
                        expect(flag(undefined, "0")).to.equal(false)
                    },

                    '(null, "0") => false': () => {
                        expect(flag(null, "0")).to.equal(false)
                    },

                    '(0, "0") => false': () => {
                        expect(flag(0, "0")).to.equal(false)
                    },

                    '("0", "0") => false': () => {
                        expect(flag("0", "0")).to.equal(false)
                    },

                    '(false, "0") => false': () => {
                        expect(flag(false, "0")).to.equal(false)
                    },

                    '("false", "0") => false': () => {
                        expect(flag("false", "0")).to.equal(false)
                    },

                    '("FALSE", "0") => false': () => {
                        expect(flag("FALSE", "0")).to.equal(false)
                    }
                },

                '(<falsy>, false)': {
                    '(undefined, false) => false': () => {
                        expect(flag(undefined, false)).to.equal(false)
                    },

                    '(null, false) => false': () => {
                        expect(flag(null, false)).to.equal(false)
                    },

                    '(0, false) => false': () => {
                        expect(flag(0, false)).to.equal(false)
                    },

                    '("0", false) => false': () => {
                        expect(flag("0", false)).to.equal(false)
                    },

                    '(false, false) => false': () => {
                        expect(flag(false, false)).to.equal(false)
                    },

                    '("false", false) => false': () => {
                        expect(flag("false", false)).to.equal(false)
                    },

                    '("FALSE", false) => false': () => {
                        expect(flag("FALSE", false)).to.equal(false)
                    }
                },

                '(<falsy>, "false")': {
                    '(undefined, "false") => false': () => {
                        expect(flag(undefined, "false")).to.equal(false)
                    },

                    '(null, "false") => false': () => {
                        expect(flag(null, "false")).to.equal(false)
                    },

                    '(0, "false") => false': () => {
                        expect(flag(0, "false")).to.equal(false)
                    },

                    '("0", "false") => false': () => {
                        expect(flag("0", "false")).to.equal(false)
                    },

                    '(false, "false") => false': () => {
                        expect(flag(false, "false")).to.equal(false)
                    },

                    '("false", "false") => false': () => {
                        expect(flag("false", "false")).to.equal(false)
                    },

                    '("FALSE", "false") => false': () => {
                        expect(flag("FALSE", "false")).to.equal(false)
                    }
                },

                '(<falsy>, "FALSE")': {
                    '(undefined, "FALSE") => false': () => {
                        expect(flag(undefined, "FALSE")).to.equal(false)
                    },

                    '(null, "FALSE") => false': () => {
                        expect(flag(null, "FALSE")).to.equal(false)
                    },

                    '(0, "FALSE") => false': () => {
                        expect(flag(0, "FALSE")).to.equal(false)
                    },

                    '("0", "FALSE") => false': () => {
                        expect(flag("0", "FALSE")).to.equal(false)
                    },

                    '(false, "FALSE") => false': () => {
                        expect(flag(false, "FALSE")).to.equal(false)
                    },

                    '("false", "FALSE") => false': () => {
                        expect(flag("false", "FALSE")).to.equal(false)
                    },

                    '("FALSE", "FALSE") => false': () => {
                        expect(flag("FALSE", "FALSE")).to.equal(false)
                    }
                }
            },

            '(<falsy>, <truthy>)': {
                '(<falsy>, 1)': {
                    '(undefined, 1) => true': () => {
                        expect(flag(undefined, 1)).to.equal(true)
                    },

                    '(null, 1) => true': () => {
                        expect(flag(null, 1)).to.equal(true)
                    },

                    '(0, 1) => false': () => {
                        expect(flag(0, 1)).to.equal(false)
                    },

                    '("0", 1) => false': () => {
                        expect(flag("0", 1)).to.equal(false)
                    },

                    '(false, 1) => false': () => {
                        expect(flag(false, 1)).to.equal(false)
                    },

                    '("false", 1) => false': () => {
                        expect(flag("false", 1)).to.equal(false)
                    },

                    '("FALSE", "1") => false': () => {
                        expect(flag("FALSE", 1)).to.equal(false)
                    }
                },

                '(<falsy>, "1")': {
                    '(undefined, "1") => true': () => {
                        expect(flag(undefined, "1")).to.equal(true)
                    },

                    '(null, "1") => true': () => {
                        expect(flag(null, "1")).to.equal(true)
                    },

                    '(0, "1") => false': () => {
                        expect(flag(0, "1")).to.equal(false)
                    },

                    '("0", "1") => false': () => {
                        expect(flag("0", "1")).to.equal(false)
                    },

                    '(false, "1") => false': () => {
                        expect(flag(false, "1")).to.equal(false)
                    },

                    '("false", "1") => false': () => {
                        expect(flag("false", "1")).to.equal(false)
                    },

                    '("FALSE", "1") => false': () => {
                        expect(flag("FALSE", "1")).to.equal(false)
                    }
                },

                '(<falsy>, true)': {
                    '(undefined, true) => true': () => {
                        expect(flag(undefined, true)).to.equal(true)
                    },

                    '(null, true) => true': () => {
                        expect(flag(null, true)).to.equal(true)
                    },

                    '(0, true) => false': () => {
                        expect(flag(0, true)).to.equal(false)
                    },

                    '("0", true) => false': () => {
                        expect(flag("0", true)).to.equal(false)
                    },

                    '(false, true) => false': () => {
                        expect(flag(false, true)).to.equal(false)
                    },

                    '("false", true) => false': () => {
                        expect(flag("false", true)).to.equal(false)
                    },

                    '("FALSE", true) => false': () => {
                        expect(flag("FALSE", true)).to.equal(false)
                    }
                },

                '(<falsy>, "true")': {
                    '(undefined, "true") => true': () => {
                        expect(flag(undefined, "true")).to.equal(true)
                    },

                    '(null, "true") => true': () => {
                        expect(flag(null, "true")).to.equal(true)
                    },

                    '(0, "true") => false': () => {
                        expect(flag(0, "true")).to.equal(false)
                    },

                    '("0", "true") => false': () => {
                        expect(flag("0", "true")).to.equal(false)
                    },

                    '(false, "true") => false': () => {
                        expect(flag(false, "true")).to.equal(false)
                    },

                    '("false", "true") => false': () => {
                        expect(flag("false", "true")).to.equal(false)
                    },

                    '("FALSE", "true") => false': () => {
                        expect(flag("FALSE", "true")).to.equal(false)
                    }
                },

                '(<falsy>, "TRUE")': {
                    '(undefined, "TRUE") => true': () => {
                        expect(flag(undefined, "TRUE")).to.equal(true)
                    },

                    '(null, "TRUE") => true': () => {
                        expect(flag(null, "TRUE")).to.equal(true)
                    },

                    '(0, "TRUE") => false': () => {
                        expect(flag(0, "TRUE")).to.equal(false)
                    },

                    '("0", "TRUE") => false': () => {
                        expect(flag("0", "TRUE")).to.equal(false)
                    },

                    '(false, "TRUE") => false': () => {
                        expect(flag(false, "TRUE")).to.equal(false)
                    },

                    '("false", "TRUE") => false': () => {
                        expect(flag("false", "TRUE")).to.equal(false)
                    },

                    '("FALSE", "TRUE") => false': () => {
                        expect(flag("FALSE", "TRUE")).to.equal(false)
                    }
                }
            }
        }
    }

}
