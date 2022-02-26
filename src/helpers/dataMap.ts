import data from "../data/data.json";

const nameStates: any = {
  AL: "Alabama",
  AK: "Alasca",
  AR: "Arkansas",
  AZ: "Arizona",
  CA: "Califórnia",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Flórida",
  GA: "Geórgia",
  HI: "Havaí",
  IA: "Iowa",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  MA: "Massachusetts",
  MD: "Maryland",
  ME: "Maine",
  MI: "Michigan",
  MN: "Minnesota",
  MO: "Missouri",
  MS: "Mississippi",
  MT: "Montana",
  NC: "Carolina do Norte",
  ND: "Dakota do Norte",
  NE: "Nebraska",
  NH: "Nova Hampshire",
  NJ: "Nova Jérsei",
  NM: "Novo México",
  NV: "Nevada",
  NY: "Nova Iorque",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pensilvânia",
  RI: "Rhode Island",
  SC: "Carolina do Sul",
  SD: "Dakota do Sul",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VA: "Virgínia",
  VT: "Vermont",
  WA: "Washington",
  WI: "Wisconsin",
  WV: "Virgínia Ocidental",
  WY: "Wyoming",
};

function getDataMap(miles: string, type: string) {
  let states: any = [];

  Object.values(data.features).map((locale: any) => {
    const currentStateIndex = states.findIndex(
      (v: any) => v.state === nameStates[locale.properties.State]
    );
    if (currentStateIndex === -1) {
      states.push({
        count: locale.properties[miles][type],
        state: nameStates[locale.properties.State],
      });
    } else {
      states[currentStateIndex] = {
        ...states[currentStateIndex],
        count: states[currentStateIndex].count + locale.properties[miles][type],
      };
    }

    return "";
  });

  return states;
}

export default getDataMap;
