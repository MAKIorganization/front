# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## To start K8s deployment

Prerequisites:
- Docker https://www.docker.com/products/docker-desktop/
- Minikube https://kubernetes.io/docs/tasks/tools/
- Kubectl https://kubernetes.io/docs/tasks/tools/

bash:
1. git clone https://github.com/MAKIorganization/front.git
2. npm i
3. Open docker desktop
4. minikube start
![Image](https://github.com/user-attachments/assets/20f82874-7997-4ff9-9dfa-e8d1f94c8067)
5. docker build -t orozobekovt/front:latest .
6. minikube image load orozobekovt/front:latest
7. cd k8s/
8. kubectl apply -f frontend-deployment.yaml
9. kubectl apply -f frontend-service.yaml
10. minikube service frontend-service
![Image](https://github.com/user-attachments/assets/1bfcf701-0ebe-4ce2-8139-eeab3b707e0d)

It will automatically open the website on your Google Chrome
![Image](https://github.com/user-attachments/assets/49248837-260b-4ed6-9b92-5214e3aa774c)
