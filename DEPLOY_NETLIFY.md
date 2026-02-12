# 🚀 Deploy na Netlify - Portfólio Davi Medeiros

## 📋 Visão Geral

Este portfólio é uma aplicação **full-stack** com:
- **Frontend:** React (pronto para Netlify)
- **Backend:** FastAPI (precisa ser hospedado separadamente)
- **Database:** MongoDB (use MongoDB Atlas gratuitamente)

## 🎯 Opção 1: Deploy Apenas Frontend (Mock Data)

O frontend funciona standalone com dados mockados. Perfeito para demonstração!

### Passos:

1. **Crie uma conta na Netlify**
   - Acesse: https://app.netlify.com/signup
   - Faça login com sua conta GitHub

2. **Novo Site do GitHub**
   - Clique em "Add new site" → "Import an existing project"
   - Escolha "Deploy with GitHub"
   - Autorize a Netlify a acessar seu GitHub
   - Selecione o repositório: `petroski1/Portif-lio`

3. **Configurações de Build**
   ```
   Base directory: frontend
   Build command: yarn build
   Publish directory: frontend/build
   ```

4. **Variáveis de Ambiente** (opcional por enquanto)
   - Em "Site settings" → "Environment variables"
   - Adicione (opcional, pode usar mock data):
     ```
     REACT_APP_BACKEND_URL = https://seu-backend.railway.app
     ```

5. **Deploy!**
   - Clique em "Deploy site"
   - Aguarde o build (2-3 minutos)
   - Seu site estará no ar! 🎉

### ✅ O que funcionará:
- ✅ Hero section com foto e animações 3D
- ✅ Seção Sobre Mim
- ✅ Projetos (com mock data)
- ✅ Habilidades
- ✅ Blog com 4 artigos completos
- ✅ Todas as animações e efeitos visuais

---

## 🔧 Opção 2: Deploy Full-Stack (Frontend + Backend)

Para ter backend funcional, você precisa hospedar em plataformas separadas.

### Backend (FastAPI) - Opções Gratuitas:

#### A) Railway (Recomendado)
1. Acesse: https://railway.app/
2. Faça login com GitHub
3. "New Project" → "Deploy from GitHub repo"
4. Selecione `petroski1/Portif-lio`
5. Adicione estas variáveis de ambiente:
   ```
   MONGO_URL=mongodb+srv://seu-usuario:senha@cluster.mongodb.net/
   DB_NAME=portfolio_db
   CORS_ORIGINS=https://seu-site.netlify.app
   ```
6. Railway detectará automaticamente o Python e fará deploy
7. Você receberá uma URL tipo: `https://seu-projeto.railway.app`

#### B) Render
1. Acesse: https://render.com/
2. "New" → "Web Service"
3. Conecte seu GitHub e selecione o repositório
4. Configurações:
   ```
   Name: portfolio-backend
   Environment: Python
   Build Command: pip install -r backend/requirements.txt
   Start Command: cd backend && uvicorn server:app --host 0.0.0.0 --port $PORT
   ```

### Database (MongoDB) - MongoDB Atlas (Gratuito):

1. **Crie conta:** https://www.mongodb.com/cloud/atlas/register
2. **Crie um cluster gratuito** (M0)
3. **Configure acesso:**
   - Database Access → Add New User (salve usuário e senha)
   - Network Access → Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
4. **Obtenha Connection String:**
   - Clique em "Connect" → "Connect your application"
   - Copie a string: `mongodb+srv://usuario:senha@cluster.mongodb.net/`

### Conectando Tudo:

1. **Deploy Backend no Railway/Render** com MongoDB Atlas URL
2. **Atualize Frontend na Netlify:**
   - Site settings → Environment variables
   - Adicione: `REACT_APP_BACKEND_URL = https://seu-backend.railway.app`
   - Trigger deploy novamente

---

## 📝 Checklist de Deploy

### Frontend (Netlify):
- [ ] Repositório no GitHub atualizado
- [ ] Conta Netlify criada
- [ ] Site importado do GitHub
- [ ] Build bem-sucedido
- [ ] Site acessível na URL da Netlify
- [ ] React Router funcionando (testar /blog/1)

### Backend (Opcional):
- [ ] MongoDB Atlas configurado
- [ ] Backend no Railway/Render
- [ ] Variáveis de ambiente configuradas
- [ ] CORS configurado com URL da Netlify
- [ ] API respondendo (testar /api/)

---

## 🎨 Personalizações Pós-Deploy

### Domínio Customizado (Netlify):
1. "Domain settings" → "Add custom domain"
2. Digite seu domínio (ex: `davimedeiros.dev`)
3. Configure DNS conforme instruções

### SSL/HTTPS:
- ✅ Automático na Netlify!
- ✅ Automático no Railway/Render!

---

## 🐛 Troubleshooting

### Build falhou na Netlify?
- Verifique se `yarn.lock` está no repositório
- Confirme que o comando de build está correto
- Verifique logs de erro no Netlify

### Página em branco?
- Confirme que `_redirects` existe em `frontend/public/`
- Verifique console do navegador para erros

### Backend não conecta?
- Verifique CORS no backend
- Confirme URL do backend nas variáveis de ambiente
- Teste backend diretamente (ex: `https://seu-backend.railway.app/api/`)

---

## 💡 Dicas

1. **Deploy automático:** Cada push no GitHub fará deploy automático na Netlify
2. **Preview deploys:** Pull requests geram previews automáticos
3. **Analytics:** Netlify oferece analytics gratuito
4. **Forms:** Netlify Forms para formulário de contato (se adicionar)

---

## 📞 Suporte

- **Netlify Docs:** https://docs.netlify.com/
- **Railway Docs:** https://docs.railway.app/
- **MongoDB Atlas Docs:** https://www.mongodb.com/docs/atlas/

---

**Desenvolvido por Davi Medeiros**  
🔗 GitHub: https://github.com/petroski1/  
💼 LinkedIn: https://www.linkedin.com/in/davi-silva-876858281/
