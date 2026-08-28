# Trace Blog 维护说明

本文档面向几个月后重新打开仓库时的自己。站点基于 Mizuki，个人化优先通过配置和
数据文件完成，不直接重写主题组件。

## 写一篇新文章

文章放在 `src/content/posts/`，支持 `.md` 和 `.mdx`。可以手动创建，也可以运行：

```bash
pnpm new-post -- my-post
```

最小示例：

```markdown
---
title: 我的文章
published: 2026-08-16
description: 文章摘要
tags:
  - Astro
category: 技术
draft: false
lang: zh_CN
---

正文从这里开始。
```

`draft: true` 的文章不会进入生产构建。Frontmatter 完整字段和 Markdown 扩展语法见
`docs/WRITING_REFERENCE.md`。

### 从旧主页迁移的文章

2026 年 8 月已从只读的 `zhiheng-homepage/data/blog/` 迁移 18 篇公开文章：

- 15 篇 Codeforces 比赛记录
- Python OA Cheat Sheet
- Blog Pipeline
- 个人 Markdown 语法备忘录

迁移后的文章统一使用 `src/content/posts/<slug>/index.md` 目录结构。旧主页中的
`Amazon SDE-1 Intern OA.md` 和 `字节暑期实习面经.md` 标记为草稿，因此没有迁移，
也没有为它们制造公开内容。需要继续写作时，应先在旧主页确认内容适合公开，再按本文
档的 frontmatter 格式手动迁移。

## 添加图片

文章专属图片推荐和文章放在同一目录：

```text
src/content/posts/my-post/
├── index.md
└── cover.png
```

Markdown 中使用 `![说明](./cover.png)`。需要跨文章复用的图片放到
`public/images/posts/`，使用 `![说明](/images/posts/example.png)`。

旧主页文章中的 `Mikoto.png` 已迁移到
`public/images/posts/markdown-notes/Mikoto.png`，并由 Markdown 备忘录使用站点根路径
引用。

封面通过 frontmatter 的 `image` 字段设置。没有合适封面时留空，不使用占位图。

## 修改个人信息和 SEO

- 网站名称、描述、域名、语言、关键词、favicon：
  `src/config/siteConfig.ts`
- 姓名、头像、GitHub、Email、LinkedIn、个人主页：
  `src/config/profileConfig.ts`
- 顶部导航：`src/config/navBarConfig.ts`
- About 页面：`src/content/spec/about.md`
- 头像和 Logo：`public/assets/brand/`
- favicon 文件：`public/favicon/`
- 页脚自定义内容：`src/config/footerConfig.ts`

博客域名是 `https://blog.traceonsnow.com/`，主站链接是
`https://traceonsnow.com`。修改域名时同时检查：

- `src/config/siteConfig.ts` 的 `siteURL`
- `public/CNAME`
- Vercel 项目中的 Domains 设置
- DNS 服务商中的域名记录

`public/CNAME` 只为手动 GitHub Pages 备用部署保留，Vercel 不依赖它。仓库只保存站点侧
配置，不会自动修改 Vercel 项目、域名绑定或 DNS。

## 项目展示

项目页沿用 Mizuki 的现有系统，数据位于 `src/data/projects.ts`。每个项目常用字段：

- `id`：稳定且唯一的英文标识。
- `title`、`description`：展示名称和简介。
- `category`：`web`、`mobile`、`desktop` 或 `other`。
- `techStack`：技术栈数组。
- `status`：`completed`、`in-progress` 或 `planned`。
- `sourceCode`：GitHub 仓库地址。
- `visitUrl`：可选的在线地址。
- `startDate`、`endDate`：`YYYY-MM-DD`。
- `featured`：是否标记为精选。
- `showImage`：没有真实封面时设为 `false`。

编辑后访问 `/projects/` 检查筛选、状态和链接。个人主页可以直接链接到
`https://blog.traceonsnow.com/projects/`。

## Category 和 Tag

分类和标签直接写在文章 frontmatter 中：

```yaml
category: AI
tags:
  - Agent
  - LLM
```

`category` 是单个字符串，`tags` 是字符串数组。归档、侧边栏与搜索索引会自动更新，
不需要维护单独的数据文件。

## 本地启动和验证

首次安装：

```bash
pnpm install
```

开发服务器：

```bash
ENABLE_CONTENT_SYNC=false pnpm dev
```

默认地址是 `http://localhost:3000/`。常用检查：

```bash
ENABLE_CONTENT_SYNC=false pnpm check
pnpm exec biome check ./src
pnpm test
ENABLE_CONTENT_SYNC=false pnpm build
ENABLE_CONTENT_SYNC=false pnpm preview
```

生产文件输出到 `dist/`。当前不需要升级依赖来维护内容。

## 部署和域名

当前正式部署目标是 Vercel。仓库根目录的 `vercel.json` 已配置：

- Framework：Astro
- Install Command：`pnpm install --frozen-lockfile`
- Build Command：`ENABLE_CONTENT_SYNC=false pnpm build`
- Output Directory：`dist`
- Node.js：`20.x`，由 `package.json` 的 `engines` 指定

首次部署步骤：

1. 在 Vercel 中导入 GitHub 仓库 `TraceOnSnow/trace-blog`。
2. Production Branch 选择 `master`。
3. 确认 Vercel 项目域名为 `blog.traceonsnow.com`，并按 Vercel 提示配置 DNS。
4. 推送到 `master` 后，Vercel 会自动构建并部署。

Vercel 的项目创建、域名绑定和 DNS 修改不由仓库自动完成。当前的
`.github/workflows/deploy.yml` 已改为仅手动触发，作为 GitHub Pages 备用部署，避免和
Vercel 同时自动部署。

## 当前关闭的功能

第一版关闭了无真实内容支撑的功能，但保留实现以便以后升级或重新启用：

- Anime / Bangumi / Bilibili、Diary、Friends、Albums、Devices、Skills、Timeline、
  AI Tools：`src/config/siteConfig.ts` 的 `featurePages`
- 音乐播放器：`src/config/musicConfig.ts`
- Live2D 看板娘：`src/config/pioConfig.ts`
- 顶部 Banner、轮播、波浪和首页打字标题：`src/config/siteConfig.ts`
- 全屏壁纸：`src/config/backgroundWallpaper.ts`
- 公告：从 `src/config/sidebarConfig.ts` 移除；内容配置在
  `src/config/announcementConfig.ts`
- 评论：`src/config/commentConfig.ts`
- 第三方统计：`src/config/siteConfig.ts` 的 `thirdPartyAnalytics`
- 樱花效果：`src/config/effectsConfig.ts`

关闭的特色页会跳转到 404，并由 `astro.config.mjs` 根据同一组
`siteConfig.featurePages` 开关自动排除出 sitemap。

重新启用页面时，除了打开对应开关，还要加入真实数据、恢复导航入口并检查关联静态
资源。不要直接恢复 Demo 内容。以下功能还需要额外准备：

- 音乐播放器：把真实音频与封面加入 `public/assets/music/`，并在
  `src/components/widgets/music-player/constants.ts` 维护 `LOCAL_PLAYLIST`；或在
  `src/config/musicConfig.ts` 配置自己的 Meting API 和歌单 ID。
- Live2D：当前 Demo 模型和 `/pio/` 静态文件已删除。重新启用前需要加入有权使用的
  模型、恢复 host 页面，并检查 `src/components/features/pio/Pio.astro`、
  `public/_headers` 和 `vercel.json`。
- 评论：Giscus 需要填写仓库、分类及对应 ID；Twikoo 还需要自己的服务端
  `envId` 和客户端脚本。当前不包含上游 Demo 的 Twikoo bundle。
- 访问量统计：上游 Demo 的 oddmisc/Umami 页面统计集成已从页面和 Astro 配置中
  移除。未来应使用自己的统计服务和凭证重新接入。
- Banner、相册、日记、设备和项目封面：只加入自己拥有或有权使用的图片。

## 内容同步

当前文章直接保存在本仓库，`.env.example` 和部署工作流都关闭了
`ENABLE_CONTENT_SYNC`。只有未来明确拆分内容仓库时，才配置 `CONTENT_REPO_URL` 并阅读
`docs/CONTENT_SEPARATION.md`。

## 获取 Mizuki 上游更新

本仓库由 GitHub Template 创建，不是 Fork。建议把 Mizuki 添加为只读上游：

```bash
git remote add upstream https://github.com/LyraVoid/Mizuki.git
git fetch upstream
git switch -c maintenance/mizuki-update
```

然后在独立分支检查上游变化，按需要 merge 或 cherry-pick：

```bash
git merge upstream/main
```

处理冲突时优先保留本仓库的 `src/config/`、`src/data/projects.ts`、`src/content/`、
`public/assets/brand/`、`public/CNAME` 和维护文档。不要用上游默认配置整体覆盖本地个人
信息。完成检查和构建后再合并回 `master`。

许可证和必要署名必须保留：`LICENSE`、`LICENSE.MIT`、
`THIRD_PARTY_NOTICES.md`，以及页脚中的 Astro / Mizuki attribution。

## 尚待真实环境确认

当前仓库已经完成 Vercel 静态构建配置，但还没有执行 Vercel 项目创建、域名绑定或 DNS
修改。正式上线前需要本人确认：

- 在 Vercel 中导入仓库并绑定 `blog.traceonsnow.com`。
- `blog.traceonsnow.com` 的 DNS 记录指向 Vercel。
- 站点正式上线日期；如果以后启用站点运行天数统计，更新
  `src/config/siteConfig.ts` 的 `siteStartDate`。
- 是否启用评论、Clarity 或其他访问统计，并提供自己的真实配置。
- 是否为项目补充真实封面、在线地址和后续项目。
