__report = {
  "info": {
    "file": "js/osg/BoundingBox.js",
    "fileShort": "/BoundingBox.js",
    "fileSafe": "_BoundingBox_js",
    "link": "files/_BoundingBox_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 83,
          "logical": 58
        },
        "cyclomatic": 5,
        "halstead": {
          "operators": {
            "distinct": 19,
            "total": 261,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 37,
            "total": 303,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 564,
          "vocabulary": 56,
          "difficulty": 77.7972972972973,
          "volume": 3275.348176040489,
          "effort": 254813.23580358239,
          "bugs": 1.0917827253468295,
          "time": 14156.290877976799
        }
      }
    },
    "functions": [
      {
        "name": "osg.BoundingBox",
        "line": 1,
        "complexity": {
          "sloc": {
            "physical": 3,
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
        "name": "init",
        "line": 7,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 9,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 5,
              "total": 12,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 21,
            "vocabulary": 9,
            "difficulty": 4.8,
            "volume": 66.56842503028857,
            "effort": 319.5284401453851,
            "bugs": 0.022189475010096188,
            "time": 17.75158000807695
          }
        }
      },
      {
        "name": "valid",
        "line": 12,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 6,
              "total": 18,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 36,
            "vocabulary": 10,
            "difficulty": 6,
            "volume": 119.58941141594505,
            "effort": 717.5364684956703,
            "bugs": 0.03986313713864835,
            "time": 39.86313713864835
          }
        }
      },
      {
        "name": "expandBySphere",
        "line": 16,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 10
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 65,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 75,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 140,
            "vocabulary": 22,
            "difficulty": 25.96153846153846,
            "volume": 624.3204266092216,
            "effort": 16208.318767739407,
            "bugs": 0.20810680886974053,
            "time": 900.4621537633004
          }
        }
      },
      {
        "name": "expandByVec3",
        "line": 31,
        "complexity": {
          "sloc": {
            "physical": 11,
            "logical": 8
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 4,
              "total": 42,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 55,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 97,
            "vocabulary": 14,
            "difficulty": 11,
            "volume": 369.31342743958754,
            "effort": 4062.447701835463,
            "bugs": 0.12310447581319585,
            "time": 225.69153899085904
          }
        }
      },
      {
        "name": "center",
        "line": 43,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 3
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 20,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 22,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 42,
            "vocabulary": 17,
            "difficulty": 7.700000000000001,
            "volume": 171.67343933251428,
            "effort": 1321.88548286036,
            "bugs": 0.05722447977750476,
            "time": 73.43808238113111
          }
        }
      },
      {
        "name": "radius",
        "line": 51,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 4,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 9,
            "vocabulary": 7,
            "difficulty": 1.5,
            "volume": 25.26619429851844,
            "effort": 37.89929144777766,
            "bugs": 0.008422064766172813,
            "time": 2.1055161915432032
          }
        }
      },
      {
        "name": "radius2",
        "line": 55,
        "complexity": {
          "sloc": {
            "physical": 9,
            "logical": 7
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 37,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 77,
            "vocabulary": 18,
            "difficulty": 12.727272727272727,
            "volume": 321.08422511105806,
            "effort": 4086.526501413466,
            "bugs": 0.10702807503701936,
            "time": 227.0292500785259
          }
        }
      },
      {
        "name": "corner",
        "line": 64,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 14
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 36,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 10,
              "total": 43,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 79,
            "vocabulary": 17,
            "difficulty": 15.049999999999999,
            "volume": 322.90956445877686,
            "effort": 4859.788945104591,
            "bugs": 0.10763652148625895,
            "time": 269.9882747280328
          }
        }
      }
    ],
    "maintainability": 67.96250594572825,
    "module": "/BoundingBox.js"
  },
  "jshint": {
    "messages": []
  }
}