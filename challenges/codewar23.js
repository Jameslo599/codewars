// List Filtering

function filter_list(l) {
    const result = [];
    l.map((e, i) => typeof e === "string" ? '' : result.push(l[i]));
    return result
  }