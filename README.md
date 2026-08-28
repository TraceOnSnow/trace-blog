# Trace Blog

Zhiheng Wang 的个人博客，基于 [Astro](https://astro.build/) 和
[Mizuki](https://github.com/LyraVoid/Mizuki) 构建。

- 博客域名：<https://blog.traceonsnow.com>
- 个人主页：<https://traceonsnow.com>
- GitHub：<https://github.com/TraceOnSnow>

博客主要通过 `src/content/posts/` 下的 Markdown / MDX 文件维护。项目展示数据位于
`src/data/projects.ts`。

## 本地开发

```bash
pnpm install
ENABLE_CONTENT_SYNC=false pnpm dev
```

常用验证命令：

```bash
ENABLE_CONTENT_SYNC=false pnpm check
pnpm exec biome check ./src
pnpm test
ENABLE_CONTENT_SYNC=false pnpm build
```

完整维护说明见 [MAINTENANCE.md](./MAINTENANCE.md)，扩展 Markdown 语法见
[docs/WRITING_REFERENCE.md](./docs/WRITING_REFERENCE.md)。

## License

本仓库保留 Mizuki 上游许可证及第三方声明，详见 `LICENSE`、`LICENSE.MIT` 和
`THIRD_PARTY_NOTICES.md`。
