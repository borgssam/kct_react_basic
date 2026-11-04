// 가져오는 쪽(main.js)
import multiply, { add, subtract } from './math.js';
// default export는 중괄호 없이, named export는 중괄호와 정확한 이름으로

console.log(add(2, 3));       // 5
console.log(subtract(5, 2));  // 3
console.log(multiply(4, 5));  // 20
