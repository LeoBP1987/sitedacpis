
import { Users } from "lucide-react";

const QuemSomos = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-cpis-green py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1169&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Users size={42} className="text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Quem Somos</h1>
          </div>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Conheça a história e os valores da CPIS, empresa responsável pela construção e operação de escolas públicas no estado de São Paulo.
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-cpis-green">Nossa História</h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                A CPIS foi fundada em 2010 com a visão de transformar a infraestrutura pública no Brasil. Ao longo dos anos, desenvolvemos expertise em projetos de construção civil, especialmente voltados para o setor educacional, hospitalar e administrativo.
              </p>
              
              <p>
                Nossa trajetória foi marcada por entregas de excelência e compromisso com a qualidade, o que nos permitiu crescer rapidamente e conquistar a confiança de parceiros públicos e privados no desenvolvimento de projetos de grande porte.
              </p>
              
              <p>
                Em 2023, demos um importante passo ao vencer o leilão de menor lance para construir 16 escolas públicas no estado de São Paulo, com o compromisso adicional de operar essas unidades pelos próximos 25 anos. Este projeto representa nossa maior conquista até o momento, consolidando nossa posição como referência em parcerias público-privadas para infraestrutura educacional.
              </p>
            </div>

            <div className="my-12 border-l-4 border-cpis-green pl-6 py-2">
              <h3 className="text-xl font-bold mb-2 text-cpis-green">Nossa Missão</h3>
              <p className="text-gray-700">
                Contribuir para a melhoria da educação pública através da construção e operação de infraestruturas escolares de alta qualidade, que proporcionem ambientes seguros e inspiradores para o aprendizado.
              </p>
            </div>

            <div className="my-12 border-l-4 border-cpis-green pl-6 py-2">
              <h3 className="text-xl font-bold mb-2 text-cpis-green">Nossa Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como a empresa líder em soluções de infraestrutura educacional no Brasil, estabelecendo novos padrões de qualidade e eficiência na construção e gestão de espaços de ensino.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-cpis-green">Nossos Valores</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-cpis-green">Excelência</h3>
                <p className="text-gray-700">Buscamos os mais altos padrões de qualidade em todos os nossos projetos e serviços.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-cpis-green">Inovação</h3>
                <p className="text-gray-700">Investimos em soluções modernas e sustentáveis para criar espaços de aprendizado do futuro.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-cpis-green">Compromisso Social</h3>
                <p className="text-gray-700">Reconhecemos nossa responsabilidade no desenvolvimento das comunidades onde atuamos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-cpis-green">Transparência</h3>
                <p className="text-gray-700">Atuamos com integridade e ética em todos os relacionamentos e processos de negócio.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-cpis-green">Nossa Experiência</h2>
            
            <div className="space-y-6 text-gray-700 mb-12">
              <p>
                Ao longo de nossa existência, a CPIS acumulou vasta experiência em:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Construção de mais de 30 instalações educacionais em todo o Brasil</li>
                <li>Implementação de soluções sustentáveis e energeticamente eficientes em edificações</li>
                <li>Gerenciamento operacional de infraestruturas públicas</li>
                <li>Desenvolvimento de projetos em parceria com o setor público</li>
                <li>Criação de ambientes educacionais acessíveis e inclusivos</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-cpis-green">Liderança</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 rounded-full bg-cpis-gray/50 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-1">Ana Maria Silva</h3>
                <p className="text-center text-cpis-green font-medium mb-3">CEO e Fundadora</p>
                <p className="text-gray-700 text-sm">
                  Com mais de 25 anos de experiência no setor de construção civil e gestão de projetos públicos, Ana Maria lidera a CPIS desde sua fundação.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-24 h-24 rounded-full bg-cpis-gray/50 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-1">Carlos Eduardo Santos</h3>
                <p className="text-center text-cpis-green font-medium mb-3">Diretor de Operações</p>
                <p className="text-gray-700 text-sm">
                  Especialista em gestão de infraestruturas educacionais, Carlos coordena as operações e manutenção de todas as unidades sob responsabilidade da CPIS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
