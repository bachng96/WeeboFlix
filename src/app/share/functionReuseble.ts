export function dynamicSort(property: string) {
  var sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result =
      a[property] > b[property] ? -1 : a[property] < b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export function dynamicFilterByType(
  array: [],
  property: string,
  limit: number = 5
) {
  let a = array.filter((item: any) => item.type === property);
  return a.slice(0, limit);
}
