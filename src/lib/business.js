export const BIZ = {
  name: "Lias Freight Global Services Limited",
  short: "Lias Freight",
  established: 1981,
  address: ["20 Ajibola Crescent", "Ketu", "Lagos"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=20+Ajibola+Crescent+Ketu+Lagos",
  phones: [
    { label: "Office", display: "0803 307 6357", tel: "+2348033076357" },
    { label: "Other office", display: "0803 074 3810", tel: "+2348030743810" },
  ],
  whatsapp: "https://wa.me/2348030743810",
  hours: [
    { days: "Monday to Saturday", time: "8:00am to 5:00pm" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const SERVICES = [
  {
    id: "customs-clearing",
    title: "Customs Clearing",
    short: "Import and export documentation cleared through all Nigerian seaports and airports.",
    icon: "Stamp",
    points: [
      "Import and export documentation prepared and checked before submission",
      "Duty and tariff processing for your cargo classification",
      "Port clearance at Apapa, Tin Can, Onne, Calabar, Warri, Port Harcourt and others",
    ],
  },
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    short: "Sea, air and road coordinated under one plan.",
    icon: "Globe",
    points: [
      "Sea, air and road freight coordination",
      "Consolidation of smaller shipments into one movement",
      "Door-to-door arrangements from origin to your premises",
    ],
  },
  {
    id: "haulage",
    title: "Haulage and Transportation",
    short: "Containers and trucks moved from port to warehouse.",
    icon: "Truck",
    points: [
      "Container haulage to and from the ports",
      "Truck movement from port to warehouse or site",
      "Last-mile delivery to your doorstep anywhere in Nigeria",
    ],
  },
  {
    id: "warehousing",
    title: "Warehousing and Storage",
    short: "Short-term storage, consolidation and dispatch.",
    icon: "Warehouse",
    points: [
      "Short-term storage while documents and duties are settled",
      "Consolidation of cargo before onward movement",
      "Dispatch arranged to your next destination",
    ],
  },
];
