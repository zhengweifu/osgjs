__report = {
  "info": {
    "file": "js/osg/BoundingSphere.js",
    "fileShort": "/BoundingSphere.js",
    "fileSafe": "_BoundingSphere_js",
    "link": "files/_BoundingSphere_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 170,
          "logical": 108
        },
        "cyclomatic": 13,
        "halstead": {
          "operators": {
            "distinct": 27,
            "total": 445,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 51,
            "total": 472,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 917,
          "vocabulary": 78,
          "difficulty": 124.94117647058825,
          "volume": 5763.713834696682,
          "effort": 720125.1873468091,
          "bugs": 1.921237944898894,
          "time": 40006.9548526005
        }
      }
    },
    "functions": [
      {
        "name": "osg.BoundingSphere",
        "line": 1,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 15,
            "vocabulary": 10,
            "difficulty": 3,
            "volume": 49.82892142331044,
            "effort": 149.4867642699313,
            "bugs": 0.016609640474436815,
            "time": 8.304820237218406
          }
        }
      },
      {
        "name": "init",
        "line": 6,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 6,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 15,
            "vocabulary": 10,
            "difficulty": 3,
            "volume": 49.82892142331044,
            "effort": 149.4867642699313,
            "bugs": 0.016609640474436815,
            "time": 8.304820237218406
          }
        }
      },
      {
        "name": "valid",
        "line": 10,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 3,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 6,
            "vocabulary": 6,
            "difficulty": 1.5,
            "volume": 15.509775004326936,
            "effort": 23.264662506490403,
            "bugs": 0.005169925001442312,
            "time": 1.292481250360578
          }
        }
      },
      {
        "name": "set",
        "line": 13,
        "complexity": {
          "sloc": {
            "physical": 5,
            "logical": 2
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
              "distinct": 5,
              "total": 8,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 12,
            "vocabulary": 7,
            "difficulty": 1.6,
            "volume": 33.68825906469125,
            "effort": 53.901214503506004,
            "bugs": 0.011229419688230418,
            "time": 2.9945119168614447
          }
        }
      },
      {
        "name": "center",
        "line": 18,
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
        "name": "radius",
        "line": 19,
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
        "name": "radius2",
        "line": 20,
        "complexity": {
          "sloc": {
            "physical": 1,
            "logical": 1
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
              "distinct": 2,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 8,
            "vocabulary": 5,
            "difficulty": 3,
            "volume": 18.575424759098897,
            "effort": 55.726274277296696,
            "bugs": 0.006191808253032966,
            "time": 3.095904126516483
          }
        }
      },
      {
        "name": "expandByBox",
        "line": 22,
        "complexity": {
          "sloc": {
            "physical": 42,
            "logical": 32
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 123,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 26,
              "total": 139,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 262,
            "vocabulary": 40,
            "difficulty": 37.42307692307692,
            "volume": 1394.345160860489,
            "effort": 52180.68621220214,
            "bugs": 0.4647817202868296,
            "time": 2898.927011789008
          }
        }
      },
      {
        "name": "expandByVec3",
        "line": 65,
        "complexity": {
          "sloc": {
            "physical": 21,
            "logical": 14
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 59,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 66,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 125,
            "vocabulary": 31,
            "difficulty": 20.842105263157897,
            "volume": 619.2745387983595,
            "effort": 12906.985124428968,
            "bugs": 0.20642484626611982,
            "time": 717.0547291349426
          }
        }
      },
      {
        "name": "expandRadiusBySphere",
        "line": 87,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 10
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 39,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 12,
              "total": 41,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 80,
            "vocabulary": 21,
            "difficulty": 15.375,
            "volume": 351.38539382230084,
            "effort": 5402.550430017875,
            "bugs": 0.11712846460743362,
            "time": 300.1416905565486
          }
        }
      },
      {
        "name": "expandBy",
        "line": 106,
        "complexity": {
          "sloc": {
            "physical": 53,
            "logical": 24
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 119,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 118,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 237,
            "vocabulary": 34,
            "difficulty": 41.300000000000004,
            "volume": 1205.7286933763305,
            "effort": 49796.59503644246,
            "bugs": 0.40190956445877685,
            "time": 2766.477502024581
          }
        }
      },
      {
        "name": "contains",
        "line": 159,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 8,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 31,
            "vocabulary": 19,
            "difficulty": 5.454545454545454,
            "volume": 131.68575291675114,
            "effort": 718.2859250004607,
            "bugs": 0.04389525097225038,
            "time": 39.904773611136704
          }
        }
      },
      {
        "name": "intersects",
        "line": 163,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 31,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 56,
            "vocabulary": 21,
            "difficulty": 11.363636363636365,
            "volume": 245.9697756756106,
            "effort": 2795.1110872228483,
            "bugs": 0.08198992522520354,
            "time": 155.28394929015823
          }
        }
      }
    ],
    "maintainability": 62.8396529048965,
    "module": "/BoundingSphere.js"
  },
  "jshint": {
    "messages": []
  }
}