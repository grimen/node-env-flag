var helper = require('./helper'),
    assert = helper.assert,
    expect = helper.expect,
    debug = helper.debug;

var flag = require('../');

// -----------------------
//  Test
// --------------------

module.exports = {

  before: function() {
    expect(flag).to.be.a('function');
  },

  '()': function() {
    expect(flag()).to.equal(false);
  },

  '(<truthy>)': {
    '(1)': function() {
      expect(flag(1)).to.equal(true);
    },

    '("1")': function() {
      expect(flag("1")).to.equal(true);
    },

    '(true)': function() {
      expect(flag(true)).to.equal(true);
    },

    '("true")': function() {
      expect(flag("true")).to.equal(true);
    },

    '("TRUE")': function() {
      expect(flag("TRUE")).to.equal(true);
    },

    'with defaults': {
      '(<truthy>, <falsy>)': {
        '(<truthy>, undefined)': {
          '(1, undefined) => true': function() {
            expect(flag(1, undefined)).to.equal(true);
          },

          '("1", undefined) => true': function() {
            expect(flag("1", undefined)).to.equal(true);
          },

          '(true, undefined) => true': function() {
            expect(flag(true, undefined)).to.equal(true);
          },

          '("true", undefined) => true': function() {
            expect(flag("true", undefined)).to.equal(true);
          },

          '("TRUE", undefined) => true': function() {
            expect(flag("TRUE", undefined)).to.equal(true);
          }
        },

        '(<truthy>, null)': {
          '(1, null) => true': function() {
            expect(flag(1, null)).to.equal(true);
          },

          '("1", null) => true': function() {
            expect(flag("1", null)).to.equal(true);
          },

          '(true, null) => true': function() {
            expect(flag(true, null)).to.equal(true);
          },

          '("true", null) => true': function() {
            expect(flag("true", null)).to.equal(true);
          },

          '("TRUE", null) => true': function() {
            expect(flag("TRUE", null)).to.equal(true);
          }
        },

        '(<truthy>, 0)': {
          '(1, 0) => true': function() {
            expect(flag(1, 0)).to.equal(true);
          },

          '("1", 0) => true': function() {
            expect(flag("1", 0)).to.equal(true);
          },

          '(true, 0) => true': function() {
            expect(flag(true, 0)).to.equal(true);
          },

          '("true", 0) => false': function() {
            expect(flag("true", 0)).to.equal(true);
          },

          '("TRUE", "0") => false': function() {
            expect(flag("TRUE", 0)).to.equal(true);
          }
        },

        '(<truthy>, "0")': {
          '(1, "0") => true': function() {
            expect(flag(1, "0")).to.equal(true);
          },

          '("1", "0") => true': function() {
            expect(flag("1", "0")).to.equal(true);
          },

          '(true, "0") => true': function() {
            expect(flag(true, "0")).to.equal(true);
          },

          '("true", "0") => true': function() {
            expect(flag("true", "0")).to.equal(true);
          },

          '("TRUE", "0") => true': function() {
            expect(flag("TRUE", "0")).to.equal(true);
          }
        },

        '(<truthy>, false)': {
          '(1, false) => true': function() {
            expect(flag(1, false)).to.equal(true);
          },

          '("1", false) => true': function() {
            expect(flag("1", false)).to.equal(true);
          },

          '(true, false) => true': function() {
            expect(flag(true, false)).to.equal(true);
          },

          '("true", false) => true': function() {
            expect(flag("true", false)).to.equal(true);
          },

          '("TRUE", false) => true': function() {
            expect(flag("TRUE", false)).to.equal(true);
          }
        },

        '(<truthy>, "false")': {
          '(1, "false") => true': function() {
            expect(flag(1, "false")).to.equal(true);
          },

          '("1", "false") => true': function() {
            expect(flag("1", "false")).to.equal(true);
          },

          '(true, "false") => true': function() {
            expect(flag(true, "false")).to.equal(true);
          },

          '("true", "false") => true': function() {
            expect(flag("true", "false")).to.equal(true);
          },

          '("TRUE", "false") => true': function() {
            expect(flag("TRUE", "false")).to.equal(true);
          }
        },

        '(<truthy>, "FALSE")': {
          '(1, "FALSE") => true': function() {
            expect(flag(1, "FALSE")).to.equal(true);
          },

          '("1", "FALSE") => true': function() {
            expect(flag("1", "FALSE")).to.equal(true);
          },

          '(true, "FALSE") => true': function() {
            expect(flag(true, "FALSE")).to.equal(true);
          },

          '("true", "FALSE") => true': function() {
            expect(flag("true", "FALSE")).to.equal(true);
          },

          '("TRUE", "FALSE") => true': function() {
            expect(flag("TRUE", "FALSE")).to.equal(true);
          }
        }
      },

      '(<truthy>, <truthy>)': {
        '(<truthy>, 1)': {
          '(1, 1) => true': function() {
            expect(flag(1, 1)).to.equal(true);
          },

          '("1", 1) => true': function() {
            expect(flag("1", 1)).to.equal(true);
          },

          '(true, 1) => true': function() {
            expect(flag(true, 1)).to.equal(true);
          },

          '("true", 1) => true': function() {
            expect(flag("true", 1)).to.equal(true);
          },

          '("TRUE", "1") => true': function() {
            expect(flag("TRUE", 1)).to.equal(true);
          }
        },

        '(<truthy>, "1")': {
          '(1, "1") => true': function() {
            expect(flag(1, "1")).to.equal(true);
          },

          '("1", "1") => true': function() {
            expect(flag("1", "1")).to.equal(true);
          },

          '(true, "1") => true': function() {
            expect(flag(true, "1")).to.equal(true);
          },

          '("true", "1") => true': function() {
            expect(flag("true", "1")).to.equal(true);
          },

          '("TRUE", "1") => true': function() {
            expect(flag("TRUE", "1")).to.equal(true);
          }
        },

        '(<truthy>, true)': {
          '(1, true) => true': function() {
            expect(flag(1, true)).to.equal(true);
          },

          '("1", true) => true': function() {
            expect(flag("1", true)).to.equal(true);
          },

          '(true, true) => true': function() {
            expect(flag(true, true)).to.equal(true);
          },

          '("true", true) => true': function() {
            expect(flag("true", true)).to.equal(true);
          },

          '("TRUE", true) => true': function() {
            expect(flag("TRUE", true)).to.equal(true);
          }
        },

        '(<truthy>, "true")': {
          '(1, "true") => true': function() {
            expect(flag(1, "true")).to.equal(true);
          },

          '("1", "true") => true': function() {
            expect(flag("1", "true")).to.equal(true);
          },

          '(true, "true") => true': function() {
            expect(flag(true, "true")).to.equal(true);
          },

          '("true", "true") => true': function() {
            expect(flag("true", "true")).to.equal(true);
          },

          '("TRUE", "true") => true': function() {
            expect(flag("TRUE", "true")).to.equal(true);
          }
        },

        '(<truthy>, "TRUE")': {
          '(1, "TRUE") => true': function() {
            expect(flag(1, "TRUE")).to.equal(true);
          },

          '("1", "TRUE") => true': function() {
            expect(flag("1", "TRUE")).to.equal(true);
          },

          '(true, "TRUE") => true': function() {
            expect(flag(true, "TRUE")).to.equal(true);
          },

          '("true", "TRUE") => true': function() {
            expect(flag("true", "TRUE")).to.equal(true);
          },

          '("TRUE", "TRUE") => true': function() {
            expect(flag("TRUE", "TRUE")).to.equal(true);
          }
        }
      }
    }
  },

  '(<falsy>)': {
    '(undefined) => false': function() {
      expect(flag(undefined)).to.equal(false);
    },

    '(null) => false': function() {
      expect(flag(null)).to.equal(false);
    },

    '(0) => false': function() {
      expect(flag(0)).to.equal(false);
    },

    '("0") => false': function() {
      expect(flag("0")).to.equal(false);
    },

    '(false) => false': function() {
      expect(flag(false)).to.equal(false);
    },

    '("false") => false': function() {
      expect(flag("false")).to.equal(false);
    },

    '("FALSE") => false': function() {
      expect(flag("FALSE")).to.equal(false);
    },

    'with defaults': {
      '(<falsy>, <falsy>)': {
        '(<falsy>, undefined)': {
          '(undefined, undefined) => false': function() {
            expect(flag(undefined, undefined)).to.equal(false);
          },

          '(null, undefined) => false': function() {
            expect(flag(null, undefined)).to.equal(false);
          },

          '(0, undefined) => false': function() {
            expect(flag(0, undefined)).to.equal(false);
          },

          '("0", undefined) => false': function() {
            expect(flag("0", undefined)).to.equal(false);
          },

          '(false, undefined) => false': function() {
            expect(flag(false, undefined)).to.equal(false);
          },

          '("false", undefined) => false': function() {
            expect(flag("false", undefined)).to.equal(false);
          },

          '("FALSE", undefined) => false': function() {
            expect(flag("FALSE", undefined)).to.equal(false);
          }
        },

        '(<falsy>, null)': {
          '(undefined, null) => false': function() {
            expect(flag(undefined, null)).to.equal(false);
          },

          '(null, null) => false': function() {
            expect(flag(null, null)).to.equal(false);
          },

          '(0, null) => false': function() {
            expect(flag(0, null)).to.equal(false);
          },

          '("0", null) => false': function() {
            expect(flag("0", null)).to.equal(false);
          },

          '(false, null) => false': function() {
            expect(flag(false, null)).to.equal(false);
          },

          '("false", null) => false': function() {
            expect(flag("false", null)).to.equal(false);
          },

          '("FALSE", null) => false': function() {
            expect(flag("FALSE", null)).to.equal(false);
          }
        },

        '(<falsy>, 0)': {
          '(undefined, 0) => false': function() {
            expect(flag(undefined, 0)).to.equal(false);
          },

          '(null, 0) => false': function() {
            expect(flag(null, 0)).to.equal(false);
          },

          '(0, 0) => false': function() {
            expect(flag(0, 0)).to.equal(false);
          },

          '("0", 0) => false': function() {
            expect(flag("0", 0)).to.equal(false);
          },

          '(false, 0) => false': function() {
            expect(flag(false, 0)).to.equal(false);
          },

          '("false", 0) => false': function() {
            expect(flag("false", 0)).to.equal(false);
          },

          '("FALSE", "0") => false': function() {
            expect(flag("FALSE", 0)).to.equal(false);
          }
        },

        '(<falsy>, "0")': {
          '(undefined, "0") => false': function() {
            expect(flag(undefined, "0")).to.equal(false);
          },

          '(null, "0") => false': function() {
            expect(flag(null, "0")).to.equal(false);
          },

          '(0, "0") => false': function() {
            expect(flag(0, "0")).to.equal(false);
          },

          '("0", "0") => false': function() {
            expect(flag("0", "0")).to.equal(false);
          },

          '(false, "0") => false': function() {
            expect(flag(false, "0")).to.equal(false);
          },

          '("false", "0") => false': function() {
            expect(flag("false", "0")).to.equal(false);
          },

          '("FALSE", "0") => false': function() {
            expect(flag("FALSE", "0")).to.equal(false);
          }
        },

        '(<falsy>, false)': {
          '(undefined, false) => false': function() {
            expect(flag(undefined, false)).to.equal(false);
          },

          '(null, false) => false': function() {
            expect(flag(null, false)).to.equal(false);
          },

          '(0, false) => false': function() {
            expect(flag(0, false)).to.equal(false);
          },

          '("0", false) => false': function() {
            expect(flag("0", false)).to.equal(false);
          },

          '(false, false) => false': function() {
            expect(flag(false, false)).to.equal(false);
          },

          '("false", false) => false': function() {
            expect(flag("false", false)).to.equal(false);
          },

          '("FALSE", false) => false': function() {
            expect(flag("FALSE", false)).to.equal(false);
          }
        },

        '(<falsy>, "false")': {
          '(undefined, "false") => false': function() {
            expect(flag(undefined, "false")).to.equal(false);
          },

          '(null, "false") => false': function() {
            expect(flag(null, "false")).to.equal(false);
          },

          '(0, "false") => false': function() {
            expect(flag(0, "false")).to.equal(false);
          },

          '("0", "false") => false': function() {
            expect(flag("0", "false")).to.equal(false);
          },

          '(false, "false") => false': function() {
            expect(flag(false, "false")).to.equal(false);
          },

          '("false", "false") => false': function() {
            expect(flag("false", "false")).to.equal(false);
          },

          '("FALSE", "false") => false': function() {
            expect(flag("FALSE", "false")).to.equal(false);
          }
        },

        '(<falsy>, "FALSE")': {
          '(undefined, "FALSE") => false': function() {
            expect(flag(undefined, "FALSE")).to.equal(false);
          },

          '(null, "FALSE") => false': function() {
            expect(flag(null, "FALSE")).to.equal(false);
          },

          '(0, "FALSE") => false': function() {
            expect(flag(0, "FALSE")).to.equal(false);
          },

          '("0", "FALSE") => false': function() {
            expect(flag("0", "FALSE")).to.equal(false);
          },

          '(false, "FALSE") => false': function() {
            expect(flag(false, "FALSE")).to.equal(false);
          },

          '("false", "FALSE") => false': function() {
            expect(flag("false", "FALSE")).to.equal(false);
          },

          '("FALSE", "FALSE") => false': function() {
            expect(flag("FALSE", "FALSE")).to.equal(false);
          }
        }
      },

      '(<falsy>, <truthy>)': {
        '(<falsy>, 1)': {
          '(undefined, 1) => true': function() {
            expect(flag(undefined, 1)).to.equal(true);
          },

          '(null, 1) => true': function() {
            expect(flag(null, 1)).to.equal(true);
          },

          '(0, 1) => false': function() {
            expect(flag(0, 1)).to.equal(false);
          },

          '("0", 1) => false': function() {
            expect(flag("0", 1)).to.equal(false);
          },

          '(false, 1) => false': function() {
            expect(flag(false, 1)).to.equal(false);
          },

          '("false", 1) => false': function() {
            expect(flag("false", 1)).to.equal(false);
          },

          '("FALSE", "1") => false': function() {
            expect(flag("FALSE", 1)).to.equal(false);
          }
        },

        '(<falsy>, "1")': {
          '(undefined, "1") => true': function() {
            expect(flag(undefined, "1")).to.equal(true);
          },

          '(null, "1") => true': function() {
            expect(flag(null, "1")).to.equal(true);
          },

          '(0, "1") => false': function() {
            expect(flag(0, "1")).to.equal(false);
          },

          '("0", "1") => false': function() {
            expect(flag("0", "1")).to.equal(false);
          },

          '(false, "1") => false': function() {
            expect(flag(false, "1")).to.equal(false);
          },

          '("false", "1") => false': function() {
            expect(flag("false", "1")).to.equal(false);
          },

          '("FALSE", "1") => false': function() {
            expect(flag("FALSE", "1")).to.equal(false);
          }
        },

        '(<falsy>, true)': {
          '(undefined, true) => true': function() {
            expect(flag(undefined, true)).to.equal(true);
          },

          '(null, true) => true': function() {
            expect(flag(null, true)).to.equal(true);
          },

          '(0, true) => false': function() {
            expect(flag(0, true)).to.equal(false);
          },

          '("0", true) => false': function() {
            expect(flag("0", true)).to.equal(false);
          },

          '(false, true) => false': function() {
            expect(flag(false, true)).to.equal(false);
          },

          '("false", true) => false': function() {
            expect(flag("false", true)).to.equal(false);
          },

          '("FALSE", true) => false': function() {
            expect(flag("FALSE", true)).to.equal(false);
          }
        },

        '(<falsy>, "true")': {
          '(undefined, "true") => true': function() {
            expect(flag(undefined, "true")).to.equal(true);
          },

          '(null, "true") => true': function() {
            expect(flag(null, "true")).to.equal(true);
          },

          '(0, "true") => false': function() {
            expect(flag(0, "true")).to.equal(false);
          },

          '("0", "true") => false': function() {
            expect(flag("0", "true")).to.equal(false);
          },

          '(false, "true") => false': function() {
            expect(flag(false, "true")).to.equal(false);
          },

          '("false", "true") => false': function() {
            expect(flag("false", "true")).to.equal(false);
          },

          '("FALSE", "true") => false': function() {
            expect(flag("FALSE", "true")).to.equal(false);
          }
        },

        '(<falsy>, "TRUE")': {
          '(undefined, "TRUE") => true': function() {
            expect(flag(undefined, "TRUE")).to.equal(true);
          },

          '(null, "TRUE") => true': function() {
            expect(flag(null, "TRUE")).to.equal(true);
          },

          '(0, "TRUE") => false': function() {
            expect(flag(0, "TRUE")).to.equal(false);
          },

          '("0", "TRUE") => false': function() {
            expect(flag("0", "TRUE")).to.equal(false);
          },

          '(false, "TRUE") => false': function() {
            expect(flag(false, "TRUE")).to.equal(false);
          },

          '("false", "TRUE") => false': function() {
            expect(flag("false", "TRUE")).to.equal(false);
          },

          '("FALSE", "TRUE") => false': function() {
            expect(flag("FALSE", "TRUE")).to.equal(false);
          }
        }
      }
    }
  }

};
