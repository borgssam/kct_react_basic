// 교재 4.3의 코드 블록을 순서대로 옮겼다.
// 실행: Live Server로 같은 이름의 .html을 열고 Console 확인, 또는 터미널에서 node 4_3_조건문과_반복문_01_예제_모음.js

// ===== if, else if, else =====
let score = 85;

if (score >= 90) {
  console.log("A등급");
} else if (score >= 80) {
  console.log("B등급");
} else {
  console.log("C등급 이하");
}

// ===== switch문 =====
let day = "mon";

switch (day) {
  case "mon":
  case "tue":
  case "wed":
  case "thu":
  case "fri":
    console.log("평일");
    break;
  case "sat":
  case "sun":
    console.log("주말");
    break;
  default:
    console.log("알 수 없음");
}

// ===== for, while, do while =====
for (let i = 0; i < 5; i++) {
  console.log(i); // 0 1 2 3 4
}

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

let j = 0;
do {
  console.log(j); // 조건 확인 전에 일단 한 번 실행됨
  j++;
} while (j < 5);

// ===== for...of와 for...in =====
const fruits = ["사과", "바나나", "포도"];
for (const fruit of fruits) {
  console.log(fruit); // 값 자체를 순회(배열에 주로 씀)
}

const user = { name: "홍길동", age: 25 };
for (const key in user) {
  console.log(key, user[key]); // 키를 순회(객체에 주로 씀)
}

// ===== break와 continue =====
for (let i = 0; i < 10; i++) {
  if (i === 5) break;    // 반복문 자체를 즉시 종료
  if (i % 2 === 0) continue; // 이번 회차만 건너뛰고 다음 반복으로
  console.log(i); // 1, 3
}

// ===== 중첩 반복문 =====
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i}-${j}`);
  }
}

// ===== 조건문과 반복문을 활용한 데이터 처리 =====
const scores = [85, 92, 68, 95, 73];
let passCount = 0;

for (const score of scores) {
  if (score >= 80) {
    passCount++;
  }
}
console.log(`80점 이상: ${passCount}명`);
