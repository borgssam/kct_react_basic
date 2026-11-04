// 교재 4.2의 코드 블록을 순서대로 옮겼다.
// 실행: Live Server로 같은 이름의 .html을 열고 Console 확인, 또는 터미널에서 node 4_2_변수_자료형과_연산자_01_예제_모음.js
// 여러 예제에 같은 변수·함수 이름(name, age, greet, add 등)이 나와서, 예제마다 { } 블록으로 감싸 이름이 겹치지 않게 했다.
// 그래서 "전역 변수" 예제의 globalVar도 이 파일에서는 블록 안 변수다. 진짜 전역 동작은 Console에 직접 입력해 확인한다.

// ===== var, let, const의 차이 =====
{
  var a = 1; // 옛 방식, 블록 스코프를 무시해 혼란을 일으킴 — 요즘은 거의 안 씀
  let b = 2; // 재할당 가능
  const c = 3; // 재할당 불가능
  console.log(a, b, c);
}

// ===== 변수 선언과 초기화 =====
{
  let score; // 선언만(초기화 안 함) → undefined
  score = 90; // 초기화
  let total = 0; // 선언과 초기화를 한 줄에
  console.log(score, total);
}

// ===== 기본형과 참조형의 개념 =====
{
  let x = 10;
  let y = x; // 값이 복사됨
  y = 20;
  console.log(x); // 10 (영향 없음)

  let obj1 = { count: 10 };
  let obj2 = obj1; // 참조(같은 객체를 가리키는 주소)가 복사됨
  obj2.count = 20;
  console.log(obj1.count); // 20 (같은 객체라 함께 바뀜!)
}

// ===== 문자열, 숫자, 불리언 =====
{
  let name = "홍길동";   // string
  let age = 25;          // number
  let isStudent = true;  // boolean
  console.log(name, age, isStudent);
}

// ===== null과 undefined =====
{
  let a; // undefined — 아직 값이 할당되지 않음(자바스크립트가 자동으로 넣음)
  let b = null; // null — 개발자가 "일부러 비워둔다"는 의도로 직접 넣음
  console.log(a, b);
}

// ===== 산술, 비교, 논리 연산자 =====
{
  console.log(10 + 3); // 13 (산술: + - * / % **)
  console.log(10 > 3); // true (비교: > < >= <= === !==)
  console.log(true && false); // false (논리: && || !)
}

// ===== 동등 연산자와 일치 연산자 =====
{
  console.log(1 == "1");  // true  (==는 타입을 바꿔서라도 비교, 예측하기 어려움)
  console.log(1 === "1"); // false (===는 타입까지 똑같아야 true, 항상 이것을 쓴다)
}

// ===== 형 변환과 암묵적 변환 =====
{
  console.log(String(100));    // "100" (명시적 변환)
  console.log(Number("100"));  // 100
  console.log("5" + 3);        // "53" (암묵적 변환 — 문자열과 합쳐져 문자열이 됨, 흔한 실수 원인)
  console.log("5" - 3);        // 2   (암묵적 변환 — 빼기는 숫자로 해석됨)
}

// ===== 템플릿 리터럴 =====
{
  let name = "홍길동";
  console.log(`안녕하세요, ${name}님!`); // 백틱(`)과 ${}로 변수를 문자열에 끼워넣는다
}

// ===== 삼항 연산자와 단축 평가 =====
{
  let age = 20;
  let result = age >= 18 ? "성인" : "미성년자"; // 조건 ? 참일때 : 거짓일때

  let userName = ""; // 사용자가 이름을 입력하지 않은 상황
  let name2 = userName || "익명"; // userName이 falsy(빈 문자열 등)면 "익명" 사용
  console.log(result, name2);
}
