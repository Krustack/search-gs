function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function processForm(formObject) {
  if (formObject.searchtext) {
    return search(formObject.searchtext);
  }
}

function search(searchtext) {
  const spreadsheetId = '';
  const dataRange = 'ชีต1!A2:G1000';
  const data = Sheets.Spreadsheets.Values.get(spreadsheetId, dataRange).values;

  return data.filter(studentData => studentData[2].includes(searchtext)).map(filterStdData => ({
      sportId: filterStdData[0],
      firstName: filterStdData[2],
      surName: filterStdData[3],
      sport: filterStdData[4],
      rank: filterStdData[5],
      certURL: filterStdData[6]
  }))
}
