/**
 * NeuroNova Lab - Central Registry Handler
 * Target Sheet ID: 1X5O8pLkZXHzJQ0QrJNT1PNjj1BkS86cq9eeUltlxwCs
 */

function doPost(e) {
  try {
    const spreadsheetId = "1X5O8pLkZXHzJQ0QrJNT1PNjj1BkS86cq9eeUltlxwCs";
    const sheet = SpreadsheetApp.openById(spreadsheetId).getSheets()[0];
    const data = JSON.parse(e.postData.contents);
    
    // Add Metadata
    data.timestamp = new Date();
    
    // Get existing headers
    let headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0];
    
    // Initialize headers if empty
    if (headers[0] === "") {
      headers = Object.keys(data);
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    } else {
      // Auto-expand headers if a new field (like 'portfolio') is detected
      Object.keys(data).forEach(key => {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
          sheet.getRange(1, headers.length).setValue(key);
        }
      });
    }
    
    // Map data values to the strictly ordered header positions
    const row = headers.map(h => data[h] || "");
    
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Simple test for health check
function doGet() {
  return ContentService.createTextOutput("NeuroNova Transmission Link Active.");
}
