# vue-project
뷰 공부용

## 목차

1. [VUE APP만들기](#vue-app만들기)
2. [webpack](#webpack)
3. [package.json](#packagejson)
4. [package-lock.json](#package-lockjson)
5. [패키지 관리자](#패키지-관리자)
5. [node_modules](#node_modules)
6. [eslint](#eslint)
7. [플러그인](#플러그인)






## VUE APP만들기
    1. vue-cli
        - [공식doc](https://cli.vuejs.org/guide/)
        - vue 프로젝트 생성, 관리 명령어 인터페이스
        - 폴더구조, webpack설정, 라이브러리 설정, lint, build등을 셋팅
        - 패키지 매니저로 설치 가능
        - 설치
        ```
        npm install -g @vue/cli
        # OR
        yarn global add @vue/cli
        ```
    2. vue 프로젝트 작성
        ```
        vue create 프로젝트명
        ```
## webpack
    1. 개요
        - [공식doc](https://webpack.kr/concepts/)
        - 모던 JavaScript 애플리케이션을 위한 정적 모듈 번들러
            - 번들러:  필요한 의존성을 추적하여 해당하는 의존성들을 그룹핑 해주는 도구
    2. 사용 목적
        - 리소스파일이 많아짐으로써 저하되는 로딩속도의 향상을 위해
        - 복수의 모듈 로딩중 발생하는 전역변수 충돌, 로딩 순차, 복잡도등의 문제 해소
## package.json
    1. 개요
        - 프로젝트내 정보를 정의하며, 프로젝트내 의존하는 패키지 정보를 명시하는 json형식의 파일
    2. 작성
        - 수동으로 작성하는 방법이 있으나 패키지 매니저등을 이용한 작성 방법이 있다
            ```
            npm init

            // vue-cli를 사용하여 작성된 프로젝트는 자동으로 작성된다.
            ```
    3. 내용
        1. 프로젝트 정보 정의
            - name: 프로젝트 이름 정의, 소문자로 이루어져있으며 -, _를 사용가능하다.
            - version: [시맨틱 버저닝](https://velog.io/@iamjoo/Semantic-Versioning%EC%9D%B4%EB%9E%80) 형식으로 작성
            - description: 패키지에 대한 설명(문자열로 기술)
            - main: 패키지 진입지점의 파일 명시(미지정인 경우 root내 index.js로 자동 지정)
            - scripts: 패키지 생명주기 커맨드에 대한 명시(build, dev등의 커맨드를 담은 변수와 같은 것)
        2. 패키지
            - package.json내에서 명시되어있는 프로젝트내 의존하는 패키지(모든 모듈이 패키지로 명시되는 것은 아님)
            - 패키지 지정을 위하여 아래의 계층에 명시(명시되어있는 패키지는 npm install등의 패키지 관리자 명령어로 설치)
                1. dependencies: 프로덕션 환경에서 응용 프로그램에 필요한 패키지
                    ```
                    // 일반적인 설치시 명시
                    npm install xxx
                    ```
                2. devDependencies: 로컬 개발 및 테스트에만 필요한 패키지
                    ```
                    // 패키지 매니저의 설치 옵션을 사용하여 명시
                    npm install --sava-dev xxx
                    ```
## package-lock.json
    - npm을 통하여 모듈 설치시 해당 모듈설치 당시의 버전등의 정보를 명시한 것
    - -lock.json을 통하여 의존 패키지 명시가 범위성을 갖고 있는(~, ^등의)경우 통일된 버전의 패키지를 설치하여 사용 할 수 있게끔 함
        - 협업관계의 프로젝트인 경우, 명시한 패키지의 정확한 버전관리를 위하여 필요
## 패키지 관리자
    - 프로젝트내 의존하는 패키지를 관리하는 매니저프로그램
    1. npm(node package manager)
        - 런타임동안 노드환경내 사용되는 패키지를 관리
        - 패키지 설치시 해당 패키지와 의존관계를 갖는 다른 패키지들도 같이 설치
    2. yarn
        - facebook에서 만들어진 npm기반의 패키지 매니저
        - package.json, yarn.lock내 명시되어있는 패키지만을 설치
## node_modules
    - 프로젝트내 설치된 패키지파일을 담은 디렉토리
    - 기본적으로 package.json내 명시된 패키지들은 모두 들어있으나. package.json내 없는 패키지가 있을 수도 있다.
    - git에서 ignore하는 경우가 대부분인데, 이는 package.json에 명시 되어있다면 똑같이 설치가 가능하기 때문이다.
## eslint
    - es: ECMA script로 자바스크립트를 표준화 시키기 위한 스크립트언어 표준규격
    - lint: 코드내 에러, 스타일에러, 의심스러운 구조등에 플래그를 표시하는 툴
    - eslint 패키지 설치후 .eslintrc.js파일을 생성하여 설정
        ```
        // .eslintrc.js파일 생성
        eslint --init
        ```
## 플러그인
    * 표준 기능을 확장해 주는 프로그램
    * install메서드내 함수 정의한 뒤 해당 install함수를 지닌 객체를 vue.use를 통해 등록하여 사용한다
        * [참고](https://goodteacher.tistory.com/445)
