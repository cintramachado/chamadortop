import  Header  from "./components/header";
import Menubox from "./components/menubox";



export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-center">Bem vindo ao sistema Chamador Top</h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 text-center px-4">
          Este é um sistema de gerenciamento de chamadas, onde você pode gerenciar suas ao Painel Eletrônico de forma eficiente e prática.
        </p>
      <Menubox 
        imageSrc="path/to/image.jpg" 
        title="Menu Title" 
        description="Menu description goes here." 
        link="/desired-link" 
      />
      </main>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2023 Chamador Top. Todos os direitos reservados.</p>
        <p>Desenvolvido por Pedro Cintra Machado</p>
      
    </footer>
    </div>
  );
}
