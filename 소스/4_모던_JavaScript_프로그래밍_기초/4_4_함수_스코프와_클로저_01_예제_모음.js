// 교재 4.4의 코드 블록을 순서대로 옮겼다.
// 실행: Live Server로 같은 이름의 .html을 열고 Console 확인, 또는 터미널에서 node 4_4_함수_스코프와_클로저_01_예제_모음.js
// 여러 예제에 같은 변수·함수 이름(name, age, greet, add 등)이 나와서, 예제마다 { } 블록으로 감싸 이름이 겹치지 않게 했다.
// 그래서 "전역 변수" 예제의 globalVar도 이 파일에서는 블록 안 변수다. 진짜 전역 동작은 Console에 직접 입력해 확인한다.

// ===== 함수 선언식과 함수 표현식 =====
{
  // 함수 선언식 — 코드 어디서든 먼저 써도 호출 가능(호이스팅)
  function greet(name) {
    return `안녕, ${name}!`;
  }

  // 함수 표현식 — 변수에 함수를 "값"으로 담는다
  const greet2 = function (name) {
    return `안녕, ${name}!`;
  };
  console.log(greet("홍길동"), greet2("홍길동"));
}

// ===== 화살표 함수 =====
{
  const greet3 = (name) => `안녕, ${name}!`;
  const add = (a, b) => a + b;
  const sayHi = () => console.log("hi"); // 매개변수 없으면 괄호만
  console.log(greet3("홍길동"), add(1, 2));
  sayHi();
}

// ===== 매개변수와 반환값 =====
{
  function add(a, b) {
    return a + b; // return을 만나는 즉시 함수 실행이 끝나고 값을 돌려준다
  }
  console.log(add(3, 4));
}

// ===== 기본 매개변수 =====
{
  function greet(name = "익명") {
    return `안녕, ${name}!`;
  }
  console.log(greet()); // "안녕, 익명!" — 인자를 안 줘도 기본값이 쓰인다
}

// ===== 지역 변수와 전역 변수 =====
{
  let globalVar = "전역"; // 함수 밖에서 선언 — 어디서든 접근 가능

  function test() {
    let localVar = "지역"; // 함수 안에서 선언 — 이 함수 안에서만 존재
    console.log(globalVar); // 접근 가능
  }
  // 아래 줄은 교재가 보여주는 "의도된 오류"다. 다음 예제들이 계속 실행되도록 try...catch(4.6절)로 감쌌다.
  try {
    console.log(localVar); // 오류! 함수 밖에서는 지역 변수에 접근 불가
  } catch (error) {
    console.error(error.name + ":", error.message);
  }
  test();
}

// ===== 렉시컬 스코프 =====
{
  function outer() {
    let x = 10;
    function inner() {
      console.log(x); // 바깥 함수의 변수에 접근 가능
    }
    inner();
  }
  outer();
}

// ===== 콜백 함수 =====
{
  function processUser(name, callback) {
    const greeting = `안녕, ${name}!`;
    callback(greeting);
  }
  processUser("홍길동", (msg) => console.log(msg));
}

// ===== 고차 함수 =====
{
  function multiplier(factor) {
    return (num) => num * factor; // 함수를 반환
  }
  const double = multiplier(2);
  console.log(double(5)); // 10
}

// ===== 클로저의 개념과 활용 =====
{
  function createCounter() {
    let count = 0; // 이 변수는 밖에서 직접 접근할 수 없다
    return function () {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2 (count가 기억되고 있다!)
}
