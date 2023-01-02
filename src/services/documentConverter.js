export function documentToJson(fields) {
  let result = {};
  for (let f in fields) {
    let key = f, value = fields[f],
        isDocumentType = ['stringValue', 'booleanValue', 'doubleValue',
            'integerValue', 'timestampValue', 'mapValue', 'arrayValue'].find(t => t === key);
    if (isDocumentType) {
        let item = ['stringValue', 'booleanValue', 'doubleValue', 'integerValue', 'timestampValue']
            .find(t => t === key)
        if (item)
            return value;
        else if ('mapValue' == key)
            return documentToJson(value.fields || {});
        else if ('arrayValue' == key) {
            let list = value.values;
            return !!list ? list.map(l => documentToJson(l)) : [];
        }
    } else {
        result[key] = documentToJson(value)
    }
  }
  return result;
}

export function jsonToDocument(value) {
  if (!isNaN(value)) {
      if (value.toString().indexOf('.') != -1)
          return { 'doubleValue': value };
      else
          return { 'integerValue': value };
  } else if (value === 'true' || value === 'false' || typeof value == 'boolean') {
      return { 'booleanValue': value };
  } else if (Date.parse(value)) {
      return { 'timestampValue': value };
  } else if (typeof value == 'string') {
      return { 'stringValue': value };
  } else if (value && value.constructor === Array) {
      return { 'arrayValue': { values: value.map(v => jsonToDocument(v)) } };
  } else if (typeof value === 'object') {
      let obj = {};
      for (let o in value) {
          obj[o] = jsonToDocument(value[o]);
      }
      return { 'mapValue': { fields: obj } };
  }

}
