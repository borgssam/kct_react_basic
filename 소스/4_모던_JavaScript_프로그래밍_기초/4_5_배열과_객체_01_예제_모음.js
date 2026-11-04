// 교재 4.5의 코드 블록을 순서대로 옮겼다.
// 실행: Live Server로 같은 이름의 .html을 열고 Console 확인, 또는 터미널에서 node 4_5_배열과_객체_01_예제_모음.js

// ===== 배열 생성과 요소 접근 =====
const fruits = ["사과", "바나나", "포도"];
console.log(fruits[0]); // "사과" (인덱스는 0부터 시작)
console.log(fruits.length); // 3

// ===== 배열 요소 추가, 수정, 삭제 =====
fruits.push("딸기");    // 맨 뒤에 추가
fruits.unshift("수박");  // 맨 앞에 추가
fruits[1] = "오렌지";    // 수정
fruits.pop();           // 맨 뒤 삭제
fruits.splice(1, 1);    // 인덱스 1부터 1개 삭제
console.log(fruits);

// ===== map, filter, find =====
const scores = [85, 92, 68, 95];

const doubled = scores.map((s) => s * 2);        // 전부 변환한 새 배열
const passed = scores.filter((s) => s >= 80);     // 조건에 맞는 것만 모은 새 배열
const first90 = scores.find((s) => s >= 90);      // 조건에 맞는 첫 번째 값(없으면 undefined)
console.log(doubled, passed, first90);

// ===== some, every, reduce =====
console.log(scores.some((s) => s >= 90));  // true (하나라도 조건을 만족하면 true)
console.log(scores.every((s) => s >= 60)); // true (전부 조건을 만족해야 true)
console.log(scores.reduce((sum, s) => sum + s, 0)); // 340 (왼쪽부터 누적 계산)

// ===== 객체 생성과 속성 접근 =====
const user = {
  name: "홍길동",
  age: 25,
  greet() {
    console.log(`안녕, ${this.name}!`);
  },
};
console.log(user.name);     // 점 표기법
console.log(user["age"]);   // 대괄호 표기법(속성명이 변수에 담겨 있을 때 유용)
user.greet();

// ===== 구조 분해 할당 =====
const { name, age } = user; // 객체에서 필요한 속성만 꺼내 변수로
const [first, second] = ["사과", "바나나"]; // 배열에서도 같은 방식
console.log(name, age, first, second);

// ===== 전개 구문과 나머지 매개변수 =====
const newUser = { ...user, age: 26 }; // 전개: 기존 속성 복사 후 일부만 덮어쓰기
function sum(...numbers) { // 나머지: 여러 인자를 배열 하나로 모음
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
console.log(newUser);

// ===== 얕은 복사와 참조의 이해 =====
const original = { profile: { age: 25 } };
const copy = { ...original }; // 얕은 복사 — 바로 아래 단계까지만 새로 복사됨
copy.profile.age = 30;
console.log(original.profile.age); // 30 — profile 객체 자체는 여전히 공유됨!

// ===== 불변성을 고려한 데이터 처리 =====
// 나쁜 예: 원본을 직접 바꿈
scores.push(100);

// 좋은 예: 원본은 그대로 두고 새 배열을 만듦
const newScores = [...scores, 100];
console.log(scores, newScores);
