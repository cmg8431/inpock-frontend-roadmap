‘script’ 태그

`<script>` 태그를 이용하면 자바스크립트 프로그램을 HTML 문서 대부분의 위치에 삽입할 수 있다.

```javascript
<!DOCTYPE HTML>
<html>
    <body>
        <p>스크립트 전</p>
            <script>
                alert( 'Hello, world!' );
            </script>

        <p>스크립트 후</p>
    </body>

</html>
```

type 과 language 속성은 필수가 아니며, 외부 스크립트 파일은 `<script src="path/to/script.js"></script>`와 같이 삽입한다.

`use strict`를 꼭 사용해야 하는가?
"당연히 사용해야 하는 거 아니야"라는 생각이 많이 들겠지만 꼭 그렇지만은 않다. 모던 자바스크립트는 클래스와 모듈이라 불리는 진일보한 구조를 제공한다. 따라서 이 둘을 사용하면 `use strict`가 자동으로 적용되므로 따로 붙일 필요가 없다.

변수란 데이터를 저장할때 쓰이는 이름이 붙은 저장소이다. 자바스크립트에선 `let`, `const`, `var`라는 키워드를 사용해 변수를 생성한다.

아래 문(statement)은 'message’라는 이름을 가진 변수를 생성(선언)한다.

```javascript
let message;
```

이제 할당 연산자 =를 사용해 변수 안에 데이터를 저장해보자.

```javascript
let message;
message = "Hello"; // 문자열을 저장합니다.
```

문자열이 변수와 연결된 메모리 영역에 저장되었기 때문에, 변수명을 이용해 문자열에 접근할 수 있게 되었다.

```javascript
let message;
message = "Hello!";

alert(message); // 변수에 저장된 값을 보여줍니다.
```

아래와 같이 변수 선언과 값 할당을 한 줄에 작성할 수도 있다.

```javascript

let message = 'Hello!'; // 변수를 정의하고 값을 할당합니다.

alert(message); // Hello!
한 줄에 여러 변수를 선언하는 것도 가능합니다.

let user = 'John', age = 25, message = 'Hello';
```

이렇게 작성하면 코드가 좀 더 짧아 보이긴 하지만 권장하는 방법은 아니다. 가독성을 위해 한 줄에는 하나의 변수를 작성하면 좋다.

한 줄에 한 개의 변수를 작성하면 코드가 길어 보이지만 읽기엔 편하다.

```javascript
let user = "John";
let age = 25;
let message = "Hello";
```

어떤 사람들은 이런 방식으로도 변수를 정의한다.

```javascript
let user = "John",
  age = 25,
  message = "Hello";
```

‘쉼표가 먼저 오는’ 방식으로 작성하는 사람도 있다.

```javascript
let user = "John",
  age = 25,
  message = "Hello";
```
