/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []){
    var some = {};
    var x, y, t;
    var count = 0;
    var flag = false;
    function iter(z, c){
      if (c == 3 && z == current && (x != y && x != t && y != t)){
         ++count; 
         flag = true;
         return; 
      }
      if (c == 3) return;
      var next = some[z];
      if (c == 0)
        x = next;
      if (c == 1)
        y = next;
      if (c == 2)
        t = next;
      iter(next, ++c);
      if (flag) 
        some[z] = null;
    }
    for (var z = 0; z < preferences.length; ++z){
      some[z + 1] = preferences[z];
    }

    for (var z = 1; z <= preferences.length; z++){
      if (some[z] == null) continue;
      current = z;
      iter(z, 0);
      flag = false;
    }
    return count;
  };
 

