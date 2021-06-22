import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src= {illustrationImg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Responda as melhores perguntas de seus fãs</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="Letmeask Logo" />
          <button>
            <img src={googleIconImg} alt="Logo Google" />
            Crie sua sala com o Google
          </button>
          <div>ou entre em uma sala existente</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />

            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  )
}