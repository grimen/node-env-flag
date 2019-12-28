
/* global describe test expect beforeAll */

/* =========================================
      IMPORTS
-------------------------------------- */

const flag = require('../')


/* =========================================
      TESTS
-------------------------------------- */

describe('envFlag', () => {

    beforeAll(() => {
        expect(flag).toBeInstanceOf(Function)
    })

    test('()', () => {
        expect(flag()).toEqual(false)
    })

    describe('(<truthy>)', () => {
        test('(1)', () => {
            expect(flag(1)).toEqual(true)
        })

        test('("1")', () => {
            expect(flag("1")).toEqual(true)
        })

        test('(true)', () => {
            expect(flag(true)).toEqual(true)
        })

        test('("true")', () => {
            expect(flag("true")).toEqual(true)
        })

        test('("TRUE")', () => {
            expect(flag("TRUE")).toEqual(true)
        })

        describe('with defaults', () => {
            describe('(<truthy>, <falsy>)', () => {
                describe('(<truthy>, undefined)', () => {
                    test('(1, undefined) => true', () => {
                        expect(flag(1, undefined)).toEqual(true)
                    })

                    test('("1", undefined) => true', () => {
                        expect(flag("1", undefined)).toEqual(true)
                    })

                    test('(true, undefined) => true', () => {
                        expect(flag(true, undefined)).toEqual(true)
                    })

                    test('("true", undefined) => true', () => {
                        expect(flag("true", undefined)).toEqual(true)
                    })

                    test('("TRUE", undefined) => true', () => {
                        expect(flag("TRUE", undefined)).toEqual(true)
                    })
                })

                describe('(<truthy>, null)', () => {
                    test('(1, null) => true', () => {
                        expect(flag(1, null)).toEqual(true)
                    })

                    test('("1", null) => true', () => {
                        expect(flag("1", null)).toEqual(true)
                    })

                    test('(true, null) => true', () => {
                        expect(flag(true, null)).toEqual(true)
                    })

                    test('("true", null) => true', () => {
                        expect(flag("true", null)).toEqual(true)
                    })

                    test('("TRUE", null) => true', () => {
                        expect(flag("TRUE", null)).toEqual(true)
                    })
                })

                describe('(<truthy>, 0)', () => {
                    test('(1, 0) => true', () => {
                        expect(flag(1, 0)).toEqual(true)
                    })

                    test('("1", 0) => true', () => {
                        expect(flag("1", 0)).toEqual(true)
                    })

                    test('(true, 0) => true', () => {
                        expect(flag(true, 0)).toEqual(true)
                    })

                    test('("true", 0) => false', () => {
                        expect(flag("true", 0)).toEqual(true)
                    })

                    test('("TRUE", "0") => false', () => {
                        expect(flag("TRUE", 0)).toEqual(true)
                    })
                })

                describe('(<truthy>, "0")', () => {
                    test('(1, "0") => true', () => {
                        expect(flag(1, "0")).toEqual(true)
                    })

                    test('("1", "0") => true', () => {
                        expect(flag("1", "0")).toEqual(true)
                    })

                    test('(true, "0") => true', () => {
                        expect(flag(true, "0")).toEqual(true)
                    })

                    test('("true", "0") => true', () => {
                        expect(flag("true", "0")).toEqual(true)
                    })

                    test('("TRUE", "0") => true', () => {
                        expect(flag("TRUE", "0")).toEqual(true)
                    })
                })

                describe('(<truthy>, false)', () => {
                    test('(1, false) => true', () => {
                        expect(flag(1, false)).toEqual(true)
                    })

                    test('("1", false) => true', () => {
                        expect(flag("1", false)).toEqual(true)
                    })

                    test('(true, false) => true', () => {
                        expect(flag(true, false)).toEqual(true)
                    })

                    test('("true", false) => true', () => {
                        expect(flag("true", false)).toEqual(true)
                    })

                    test('("TRUE", false) => true', () => {
                        expect(flag("TRUE", false)).toEqual(true)
                    })
                })

                describe('(<truthy>, "false")', () => {
                    test('(1, "false") => true', () => {
                        expect(flag(1, "false")).toEqual(true)
                    })

                    test('("1", "false") => true', () => {
                        expect(flag("1", "false")).toEqual(true)
                    })

                    test('(true, "false") => true', () => {
                        expect(flag(true, "false")).toEqual(true)
                    })

                    test('("true", "false") => true', () => {
                        expect(flag("true", "false")).toEqual(true)
                    })

                    test('("TRUE", "false") => true', () => {
                        expect(flag("TRUE", "false")).toEqual(true)
                    })
                })

                describe('(<truthy>, "FALSE")', () => {
                    test('(1, "FALSE") => true', () => {
                        expect(flag(1, "FALSE")).toEqual(true)
                    })

                    test('("1", "FALSE") => true', () => {
                        expect(flag("1", "FALSE")).toEqual(true)
                    })

                    test('(true, "FALSE") => true', () => {
                        expect(flag(true, "FALSE")).toEqual(true)
                    })

                    test('("true", "FALSE") => true', () => {
                        expect(flag("true", "FALSE")).toEqual(true)
                    })

                    test('("TRUE", "FALSE") => true', () => {
                        expect(flag("TRUE", "FALSE")).toEqual(true)
                    })
                })
            })

            describe('(<truthy>, <truthy>)', () => {
                describe('(<truthy>, 1)', () => {
                    test('(1, 1) => true', () => {
                        expect(flag(1, 1)).toEqual(true)
                    })

                    test('("1", 1) => true', () => {
                        expect(flag("1", 1)).toEqual(true)
                    })

                    test('(true, 1) => true', () => {
                        expect(flag(true, 1)).toEqual(true)
                    })

                    test('("true", 1) => true', () => {
                        expect(flag("true", 1)).toEqual(true)
                    })

                    test('("TRUE", "1") => true', () => {
                        expect(flag("TRUE", 1)).toEqual(true)
                    })
                })

                describe('(<truthy>, "1")', () => {
                    test('(1, "1") => true', () => {
                        expect(flag(1, "1")).toEqual(true)
                    })

                    test('("1", "1") => true', () => {
                        expect(flag("1", "1")).toEqual(true)
                    })

                    test('(true, "1") => true', () => {
                        expect(flag(true, "1")).toEqual(true)
                    })

                    test('("true", "1") => true', () => {
                        expect(flag("true", "1")).toEqual(true)
                    })

                    test('("TRUE", "1") => true', () => {
                        expect(flag("TRUE", "1")).toEqual(true)
                    })
                })

                describe('(<truthy>, true)', () => {
                    test('(1, true) => true', () => {
                        expect(flag(1, true)).toEqual(true)
                    })

                    test('("1", true) => true', () => {
                        expect(flag("1", true)).toEqual(true)
                    })

                    test('(true, true) => true', () => {
                        expect(flag(true, true)).toEqual(true)
                    })

                    test('("true", true) => true', () => {
                        expect(flag("true", true)).toEqual(true)
                    })

                    test('("TRUE", true) => true', () => {
                        expect(flag("TRUE", true)).toEqual(true)
                    })
                })

                describe('(<truthy>, "true")', () => {
                    test('(1, "true") => true', () => {
                        expect(flag(1, "true")).toEqual(true)
                    })

                    test('("1", "true") => true', () => {
                        expect(flag("1", "true")).toEqual(true)
                    })

                    test('(true, "true") => true', () => {
                        expect(flag(true, "true")).toEqual(true)
                    })

                    test('("true", "true") => true', () => {
                        expect(flag("true", "true")).toEqual(true)
                    })

                    test('("TRUE", "true") => true', () => {
                        expect(flag("TRUE", "true")).toEqual(true)
                    })
                })

                describe('(<truthy>, "TRUE")', () => {
                    test('(1, "TRUE") => true', () => {
                        expect(flag(1, "TRUE")).toEqual(true)
                    })

                    test('("1", "TRUE") => true', () => {
                        expect(flag("1", "TRUE")).toEqual(true)
                    })

                    test('(true, "TRUE") => true', () => {
                        expect(flag(true, "TRUE")).toEqual(true)
                    })

                    test('("true", "TRUE") => true', () => {
                        expect(flag("true", "TRUE")).toEqual(true)
                    })

                    test('("TRUE", "TRUE") => true', () => {
                        expect(flag("TRUE", "TRUE")).toEqual(true)
                    })
                })
            })
        })
    })

    describe('(<falsy>)', () => {
        test('(undefined) => false', () => {
            expect(flag(undefined)).toEqual(false)
        })

        test('(null) => false', () => {
            expect(flag(null)).toEqual(false)
        })

        test('(0) => false', () => {
            expect(flag(0)).toEqual(false)
        })

        test('("0") => false', () => {
            expect(flag("0")).toEqual(false)
        })

        test('(false) => false', () => {
            expect(flag(false)).toEqual(false)
        })

        test('("false") => false', () => {
            expect(flag("false")).toEqual(false)
        })

        test('("FALSE") => false', () => {
            expect(flag("FALSE")).toEqual(false)
        })

        describe('with defaults', () => {
            describe('(<falsy>, <falsy>)', () => {
                describe('(<falsy>, undefined)', () => {
                    test('(undefined, undefined) => false', () => {
                        expect(flag(undefined, undefined)).toEqual(false)
                    })

                    test('(null, undefined) => false', () => {
                        expect(flag(null, undefined)).toEqual(false)
                    })

                    test('(0, undefined) => false', () => {
                        expect(flag(0, undefined)).toEqual(false)
                    })

                    test('("0", undefined) => false', () => {
                        expect(flag("0", undefined)).toEqual(false)
                    })

                    test('(false, undefined) => false', () => {
                        expect(flag(false, undefined)).toEqual(false)
                    })

                    test('("false", undefined) => false', () => {
                        expect(flag("false", undefined)).toEqual(false)
                    })

                    test('("FALSE", undefined) => false', () => {
                        expect(flag("FALSE", undefined)).toEqual(false)
                    })
                })

                describe('(<falsy>, null)', () => {
                    test('(undefined, null) => false', () => {
                        expect(flag(undefined, null)).toEqual(false)
                    })

                    test('(null, null) => false', () => {
                        expect(flag(null, null)).toEqual(false)
                    })

                    test('(0, null) => false', () => {
                        expect(flag(0, null)).toEqual(false)
                    })

                    test('("0", null) => false', () => {
                        expect(flag("0", null)).toEqual(false)
                    })

                    test('(false, null) => false', () => {
                        expect(flag(false, null)).toEqual(false)
                    })

                    test('("false", null) => false', () => {
                        expect(flag("false", null)).toEqual(false)
                    })

                    test('("FALSE", null) => false', () => {
                        expect(flag("FALSE", null)).toEqual(false)
                    })
                })

                describe('(<falsy>, 0)', () => {
                    test('(undefined, 0) => false', () => {
                        expect(flag(undefined, 0)).toEqual(false)
                    })

                    test('(null, 0) => false', () => {
                        expect(flag(null, 0)).toEqual(false)
                    })

                    test('(0, 0) => false', () => {
                        expect(flag(0, 0)).toEqual(false)
                    })

                    test('("0", 0) => false', () => {
                        expect(flag("0", 0)).toEqual(false)
                    })

                    test('(false, 0) => false', () => {
                        expect(flag(false, 0)).toEqual(false)
                    })

                    test('("false", 0) => false', () => {
                        expect(flag("false", 0)).toEqual(false)
                    })

                    test('("FALSE", "0") => false', () => {
                        expect(flag("FALSE", 0)).toEqual(false)
                    })
                })

                describe('(<falsy>, "0")', () => {
                    test('(undefined, "0") => false', () => {
                        expect(flag(undefined, "0")).toEqual(false)
                    })

                    test('(null, "0") => false', () => {
                        expect(flag(null, "0")).toEqual(false)
                    })

                    test('(0, "0") => false', () => {
                        expect(flag(0, "0")).toEqual(false)
                    })

                    test('("0", "0") => false', () => {
                        expect(flag("0", "0")).toEqual(false)
                    })

                    test('(false, "0") => false', () => {
                        expect(flag(false, "0")).toEqual(false)
                    })

                    test('("false", "0") => false', () => {
                        expect(flag("false", "0")).toEqual(false)
                    })

                    test('("FALSE", "0") => false', () => {
                        expect(flag("FALSE", "0")).toEqual(false)
                    })
                })

                describe('(<falsy>, false)', () => {
                    test('(undefined, false) => false', () => {
                        expect(flag(undefined, false)).toEqual(false)
                    })

                    test('(null, false) => false', () => {
                        expect(flag(null, false)).toEqual(false)
                    })

                    test('(0, false) => false', () => {
                        expect(flag(0, false)).toEqual(false)
                    })

                    test('("0", false) => false', () => {
                        expect(flag("0", false)).toEqual(false)
                    })

                    test('(false, false) => false', () => {
                        expect(flag(false, false)).toEqual(false)
                    })

                    test('("false", false) => false', () => {
                        expect(flag("false", false)).toEqual(false)
                    })

                    test('("FALSE", false) => false', () => {
                        expect(flag("FALSE", false)).toEqual(false)
                    })
                })

                describe('(<falsy>, "false")', () => {
                    test('(undefined, "false") => false', () => {
                        expect(flag(undefined, "false")).toEqual(false)
                    })

                    test('(null, "false") => false', () => {
                        expect(flag(null, "false")).toEqual(false)
                    })

                    test('(0, "false") => false', () => {
                        expect(flag(0, "false")).toEqual(false)
                    })

                    test('("0", "false") => false', () => {
                        expect(flag("0", "false")).toEqual(false)
                    })

                    test('(false, "false") => false', () => {
                        expect(flag(false, "false")).toEqual(false)
                    })

                    test('("false", "false") => false', () => {
                        expect(flag("false", "false")).toEqual(false)
                    })

                    test('("FALSE", "false") => false', () => {
                        expect(flag("FALSE", "false")).toEqual(false)
                    })
                })

                describe('(<falsy>, "FALSE")', () => {
                    test('(undefined, "FALSE") => false', () => {
                        expect(flag(undefined, "FALSE")).toEqual(false)
                    })

                    test('(null, "FALSE") => false', () => {
                        expect(flag(null, "FALSE")).toEqual(false)
                    })

                    test('(0, "FALSE") => false', () => {
                        expect(flag(0, "FALSE")).toEqual(false)
                    })

                    test('("0", "FALSE") => false', () => {
                        expect(flag("0", "FALSE")).toEqual(false)
                    })

                    test('(false, "FALSE") => false', () => {
                        expect(flag(false, "FALSE")).toEqual(false)
                    })

                    test('("false", "FALSE") => false', () => {
                        expect(flag("false", "FALSE")).toEqual(false)
                    })

                    test('("FALSE", "FALSE") => false', () => {
                        expect(flag("FALSE", "FALSE")).toEqual(false)
                    })
                })
            })

            describe('(<falsy>, <truthy>)', () => {
                describe('(<falsy>, 1)', () => {
                    test('(undefined, 1) => true', () => {
                        expect(flag(undefined, 1)).toEqual(true)
                    })

                    test('(null, 1) => true', () => {
                        expect(flag(null, 1)).toEqual(true)
                    })

                    test('(0, 1) => false', () => {
                        expect(flag(0, 1)).toEqual(false)
                    })

                    test('("0", 1) => false', () => {
                        expect(flag("0", 1)).toEqual(false)
                    })

                    test('(false, 1) => false', () => {
                        expect(flag(false, 1)).toEqual(false)
                    })

                    test('("false", 1) => false', () => {
                        expect(flag("false", 1)).toEqual(false)
                    })

                    test('("FALSE", "1") => false', () => {
                        expect(flag("FALSE", 1)).toEqual(false)
                    })
                })

                describe('(<falsy>, "1")', () => {
                    test('(undefined, "1") => true', () => {
                        expect(flag(undefined, "1")).toEqual(true)
                    })

                    test('(null, "1") => true', () => {
                        expect(flag(null, "1")).toEqual(true)
                    })

                    test('(0, "1") => false', () => {
                        expect(flag(0, "1")).toEqual(false)
                    })

                    test('("0", "1") => false', () => {
                        expect(flag("0", "1")).toEqual(false)
                    })

                    test('(false, "1") => false', () => {
                        expect(flag(false, "1")).toEqual(false)
                    })

                    test('("false", "1") => false', () => {
                        expect(flag("false", "1")).toEqual(false)
                    })

                    test('("FALSE", "1") => false', () => {
                        expect(flag("FALSE", "1")).toEqual(false)
                    })
                })

                describe('(<falsy>, true)', () => {
                    test('(undefined, true) => true', () => {
                        expect(flag(undefined, true)).toEqual(true)
                    })

                    test('(null, true) => true', () => {
                        expect(flag(null, true)).toEqual(true)
                    })

                    test('(0, true) => false', () => {
                        expect(flag(0, true)).toEqual(false)
                    })

                    test('("0", true) => false', () => {
                        expect(flag("0", true)).toEqual(false)
                    })

                    test('(false, true) => false', () => {
                        expect(flag(false, true)).toEqual(false)
                    })

                    test('("false", true) => false', () => {
                        expect(flag("false", true)).toEqual(false)
                    })

                    test('("FALSE", true) => false', () => {
                        expect(flag("FALSE", true)).toEqual(false)
                    })
                })

                describe('(<falsy>, "true")', () => {
                    test('(undefined, "true") => true', () => {
                        expect(flag(undefined, "true")).toEqual(true)
                    })

                    test('(null, "true") => true', () => {
                        expect(flag(null, "true")).toEqual(true)
                    })

                    test('(0, "true") => false', () => {
                        expect(flag(0, "true")).toEqual(false)
                    })

                    test('("0", "true") => false', () => {
                        expect(flag("0", "true")).toEqual(false)
                    })

                    test('(false, "true") => false', () => {
                        expect(flag(false, "true")).toEqual(false)
                    })

                    test('("false", "true") => false', () => {
                        expect(flag("false", "true")).toEqual(false)
                    })

                    test('("FALSE", "true") => false', () => {
                        expect(flag("FALSE", "true")).toEqual(false)
                    })
                })

                describe('(<falsy>, "TRUE")', () => {
                    test('(undefined, "TRUE") => true', () => {
                        expect(flag(undefined, "TRUE")).toEqual(true)
                    })

                    test('(null, "TRUE") => true', () => {
                        expect(flag(null, "TRUE")).toEqual(true)
                    })

                    test('(0, "TRUE") => false', () => {
                        expect(flag(0, "TRUE")).toEqual(false)
                    })

                    test('("0", "TRUE") => false', () => {
                        expect(flag("0", "TRUE")).toEqual(false)
                    })

                    test('(false, "TRUE") => false', () => {
                        expect(flag(false, "TRUE")).toEqual(false)
                    })

                    test('("false", "TRUE") => false', () => {
                        expect(flag("false", "TRUE")).toEqual(false)
                    })

                    test('("FALSE", "TRUE") => false', () => {
                        expect(flag("FALSE", "TRUE")).toEqual(false)
                    })
                })
            })
        })
    })

})
