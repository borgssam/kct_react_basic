// 교재 4.6의 코드 블록을 순서대로 옮겼다.
// 실행: Live Server로 같은 이름의 .html을 열고 Console 확인, 또는 터미널에서 node 4_6_모던_JavaScript_문법과_모듈_01_예제_모음.js

// ===== 옵셔널 체이닝 =====
const user = { profile: { name: "홍길동" } };
console.log(user.profile?.name);       // "홍길동"
console.log(user.address?.city);       // undefined (오류 없이 안전하게)
// 옵셔널 체이닝이 없으면: user.address.city → address가 없으면 바로 오류 발생

// ===== 널 병합 연산자 =====
const name = user.nickname ?? "익명"; // nickname이 null/undefined일 때만 "익명" 사용
const name2 = user.nickname || "익명"; // nickname이 빈 문자열("")이어도 "익명"으로 바뀜(의도와 다를 수 있음)
console.log(name, name2);

// ===== Set과 Map =====
const uniqueNumbers = new Set([1, 2, 2, 3, 3]);
console.log([...uniqueNumbers]); // [1, 2, 3] — 중복이 자동으로 제거됨

const userRoles = new Map();
userRoles.set("홍길동", "admin");
userRoles.set("김철수", "user");
console.log(userRoles.get("홍길동")); // "admin"

// ===== 예외 처리와 try, catch, finally =====
try {
  const result = 10 / 0; // Infinity, 이건 오류가 아님
  JSON.parse("이건 잘못된 JSON"); // 여기서 실제 오류 발생
} catch (error) {
  console.error("오류 발생:", error.message);
} finally {
  console.log("성공하든 실패하든 항상 실행됨");
}
