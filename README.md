# Getting Started with PORTAL-BSP

## TECH STACK

### Frontend:
  - UI library: React.js (https://reactjs.org)
  - State management: MobX (https://mobx.js.org)
  - CSS Framework: Bootstrap (https://getbootstrap.com)
  - UI Component: Antd Design (https://ant.design)
  - HTTP Client Request: Axios (https://axios-http.com)
  - Client Router: React Router (https://reactrouter.com)

### Backend:
  - JS Platform: Node.js (https://nodejs.org)
  - Programming Languange: TypeScript (https://www.typescriptlang.org/)
  - API Framework: Express.js (https://expressjs.com)
  - Cryptography: Crypto-js (https://cryptojs.gitbook.io/docs)
  - Encrypt Password: Bcrypt (https://github.com/kelektiv/node.bcrypt.js)
  - API Authentication: JWT (https://jwt.io)
  - DB Tools Protocol: Tedious (tediousjs.github.io/tedious/)
  - Date Formatter: MomentJS (https://momentjs.com/docs)
  - Host to Host HTTP Request: Axios (https://axios-http.com)

### Database:
  - DB Engine: Microsoft SQL Server

## FOLDER STRUCTURE

### Backend

Folder structure for backend.

    .
    ├── ...
    ├── src                     # Source directory
    │   ├── bin                 # Server Starter
    │   ├── config              # Includes `app` & `database` configuration
    │   ├── controller          # All App Logic
    │   ├── content             # Include All File `Upload` etc
    │   ├── helper              # All Helper Logic
    │   ├── interface           # Type Iterface.
    │   ├── middleware          # All Middleware Routing such as `auth`, etc
    │   ├── migrations          # Database property for migrations
    │   ├── models              # All Database Logic
    │   ├── routes              # App routing 
    │   ├── schemas             # Validation Schema
    │   ├── services            # All Service Logic
    │   ├── utils               # All app utilities
    │   └── 
    └── ...

