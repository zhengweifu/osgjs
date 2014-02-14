__report = {
  "info": {
    "file": "js/osg/ShaderGenerator.js",
    "fileShort": "/ShaderGenerator.js",
    "fileSafe": "_ShaderGenerator_js",
    "link": "files/_ShaderGenerator_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 1,
      "complexity": {
        "sloc": {
          "physical": 323,
          "logical": 206
        },
        "cyclomatic": 38,
        "halstead": {
          "operators": {
            "distinct": 24,
            "total": 589,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 134,
            "total": 718,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 1307,
          "vocabulary": 158,
          "difficulty": 64.29850746268657,
          "volume": 9546.041437867474,
          "effort": 613796.2166318371,
          "bugs": 3.1820138126224915,
          "time": 34099.78981287984
        }
      }
    },
    "functions": [
      {
        "name": "osg.ShaderGenerator",
        "line": 1,
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
        "name": "getActiveTypeMember",
        "line": 6,
        "complexity": {
          "sloc": {
            "physical": 32,
            "logical": 26
          },
          "cyclomatic": 9,
          "halstead": {
            "operators": {
              "distinct": 16,
              "total": 85,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 25,
              "total": 87,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 172,
            "vocabulary": 41,
            "difficulty": 27.84,
            "volume": 921.4989447943104,
            "effort": 25654.530623073602,
            "bugs": 0.3071663149314368,
            "time": 1425.2517012818669
          }
        }
      },
      {
        "name": "getActiveAttributeMapKeys",
        "line": 39,
        "complexity": {
          "sloc": {
            "physical": 14,
            "logical": 11
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 17,
              "total": 41,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 81,
            "vocabulary": 32,
            "difficulty": 18.088235294117645,
            "volume": 405,
            "effort": 7325.735294117646,
            "bugs": 0.135,
            "time": 406.985294117647
          }
        }
      },
      {
        "name": "getActiveTextureAttributeMapKeys",
        "line": 54,
        "complexity": {
          "sloc": {
            "physical": 21,
            "logical": 18
          },
          "cyclomatic": 6,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 52,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 19,
              "total": 53,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 105,
            "vocabulary": 33,
            "difficulty": 19.52631578947368,
            "volume": 529.6613825326376,
            "effort": 10342.335416821501,
            "bugs": 0.17655379417754588,
            "time": 574.5741898234168
          }
        }
      },
      {
        "name": "getActiveUniforms",
        "line": 79,
        "complexity": {
          "sloc": {
            "physical": 47,
            "logical": 40
          },
          "cyclomatic": 9,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 110,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 36,
              "total": 116,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 226,
            "vocabulary": 50,
            "difficulty": 22.555555555555557,
            "volume": 1275.5114988890878,
            "effort": 28769.87047494276,
            "bugs": 0.42517049962969594,
            "time": 1598.32613749682
          }
        }
      },
      {
        "name": "getOrCreateProgram",
        "line": 127,
        "complexity": {
          "sloc": {
            "physical": 34,
            "logical": 20
          },
          "cyclomatic": 3,
          "halstead": {
            "operators": {
              "distinct": 11,
              "total": 72,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 36,
              "total": 92,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 164,
            "vocabulary": 47,
            "difficulty": 14.055555555555554,
            "volume": 910.9525716751326,
            "effort": 12803.94447965603,
            "bugs": 0.3036508572250442,
            "time": 711.3302488697794
          }
        }
      },
      {
        "name": "compareAttributeMap",
        "line": 162,
        "complexity": {
          "sloc": {
            "physical": 13,
            "logical": 10
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 12,
              "total": 23,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 9,
              "total": 25,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 48,
            "vocabulary": 21,
            "difficulty": 16.666666666666664,
            "volume": 210.83123629338053,
            "effort": 3513.8539382230083,
            "bugs": 0.07027707876446018,
            "time": 195.214107679056
          }
        }
      },
      {
        "name": "fillTextureShader",
        "line": 176,
        "complexity": {
          "sloc": {
            "physical": 27,
            "logical": 20
          },
          "cyclomatic": 6,
          "halstead": {
            "operators": {
              "distinct": 15,
              "total": 52,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 22,
              "total": 60,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 112,
            "vocabulary": 37,
            "difficulty": 20.454545454545453,
            "volume": 583.4587769504424,
            "effort": 11934.38407398632,
            "bugs": 0.1944862589834808,
            "time": 663.0213374436845
          }
        }
      },
      {
        "name": "fillShader",
        "line": 204,
        "complexity": {
          "sloc": {
            "physical": 19,
            "logical": 14
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 40,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 20,
              "total": 45,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 85,
            "vocabulary": 34,
            "difficulty": 15.75,
            "volume": 432.4343415062789,
            "effort": 6810.840878723892,
            "bugs": 0.14414478050209295,
            "time": 378.380048817994
          }
        }
      },
      {
        "name": "getOrCreateVertexShader",
        "line": 224,
        "complexity": {
          "sloc": {
            "physical": 54,
            "logical": 16
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 38,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 40,
              "total": 80,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 118,
            "vocabulary": 47,
            "difficulty": 7,
            "volume": 655.4414844979613,
            "effort": 4588.090391485729,
            "bugs": 0.21848049483265375,
            "time": 254.89391063809606
          }
        }
      },
      {
        "name": "_writeShaderFromMode",
        "line": 279,
        "complexity": {
          "sloc": {
            "physical": 6,
            "logical": 4
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 11,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 11,
              "total": 21,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 32,
            "vocabulary": 17,
            "difficulty": 5.7272727272727275,
            "volume": 130.79881092001088,
            "effort": 749.1204625418806,
            "bugs": 0.04359960364000363,
            "time": 41.61780347454892
          }
        }
      },
      {
        "name": "getOrCreateFragmentShader",
        "line": 286,
        "complexity": {
          "sloc": {
            "physical": 37,
            "logical": 13
          },
          "cyclomatic": 1,
          "halstead": {
            "operators": {
              "distinct": 7,
              "total": 34,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 28,
              "total": 66,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 100,
            "vocabulary": 35,
            "difficulty": 8.25,
            "volume": 512.9283016944967,
            "effort": 4231.658488979598,
            "bugs": 0.17097610056483223,
            "time": 235.0921382766443
          }
        }
      }
    ],
    "maintainability": 55.129195508184736,
    "module": "/ShaderGenerator.js"
  },
  "jshint": {
    "messages": []
  }
}