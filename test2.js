//2차 수행 정답

const fruits = ['apple','banana','cherry','apple'];

//1. forEach를 이용하여 fruits의 모든 우너소를 출력하세요
fruits.forEach(function (f){
  console.log(f)
});
//2. 'grape'를 배열의 맨 끝에 추가하세요
fruits.push('grape');
//3. 배열의 맨 끝 요소를 제거하고 제거된 요소를 출력하세요.
const a = fruits.pop();
console.log(a);
//4. 다음 한수를 arrow function형태로 변형하시오
sub = function(n1,n2){
  return n1+n2;
}
//2)
sub = (n1,n2) => {
  return n1+n2;
}
//3)
sub = (n1,n2) => n1+n2;
//6
0 === false //false
//7. 메모리, 파일 시스템, 프로세스, 네트워크 인터페이스 등 과 같은 운영 체제의 기본 리소스와 상호 작용하는 방법을 제공
require('os');

//8. node의 전역변수로, 실행 중인 파일이 포함된 디렉토리의 절대경로를 나타내는 것은?
__dirname
//9
const str = "Hellow world";
//1)world 부분을 everyone으로 대체하여 출력하시오
console.log(str.replace('world','everyone'));
//2)str에 Hello가 포함되었는지의 여부를 출력하는 코드 작성
console.log(str.includes('Hello'));

