# *23#

미뤄두었던 당신의 감사함을 표하세요

## Contributor

<table align="center" style = "table-layout: auto; width: 100%; table-layout: fixed;">
  <colgroup>
    <col style="width:50%"/>
    <col style="width:50%"/>
  </colgroup>
  <th align="center">이현우</th>
  <th align="center">김채은</th>
  <tr>
    <td align="center"><img src="https://github.com/l2hyunwoo.png?size=100"/></td>
    <td align="center"><img src="https://github.com/kimchaeeun3447.png?size=100"/></td>
  </tr>
  <tr>
    <td>
    담당한 부분을 적겠습니다 <br/>
    </td>
    <td>
    담당한 부분을 적겠습니다 <br/>
    </td>
  </tr>
</table>


## Coding Convention

- 타입(클래스)은 PascalCase로

```typescript
// Good
type Animal = {
  growl: boolean
}

// Bad
type person = {
  age: number
}
```

- 인터페이스에 I 접두사 붙이지 않기
```typescript
// Do not
interface ICard {
  width: number
  height: number
}

// Do
interface Card {
  width: number
  height: number
}
```

- 함수(변수)는 camelCase로 적기
```typescript
const sampleFunction = (x: number) => {
  return x + 1;
}
```

- 인덴트는 2칸씩
```typescript
type Animal = {
  teeth: 30
}

// Do not
type Animal = {
    teeth: 30
}
```

## Git-Strategy
<img src="https://user-images.githubusercontent.com/54518925/103665498-d5877a80-4fb6-11eb-81ad-de0c1a577083.png" width="40%" />
<img src="https://user-images.githubusercontent.com/54518925/103665503-d6b8a780-4fb6-11eb-9786-9b97bc83ceda.png" width="40%" />

## Dependency

```json
{
  "dependencies": {
    "@types/winston": "^2.4.4",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-validator": "^6.14.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.3.3",
    "morgan": "^1.10.0",
    "multer": "^1.4.4",
    "pm2": "^5.2.0",
    "swagger-jsdoc": "^6.2.1",
    "swagger-ui-express": "^4.4.0",
    "winston": "^3.7.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.13",
    "@types/jsonwebtoken": "^8.5.8",
    "@types/mongoose": "^5.11.97",
    "@types/morgan": "^1.9.3",
    "@types/multer": "^1.4.7",
    "@types/node": "^17.0.34",
    "@types/swagger-jsdoc": "^6.0.1",
    "@types/swagger-ui-express": "^4.1.3",
    "nodemon": "^2.0.16",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.4"
  }
}
```
