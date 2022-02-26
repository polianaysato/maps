

export const mapboxStyle: string = "mapbox://styles/engmapbox/ckr6976ld15mj17m51dau1sa3"

export const statesHeatmapFill: string[] = [
      "#fff",
      "#ffebee",
      "#ffcdd2",
      "#ff8a80",
      "#ef5350",
      "#e53935",
      "#d50000",
      "#b71c1c",
]

export const statesHeatmapSteps = [0, '< 100', '< 200', '< 300', '< 1000', '< 2000', '< 3000', '< 4000']

export const states6MilesRadius: string[] = [
    "#fff",
    "#ede7f6",
    "#d1c4e9",
    "#b39ddb",
    "#9575cd",
    "#7e57c2",
    "#673ab7",
]

export const states6MilesSteps: number[] = [0, 200, 500, 1000, 1500, 2500, 3000]

export const states12MilesRadius: string[] = [
    "#fff",
    "#e0f2f1",
    "#b2dfdb",
    "#80cbc4",
    "#4db6ac",
    "#26a69a",
    "#00897b",
]

export const states12MilesSteps: number[] = [0, 300, 1000, 2000, 3000, 4000, 4500]

export const states18MilesRadius: string[] = [
    "#fff",
    "#fff3e0",
    "#ffe0b2",
    "#ffcc80",
    "#ffb74d",
    "#ffa726",
    "#fb8c00",
  ]

  export const states18MilesSteps: number[] = [0, 500, 1500, 2500, 3500, 4500, 5000]

  export const statesMapFilter: any = [
                                            "interpolate",
                                            ["linear"],
                                            ["get", "views"],
                                            0,
                                            "#fff",
                                            100,
                                            statesHeatmapFill[0],
                                            200,
                                            statesHeatmapFill[1],
                                            300,
                                            statesHeatmapFill[2],
                                            1000,
                                            statesHeatmapFill[3],
                                            2000,
                                            statesHeatmapFill[4],
                                            3000,
                                            statesHeatmapFill[5],
                                            4000,
                                            statesHeatmapFill[6],
                                            5000,
                                            statesHeatmapFill[7],
                                        ]

export const statesCircleStroke18: any = [
    "case", // Begin case expression
    ["<", ["get", "eighteenMilesViews"], states18MilesSteps[0]],
    states18MilesRadius[0],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states18MilesSteps[0]],
      ["<", ["get", "eighteenMilesViews"], states18MilesSteps[1]],
    ],
    states18MilesRadius[1],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states18MilesSteps[1]],
      ["<", ["get", "eighteenMilesViews"], states18MilesSteps[2]],
    ],
    states18MilesRadius[2],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states18MilesSteps[2]],
      ["<", ["get", "eighteenMilesViews"], states18MilesSteps[3]],
    ],
    states18MilesRadius[3],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states18MilesSteps[3]],
      ["<", ["get", "eighteenMilesViews"], states18MilesSteps[4]],
    ],
    states18MilesRadius[4],
    [">=", ["get", "eighteenMilesViews"], states18MilesSteps[4]],
    states18MilesRadius[5],
    "#00ab8e",
  ]


  export const statesCircleStroke6: any = [
    "case", // Begin case expression
    ["<", ["get", "eighteenMilesViews"], states6MilesSteps[0]],
    states6MilesRadius[0],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states6MilesSteps[0]],
      ["<", ["get", "eighteenMilesViews"], states6MilesSteps[1]],
    ],
    states6MilesRadius[1],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states6MilesSteps[1]],
      ["<", ["get", "eighteenMilesViews"], states6MilesSteps[2]],
    ],
    states6MilesRadius[2],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states6MilesSteps[2]],
      ["<", ["get", "eighteenMilesViews"], states6MilesSteps[3]],
    ],
    states6MilesRadius[3],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states6MilesSteps[3]],
      ["<", ["get", "eighteenMilesViews"], states6MilesSteps[4]],
    ],
    states6MilesRadius[4],
    [">=", ["get", "eighteenMilesViews"], states6MilesSteps[4]],
    states6MilesRadius[5],
    "#00ab8e",
  ]


  export const statesCircleStroke12: any = [
    "case", // Begin case expression
    ["<", ["get", "eighteenMilesViews"], states12MilesSteps[0]],
    states12MilesRadius[0],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states12MilesSteps[0]],
      ["<", ["get", "eighteenMilesViews"], states12MilesSteps[1]],
    ],
    states12MilesRadius[1],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states12MilesSteps[1]],
      ["<", ["get", "eighteenMilesViews"], states12MilesSteps[2]],
    ],
    states12MilesRadius[2],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states12MilesSteps[2]],
      ["<", ["get", "eighteenMilesViews"], states12MilesSteps[3]],
    ],
    states12MilesRadius[3],
    [
      "all",
      [">=", ["get", "eighteenMilesViews"], states12MilesSteps[3]],
      ["<", ["get", "eighteenMilesViews"], states12MilesSteps[4]],
    ],
    states12MilesRadius[4],
    [">=", ["get", "eighteenMilesViews"], states12MilesSteps[4]],
    states12MilesRadius[5],
    "#00ab8e",
  ]

export const miles6: { miles: string, criteria: string, value: string, color: string }[] = [
                                                                {miles: "6miles", criteria: "views", value: "sixMilesViews", color: states6MilesRadius[5]}, 
                                                                {miles: "6miles", criteria: "conversions", value: "sixMilesConversions", color: states6MilesRadius[3]},
                                                                {miles: "6miles", criteria: "clicks", value: "sixMilesClicks", color: states6MilesRadius[1]},
                                                             ]
export const miles12: { miles: string, criteria: string, value: string, color: string }[] = [
                                                                {miles: "12miles", criteria: "views", value: "twelveMilesViews", color: states12MilesRadius[6]}, 
                                                                {miles: "12miles", criteria: "conversions", value: "twelveMilesConversions", color: states12MilesRadius[4]},
                                                                {miles: "12miles", criteria: "clicks", value: "twelveMilesClicks", color: states12MilesRadius[1]},
                                                            ]

export const miles18: { miles: string, criteria: string, value: string, color: string }[] = [
                                                                {miles: "18miles", criteria: "views", value: "eighteenMilesViews", color: states18MilesRadius[5]}, 
                                                                {miles: "18miles", criteria: "conversions", value: "eighteenMilesConversions", color: states18MilesRadius[3]},
                                                                {miles: "18miles", criteria: "clicks", value: "eighteenMilesClicks", color: states18MilesRadius[1]},
                                                            ]

  export const MAPBOX_LIBRARY_ZOOM_CONVERSION: any = {
    0: {
        lat: {
            0: {
                metersPixel: 78271.484,
                feetPixel: 256796.21,
            },
            20: {
                metersPixel: 73551.136,
                feetPixel: 241309.5,
            },
            40: {
                metersPixel: 59959.436,
                feetPixel: 196717.31,
            },
            60: {
                metersPixel: 39135.742,
                feetPixel: 128398.1,
            },
            80: {
                metersPixel: 13591.701,
                feetPixel: 44592.19,
            },
        },
    },
    1: {
        lat: {
            0: {
                metersPixel: 39135.742,
                feetPixel: 128398.1,
            },
            20: {
                metersPixel: 36775.568,
                feetPixel: 120654.75,
            },
            40: {
                metersPixel: 29979.718,
                feetPixel: 98358.65,
            },
            60: {
                metersPixel: 19567.871,
                feetPixel: 64199.05,
            },
            80: {
                metersPixel: 6795.85,
                feetPixel: 22296.1,
            },
        },
    },
    2: {
        lat: {
            0: {
                metersPixel: 19567.871,
                feetPixel: 64199.05,
            },
            20: {
                metersPixel: 18387.784,
                feetPixel: 60327.38,
            },
            40: {
                metersPixel: 14989.859,
                feetPixel: 49179.33,
            },
            60: {
                metersPixel: 9783.936,
                feetPixel: 32099.53,
            },
            80: {
                metersPixel: 3397.925,
                feetPixel: 11148.05,
            },
        },
    },
    3: {
        lat: {
            0: {
                metersPixel: 9783.936,
                feetPixel: 32099.53,
            },
            20: {
                metersPixel: 9193.892,
                feetPixel: 30163.69,
            },
            40: {
                metersPixel: 7494.929,
                feetPixel: 24589.66,
            },
            60: {
                metersPixel: 4891.968,
                feetPixel: 16049.76,
            },
            80: {
                metersPixel: 1698.963,
                feetPixel: 5574.02,
            },
        },
    },
    4: {
        lat: {
            0: {
                metersPixel: 4891.968,
                feetPixel: 16049.76,
            },
            20: {
                metersPixel: 4596.946,
                feetPixel: 15081.84,
            },
            40: {
                metersPixel: 3747.465,
                feetPixel: 12294.83,
            },
            60: {
                metersPixel: 2445.984,
                feetPixel: 8024.88,
            },
            80: {
                metersPixel: 849.481,
                feetPixel: 2787.01,
            },
        },
    },
    5: {
        lat: {
            0: {
                metersPixel: 2445.984,
                feetPixel: 8024.88,
            },
            20: {
                metersPixel: 2298.473,
                feetPixel: 7540.92,
            },
            40: {
                metersPixel: 1873.732,
                feetPixel: 6147.42,
            },
            60: {
                metersPixel: 1222.992,
                feetPixel: 4012.44,
            },
            80: {
                metersPixel: 424.741,
                feetPixel: 1393.51,
            },
        },
    },
    6: {
        lat: {
            0: {
                metersPixel: 1222.992,
                feetPixel: 4012.44,
            },
            20: {
                metersPixel: 1149.237,
                feetPixel: 3770.46,
            },
            40: {
                metersPixel: 936.866,
                feetPixel: 3073.71,
            },
            60: {
                metersPixel: 611.496,
                feetPixel: 2006.22,
            },
            80: {
                metersPixel: 212.37,
                feetPixel: 696.75,
            },
        },
    },
    7: {
        lat: {
            0: {
                metersPixel: 611.496,
                feetPixel: 2006.22,
            },
            20: {
                metersPixel: 574.618,
                feetPixel: 1885.23,
            },
            40: {
                metersPixel: 468.433,
                feetPixel: 1536.85,
            },
            60: {
                metersPixel: 305.748,
                feetPixel: 1003.11,
            },
            80: {
                metersPixel: 106.185,
                feetPixel: 348.38,
            },
        },
    },
    8: {
        lat: {
            0: {
                metersPixel: 305.748,
                feetPixel: 1003.11,
            },
            20: {
                metersPixel: 287.309,
                feetPixel: 942.62,
            },
            40: {
                metersPixel: 234.217,
                feetPixel: 768.43,
            },
            60: {
                metersPixel: 152.874,
                feetPixel: 501.56,
            },
            80: {
                metersPixel: 53.093,
                feetPixel: 174.19,
            },
        },
    },
    9: {
        lat: {
            0: {
                metersPixel: 152.874,
                feetPixel: 501.56,
            },
            20: {
                metersPixel: 143.655,
                feetPixel: 471.31,
            },
            40: {
                metersPixel: 117.108,
                feetPixel: 384.21,
            },
            60: {
                metersPixel: 76.437,
                feetPixel: 250.78,
            },
            80: {
                metersPixel: 26.546,
                feetPixel: 87.09,
            },
        },
    },
    10: {
        lat: {
            0: {
                metersPixel: 76.437,
                feetPixel: 250.78,
            },
            20: {
                metersPixel: 71.827,
                feetPixel: 235.65,
            },
            40: {
                metersPixel: 58.554,
                feetPixel: 192.11,
            },
            60: {
                metersPixel: 38.218,
                feetPixel: 125.39,
            },
            80: {
                metersPixel: 13.273,
                feetPixel: 43.55,
            },
        },
    },
    11: {
        lat: {
            0: {
                metersPixel: 38.218,
                feetPixel: 125.39,
            },
            20: {
                metersPixel: 35.914,
                feetPixel: 117.83,
            },
            40: {
                metersPixel: 29.277,
                feetPixel: 96.05,
            },
            60: {
                metersPixel: 19.109,
                feetPixel: 62.69,
            },
            80: {
                metersPixel: 6.637,
                feetPixel: 21.77,
            },
        },
    },
    12: {
        lat: {
            0: {
                metersPixel: 19.109,
                feetPixel: 62.69,
            },
            20: {
                metersPixel: 17.957,
                feetPixel: 58.91,
            },
            40: {
                metersPixel: 14.639,
                feetPixel: 48.03,
            },
            60: {
                metersPixel: 9.555,
                feetPixel: 31.35,
            },
            80: {
                metersPixel: 3.318,
                feetPixel: 10.89,
            },
        },
    },
}
                                                          
export const COUNTRIES_DATA: any = {
  AD: {
      latitude: 42.546245,
      longitude: 1.601554,
      zoom: 3,
  },
  AE: {
      latitude: 23.424076,
      longitude: 53.847818,
      zoom: 3,
  },
  AF: {
      latitude: 33.93911,
      longitude: 67.709953,
      zoom: 3,
  },
  AG: {
      latitude: 17.060816,
      longitude: -61.796428,
      zoom: 3,
  },
  AI: {
      latitude: 18.220554,
      longitude: -63.068615,
      zoom: 3,
  },
  AL: {
      latitude: 41.153332,
      longitude: 20.168331,
      zoom: 3,
  },
  AM: {
      latitude: 40.069099,
      longitude: 45.038189,
      zoom: 3,
  },
  AN: {
      latitude: 12.226079,
      longitude: -69.060087,
      zoom: 3,
  },
  APAC: {
      latitude: 25.463387,
      longitude: 125.003488,
      zoom: 1,
  },
  AO: {
      latitude: -11.202692,
      longitude: 17.873887,
      zoom: 3,
  },
  AQ: {
      latitude: -75.250973,
      longitude: -0.071389,
      zoom: 3,
  },
  AR: {
      latitude: -38.416097,
      longitude: -63.616672,
      zoom: 3,
  },
  AS: {
      latitude: -14.270972,
      longitude: -170.132217,
      zoom: 3,
  },
  AT: {
      latitude: 47.516231,
      longitude: 14.550072,
      zoom: 3,
  },
  AU: {
      latitude: -25.274398,
      longitude: 133.775136,
      zoom: 3,
  },
  AW: {
      latitude: 12.52111,
      longitude: -69.968338,
      zoom: 3,
  },
  AZ: {
      latitude: 40.143105,
      longitude: 47.576927,
      zoom: 3,
  },
  BA: {
      latitude: 43.915886,
      longitude: 17.679076,
      zoom: 3,
  },
  BB: {
      latitude: 13.193887,
      longitude: -59.543198,
      zoom: 3,
  },
  BD: {
      latitude: 23.684994,
      longitude: 90.356331,
      zoom: 3,
  },
  BE: {
      latitude: 50.503887,
      longitude: 4.469936,
      zoom: 3,
  },
  BF: {
      latitude: 12.238333,
      longitude: -1.561593,
      zoom: 3,
  },
  BG: {
      latitude: 42.733883,
      longitude: 25.48583,
      zoom: 3,
  },
  BH: {
      latitude: 25.930414,
      longitude: 50.637772,
      zoom: 3,
  },
  BI: {
      latitude: -3.373056,
      longitude: 29.918886,
      zoom: 3,
  },
  BJ: {
      latitude: 9.30769,
      longitude: 2.315834,
      zoom: 3,
  },
  BM: {
      latitude: 32.321384,
      longitude: -64.75737,
      zoom: 3,
  },
  BN: {
      latitude: 4.535277,
      longitude: 114.727669,
      zoom: 3,
  },
  BO: {
      latitude: -16.290154,
      longitude: -63.588653,
      zoom: 3,
  },
  BR: {
      latitude: -14.235004,
      longitude: -51.92528,
      zoom: 3,
  },
  BS: {
      latitude: 25.03428,
      longitude: -77.39628,
      zoom: 3,
  },
  BT: {
      latitude: 27.514162,
      longitude: 90.433601,
      zoom: 3,
  },
  BV: {
      latitude: -54.423199,
      longitude: 3.413194,
      zoom: 3,
  },
  BW: {
      latitude: -22.328474,
      longitude: 24.684866,
      zoom: 3,
  },
  BY: {
      latitude: 53.709807,
      longitude: 27.953389,
      zoom: 3,
  },
  BZ: {
      latitude: 17.189877,
      longitude: -88.49765,
      zoom: 3,
  },
  CA: {
      latitude: 56.130366,
      longitude: -106.346771,
      zoom: 2,
  },
  CC: {
      latitude: -12.164165,
      longitude: 96.870956,
      zoom: 3,
  },
  CD: {
      latitude: -4.038333,
      longitude: 21.758664,
      zoom: 3,
  },
  CF: {
      latitude: 6.611111,
      longitude: 20.939444,
      zoom: 3,
  },
  CG: {
      latitude: -0.228021,
      longitude: 15.827659,
      zoom: 3,
  },
  CH: {
      latitude: 46.818188,
      longitude: 8.227512,
      zoom: 3,
  },
  CI: {
      latitude: 7.539989,
      longitude: -5.54708,
      zoom: 3,
  },
  CK: {
      latitude: -21.236736,
      longitude: -159.777671,
      zoom: 3,
  },
  CL: {
      latitude: -35.675147,
      longitude: -71.542969,
      zoom: 3,
  },
  CM: {
      latitude: 7.369722,
      longitude: 12.354722,
      zoom: 3,
  },
  CN: {
      latitude: 35.86166,
      longitude: 104.195397,
      zoom: 3,
  },
  CO: {
      latitude: 4.570868,
      longitude: -74.297333,
      zoom: 3,
  },
  CR: {
      latitude: 9.748917,
      longitude: -83.753428,
      zoom: 3,
  },
  CU: {
      latitude: 21.521757,
      longitude: -77.781167,
      zoom: 3,
  },
  CV: {
      latitude: 16.002082,
      longitude: -24.013197,
      zoom: 3,
  },
  CX: {
      latitude: -10.447525,
      longitude: 105.690449,
      zoom: 3,
  },
  CY: {
      latitude: 35.126413,
      longitude: 33.429859,
      zoom: 3,
  },
  CZ: {
      latitude: 49.817492,
      longitude: 15.472962,
      zoom: 3,
  },
  DE: {
      latitude: 51.165691,
      longitude: 10.451526,
      zoom: 3,
  },
  DJ: {
      latitude: 11.825138,
      longitude: 42.590275,
      zoom: 3,
  },
  DK: {
      latitude: 56.26392,
      longitude: 9.501785,
      zoom: 3,
  },
  DM: {
      latitude: 15.414999,
      longitude: -61.370976,
      zoom: 3,
  },
  DO: {
      latitude: 18.735693,
      longitude: -70.162651,
      zoom: 3,
  },
  DZ: {
      latitude: 28.033886,
      longitude: 1.659626,
      zoom: 3,
  },
  EC: {
      latitude: -1.831239,
      longitude: -78.183406,
      zoom: 3,
  },
  EE: {
      latitude: 58.595272,
      longitude: 25.013607,
      zoom: 3,
  },
  EG: {
      latitude: 26.820553,
      longitude: 30.802498,
      zoom: 3,
  },
  EH: {
      latitude: 24.215527,
      longitude: -12.885834,
      zoom: 3,
  },

  ER: {
      latitude: 15.179384,
      longitude: 39.782334,
      zoom: 3,
  },

  ES: {
      latitude: 40.463667,
      longitude: -3.74922,
      zoom: 4,
  },

  ET: {
      latitude: 9.145,
      longitude: 40.489673,
      zoom: 3,
  },

  EU: {
      latitude: 53.351275,
      longitude: 14.069757,
      zoom: 2,
  },

  FI: {
      latitude: 61.92411,
      longitude: 25.748151,
      zoom: 3,
  },

  FJ: {
      latitude: -16.578193,
      longitude: 179.414413,
      zoom: 3,
  },
  FK: {
      latitude: -51.796253,
      longitude: -59.523613,
      zoom: 3,
  },
  FM: {
      latitude: 7.425554,
      longitude: 150.550812,
      zoom: 3,
  },
  FO: {
      latitude: 61.892635,
      longitude: -6.911806,
      zoom: 3,
  },
  FR: {
      latitude: 46.227638,
      longitude: 2.213749,
      zoom: 3,
  },
  GA: {
      latitude: -0.803689,
      longitude: 11.609444,
      zoom: 3,
  },
  GB: {
      latitude: 55.378051,
      longitude: -3.435973,
      zoom: 3,
  },
  GD: {
      latitude: 12.262776,
      longitude: -61.604171,
      zoom: 3,
  },
  GE: {
      latitude: 42.315407,
      longitude: 43.356892,
      zoom: 3,
  },
  GF: {
      latitude: 3.933889,
      longitude: -53.125782,
      zoom: 3,
  },
  GG: {
      latitude: 49.465691,
      longitude: -2.585278,
      zoom: 3,
  },
  GH: {
      latitude: 7.946527,
      longitude: -1.023194,
      zoom: 3,
  },
  GI: {
      latitude: 36.137741,
      longitude: -5.345374,
      zoom: 3,
  },
  GL: {
      latitude: 71.706936,
      longitude: -42.604303,
      zoom: 3,
  },
  GM: {
      latitude: 13.443182,
      longitude: -15.310139,
      zoom: 3,
  },
  GN: {
      latitude: 9.945587,
      longitude: -9.696645,
      zoom: 3,
  },
  GP: {
      latitude: 16.995971,
      longitude: -62.067641,
      zoom: 3,
  },
  GQ: {
      latitude: 1.650801,
      longitude: 10.267895,
      zoom: 3,
  },
  GR: {
      latitude: 39.074208,
      longitude: 21.824312,
      zoom: 3,
  },
  GS: {
      latitude: -54.429579,
      longitude: -36.587909,
      zoom: 3,
  },
  GT: {
      latitude: 15.783471,
      longitude: -90.230759,
      zoom: 3,
  },
  GU: {
      latitude: 13.444304,
      longitude: 144.793731,
      zoom: 3,
  },
  GW: {
      latitude: 11.803749,
      longitude: -15.180413,
      zoom: 3,
  },
  GY: {
      latitude: 4.860416,
      longitude: -58.93018,
      zoom: 3,
  },
  GZ: {
      latitude: 31.354676,
      longitude: 34.308825,
      zoom: 3,
  },
  HK: {
      latitude: 22.396428,
      longitude: 114.109497,
      zoom: 3,
  },
  HM: {
      latitude: -53.08181,
      longitude: 73.504158,
      zoom: 3,
  },

  HN: {
      latitude: 15.199999,
      longitude: -86.241905,
      zoom: 3,
  },
  HR: {
      latitude: 45.1,
      longitude: 15.2,
      zoom: 3,
  },
  HT: {
      latitude: 18.971187,
      longitude: -72.285215,
      zoom: 3,
  },
  HU: {
      latitude: 47.162494,
      longitude: 19.503304,
      zoom: 3,
  },
  ID: {
      latitude: -0.789275,
      longitude: 113.921327,
      zoom: 3,
  },
  IE: {
      latitude: 53.41291,
      longitude: -8.24389,
      zoom: 3,
  },
  IL: {
      latitude: 31.046051,
      longitude: 34.851612,
      zoom: 3,
  },
  IM: {
      latitude: 54.236107,
      longitude: -4.548056,
      zoom: 3,
  },
  IN: {
      latitude: 20.593684,
      longitude: 78.96288,
      zoom: 3,
  },
  IO: {
      latitude: -6.343194,
      longitude: 71.876519,
      zoom: 3,
  },
  IQ: {
      latitude: 33.223191,
      longitude: 43.679291,
      zoom: 3,
  },
  IR: {
      latitude: 32.427908,
      longitude: 53.688046,
      zoom: 3,
  },
  IS: {
      latitude: 64.963051,
      longitude: -19.020835,
      zoom: 3,
  },
  IT: {
      latitude: 41.87194,
      longitude: 12.56738,
      zoom: 3,
  },
  JE: {
      latitude: 49.214439,
      longitude: -2.13125,
      zoom: 3,
  },
  JM: {
      latitude: 18.109581,
      longitude: -77.297508,
      zoom: 3,
  },
  JO: {
      latitude: 30.585164,
      longitude: 36.238414,
      zoom: 3,
  },
  JP: {
      latitude: 36.204824,
      longitude: 138.252924,
      zoom: 3,
  },
  KE: {
      latitude: -0.023559,
      longitude: 37.906193,
      zoom: 3,
  },
  KG: {
      latitude: 41.20438,
      longitude: 74.766098,
      zoom: 3,
  },
  KH: {
      latitude: 12.565679,
      longitude: 104.990963,
      zoom: 3,
  },
  KI: {
      latitude: -3.370417,
      longitude: -168.734039,
      zoom: 3,
  },
  KM: {
      latitude: -11.875001,
      longitude: 43.872219,
      zoom: 3,
  },
  KN: {
      latitude: 17.357822,
      longitude: -62.782998,
      zoom: 3,
  },
  KP: {
      latitude: 40.339852,
      longitude: 127.510093,
      zoom: 3,
  },
  KR: {
      latitude: 35.907757,
      longitude: 127.766922,
      zoom: 3,
  },
  KW: {
      latitude: 29.31166,
      longitude: 47.481766,
      zoom: 3,
  },
  KY: {
      latitude: 19.513469,
      longitude: -80.566956,
      zoom: 3,
  },
  KZ: {
      latitude: 48.019573,
      longitude: 66.923684,
      zoom: 3,
  },
  LA: {
      latitude: 19.85627,
      longitude: 102.495496,
      zoom: 3,
  },
  LB: {
      latitude: 33.854721,
      longitude: 35.862285,
      zoom: 3,
  },
  LC: {
      latitude: 13.909444,
      longitude: -60.978893,
      zoom: 3,
  },
  LI: {
      latitude: 47.166,
      longitude: 9.555373,
      zoom: 3,
  },
  LK: {
      latitude: 7.873054,
      longitude: 80.771797,
      zoom: 3,
  },
  LR: {
      latitude: 6.428055,
      longitude: -9.429499,
      zoom: 3,
  },
  LS: {
      latitude: -29.609988,
      longitude: 28.233608,
      zoom: 3,
  },
  LT: {
      latitude: 55.169438,
      longitude: 23.881275,
      zoom: 3,
  },
  LU: {
      latitude: 49.815273,
      longitude: 6.129583,
      zoom: 3,
  },
  LV: {
      latitude: 56.879635,
      longitude: 24.603189,
      zoom: 3,
  },
  LY: {
      latitude: 26.3351,
      longitude: 17.228331,
      zoom: 3,
  },
  MA: {
      latitude: 31.791702,
      longitude: -7.09262,
      zoom: 3,
  },
  MC: {
      latitude: 43.750298,
      longitude: 7.412841,
      zoom: 3,
  },
  MD: {
      latitude: 47.411631,
      longitude: 28.369885,
      zoom: 3,
  },
  ME: {
      latitude: 42.708678,
      longitude: 19.37439,
      zoom: 3,
  },
  MENA: {
      latitude: 31.268205,
      longitude: 29.995368,
      zoom: 3,
  },
  MG: {
      latitude: -18.766947,
      longitude: 46.869107,
      zoom: 3,
  },
  MH: {
      latitude: 7.131474,
      longitude: 171.184478,
      zoom: 3,
  },
  MK: {
      latitude: 41.608635,
      longitude: 21.745275,
      zoom: 3,
  },
  ML: {
      latitude: 17.570692,
      longitude: -3.996166,
      zoom: 3,
  },
  MM: {
      latitude: 21.913965,
      longitude: 95.956223,
      zoom: 3,
  },
  MN: {
      latitude: 46.862496,
      longitude: 103.846656,
      zoom: 3,
  },
  MO: {
      latitude: 22.198745,
      longitude: 113.543873,
      zoom: 3,
  },
  MP: {
      latitude: 17.33083,
      longitude: 145.38469,
      zoom: 3,
  },
  MQ: {
      latitude: 14.641528,
      longitude: -61.024174,
      zoom: 3,
  },
  MR: {
      latitude: 21.00789,
      longitude: -10.940835,
      zoom: 3,
  },
  MS: {
      latitude: 16.742498,
      longitude: -62.187366,
      zoom: 3,
  },
  MT: {
      latitude: 35.937496,
      longitude: 14.375416,
      zoom: 3,
  },
  MU: {
      latitude: -20.348404,
      longitude: 57.552152,
      zoom: 3,
  },
  MV: {
      latitude: 3.202778,
      longitude: 73.22068,
      zoom: 3,
  },
  MW: {
      latitude: -13.254308,
      longitude: 34.301525,
      zoom: 3,
  },
  MX: {
      latitude: 23.634501,
      longitude: -102.552784,
      zoom: 3,
  },
  MY: {
      latitude: 4.210484,
      longitude: 101.975766,
      zoom: 3,
  },
  MZ: {
      latitude: -18.665695,
      longitude: 35.529562,
      zoom: 3,
  },
  NA: {
      latitude: -22.95764,
      longitude: 18.49041,
      zoom: 3,
  },
  NC: {
      latitude: -20.904305,
      longitude: 165.618042,
      zoom: 3,
  },
  NE: {
      latitude: 17.607789,
      longitude: 8.081666,
      zoom: 3,
  },
  NF: {
      latitude: -29.040835,
      longitude: 167.954712,
      zoom: 3,
  },
  NG: {
      latitude: 9.081999,
      longitude: 8.675277,
      zoom: 3,
  },
  NI: {
      latitude: 12.865416,
      longitude: -85.207229,
      zoom: 3,
  },
  NL: {
      latitude: 52.132633,
      longitude: 5.291266,
      zoom: 3,
  },
  NO: {
      latitude: 60.472024,
      longitude: 8.468946,
      zoom: 3,
  },
  NP: {
      latitude: 28.394857,
      longitude: 84.124008,
      zoom: 3,
  },
  NR: {
      latitude: -0.522778,
      longitude: 166.931503,
      zoom: 3,
  },
  NU: {
      latitude: -19.054445,
      longitude: -169.867233,
      zoom: 3,
  },
  NZ: {
      latitude: -40.900557,
      longitude: 174.885971,
      zoom: 3,
  },
  OM: {
      latitude: 21.512583,
      longitude: 55.923255,
      zoom: 3,
  },
  PA: {
      latitude: 8.537981,
      longitude: -80.782127,
      zoom: 3,
  },
  PE: {
      latitude: -9.189967,
      longitude: -75.015152,
      zoom: 3,
  },
  PF: {
      latitude: -17.679742,
      longitude: -149.406843,
      zoom: 3,
  },
  PG: {
      latitude: -6.314993,
      longitude: 143.95555,
      zoom: 3,
  },
  PH: {
      latitude: 12.879721,
      longitude: 121.774017,
      zoom: 3,
  },
  PK: {
      latitude: 30.375321,
      longitude: 69.345116,
      zoom: 3,
  },
  PL: {
      latitude: 51.919438,
      longitude: 19.145136,
      zoom: 3,
  },
  PM: {
      latitude: 46.941936,
      longitude: -56.27111,
      zoom: 3,
  },
  PN: {
      latitude: -24.703615,
      longitude: -127.439308,
      zoom: 3,
  },
  PR: {
      latitude: 18.220833,
      longitude: -66.590149,
      zoom: 3,
  },
  PS: {
      latitude: 31.952162,
      longitude: 35.233154,
      zoom: 3,
  },
  PT: {
      latitude: 39.399872,
      longitude: -8.224454,
      zoom: 3,
  },
  PW: {
      latitude: 7.51498,
      longitude: 134.58252,
      zoom: 3,
  },
  PY: {
      latitude: -23.442503,
      longitude: -58.443832,
      zoom: 3,
  },
  QA: {
      latitude: 25.354826,
      longitude: 51.183884,
      zoom: 3,
  },
  RE: {
      latitude: -21.115141,
      longitude: 55.536384,
      zoom: 3,
  },
  RO: {
      latitude: 45.943161,
      longitude: 24.96676,
      zoom: 3,
  },
  RS: {
      latitude: 44.016521,
      longitude: 21.005859,
      zoom: 3,
  },
  RU: {
      latitude: 61.52401,
      longitude: 105.318756,
      zoom: 3,
  },
  RW: {
      latitude: -1.940278,
      longitude: 29.873888,
      zoom: 3,
  },
  SA: {
      latitude: 23.885942,
      longitude: 45.079162,
      zoom: 3,
  },
  SB: {
      latitude: -9.64571,
      longitude: 160.156194,
      zoom: 3,
  },
  SC: {
      latitude: -4.679574,
      longitude: 55.491977,
      zoom: 3,
  },
  SD: {
      latitude: 12.862807,
      longitude: 30.217636,
      zoom: 3,
  },
  SE: {
      latitude: 60.128161,
      longitude: 18.643501,
      zoom: 3,
  },
  SG: {
      latitude: 1.352083,
      longitude: 103.819836,
      zoom: 3,
  },
  SH: {
      latitude: -24.143474,
      longitude: -10.030696,
      zoom: 3,
  },
  SI: {
      latitude: 46.151241,
      longitude: 14.995463,
      zoom: 3,
  },
  SJ: {
      latitude: 77.553604,
      longitude: 23.670272,
      zoom: 3,
  },
  SK: {
      latitude: 48.669026,
      longitude: 19.699024,
      zoom: 3,
  },
  SL: {
      latitude: 8.460555,
      longitude: -11.779889,
      zoom: 3,
  },
  SM: {
      latitude: 43.94236,
      longitude: 12.457777,
      zoom: 3,
  },
  SN: {
      latitude: 14.497401,
      longitude: -14.452362,
      zoom: 3,
  },
  SO: {
      latitude: 5.152149,
      longitude: 46.199616,
      zoom: 3,
  },
  SR: {
      latitude: 3.919305,
      longitude: -56.027783,
      zoom: 3,
  },
  ST: {
      latitude: 0.18636,
      longitude: 6.613081,
      zoom: 3,
  },
  SV: {
      latitude: 13.794185,
      longitude: -88.89653,
      zoom: 3,
  },
  SY: {
      latitude: 34.802075,
      longitude: 38.996815,
      zoom: 3,
  },
  SZ: {
      latitude: -26.522503,
      longitude: 31.465866,
      zoom: 3,
  },
  TC: {
      latitude: 21.694025,
      longitude: -71.797928,
      zoom: 3,
  },
  TD: {
      latitude: 15.454166,
      longitude: 18.732207,
      zoom: 3,
  },
  TF: {
      latitude: -49.280366,
      longitude: 69.348557,
      zoom: 3,
  },
  TG: {
      latitude: 8.619543,
      longitude: 0.824782,
      zoom: 3,
  },
  TH: {
      latitude: 15.870032,
      longitude: 100.992541,
      zoom: 3,
  },
  TJ: {
      latitude: 38.861034,
      longitude: 71.276093,
      zoom: 3,
  },
  TK: {
      latitude: -8.967363,
      longitude: -171.855881,
      zoom: 3,
  },
  TL: {
      latitude: -8.874217,
      longitude: 125.727539,
      zoom: 3,
  },
  TM: {
      latitude: 38.969719,
      longitude: 59.556278,
      zoom: 3,
  },
  TN: {
      latitude: 33.886917,
      longitude: 9.537499,
      zoom: 3,
  },
  TO: {
      latitude: -21.178986,
      longitude: -175.198242,
      zoom: 3,
  },
  TR: {
      latitude: 38.963745,
      longitude: 35.243322,
      zoom: 3,
  },
  TT: {
      latitude: 10.691803,
      longitude: -61.222503,
      zoom: 3,
  },
  TV: {
      latitude: -7.109535,
      longitude: 177.64933,
      zoom: 3,
  },
  TW: {
      latitude: 23.69781,
      longitude: 120.960515,
      zoom: 3,
  },
  TZ: {
      latitude: -6.369028,
      longitude: 34.888822,
      zoom: 3,
  },
  UA: {
      latitude: 48.379433,
      longitude: 31.16558,
      zoom: 3,
  },
  UG: {
      latitude: 1.373333,
      longitude: 32.290275,
      zoom: 3,
  },
  UK: {
      latitude: 55.3781,
      longitude: 3.436,
      zoom: 4,
  },
  US: {
      latitude: 37.09024,
      longitude: -95.712891,
      zoom: 3,
  },
  UY: {
      latitude: -32.522779,
      longitude: -55.765835,
      zoom: 3,
  },
  UZ: {
      latitude: 41.377491,
      longitude: 64.585262,
      zoom: 3,
  },
  VA: {
      latitude: 41.902916,
      longitude: 12.453389,
      zoom: 3,
  },
  VC: {
      latitude: 12.984305,
      longitude: -61.287228,
      zoom: 3,
  },
  VE: {
      latitude: 6.42375,
      longitude: -66.58973,
      zoom: 3,
  },
  VG: {
      latitude: 18.420695,
      longitude: -64.639968,
      zoom: 3,
  },
  VI: {
      latitude: 18.335765,
      longitude: -64.896335,
      zoom: 3,
  },
  VN: {
      latitude: 14.058324,
      longitude: 108.277199,
      zoom: 3,
  },
  VU: {
      latitude: -15.376706,
      longitude: 166.959158,
      zoom: 3,
  },
  WF: {
      latitude: -13.768752,
      longitude: -177.156097,
      zoom: 3,
  },
  WS: {
      latitude: -13.759029,
      longitude: -172.104629,
      zoom: 3,
  },
  XK: {
      latitude: 42.602636,
      longitude: 20.902977,
      zoom: 3,
  },
  YE: {
      latitude: 15.552727,
      longitude: 48.516388,
      zoom: 3,
  },
  YT: {
      latitude: -12.8275,
      longitude: 45.166244,
      zoom: 3,
  },
  ZA: {
      latitude: -30.559482,
      longitude: 22.937506,
      zoom: 3,
  },
  ZM: {
      latitude: -13.133897,
      longitude: 27.849332,
      zoom: 3,
  },
  ZW: {
      latitude: -19.015438,
      longitude: 29.154857,
      zoom: 3,
  },
}


export const getPixels = (country: string, zoom: number, miles: number) => {
  zoom = Math.floor(zoom)
  let lat: number = 0

  if (country && country !== '') {
      lat = Math.abs(Number(COUNTRIES_DATA[country]['latitude']))
  }
  let metersPixel: number = 0
  let metersMile = 1609.34
  switch (true) {
      case lat < 20:
          metersPixel = MAPBOX_LIBRARY_ZOOM_CONVERSION[zoom]['lat'][20]['metersPixel']
          break
      case lat < 40:
          metersPixel = MAPBOX_LIBRARY_ZOOM_CONVERSION[zoom]['lat'][40]['metersPixel']
          break
      case lat < 60:
          metersPixel = MAPBOX_LIBRARY_ZOOM_CONVERSION[zoom]['lat'][60]['metersPixel']
          break
      case lat < 80:
          metersPixel = MAPBOX_LIBRARY_ZOOM_CONVERSION[zoom]['lat'][80]['metersPixel']
          break
  }

  let milesPixel: number = Number(metersPixel) / Number(metersMile)
  let distancePixel: number = Number(miles) / milesPixel

  return distancePixel
}
