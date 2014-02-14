__report = {
  "info": {
    "file": "js/osgAnimation/StackedTransformElement.js",
    "fileShort": "Animation/StackedTransformElement.js",
    "fileSafe": "Animation_StackedTransformElement_js",
    "link": "files/Animation_StackedTransformElement_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 26,
      "complexity": {
        "sloc": {
          "physical": 126,
          "logical": 87
        },
        "cyclomatic": 11,
        "halstead": {
          "operators": {
            "distinct": 13,
            "total": 256,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 55,
            "total": 326,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 582,
          "vocabulary": 68,
          "difficulty": 38.52727272727273,
          "volume": 3542.903373607698,
          "effort": 136498.4045213584,
          "bugs": 1.180967791202566,
          "time": 7583.244695631022
        }
      }
    },
    "functions": [
      {
        "name": "osgAnimation.StackedTranslate",
        "line": 26,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 6
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 34,
            "vocabulary": 18,
            "difficulty": 5.25,
            "volume": 141.7774500490386,
            "effort": 744.3316127574527,
            "bugs": 0.0472591500163462,
            "time": 41.35175626430293
          }
        }
      },
      {
        "name": "setTranslate",
        "line": 38,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 8,
            "difficulty": 1.1666666666666667,
            "volume": 33,
            "effort": 38.5,
            "bugs": 0.011,
            "time": 2.138888888888889
          }
        }
      },
      {
        "name": "setTarget",
        "line": 39,
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
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "getTarget",
        "line": 40,
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
        "name": "update",
        "line": 41,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 21,
            "vocabulary": 12,
            "difficulty": 2.75,
            "volume": 75.28421251514429,
            "effort": 207.0315844166468,
            "bugs": 0.025094737505048096,
            "time": 11.501754689813712
          }
        }
      },
      {
        "name": "getOrCreateTarget",
        "line": 46,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 11,
            "difficulty": 6,
            "volume": 69.18863237274596,
            "effort": 415.13179423647574,
            "bugs": 0.023062877457581985,
            "time": 23.062877457581987
          }
        }
      },
      {
        "name": "applyToMatrix",
        "line": 52,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 8,
            "difficulty": 1.1666666666666667,
            "volume": 33,
            "effort": 38.5,
            "bugs": 0.011,
            "time": 2.138888888888889
          }
        }
      },
      {
        "name": "osgAnimation.StackedRotateAxis",
        "line": 62,
        "complexity": {
          "sloc": {
            "physical": 18,
            "logical": 13
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 44,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 76,
            "vocabulary": 26,
            "difficulty": 6.6000000000000005,
            "volume": 357.23341857872305,
            "effort": 2357.7405626195723,
            "bugs": 0.11907780619290768,
            "time": 130.98558681219845
          }
        }
      },
      {
        "name": "setAxis",
        "line": 83,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 8,
            "difficulty": 1.1666666666666667,
            "volume": 33,
            "effort": 38.5,
            "bugs": 0.011,
            "time": 2.138888888888889
          }
        }
      },
      {
        "name": "setAngle",
        "line": 84,
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
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "setTarget",
        "line": 85,
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
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "getTarget",
        "line": 86,
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
        "name": "update",
        "line": 87,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 16,
            "vocabulary": 10,
            "difficulty": 4,
            "volume": 53.1508495181978,
            "effort": 212.6033980727912,
            "bugs": 0.017716949839399268,
            "time": 11.811299892932844
          }
        }
      },
      {
        "name": "getOrCreateTarget",
        "line": 92,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 11,
            "difficulty": 6,
            "volume": 69.18863237274596,
            "effort": 415.13179423647574,
            "bugs": 0.023062877457581985,
            "time": 23.062877457581987
          }
        }
      },
      {
        "name": "applyToMatrix",
        "line": 98,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 6
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 32,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 54,
            "vocabulary": 22,
            "difficulty": 3.5555555555555554,
            "volume": 240.80930740641406,
            "effort": 856.210870778361,
            "bugs": 0.08026976913547136,
            "time": 47.56727059879783
          }
        }
      },
      {
        "name": "osgAnimation.StackedQuaternion",
        "line": 118,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 8
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 16,
              "total": 30,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 50,
            "vocabulary": 22,
            "difficulty": 5.625,
            "volume": 222.97158093186488,
            "effort": 1254.21514274174,
            "bugs": 0.07432386031062163,
            "time": 69.67861904120778
          }
        }
      },
      {
        "name": "setQuaternion",
        "line": 132,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 7,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 11,
            "vocabulary": 8,
            "difficulty": 1.1666666666666667,
            "volume": 33,
            "effort": 38.5,
            "bugs": 0.011,
            "time": 2.138888888888889
          }
        }
      },
      {
        "name": "setTarget",
        "line": 133,
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
              "distinct": 3,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 5,
            "difficulty": 1.3333333333333333,
            "volume": 13.931568569324174,
            "effort": 18.575424759098897,
            "bugs": 0.004643856189774725,
            "time": 1.0319680421721609
          }
        }
      },
      {
        "name": "getTarget",
        "line": 134,
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
        "name": "update",
        "line": 135,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 2
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 21,
            "vocabulary": 12,
            "difficulty": 2.75,
            "volume": 75.28421251514429,
            "effort": 207.0315844166468,
            "bugs": 0.025094737505048096,
            "time": 11.501754689813712
          }
        }
      },
      {
        "name": "getOrCreateTarget",
        "line": 140,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 20,
            "vocabulary": 11,
            "difficulty": 6,
            "volume": 69.18863237274596,
            "effort": 415.13179423647574,
            "bugs": 0.023062877457581985,
            "time": 23.062877457581987
          }
        }
      },
      {
        "name": "applyToMatrix",
        "line": 146,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 10,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 25,
            "vocabulary": 13,
            "difficulty": 3.3333333333333335,
            "volume": 92.5109929535273,
            "effort": 308.3699765117577,
            "bugs": 0.030836997651175767,
            "time": 17.13166536176432
          }
        }
      }
    ],
    "maintainability": 78.43240488787004,
    "module": "Animation/StackedTransformElement.js"
  },
  "jshint": {
    "messages": []
  }
}