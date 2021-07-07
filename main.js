function isJSON(str) {  
  try {
      JSON.parse(str)   
    } catch (err) {
      return false;
    }
  return true;
  }

isJSON('{"name": "Michael", "age": 45}'); // true
isJSON('{name: "Michael", age: 45}'); // false
isJSON("false"); // true
isJSON("abc"); // false
