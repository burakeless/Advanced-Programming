var elements = [
    {
        number: "1",
        symbol: "H",
        weight: "1.008",
        name: "Hydrogen",
        type: "nonmetal",
        year: "1776"
    },
    {
        number: "2",
        symbol: "He",
        weight: "4.003",
        name: "Helium",
        type: "noble gas",
        year: "1895"
    },
    {
        number: "3",
        symbol: "Li",
        weight: "6.941",
        name: "Lithium",
        type: "alkali metal",
        year: "1817"
    },
    {
        number: "4",
        symbol: "Be",
        weight: "9.012",
        name: "Beryllium",
        type: "alkaline earth",
        year: "1797"
    },
    {
        number: "5",
        symbol: "B",
        weight: "10.811",
        name: "Boron",
        type: "semimetal",
        year: "1808"
    },
    {
        number: "6",
        symbol: "C",
        weight: "12.012",
        name: "Carbon",
        type: "nonmetal",
        year: "ancient"
    },
    {
        number: "7",
        symbol: "N",
        weight: "14.007",
        name: "Nitrogen",
        type: "nonmetal",
        year: "1772"
    },
    {
        number: "8",
        symbol: "O",
        weight: "15.999",
        name: "Oxygen",
        type: "nonmetal",
        year: "1774"
    },
    {
        number: "9",
        symbol: "F",
        weight: "18.998",
        name: "Fluorine",
        type: "halogen",
        year: "1886"
    },
    {
        number: "10",
        symbol: "Ne",
        weight: "20.180",
        name: "Neon",
        type: "noble gas",
        year: "1898"
    },
    {
        number: "11",
        symbol: "Na",
        weight: "28.990",
        name: "Sodium",
        type: "alkali metal",
        year: "1807"
    },
    {
        number: "12",
        symbol: "Mg",
        weight: "24.305",
        name: "Magnesium",
        type: "alkaline earth",
        year: "1755"
    },
    {
        number: "13",
        symbol: "Al",
        weight: "26.982",
        name: "Aluminum",
        type: "basic metal",
        year: "1825"
    },
    {
        number: "14",
        symbol: "Si",
        weight: "28.086",
        name: "Silicon",
        type: "semimetal",
        year: "1824"
    },
    {
        number: "15",
        symbol: "P",
        weight: "30.974",
        name: "Phosphorus",
        type: "nonmetal",
        year: "1669"
    },
    {
        number: "16",
        symbol: "S",
        weight: "32.065",
        name: "Sulfur",
        type: "nonmetal",
        year: "ancient"
    },
    {
        number: "17",
        symbol: "Cl",
        weight: "35.453",
        name: "Chlorine",
        type: "halogen",
        year: "1774"
    },
    {
        number: "18",
        symbol: "Ar",
        weight: "39.948",
        name: "Argon",
        type: "noble gas",
        year: "1894"
    },
    {
        number: "19",
        symbol: "K",
        weight: "39.098",
        name: "Potassium",
        type: "alkali metal",
        year: "1807"
    },
    {
        number: "20",
        symbol: "Ca",
        weight: "40.078",
        name: "Calcium",
        type: "alkaline earth",
        year: "1808"
    },
    {
        number: "21",
        symbol: "Sc",
        weight: "44.956",
        name: "Scandium",
        type: "transition metal",
        year: "1879"
    },
    {
        number: "22",
        symbol: "Ti",
        weight: "47.867",
        name: "Titanium",
        type: "transition metal",
        year: "1791"
    },
    {
        number: "23",
        symbol: "V",
        weight: "50.942",
        name: "Vanadium",
        type: "transition metal",
        year: "1830"
    },
    {
        number: "24",
        symbol: "Cr",
        weight: "51.996",
        name: "Chromium",
        type: "transition metal",
        year: "1797"
    },
    {
        number: "25",
        symbol: "Mn",
        weight: "54.938",
        name: "Manganese",
        type: "transition metal",
        year: "1774"
    },
    {
        number: "26",
        symbol: "Fe",
        weight: "55.845",
        name: "Iron",
        type: "transition metal",
        year: "ancient"
    },
    {
        number: "27",
        symbol: "Co",
        weight: "58.933",
        name: "Cobalt",
        type: "transition metal",
        year: "1735"
    },
    {
        number: "28",
        symbol: "Ni",
        weight: "58.693",
        name: "Nickel",
        type: "transition metal",
        year: "1751"
    },
    {
        number: "29",
        symbol: "Cu",
        weight: "63.546",
        name: "Copper",
        type: "transition metal",
        year: "ancient"
    },
    {
        number: "30",
        symbol: "Zn",
        weight: "65.39",
        name: "Zinc",
        type: "transition metal",
        year: "ancient"
    },
    {
        number: "31",
        symbol: "Ga",
        weight: "69.723",
        name: "Gallium",
        type: "basic metal",
        year: "1875"
    },
    {
        number: "32",
        symbol: "Ge",
        weight: "72.64",
        name: "Germanium",
        type: "semimetal",
        year: "1886"
    },
    {
        number: "33",
        symbol: "As",
        weight: "74.922",
        name: "Arsenic",
        type: "semimetal",
        year: "ancient"
    },
    {
        number: "34",
        symbol: "Se",
        weight: "78.96",
        name: "Selenium",
        type: "nonmetal",
        year: "1817"
    },
    {
        number: "35",
        symbol: "Br",
        weight: "79.904",
        name: "Bromine",
        type: "halogen",
        year: "1826"
    },
    {
        number: "36",
        symbol: "Kr",
        weight: "83.8",
        name: "Krypton",
        type: "noble gas",
        year: "1898"
    },
    {
        number: "37",
        symbol: "Rb",
        weight: "85.468",
        name: "Rubidium",
        type: "alkali metal",
        year: "1861"
    },
    {
        number: "38",
        symbol: "Sr",
        weight: "87.62",
        name: "Strontium",
        type: "alkaline earth",
        year: "1790"
    },
    {
        number: "39",
        symbol: "Y",
        weight: "88.906",
        name: "Yttrium",
        type: "transition metal",
        year: "1794"
    },
    {
        number: "40",
        symbol: "Zr",
        weight: "91.224",
        name: "Zirconium",
        type: "transition metal",
        year: "1789"
    },
    {
        number: "41",
        symbol: "Nb",
        weight: "92.906",
        name: "Niobium",
        type: "transition metal",
        year: "1801"
    },
    {
        number: "42",
        symbol: "Mo",
        weight: "95.94",
        name: "Molybdenum",
        type: "transition metal",
        year: "1781"
    },
    {
        number: "43",
        symbol: "Tc",
        weight: "98.0",
        name: "Technetium",
        type: "transition metal",
        year: "1937"
    },
    {
        number: "44",
        symbol: "Ru",
        weight: "101.07",
        name: "Ruthenium",
        type: "transition metal",
        year: "1844"
    },
    {
        number: "45",
        symbol: "Rh",
        weight: "102.906",
        name: "Rhodium",
        type: "transition metal",
        year: "1803"
    },
    {
        number: "46",
        symbol: "Pd",
        weight: "106.42",
        name: "Palladium",
        type: "transition metal",
        year: "1803"
    },
    {
        number: "47",
        symbol: "Ag",
        weight: "107.868",
        name: "Silver",
        type: "transition metal",
        year: "ancient"
    },
    {
        number: "48",
        symbol: "Cd",
        weight: "112.411",
        name: "Cadmium",
        type: "transition metal",
        year: "1817"
    },
    {
        number: "49",
        symbol: "In",
        weight: "114.818",
        name: "Indium",
        type: "basic metal",
        year: "1863"
    },
    {
        number: "50",
        symbol: "Sn",
        weight: "118.71",
        name: "Tin",
        type: "basic metal",
        year: "ancient"
    },
    {
        number: "51",
        symbol: "Sb",
        weight: "121.76",
        name: "Antimony",
        type: "semimetal",
        year: "ancient"
    },
    {
        number: "52",
        symbol: "Te",
        weight: "127.6",
        name: "Tellurium",
        type: "semimetal",
        year: "1783"
    },
    {
        number: "53",
        symbol: "I",
        weight: "126.905",
        name: "Iodine",
        type: "halogen",
        year: "1811"
    },
    {
        number: "54",
        symbol: "Xe",
        weight: "131.293",
        name: "Xenon",
        type: "noble gas",
        year: "1898"
    },
    {
        number: "55",
        symbol: "Cs",
        weight: "132.906",
        name: "Cesium",
        type: "alkali metal",
        year: "1860"
    },
    {
        number: "56",
        symbol: "Ba",
        weight: "137.327",
        name: "Barium",
        type: "alkaline earth",
        year: "1808"
    },
    {
        number: "57",
        symbol: "La",
        weight: "138.906",
        name: "Lanthanum",
        type: "lanthanide",
        year: "1839"
    },
    {
        number: "58",
        symbol: "Ce",
        weight: "140.116",
        name: "Cerium",
        type: "lanthanide",
        year: "1803"
    },
    {
        number: "59",
        symbol: "Pr",
        weight: "140.908",
        name: "Praseodymium",
        type: "lanthanide",
        year: "1885"
    },
    {
        number: "60",
        symbol: "Nd",
        weight: "144.24",
        name: "Neodymium",
        type: "lanthanide",
        year: "1885"
    },
    {
        number: "61",
        symbol: "Pm",
        weight: "145.0",
        name: "Promethium",
        type: "lanthanide",
        year: "1945"
    },
    {
        number: "62",
        symbol: "Sm",
        weight: "150.36",
        name: "Samarium",
        type: "lanthanide",
        year: "1879"
    },
    {
        number: "63",
        symbol: "Eu",
        weight: "151.964",
        name: "Europium",
        type: "lanthanide",
        year: "1901"
    },
    {
        number: "64",
        symbol: "Gd",
        weight: "157.25",
        name: "Gadolinium",
        type: "lanthanide",
        year: "1880"
    },
    {
        number: "65",
        symbol: "Tb",
        weight: "158.925",
        name: "Terbium",
        type: "lanthanide",
        year: "1843"
    },
    {
        number: "66",
        symbol: "Dy",
        weight: "162.5",
        name: "Dysprosium",
        type: "lanthanide",
        year: "1886"
    },
    {
        number: "67",
        symbol: "Ho",
        weight: "164.930",
        name: "Holmium",
        type: "lanthanide",
        year: "1867"
    },
    {
        number: "68",
        symbol: "Er",
        weight: "167.259",
        name: "Erbium",
        type: "lanthanide",
        year: "1842"
    },
    {
        number: "69",
        symbol: "Tm",
        weight: "168.934",
        name: "Thulium",
        type: "lanthanide",
        year: "1879"
    },
    {
        number: "70",
        symbol: "Yb",
        weight: "173.04",
        name: "Ytterbium",
        type: "lanthanide",
        year: "1878"
    },
    {
        number: "71",
        symbol: "Lu",
        weight: "174.967",
        name: "Lutetium",
        type: "lanthanide",
        year: "1907"
    },
    {
        number: "72",
        symbol: "Hf",
        weight: "178.49",
        name: "Hafnium",
        type: "transition metal",
        year: "1923"
    },
    {
        number: "73",
        symbol: "Ta",
        weight: "180.948",
        name: "Tantalum",
        type: "transition metal",
        year: "1802"
    },
    {
        number: "74",
        symbol: "W",
        weight: "183.84",
        name: "Tungsten",
        type: "transition metal",
        year: "1783"
    },
    {
        number: "75",
        symbol: "Re",
        weight: "186.207",
        name: "Rhenium",
        type: "transition metal",
        year: "1925"
    },
    {
        number: "76",
        symbol: "Os",
        weight: "190.23",
        name: "Osmium",
        type: "transition metal",
        year: "1803"
    },
    {
        number: "77",
        symbol: "Ir",
        weight: "192.217",
        name: "Iridium",
        type: "transition metal",
        year: "1803"
    },
    {
        number: "78",
        symbol: "Pt",
        weight: "195.078",
        name: "Platinum",
        type: "transition metal",
        year: "1735"
    },
    {
        number: "79",
        symbol: "Au",
        weight: "196.967",
        name: "Gold",
        type: "transition metal",
        year: "ancient"
    },
    {
        number: "80",
        symbol: "Hg",
        weight: "200.59",
        name: "Mercury",
        type: "transition metal",
        year: "ancient"
    },
    {
        number: "81",
        symbol: "Tl",
        weight: "204.383",
        name: "Thallium",
        type: "basic metal",
        year: "1861"
    },
    {
        number: "82",
        symbol: "Pb",
        weight: "207.2",
        name: "Lead",
        type: "basic metal",
        year: "ancient"
    },
    {
        number: "83",
        symbol: "Bi",
        weight: "208.980",
        name: "Bismuth",
        type: "basic metal",
        year: "ancient"
    },
    {
        number: "84",
        symbol: "Po",
        weight: "209.0",
        name: "Polonium",
        type: "semimetal",
        year: "1898"
    },
    {
        number: "85",
        symbol: "At",
        weight: "210.0",
        name: "Astatine",
        type: "halogen",
        year: "1940"
    },
    {
        number: "86",
        symbol: "Rn",
        weight: "222.0",
        name: "Radon",
        type: "noble gas",
        year: "1900"
    },
    {
        number: "87",
        symbol: "Fr",
        weight: "223.0",
        name: "Francium",
        type: "alkali metal",
        year: "1939"
    },
    {
        number: "88",
        symbol: "Ra",
        weight: "226.0",
        name: "Radium",
        type: "alkaline earth",
        year: "1898"
    },
    {
        number: "89",
        symbol: "Ac",
        weight: "227.0",
        name: "Actinium",
        type: "actinide",
        year: "1899"
    },
    {
        number: "90",
        symbol: "Th",
        weight: "232.038",
        name: "Thorium",
        type: "actinide",
        year: "1829"
    },
    {
        number: "91",
        symbol: "Pa",
        weight: "231.036",
        name: "Protactinium",
        type: "actinide",
        year: "1913"
    },
    {
        number: "92",
        symbol: "U",
        weight: "238.029",
        name: "Uranium",
        type: "actinide",
        year: "1789"
    },
    {
        number: "93",
        symbol: "Np",
        weight: "237.0",
        name: "Neptunium",
        type: "actinide",
        year: "1940"
    },
    {
        number: "94",
        symbol: "Pu",
        weight: "244.0",
        name: "Plutonium",
        type: "actinide",
        year: "1940"
    },
    {
        number: "95",
        symbol: "Am",
        weight: "243.0",
        name: "Americium",
        type: "actinide",
        year: "1944"
    },
    {
        number: "96",
        symbol: "Cm",
        weight: "247.0",
        name: "Curium",
        type: "actinide",
        year: "1944"
    },
    {
        number: "97",
        symbol: "Bk",
        weight: "247.0",
        name: "Berkelium",
        type: "actinide",
        year: "1949"
    },
    {
        number: "98",
        symbol: "Cf",
        weight: "251.0",
        name: "Californium",
        type: "actinide",
        year: "1950"
    },
    {
        number: "99",
        symbol: "Es",
        weight: "252.0",
        name: "Einsteinium",
        type: "actinide",
        year: "1952"
    },
    {
        number: "100",
        symbol: "Fm",
        weight: "257.0",
        name: "Fermium",
        type: "actinide",
        year: "1952"
    },
    {
        number: "101",
        symbol: "Md",
        weight: "258.0",
        name: "Mendelevium",
        type: "actinide",
        year: "1955"
    },
    {
        number: "102",
        symbol: "No",
        weight: "259.0",
        name: "Nobelium",
        type: "actinide",
        year: "1958"
    },
    {
        number: "103",
        symbol: "Lr",
        weight: "262.0",
        name: "Lawrencium",
        type: "actinide",
        year: "1961"
    },
    {
        number: "104",
        symbol: "Rf",
        weight: "261.0",
        name: "Rutherfordium",
        type: "transition metal",
        year: "1964"
    },
    {
        number: "105",
        symbol: "Db",
        weight: "262.0",
        name: "Dubnium",
        type: "transition metal",
        year: "1967"
    },
    {
        number: "106",
        symbol: "Sg",
        weight: "266.0",
        name: "Seaborgium",
        type: "transition metal",
        year: "1974"
    },
    {
        number: "107",
        symbol: "Bh",
        weight: "264.0",
        name: "Bohrium",
        type: "transition metal",
        year: "1981"
    },
    {
        number: "108",
        symbol: "Hs",
        weight: "277.0",
        name: "Hassium",
        type: "transition metal",
        year: "1984"
    },
    {
        number: "109",
        symbol: "Mt",
        weight: "268.0",
        name: "Meitnerium",
        type: "theoretical",
        year: "1982"
    },
    {
        number: "110",
        symbol: "Ds",
        weight: "281.0",
        name: "Darmstadtium",
        type: "theoretical",
        year: "1994"
    },
    {
        number: "111",
        symbol: "Rg",
        weight: "282.0",
        name: "Roentgenium",
        type: "theoretical",
        year: "1994"
    },
    {
        number: "112",
        symbol: "Cn",
        weight: "285.0",
        name: "Copernicium",
        type: "transition metal",
        year: "1996"
    },
    {
        number: "113",
        symbol: "Nh",
        weight: "286.0",
        name: "Nihonium",
        type: "theoretical",
        year: "2004"
    },
    {
        number: "114",
        symbol: "Fl",
        weight: "289.0",
        name: "Flerovium",
        type: "theoretical",
        year: "1998"
    },
    {
        number: "115",
        symbol: "Mc",
        weight: "290.0",
        name: "Moscovium",
        type: "theoretical",
        year: "2003"
    },
    {
        number: "116",
        symbol: "Lv",
        weight: "293.0",
        name: "Livermorium",
        type: "theoretical",
        year: "2000"
    },
    {
        number: "117",
        symbol: "Ts",
        weight: "294.0",
        name: "Tennessine",
        type: "theoretical",
        year: "2010"
    },
    {
        number: "118",
        symbol: "Og",
        weight: "294.0",
        name: "Oganesson",
        type: "theoretical",
        year: "2002"
    }
];