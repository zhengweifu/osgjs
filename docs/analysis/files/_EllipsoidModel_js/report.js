__report = {
  "info": {
    "file": "js/osg/EllipsoidModel.js",
    "fileShort": "/EllipsoidModel.js",
    "fileSafe": "_EllipsoidModel_js",
    "link": "files/_EllipsoidModel_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 115,
          "logical": 89
        },
        "cyclomatic": 4,
        "halstead": {
          "operators": {
            "distinct": 19,
            "total": 340,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 72,
            "total": 453,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 793,
          "vocabulary": 91,
          "difficulty": 59.770833333333336,
          "volume": 5160.681149677566,
          "effort": 308458.2128838529,
          "bugs": 1.720227049892522,
          "time": 17136.56738243627
        }
      }
    },
    "functions": [
      {
        "name": "osg.EllipsoidModel",
        "line": 4,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 7,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 18,
            "vocabulary": 10,
            "difficulty": 2.142857142857143,
            "volume": 59.794705707972525,
            "effort": 128.1315122313697,
            "bugs": 0.019931568569324175,
            "time": 7.118417346187205
          }
        }
      },
      {
        "name": "setRadiusEquator",
        "line": 10,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 8,
            "difficulty": 1.7999999999999998,
            "volume": 30,
            "effort": 53.99999999999999,
            "bugs": 0.01,
            "time": 2.9999999999999996
          }
        }
      },
      {
        "name": "getRadiusEquator",
        "line": 11,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "setRadiusPolar",
        "line": 12,
        "complexity": {
          "sloc": {
            "physical": 2,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 10,
            "vocabulary": 7,
            "difficulty": 2.25,
            "volume": 28.07354922057604,
            "effort": 63.16548574629609,
            "bugs": 0.009357849740192013,
            "time": 3.509193652572005
          }
        }
      },
      {
        "name": "getRadiusPolar",
        "line": 14,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 2,
              "total": 2,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 4,
            "vocabulary": 4,
            "difficulty": 1,
            "volume": 8,
            "effort": 8,
            "bugs": 0.0026666666666666666,
            "time": 0.4444444444444444
          }
        }
      },
      {
        "name": "convertLatLongHeightToXYZ",
        "line": 15,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 13
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 52,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 60,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 112,
            "vocabulary": 37,
            "difficulty": 14.399999999999999,
            "volume": 583.4587769504424,
            "effort": 8401.80638808637,
            "bugs": 0.1944862589834808,
            "time": 466.7670215603539
          }
        }
      },
      {
        "name": "convertXYZToLatLongHeight",
        "line": 31,
        "complexity": {
          "sloc": {
            "physical": 26,
            "logical": 17
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 88,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 32,
              "total": 101,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 189,
            "vocabulary": 44,
            "difficulty": 18.9375,
            "volume": 1031.8325759224492,
            "effort": 19540.329406531382,
            "bugs": 0.3439441919741497,
            "time": 1085.5738559184101
          }
        }
      },
      {
        "name": "computeLocalUpVector",
        "line": 57,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 8
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 16,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 65,
            "vocabulary": 23,
            "difficulty": 8.75,
            "volume": 294.03152714370583,
            "effort": 2572.775862507426,
            "bugs": 0.09801050904790194,
            "time": 142.93199236152367
          }
        }
      },
      {
        "name": "isWGS84",
        "line": 70,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 16,
            "vocabulary": 10,
            "difficulty": 2.6666666666666665,
            "volume": 53.1508495181978,
            "effort": 141.73559871519413,
            "bugs": 0.017716949839399268,
            "time": 7.874199928621896
          }
        }
      },
      {
        "name": "computeCoefficients",
        "line": 72,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 25,
            "vocabulary": 12,
            "difficulty": 6.5,
            "volume": 89.62406251802891,
            "effort": 582.556406367188,
            "bugs": 0.029874687506009637,
            "time": 32.36424479817711
          }
        }
      },
      {
        "name": "computeLocalToWorldTransformFromLatLongHeight",
        "line": 76,
        "complexity": {
          "sloc": {
            "physical": 10,
            "logical": 7
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 36,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 57,
            "vocabulary": 28,
            "difficulty": 7.2,
            "volume": 274.01923055728344,
            "effort": 1972.9384600124408,
            "bugs": 0.09133974351909448,
            "time": 109.60769222291339
          }
        }
      },
      {
        "name": "computeLocalToWorldTransformFromXYZ",
        "line": 86,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 24,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 38,
            "vocabulary": 18,
            "difficulty": 4.615384615384616,
            "volume": 158.45715005480787,
            "effort": 731.3406925606517,
            "bugs": 0.05281905001826929,
            "time": 40.63003847559176
          }
        }
      },
      {
        "name": "computeCoordinateFrame",
        "line": 92,
        "complexity": {
          "sloc": {
            "physical": 23,
            "logical": 12
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 65,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 108,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 173,
            "vocabulary": 25,
            "difficulty": 21,
            "volume": 803.3871208310273,
            "effort": 16871.129537451576,
            "bugs": 0.26779570694367577,
            "time": 937.2849743028653
          }
        }
      }
    ],
    "maintainability": 67.07289653081777,
    "module": "/EllipsoidModel.js"
  },
  "jshint": {
    "messages": []
  }
}