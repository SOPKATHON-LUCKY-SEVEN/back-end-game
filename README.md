# *23#

> 부끄러워서 전하지 못했던 감사의 마음을 익명으로 전달하는 서비스
>
> 친구/가족/연인에게 고마움을 전달해서
> 평범했던 서로의 일상에 밝은 별이 되어주세요

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
    편지 작성하기 <br/>
    별자리뷰에 별 보내주기 <br/>
    특정 별을 클릭했을 때 편지 보여주기 <br/>
    </td>
    <td>
    유저 등록하기 <br/>
    편지 보낼 수 있는 유저 보내주기 <br/>
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

## MongoDB Collection

### User

```typescript
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  letters: [
    {
      letter: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Letter",
      },
    },
  ],
});
```

### Letter

```typescript
const LetterSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
});
```

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

## Architecture

<img src="https://user-images.githubusercontent.com/54518925/169666952-072520f2-54f3-4288-ad4d-b9af5e594ae2.png" />

## Project Foldering

```
back-end-game
├─ .github
│  ├─ CODEOWNERS
│  ├─ ISSUE_TEMPLATE
│  │  └─ feature_request.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ .gitignore
├─ README.md
├─ nodemon.json
├─ package.json
├─ src
│  ├─ config
│  │  ├─ configSwagger.ts
│  │  ├─ configWinston.ts
│  │  └─ index.ts
│  ├─ controller
│  ├─ data
│  │  ├─ database
│  │  │  └─ configMongoose.ts
│  │  └─ models
│  │     ├─ Letter.ts
│  │     └─ User.ts
│  ├─ index.ts
│  ├─ interface
│  │  ├─ LetterInfo.ts
│  │  ├─ UserInfo.ts
│  │  └─ letter
│  │  └─ user
│  ├─ service
│  └─ util
│     ├─ BaseResponse.ts
│     ├─ PostBaseResponseDto.ts
│     ├─ message.ts
│     └─ statusCode.ts
├─ tsconfig.json
└─ yarn.lock
```
