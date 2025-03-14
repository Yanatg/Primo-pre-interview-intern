// merge.ts

export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const merged: number[] = [];
    let i = 0;
    let j = 0;
    let k = collection3.length - 1;
  
    while (i < collection1.length && j < collection2.length && k >= 0) {
      if (collection1[i] <= collection2[j] && collection1[i] <= collection3[k]) {
        merged.push(collection1[i]);
        i++;
      } else if (collection2[j] <= collection1[i] && collection2[j] <= collection3[k]) {
        merged.push(collection2[j]);
        j++;
      } else {
        merged.push(collection3[k]);
        k--;
      }
    }
  
    while (i < collection1.length && j < collection2.length) {
      if (collection1[i] <= collection2[j]) {
        merged.push(collection1[i]);
        i++;
      } else {
        merged.push(collection2[j]);
        j++;
      }
    }
  
    while (i < collection1.length && k >= 0) {
      if (collection1[i] <= collection3[k]) {
        merged.push(collection1[i]);
        i++;
      } else {
        merged.push(collection3[k]);
        k--;
      }
    }
  
    while (j < collection2.length && k >= 0) {
      if (collection2[j] <= collection3[k]) {
        merged.push(collection2[j]);
        j++;
      } else {
        merged.push(collection3[k]);
        k--;
      }
    }
  
    while (i < collection1.length) {
      merged.push(collection1[i]);
      i++;
    }
  
    while (j < collection2.length) {
      merged.push(collection2[j]);
      j++;
    }
  
    while (k >= 0) {
      merged.push(collection3[k]);
      k--;
    }
  
    return merged;
  }