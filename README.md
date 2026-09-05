# personal_web

个人网站：React 前端 + Express REST 后端。GitHub Pages 托管静态前端，地址：

https://yangyangsean68.github.io/

## GitHub Pages 托管

仓库名必须是 `用户名.github.io`，这样站点会发布到 `https://用户名.github.io/`。

GitHub Pages **不能跑 Node/Express**，所以线上用打包后的静态文件：

1. 本地执行 `npm run build:pages`，产物写到仓库根目录的 `docs/`
2. 推送到 `main`
3. 打开仓库 **Settings → Pages**
4. Build and deployment → Source 选 **Deploy from a branch**
5. Branch 选 **main**，文件夹选 **/docs**，保存

`docs/.nojekyll` 用来跳过 Jekyll，避免静态资源被忽略。`docs/404.html` 与首页相同，用来支持 React Router 的 `/about`、`/projects` 等路径。

线上联系表单会打开系统邮件客户端（`mailto:`），因为 Pages 没有后端可收 POST。

## 怎么跑起来

```bash
npm install
npm run install:all
npm run dev
```

- 前端：http://localhost:5173
- REST API：http://localhost:3001
- 浏览器里访问 `/api/...` 时，Vite 会把请求代理到后端，所以前端代码里写 `/api/health` 即可

## 文件夹层级

```
personal_web/                      整个项目的根目录
├── README.md                      项目说明（本文件）
├── package.json                   根脚本：一键同时启动前后端
├── client/                        React 前端：用户在浏览器里看到的网站
│   ├── public/                    原样拷贝到网站根路径的静态文件（favicon 等）
│   ├── index.html                 HTML 外壳，里面只有一个 <div id="root">
│   ├── vite.config.ts             开发服务器、打包、/api 代理配置
│   ├── package.json               前端依赖（react、react-router-dom）
│   └── src/                       前端源码，日常开发几乎都在这里
│       ├── main.tsx               入口：把 App 挂载到 #root
│       ├── App.tsx                根组件：配置路由
│       ├── index.css              全局样式
│       ├── api/                   调用 REST 接口（fetch 封装、按资源拆文件）
│       ├── types/                 TypeScript 类型（请求/响应的数据结构）
│       ├── pages/                 页面：一个路由对应一个页面组件
│       ├── components/            可复用 UI（页头、卡片等，不是整页）
│       ├── hooks/                 自定义 Hooks（把请求、状态从页面里抽出来）
│       ├── utils/                 与界面无关的纯函数（格式化、校验等）
│       └── assets/                会被打包处理的图片、字体、svg
└── server/                        REST API 后端：给前端提供 JSON 数据
    ├── package.json               后端依赖（express、cors）
    └── src/
        ├── index.ts               启动 Express，把中间件和路由挂上去
        ├── config/                端口、环境变量等配置
        ├── middleware/            跨域、日志、统一错误处理
        ├── routes/                声明 URL 和方法：GET /api/projects 等
        ├── controllers/           读请求参数，调用 service，返回 JSON
        ├── services/              业务逻辑（以后查数据库、拼数据都在这）
        └── models/                数据形状；以后接数据库时模型也放这
```

## 每一层在请求里怎么走

一次「打开首页并检查接口是否活着」的路径是：

1. 浏览器请求 `index.html` → `main.tsx` → `App.tsx` 按路由渲染 `pages/`
2. 页面用 `hooks/` 去调 `api/`
3. `api/` 发 HTTP 请求到 `/api/...`
4. Vite 开发服务器把 `/api` 转到 `server`
5. `routes` → `controllers` → `services` → 返回 JSON

之后做个人网站时：

- 改自我介绍 / 作品：编辑 `server/src/data/`
- 新页面：加 `client/src/pages/`，并在 `App.tsx` 里加一条路由
- 新接口：加 `server/src` 的 route / controller / service，再在 `client/src/api/` 写对应请求

当前页面：`/` 首页，`/about` 关于，`/projects` 作品，`/contact` 联系。
