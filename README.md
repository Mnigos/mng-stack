# mng-stack

**Turborepo + NestJS + NextJS + tRPC + ShadcnUI + TailwindCSS + Vercel**

## Stack

<div style="display: flex; align-items: center; gap: 4px; flex-wrap: wrap;">
  <a href="https://turbo.build">
    <img src="https://user-images.githubusercontent.com/4060187/196936104-5797972c-ab10-4834-bd61-0d1e5f442c9c.png" alt="Turborepo" width="40" height="40" />
  </a>

  <a href="https://www.typescriptlang.org">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="TypeScript" width="40" height="40" style="border-radius: 10px" />
  </a>

  <a href="https://nextjs.org">
    <img src="https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" alt="NextJS" width="40" height="40" />
  </a>

  <a href="https://nestjs.com">
    <img src="https://nestjs.com/img/logo-small.svg" alt="NestJS" width="40" height="40" />
  </a>

  <a href="https://trpc.io">
    <img src="https://trpc.io/img/logo.svg" alt="tRPC" width="40" height="40" />
  </a>

  <a href="https://www.nestjs-trpc.io">
    <img src="https://github.com/KevinEdry/nestjs-trpc/blob/main/docs/public/logo.png?raw=true" alt="NestJS tRPC" width="40" height="40" />
  </a>

  <a href="https://react.dev">
    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React" width="40" height="40" />
  </a>

  <a href="https://ui.shadcn.com">
    <img src="https://ui.shadcn.com/apple-touch-icon.png" style="border-radius: 12px" alt="ShadcnUI" width="40" height="40" />
  </a>

  <a href="https://tailwindcss.com">
    <img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="TailwindCSS" width="40" height="40" />
  </a>

  <a href="https://vercel.com">
    <img src="https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png" alt="Vercel" width="40" height="40" />
  </a>

  <a href="https://vitest.dev">
    <img src="https://vitest.dev/logo.svg" alt="Vitest" width="40" height="40" />
  </a>
  
  <a href="https://testing-library.com">
    <img src="https://www.logiciels.pro/wp-content/uploads/2021/05/react-testing-library-avis-prix-alternatives-logiciel.webp" alt="Testing Library" width="40" height="40" />
  </a>

  <a href="https://zod.dev">
    <img src="https://zod.dev/logo.svg" alt="Zod" width="40" height="40" />
  </a>

  <a href="https://eslint.org">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/ESLint_logo.svg" alt="ESLint" width="40" height="40" />
  </a>

  <a href="https://prettier.io">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5JKKZwBUda4VTSenmQwFta2rgoJZBo0Ikg&s" style="border-radius: 12px" alt="Prettier" width="40" height="40" />
  </a>

  <a href="https://commitlint.js.org">
    <img src="https://www.svgrepo.com/show/373518/commitlint.svg" alt="Commitlint" width="40" height="40" />
  </a>

  <a href="https://docs.github.com/en/actions">
    <img src="https://raw.githubusercontent.com/jpb06/jpb06/master/icons/GithubActions-Dark.svg" alt="Github Actions" width="40" height="40" />
  </a>

  <a href="https://pnpm.io">
    <img src="https://avatars.githubusercontent.com/u/21320719?v=4" alt="Github Actions" width="40" height="40" style="border-radius: 8px" />
  </a>
</div>

### Apps and Packages

Web app uses [`next@15`](https://nextjs.org/blog/next-15-rc) and [`react@19`](https://react.dev/blog/2024/04/25/react-19). If don't want to use rc versions, you are free to downgrade to `next@14` and `react@18`. Also web app uses [T3 Env](https://env.t3.gg) for env variables.

Nestjs app is deployed to vercel and that's why `dist` folder is included in source control. If you want to deploy your application to other hosting, you can remove `dist` folder, add it to `.gitignore` and `vercel.json` file.

UI library is [ShadcnUI](https://ui.shadcn.com) and it's included in `packages/ui` folder.

Each package/app is 100% [TypeScript](https://www.typescriptlang.org) and contains [@total-typescript/ts-reset](https://www.totaltypescript.com/ts-reset) and [Vitest](https://vitest.dev).

**If you want to see this template in action, you can check out this repository where it is used with Prisma: [share-your-thought](https://github.com/Mnigos/share-your-thought).**

### Build

To build all apps and packages, run the following command:

```bash
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```bash
pnpm dev
```

### Test

To run all tests, run the following command:

```bash
pnpm test
```

### Lint

To run all linting, run the following command:

```bash
pnpm lint
```

### Add new ShadcnUI component

```bash
pnpm ui add <component-name>
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
pnpm dlx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
pnpm dlx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
