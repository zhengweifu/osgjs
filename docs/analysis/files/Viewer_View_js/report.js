__report = {
  "info": {
    "file": "js/osgViewer/View.js",
    "fileShort": "Viewer/View.js",
    "fileSafe": "Viewer_View_js",
    "link": "files/Viewer_View_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 2,
      "complexity": {
        "sloc": {
          "physical": 88,
          "logical": 77
        },
        "cyclomatic": 8,
        "halstead": {
          "operators": {
            "distinct": 19,
            "total": 238,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 91,
            "total": 298,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 536,
          "vocabulary": 110,
          "difficulty": 31.10989010989011,
          "volume": 3634.8088064492176,
          "effort": 113078.50253909599,
          "bugs": 1.2116029354830726,
          "time": 6282.139029949777
        }
      }
    },
    "functions": [
      {
        "name": "osgViewer.View",
        "line": 2,
        "complexity": {
          "sloc": {
            "physical": 16,
            "logical": 12
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 53,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 24,
              "total": 54,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 107,
            "vocabulary": 28,
            "difficulty": 4.5,
            "volume": 514.3869766601636,
            "effort": 2314.741394970736,
            "bugs": 0.17146232555338786,
            "time": 128.5967441650409
          }
        }
      },
      {
        "name": "setGraphicContext",
        "line": 26,
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
        "name": "getGraphicContext",
        "line": 27,
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
        "name": "setUpView",
        "line": 28,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 6
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 36,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 22,
              "total": 55,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 91,
            "vocabulary": 32,
            "difficulty": 12.5,
            "volume": 455,
            "effort": 5687.5,
            "bugs": 0.15166666666666667,
            "time": 315.97222222222223
          }
        }
      },
      {
        "name": "computeIntersections",
        "line": 36,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 8
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 18,
              "total": 33,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 55,
            "vocabulary": 28,
            "difficulty": 9.166666666666666,
            "volume": 264.4045207131682,
            "effort": 2423.708106537375,
            "bugs": 0.08813484023772274,
            "time": 134.6504503631875
          }
        }
      },
      {
        "name": "setFrameStamp",
        "line": 49,
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
        "name": "getFrameStamp",
        "line": 50,
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
        "name": "setCamera",
        "line": 51,
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
        "name": "getCamera",
        "line": 52,
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
        "name": "setSceneData",
        "line": 54,
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
              "distinct": 6,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 19,
            "vocabulary": 9,
            "difficulty": 2.75,
            "volume": 60.22857502740394,
            "effort": 165.62858132536084,
            "bugs": 0.020076191675801314,
            "time": 9.201587851408936
          }
        }
      },
      {
        "name": "getSceneData",
        "line": 59,
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
        "name": "getScene",
        "line": 60,
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
        "name": "getManipulator",
        "line": 62,
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
        "name": "setManipulator",
        "line": 63,
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
        "name": "getLight",
        "line": 65,
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
        "name": "setLight",
        "line": 66,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 16,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 30,
            "vocabulary": 16,
            "difficulty": 3.6363636363636367,
            "volume": 120,
            "effort": 436.3636363636364,
            "bugs": 0.04,
            "time": 24.242424242424242
          }
        }
      },
      {
        "name": "getLightingMode",
        "line": 72,
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
        "name": "setLightingMode",
        "line": 73,
        "complexity": {
          "sloc": {
            "physical": 15,
            "logical": 10
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 33,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 46,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 79,
            "vocabulary": 28,
            "difficulty": 10.894736842105264,
            "volume": 379.7810388425507,
            "effort": 4137.614475810947,
            "bugs": 0.12659367961418355,
            "time": 229.86747087838592
          }
        }
      }
    ],
    "maintainability": 76.05693241453389,
    "module": "Viewer/View.js"
  },
  "jshint": {
    "messages": []
  }
}