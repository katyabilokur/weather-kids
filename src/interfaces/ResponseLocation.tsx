interface PropertiesLoc {
  address_line2: string;
}

interface ResponseLocs {
  properties: PropertiesLoc;
}

export default interface ResponseLocation {
  features: [ResponseLocs];
}
