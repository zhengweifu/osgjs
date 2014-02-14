__report = {
  "info": {
    "file": "js/osg/CullStack.js",
    "fileShort": "/CullStack.js",
    "fileSafe": "_CullStack_js",
    "link": "files/_CullStack_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 58,
          "logical": 40
        },
        "cyclomatic": 9,
        "halstead": {
          "operators": {
            "distinct": 20,
            "total": 148,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 35,
            "total": 163,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 311,
          "vocabulary": 55,
          "difficulty": 46.57142857142858,
          "volume": 1798.0028709061692,
          "effort": 83735.56227363017,
          "bugs": 0.5993342903020564,
          "time": 4651.975681868343
        }
      }
    },
    "functions": [
      {
        "name": "osg.CullStack",
        "line": 1,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 5
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 13,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 8,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 28,
            "vocabulary": 11,
            "difficulty": 2.8125,
            "volume": 96.86408532184434,
            "effort": 272.4302399676872,
            "bugs": 0.032288028440614784,
            "time": 15.135013331538179
          }
        }
      },
      {
        "name": "getCurrentProjectionMatrix",
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
              "total": 6,
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
            "length": 12,
            "vocabulary": 7,
            "difficulty": 2.25,
            "volume": 33.68825906469125,
            "effort": 75.79858289555531,
            "bugs": 0.011229419688230418,
            "time": 4.2110323830864065
          }
        }
      },
      {
        "name": "getCurrentModelviewMatrix",
        "line": 13,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 3,
              "total": 6,
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
            "length": 12,
            "vocabulary": 7,
            "difficulty": 2.25,
            "volume": 33.68825906469125,
            "effort": 75.79858289555531,
            "bugs": 0.011229419688230418,
            "time": 4.2110323830864065
          }
        }
      },
      {
        "name": "getViewport",
        "line": 16,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 3
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 5,
              "total": 11,
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
            "length": 22,
            "vocabulary": 11,
            "difficulty": 4.583333333333333,
            "volume": 76.10749561002055,
            "effort": 348.8260215459275,
            "bugs": 0.025369165203340184,
            "time": 19.379223419218196
          }
        }
      },
      {
        "name": "getLookVectorLocal",
        "line": 22,
        "complexity": {
          "sloc": {
            "physical": 4,
            "logical": 2
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 15,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 14,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 29,
            "vocabulary": 16,
            "difficulty": 5.444444444444445,
            "volume": 116,
            "effort": 631.5555555555555,
            "bugs": 0.03866666666666667,
            "time": 35.08641975308642
          }
        }
      },
      {
        "name": "pushViewport",
        "line": 26,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 8,
            "vocabulary": 6,
            "difficulty": 1.25,
            "volume": 20.67970000576925,
            "effort": 25.84962500721156,
            "bugs": 0.006893233335256416,
            "time": 1.43609027817842
          }
        }
      },
      {
        "name": "popViewport",
        "line": 29,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
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
            "vocabulary": 5,
            "difficulty": 1,
            "volume": 13.931568569324174,
            "effort": 13.931568569324174,
            "bugs": 0.004643856189774725,
            "time": 0.7739760316291208
          }
        }
      },
      {
        "name": "pushModelviewMatrix",
        "line": 32,
        "complexity": {
          "sloc": {
            "physical": 7,
            "logical": 4
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 9,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 13,
              "total": 30,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 55,
            "vocabulary": 22,
            "difficulty": 10.384615384615383,
            "volume": 245.26873902505136,
            "effort": 2547.0215206447638,
            "bugs": 0.08175624634168378,
            "time": 141.50119559137576
          }
        }
      },
      {
        "name": "popModelviewMatrix",
        "line": 39,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 8
          },
          "cyclomatic": 5,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 33,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 14,
              "total": 38,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 71,
            "vocabulary": 28,
            "difficulty": 19,
            "volume": 341.32219946608984,
            "effort": 6485.121789855707,
            "bugs": 0.11377406648869662,
            "time": 360.2845438808726
          }
        }
      },
      {
        "name": "pushProjectionMatrix",
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
              "total": 3,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 4,
              "total": 5,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 8,
            "vocabulary": 6,
            "difficulty": 1.25,
            "volume": 20.67970000576925,
            "effort": 25.84962500721156,
            "bugs": 0.006893233335256416,
            "time": 1.43609027817842
          }
        }
      },
      {
        "name": "popProjectionMatrix",
        "line": 55,
        "complexity": {
          "sloc": {
            "physical": 3,
            "logical": 1
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 2,
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
            "vocabulary": 5,
            "difficulty": 1,
            "volume": 13.931568569324174,
            "effort": 13.931568569324174,
            "bugs": 0.004643856189774725,
            "time": 0.7739760316291208
          }
        }
      }
    ],
    "maintainability": 77.34959996687071,
    "module": "/CullStack.js"
  },
  "jshint": {
    "messages": []
  }
}