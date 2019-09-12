# StarsGithub
Aplicativo que adiciona usuário do github mostrando todos os repositórios que ele deu like.

Adiciona o usuário atravês do login do github e mostra todos os repositórios que ele deu 'Star',
ao fazer scroll para baixo aplicativo busca mais informações e no topo fazendo scroll para cima 
aplicativo faz refresh da tela,ao click no repositorio abre um webView.Usuarios são salvo pelo 
memoria do dispositivo.

# Get Start
- Você deve ter algum emulador de smarthphone instalado, caso não tenha siga as [instruções](https://docs.rocketseat.dev/ambiente-react-native/introducao).
- Instale da dependencias do projeto digitando `yarn` ou `npm -i`
- Após isso abre o seu emulador e check se ele foi reconhecido digitando `adb devices` 
(Obs.: se o terminal não reconhecer o adb, reiniciar a maquina pode resolver, 
caso não solucione confira suas váriaveis de ambiente) e irá mostrar uma mensagem parecida
```bash
List of devices attached
<IP_ADDRESS>:<PORT>	device
```
- Depois rode os seguintes comandos em terminais diferentes
  - `yarn start` ou `npm run start`
  - Caso Android
    - `yarn react-native run-android` ou `npx react-native run-android`
  - Caso IOS
    - `yarn react-native run-ios` ou `npx react-native run-ios`
