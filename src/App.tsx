import { Header } from "./components/Header"
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Ecthon"
        content="Teste 123"
      />
      <Post
        author="Segundo Post"
        content="Usando propriedades"
      />
    </>
  )
}

