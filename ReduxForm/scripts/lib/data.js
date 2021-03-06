const appData = [
  {
    id: 1,
    name: "A1",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: "Male",
    type: "adult",
    insertDateTime: "1994-11-23T08:15:30-05:00",
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 2,
    name: "A2",
    surname: "B",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "adult",
    insertDateTime: "1994-11-05T13:15:30Z",
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 3,
    name: "A3",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 4,
    name: "A4",
    surname: "Dede Dede Dede Dede Dede Dede Dede Dede",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 3,
  },
  {
    id: 5,
    name: "A5",
    surname: "C",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 6,
    name: "A6",
    surname: "C",
    isMarried: true,
    birthDate: new Date(1989, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 5,
  },
  {
    id: 11,
    name: "A1",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: "Male",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 21,
    name: "A2",
    surname: "B",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 31,
    name: "A3",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 41,
    name: "A4",
    surname: "Dede",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 3,
  },
  {
    id: 51,
    name: "A5",
    surname: "C",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 61,
    name: "A6",
    surname: "C",
    isMarried: true,
    birthDate: new Date(1989, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 5,
  },
  {
    id: 12,
    name: "A1",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: "Male",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 22,
    name: "A2",
    surname: "B",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 32,
    name: "A3",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 42,
    name: "A4",
    surname: "Dede",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 3,
  },
  {
    id: 52,
    name: "A5",
    surname: "C",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 62,
    name: "A6",
    surname: "C",
    isMarried: true,
    birthDate: new Date(1989, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 5,
  },
  {
    id: 13,
    name: "A1",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: "Male",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 23,
    name: "A2",
    surname: "B",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 33,
    name: "A3",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 43,
    name: "A4",
    surname: "Dede",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 3,
  },
  {
    id: 53,
    name: "A5",
    surname: "C",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 63,
    name: "A6",
    surname: "C",
    isMarried: true,
    birthDate: new Date(1989, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 5,
  },
  {
    id: 14,
    name: "A1",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: "Male",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 24,
    name: "A2",
    surname: "B",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 34,
    name: "A3",
    surname: "B",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 1,
  },
  {
    id: 44,
    name: "A4",
    surname: "Dede",
    isMarried: true,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 3,
  },
  {
    id: 54,
    name: "A5",
    surname: "C",
    isMarried: false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  },
  {
    id: 64,
    name: "A6",
    surname: "C",
    isMarried: true,
    birthDate: new Date(1989, 1, 1),
    birthCity: 34,
    sex: "Female",
    type: "child",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
    parentId: 5,
  },
];
const appColumns = [
  {
    title: "Ad??",
    field: "name",
    filterPlaceholder: "Ad?? filter",
    tooltip: "This is tooltip text",
    editPlaceholder: "This is placeholder",
    maxWidth: 50,
  },
  {
    title: "Soyad??",
    field: "surname",
    initialEditValue: "test",
    tooltip: "This is tooltip text",
    editable: "never",
    resizable: false,
  },
  { title: "Evli", field: "isMarried" },
  {
    title: "Cinsiyet",
    field: "sex",
    disableClick: true,
    editable: "onAdd",
  },
  { title: "Try To Revmoe", field: "type", removable: true, editable: "never" },
  { title: "Do??um Y??l??", field: "birthDate", type: "date" },
  {
    title: "Do??um Yeri",
    field: "birthCity",
    lookup: { 34: "??stanbul", 0: "??anl??urfa" },
  },
  { title: "Kay??t Tarihi", field: "insertDateTime", type: "datetime" },
  { title: "Zaman", field: "time", type: "time" },
];
