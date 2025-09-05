// simple CSV -> JSON parser (handles commas, quoted fields)
export function csvToJson(csvText) {
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = parseCsvLine(lines[0]);
  const rows = lines.slice(1).map(line => {
    const vals = parseCsvLine(line);
    const obj = {};
    headers.forEach((h, i) => { obj[h.trim()] = vals[i] !== undefined ? vals[i].trim() : ""; });
    return obj;
  });
  return rows;
}

// parse a single CSV line (handles quoted strings)
function parseCsvLine(line) {
  const result = [];
  let cur = "", inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"' ) {
      if (inQuotes && line[i+1] === '"') { cur += '"'; i++; } // escaped quote
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(cur);
      cur = "";
    } else cur += ch;
  }
  result.push(cur);
  return result;
}
