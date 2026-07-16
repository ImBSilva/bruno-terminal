# AGENTS.md — Bruno Terminal

## Visão Geral

Portfólio pessoal de **Bruno Reinaldo** — "Hybrid Creative Technologist".
Site com temática CRT/cyberpunk (verde neon, monospace, scanlines, boot sequence)
que une 3D technical art, fullstack engineering e UI/UX design.

**Stack:** Next.js 15 (App Router) + TypeScript Strict + Tailwind CSS 4 + Three.js/R3F + MDX  
**Deploy:** Vercel (frontend + API Routes)  
**Domínio:** bruno-terminal.vercel.app (ou domínio próprio futuramente)

---

## Estrutura do Repositório

```
bruno-terminal/
├── site_referencia/              # Design original (HTML/CSS/JS estático)
│   ├── index.html                # Home — hero, modules grid, toolbox, projects preview, contact
│   ├── projects.html             # Galeria de projetos com filtros + modal detail
│   ├── performance.html          # Dashboard de métricas live (FPS, memória, assets, CLS)
│   └── BrunoReinaldoCV.pdf       # Currículo atual
│
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx                # Root layout: BootScreen, Nav, CRT overlay, Footer
│   ├── page.tsx                  # Home (/)
│   ├── projects/
│   │   ├── page.tsx              # Galeria com filtros
│   │   └── [slug]/page.tsx       # Detalhe do projeto (MDX)
│   ├── performance/page.tsx      # Dashboard de métricas live do navegador
│   ├── blog/
│   │   ├── page.tsx              # Listagem de posts
│   │   └── [slug]/page.tsx       # Post individual (MDX)
│   ├── contact/
│   │   └── page.tsx              # Formulário de contato
│   ├── status/
│   │   └── page.tsx              # WIP board (/status)
│   ├── not-found.tsx             # Página 404 customizada
│   └── api/
│       └── contact/route.ts      # API Route para envio de email (Resend)
│
├── components/
│   ├── ui/                       # Primitivos reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── Tag.tsx
│   │   └── StatItem.tsx
│   ├── layout/                   # Componentes de estrutura
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx (terminal line)
│   │   ├── BootScreen.tsx
│   │   ├── CRTOverlay.tsx
│   │   └── GridBackground.tsx
│   ├── three/                    # Componentes 3D
│   │   ├── HeroScene.tsx         # Cena principal (icosaedro + partículas)
│   │   ├── ParticleField.tsx
│   │   └── SceneLighting.tsx
│   └── projects/                 # Componentes de projetos
│       ├── ProjectCard.tsx
│       ├── FilterBar.tsx
│       ├── ProjectModal.tsx
│       └── ProjectStats.tsx
│
├── content/
│   ├── projects/                 # Arquivos .mdx de cada projeto
│   │   ├── chronos-bound.mdx
│   │   ├── streamshop.mdx
│   │   ├── the-light-of-darkness.mdx
│   │   ├── forklift-simulator.mdx
│   │   ├── softwillians.mdx
│   │   ├── capivara-neon.mdx
│   │   ├── bright-games.mdx
│   │   └── appsec.mdx
│   └── blog/                     # Posts de aprendizado (criar conforme estudar)
│
├── lib/
│   ├── utils.ts                  # Funções utilitárias (cn, formatBytes, fmtTime)
│   ├── constants.ts              # Site config, nav links, social links
│   ├── projects.ts               # Funções auxiliares para carregar MDX
│   └── metrics.ts                # Helpers de performance (FPS, memória, CLS)
│
├── public/
│   ├── models/
│   │   └── hero-model.glb        # Modelo 3D do hero (placeholder → substituir)
│   ├── cv/
│   │   └── BrunoReinaldoCV.pdf   # Currículo para download
│   └── fonts/                    # (opcional) fontes self-hosted
│
├── styles/
│   ├── globals.css               # Tailwind base + tema CRT
│   └── mdx.css                   # Estilos para conteúdo MDX
│
├── __tests__/                    # Testes unitários (Vitest)
├── e2e/                          # Testes E2E (Playwright)
│
├── AGENTS.md                     # Este arquivo
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── .env.local.example
├── .github/workflows/
│   └── ci.yml                    # CI: lint, typecheck, test, build
└── README.md
```

---

## Stack Detalhada

| Categoria | Tecnologia | Versão | Motivo |
|-----------|-----------|--------|--------|
| **Framework** | Next.js | 15.x | SSR/SSG, API Routes, file-based routing, melhor SEO |
| **Linguagem** | TypeScript | 5.x | Strict mode, mercado exige |
| **Estilização** | Tailwind CSS | 4.x | Utilizado no Drone, @theme para tema CRT |
| **3D** | Three.js + R3F + Drei | latest | Portabilidade do design original |
| **Conteúdo** | MDX (next-mdx-remote) | latest | Projetos e blog versionados, sem CMS externo |
| **Formulário** | Resend | latest | Email grátis 100/dia, API simples |
| **Testes** | Vitest + Testing Library | latest | Testes unitários de componentes |
| **E2E** | Playwright | latest | Testes de fluxo crítico |
| **CI** | GitHub Actions | — | Lint, typecheck, test, build |
| **Deploy** | Vercel | — | Gratuito, integração nativa com Next.js |

---

## Tema CRT (Design System)

O tema é o diferencial visual do site. Está definido no `site_referencia/` e será migrado para um tema Tailwind.

### Cores (extraídas do site_referencia)

```css
--bg:         #000000;                 /* Fundo preto */
--surface:    #050505;                 /* Cards */
--surface-2:  #0a0a0a;                /* Hover */
--surface-3:  #0f0f0f;                /* Elevado */
--fg:         oklch(82% 0.16 145);    /* Texto principal (verde claro) */
--fg-2:       oklch(60% 0.12 145);    /* Texto secundário */
--muted:      oklch(35% 0.08 145);    /* Texto apagado */
--accent:     oklch(82% 0.16 145);    /* Verde neon */
--accent-dim: oklch(55% 0.12 145);    /* Verde neon escuro */
--border:     oklch(20% 0.06 145);    /* Borda sutil */
--border-2:   oklch(28% 0.07 145);    /* Borda hover */
--screen-glow: rgba(0,255,0,.6);      /* Brilho CRT */
```

### Efeitos Visuais Preservados

- **Boot sequence:** animação de inicialização estilo terminal (2.8s fade)
- **CRT overlay:** scanlines + vigneta + flicker (fixed, pointer-events: none)
- **Grid background:** linhas de grid verdes no fundo (56px)
- **Gradient spot:** brilho radial verde no canto
- **Text glow:** `text-shadow` verde neon em textos accent
- **Hover flicker:** animação piscante em items dos módulos (4 ciclos)
- **Module status:** [STABLE], [OPTIMIZED], [ACTIVE], [READY] com cores por status
- **Terminal footer:** linha de comando simulada com cursor piscante
- **Selection style:** fundo verde neon com texto preto

### Implementação no Tailwind

Em `styles/globals.css`, usar `@theme` do Tailwind 4:

```css
@import "tailwindcss";

@theme {
  --color-crt-bg: #000000;
  --color-crt-surface: #050505;
  --color-crt-surface-2: #0a0a0a;
  --color-crt-surface-3: #0f0f0f;
  --color-crt-fg: oklch(82% 0.16 145);
  --color-crt-fg-2: oklch(60% 0.12 145);
  --color-crt-muted: oklch(35% 0.08 145);
  --color-crt-accent: oklch(82% 0.16 145);
  --color-crt-accent-dim: oklch(55% 0.12 145);
  --color-crt-border: oklch(20% 0.06 145);
  --color-crt-border-2: oklch(28% 0.07 145);
  --font-mono: "JetBrains Mono", "Fira Code", ui-monospace, monospace;
  --ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);
}
```

Classes utilitárias adicionais em `globals.css`:

```css
.accent { color: var(--color-crt-accent); text-shadow: 0 0 4px var(--screen-glow); }
.muted { color: var(--color-crt-muted); }
.fg-2 { color: var(--color-crt-fg-2); }
.tabular { font-variant-numeric: tabular-nums; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
```

---

## Páginas e Funcionalidades

### Home (`/`)
| Seção | Componente | Descrição |
|-------|-----------|-----------|
| Boot Screen | `BootScreen` | Tela de inicialização estilo terminal (2.8s, fade out) |
| Hero | `HeroScene` (R3F) | Icosaedro 3D + partículas + orbit controls + auto-rotate |
| Eyebrow | — | `// hybrid creative technologist` |
| Headline | — | "Where vision meets execution" |
| Stats Bar | `StatItem` | Anos de experiência, títulos Steam, disciplinas |
| CTA Buttons | `Button` | "View laboratory →" e "System modules" |
| Modules | Grid 4 colunas | Habilidades por categoria (Design, 3D, Dev, Security) + status |
| Toolbox | Grid 3 colunas | 6 cards com hover reveal de aplicação real |
| Projects Preview | Grid 3 colunas | 3 projetos destacados com hover reveal |
| Contact | Grid 2 colunas | Email, GitHub, LinkedIn, ArtStation, GitLab, Location |
| Footer | `Footer` | `visitor@bruno-dev:~$ ./build --production█` |

### Projects (`/projects`)
- Grid 2 colunas com todos os projetos (8+)
- `FilterBar` com botões: All, 3D Art, Front-end, Back-end, Game Dev, UI/UX
- `ProjectCard` com: categoria, visual placeholder, título, descrição, tech tags, breakdown técnico
- `ProjectModal` com detalhes extendidos (Figma embed placeholder)
- Cada projeto carregado de arquivo `.mdx` para facilitar manutenção
- Rotas dinâmicas `/projects/[slug]` para páginas individuais

### Project Detail (`/projects/[slug]`)
- Renderizado a partir do MDX com gray-matter (frontmatter)
- Categoria, título, role, duração, stack, descrição, breakdown técnico
- Imagens, diagramas, links externos
- Breadcrumb navigation

### Performance (`/performance`)
- Dashboard com métricas live do navegador:
  - FPS (requestAnimationFrame)
  - Load time (performance.now)
  - Memory (performance.memory)
  - Page weight (PerformanceObserver)
  - Asset inventory (PerformanceObserver resources)
  - Runtime log
  - Render budget (DOM nodes, style recalcs, layout shifts)
  - Network profile (requests, total size, cache hit rate)
  - Device info (viewport, pixel ratio, GPU, cores)
- Terminal de diagnóstico visual

### Blog (`/blog`)
- Listagem de posts de aprendizado
- Posts em MDX com frontmatter (título, data, tags)
- Rota dinâmica `/blog/[slug]`
- Feed RSS (opcional)

### Status (`/status`)
- Embed público do Trello com moldura CRT
- Scanline overlay sobre o iframe para integrar visualmente
- Título estilo terminal: "// system status — active processes"

### Contact (`/contact`)
- Formulário com campos: nome, email, mensagem
- Envio via API Route → Resend API
- Mensagem de sucesso/erro em tempo real
- Botão de voltar

### 404 (`/not-found.tsx`)
- Tela estilo "system error" com mensagem CRT
- "ERROR: PAGE_NOT_FOUND — ./go-home --force"
- Link para voltar ao home

---

## Dados dos Projetos (MDX Frontmatter)

Cada projeto em `content/projects/*.mdx` segue este formato:

```yaml
---
title: "Chronos Bound"
slug: chronos-bound
category: "game dev / 3d art"
categories: ["games", "3d"]
role: "3D Artist / Game Developer"
duration: "2023 — 2024"
stack: "Unity, C#, Blender, Substance Painter, Maya"
links:
  - label: "Steam page"
    url: "https://store.steampowered.com"
  - label: "Technical breakdown"
    url: "/projects/chronos-bound"
techs: ["Unity", "C#", "Blender", "Substance Painter", "Maya"]
status: "published"
featured: true
---

## Technical Breakdown

Modeled 12 unique character assets with retopology and PBR texturing.
Implemented state-machine-driven combat system in C#.
```

### Projetos a Incluir (extraídos do `site_referencia`)

| Projeto | Categoria | Stack |
|---------|-----------|-------|
| Chronos Bound | Game Dev / 3D | Unity, C#, Blender, Substance Painter, Maya |
| StreamShop Platform | UI/UX / Front-end | Figma, Angular, TypeScript, Azure DevOps |
| The Light of Darkness | 3D Art | Blender, Substance Painter, Maya, ZBrush |
| Forklift Simulator | 3D Art / Game Dev | Blender, Maya, Substance Painter, Unity |
| SoftWillians IT | UI/UX / Fullstack | Figma, Angular, TypeScript, C#, SQL |
| Capivara Neon | Front-end | React, JavaScript, CSS3, HTML5 |
| Bright Games | Game Dev / Production | Unity, C#, Blender, Scrum |
| AppSec & Secure Coding | Security / Backend | Python, OWASP, Linux, Git, Bash |

---

## Setup & Comandos

```powershell
# 1. Criar projeto Next.js
cd C:\Users\bruun\OneDrive\Documentos\Programação\bruno-terminal
npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"

# 2. Instalar dependências
npm install three @react-three/fiber @react-three/drei
npm install next-mdx-remote resend
npm install clsx tailwind-merge
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
npm install -D @playwright/test eslint-config-prettier prettier

# 3. Variáveis de ambiente
copy .env.local.example .env.local
# Preencher RESEND_API_KEY (opcional para formulário)

# 4. Desenvolvimento
npm run dev          # http://localhost:3000

# 5. Build
npm run build        # Verificar erros de tipo
npm run start        # Servir produção localmente

# 6. Testes
npm run test         # Vitest (unit)
npx playwright test  # E2E
npm run lint          # ESLint + Prettier
```

---

## Roadmap de Implementação

### Fase 1 — Lançamento (MVP)

- [x] `npx create-next-app@latest` com TypeScript, Tailwind, App Router
- [x] Instalar dependências (three, r3f, drei, mdx, resend)
- [ ] Configurar Tailwind 4 com tema CRT (`@theme` em `globals.css`)
- [ ] Criar `lib/constants.ts` com dados de navegação e redes sociais
- [ ] Criar `lib/utils.ts` com funções utilitárias
- [ ] Implementar `BootScreen.tsx` com animação de inicialização
- [ ] Implementar `CRTOverlay.tsx` (scanlines + flicker + vigneta)
- [ ] Implementar `GridBackground.tsx`
- [ ] Implementar `Nav.tsx` com navegação fixa + active state
- [ ] Implementar `HeroScene.tsx` (R3F) com icosaedro + partículas + orbit controls
- [ ] Implementar home page completa (hero, modules grid, toolbox, projects preview, contact)
- [ ] Implementar `ProjectCard`, `FilterBar`, `ProjectModal` (projects page)
- [ ] Migrar 8 projetos para MDX em `content/projects/`
- [ ] Implementar project detail page `/projects/[slug]`
- [ ] Implementar `PerformanceDashboard` com métricas live
- [ ] Implementar formulário de contato + API Route
- [ ] Criar página 404 customizada
- [ ] Configurar SEO (metadados em `layout.tsx`)
- [ ] Copiar `BrunoReinaldoCV.pdf` para `public/cv/`
- [ ] Deploy no Vercel

### Fase 2 — Refinamento

- [ ] Testes unitários (Vitest) para componentes críticos
- [ ] Testes E2E (Playwright) para navegação principal
- [ ] GitHub Actions CI (lint, typecheck, test, build)
- [ ] Lighthouse 100/100
- [ ] a11y audit (axe-core, WCAG 2.2 AA)
- [ ] PWA: manifest.json + service worker (offline shell)

### Fase 3 — Evolução

- [ ] Blog com MDX posts
- [ ] i18n (pt-BR / en)
- [ ] Storybook
- [ ] Animações refinadas (Framer Motion)
- [ ] Modelo 3D customizado (.glb) no hero
- [ ] Feed RSS

### Fase 4 — Fullstack & Microfrontends

- [ ] Projeto `microfrontend-demo/` com Module Federation (React + Angular)
- [ ] Projeto `dotnet-angular/` com Angular + ASP.NET Web API + EF Core
- [ ] Case studies desses projetos adicionados ao portfólio

### Fase 5 — Contínuo

- [ ] Adicionar mini projetos conforme aprender novas tecnologias
- [ ] Performance analytics real (Vercel Web Analytics)
- [ ] Substituir Railway se necessário
- [ ] Refinamento contínuo de design com base em feedback

---

## Arquitetura e Decisões Técnicas

### Por que Next.js 15 App Router?
- SSR/SSG nativo (melhor SEO para portfólio)
- API Routes embutidas (sem servidor extra)
- File-based routing (simples de manter)
- Image optimization (Next/Image)
- Vercel deploy gratuito e integrado

### Por que MDX em vez de CMS?
- Versionamento com Git
- Sem dependência externa (custo zero)
- Tipagem forte com TypeScript + frontmatter
- Mais rápido que chamar API de CMS
- Fácil de migrar para CMS depois (Sanity, Contentlayer)

### Por que Tailwind CSS 4?
- Tema CRT customizável via `@theme`
- Já usado no Drone (curva zero)
- Bundle pequeno (purge por padrão)
- Utilitários agilizam o desenvolvimento

### Por que API Routes em vez de backend separado?
- Menos componentes (deploy único)
- Sem custo extra (Vercel Free inclui)
- Suficiente para formulário de contato e redirecionamentos
- Futuramente pode migrar para backend separado quando precisar de banco

### Por que manter o site_referencia?
- Fonte de verdade do design original
- Consulta rápida para cores, animações, layout
- Backup do conceito aprovado

---

## NxJS — Adoção Futura (Fase 4)

### O que é Nx?

Nx é um sistema de build inteligente e gerenciador de monorepos. Ele otimiza builds, testes e deploy
em projetos com múltiplos apps e libs dentro de um mesmo repositório.

### Por que NÃO usar agora (MVP)?

- **Single-app:** o portfólio é um único Next.js — Nx foi feito para monorepos com múltiplos projetos.
- **Overhead de configuração:** nx.json, project.json, executors, generators — complexidade sem benefício.
- **Cache distribuído:** o build do Next.js já é eficiente para um app pequeno. Nx não traria ganho perceptível.
- **Curva de aprendizado:** conceitos como `affected`, `graph`, `plugins` para um projeto que não precisa.

### Quando Nx fará sentido?

Na **Fase 4** do roadmap, quando o repositório evoluir para:

```
bruno-terminal/
├── apps/
│   ├── portfolio/              # Next.js (site atual)
│   ├── microfrontend-demo/     # React + Angular c/ Module Federation
│   └── dotnet-angular/         # Angular + ASP.NET
├── libs/
│   ├── shared-ui/              # Componentes compartilhados
│   └── shared-utils/           # Utilitários
├── nx.json
└── package.json
```

### Como implementar (quando chegar a hora)

```bash
# 1. Criar workspace Nx vazio
npx create-nx-workspace@latest bruno-terminal --preset=empty

# 2. Adicionar apps e libs
nx g @nx/next:app apps/portfolio
nx g @nx/react:app apps/microfrontend-demo
nx g @nx/react:lib libs/shared-ui

# 3. Migrar o código existente para apps/portfolio
# (manter site_referencia/ como está, copiar componentes reutilizáveis para libs/)

# 4. Comandos do dia a dia
nx dev portfolio          # Rodar o site
nx build portfolio         # Build
nx affected:test          # Testar apenas projetos alterados
nx graph                  # Visualizar dependências

# 5. CI/CD (GitHub Actions) — Nx já tem preset:
# Usar nx-set-shas para cache baseado em commits
```

### Comandos Úteis (Nx CLI)

| Comando | Descrição |
|---------|-----------|
| `nx dev <app>` | Roda app em dev |
| `nx build <app>` | Build do app |
| `nx run-many -t build -p app1 app2` | Build paralelo |
| `nx affected:test` | Testa projetos afetados |
| `nx affected:lint` | Lint projetos afetados |
| `nx graph` | Abre visualizador de dependências |
| `nx reset` | Limpa cache do Nx |
| `nx list` | Lista plugins instalados |

### Plugins Relevantes para o Projeto

| Plugin | Uso |
|--------|-----|
| `@nx/next` | App Next.js (portfolio) |
| `@nx/react` | Libs React (shared-ui) |
| `@nx/js` | Libs TypeScript puras (shared-utils) |
| `@nx/workspace` | Generators base |

> **Nota:** Nx **não** substitui o Next.js — ele orquestra o build. Cada app Next.js continua funcionando
> de forma independente com `nx dev portfolio` / `nx build portfolio`.

---

## Blog — Postagens & Estudos

### Abordagem

Blog integrado no próprio site usando **MDX** (`content/blog/`), separado dos projetos.

- **Projetos** = portfólio (em andamento ou finalizados)
- **Blog** = posts pequenos, estudos, descobertas técnicas, sem filtro

### Frontmatter

```yaml
---
title: "Título do Post"
date: "2025-07-01"
tags: ["three.js", "r3f", "react"]
lang: "pt"   # pt ou en
---
```

### Como funciona na prática

1. Cria um arquivo `.mdx` em `content/blog/`
2. O Next.js renderiza automaticamente em `/blog/meu-post`
3. Commit → Deploy automático no Vercel
4. Post no ar

Zero setup, zero dependência externa, versionado no Git. Diferente do GitHub Pages,
não precisa de outro repo, outro build, outro domínio.

### Rotas

- `/blog` — Listagem com filtro por tag/idioma
- `/blog/[slug]` — Post individual renderizado do MDX

---

## Status / WIP — Quadro de Trabalho

### Abordagem

Página separada `/status` com **embed do Trello público**, estilizada com moldura CRT.

### Por que Trello embed?

- Visual limpo e navegável
- Atualiza em tempo real sem precisar editar código
- Você gerencia o board no Trello, o site só consome

### Implementação

Componente `TrelloEmbed.tsx` em `components/ui/`:

```tsx
'use client'

export function TrelloEmbed({ boardId }: { boardId: string }) {
  const src = `https://trello.com/b/${boardId}.html`

  return (
    <div className="w-full h-[600px] border-2 border-crt-border overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-10
        bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.03)_2px,rgba(0,255,0,0.03)_4px)]" />
      <iframe src={src} className="w-full h-full" title="Trello Board" />
    </div>
  )
}
```

### Estrutura adicionada

- `app/status/page.tsx` — Página com título "// system status", descrição e embed
- `components/ui/TrelloEmbed.tsx` — Componente de embed com overlay CRT

---

## Variáveis de Ambiente

```env
# .env.local.example
RESEND_API_KEY=re_xxxxx           # Para formulário de contato
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # URL base (trocar em produção)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # Google Analytics (opcional)
```

---

## Deploy

### Vercel (frontend + API Routes)
1. Conectar repositório GitHub
2. Importar projeto Next.js (root: `bruno-terminal/`)
3. Configurar variáveis de ambiente (RESEND_API_KEY, etc.)
4. Deploy automático em cada push na `main`

### Domínio personalizado (opcional)
- Comprar domínio (ex: brunoreinaldo.dev)
- Configurar DNS no Cloudflare (gratuito, com proxy)
- Adicionar domínio no Vercel dashboard (Vercel gera SSL automático)

---

## Serviços Gratuitos

| Serviço | Para | Limite Free |
|---------|------|-------------|
| **Vercel** | Next.js (front + API Routes) | 100GB bandwidth, 6000 build min/mês |
| **Railway** | Backend Node/Python + PostgreSQL | $5 crédito/mês (roda ~1 app leve) |
| **Render** | Backend + PostgreSQL | 750h/mês, banco 1GB |
| **Neon** | PostgreSQL serverless | 0.5GB storage, always-on |
| **Resend** | Email (formulário) | 100 emails/dia grátis |
| **Cloudflare** | DNS + CDN + DDoS protection | Grátis ilimitado |
| **GitHub** | Repositório + Actions CI | Grátis (público) |

---

## Boas Práticas para este Projeto

1. **TypeScript strict** — manter `strict: true` no `tsconfig.json`
2. **Componentes server-first** — server components por padrão, client components só quando necessário (event handlers, hooks, Three.js)
3. **CSS modules para temas específicos** — Tailwind para o geral, módulos CSS ou CSS-in-JS para animações CRT complexas
4. **Imagens** — usar `next/image` com WebP/AVIF
5. **Fontes** — JetBrains Mono via Google Fonts (já usado), self-hosted para performance se necessário
6. **Acessibilidade** — roles ARIA, focus visible, contraste adequado (4.5:1 mínimo)
7. **Performance** — lazy loading de componentes 3D (`next/dynamic` com `ssr: false`), dynamic import do Three.js
8. **Mobile-first** — grid adaptável (os media queries já estão na referência)
9. **SEO** — metadados em cada página, Open Graph, sitemap.xml, robots.txt
10. **Segurança** — sanitizar input do formulário, rate limiting na API Route, CORS configurado
