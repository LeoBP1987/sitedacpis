
import { BarChart2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

// Dados simulados das escolas
const escolasDados = [
  { 
    id: 1, 
    nome: "E.E. Jardim Paulista", 
    cidade: "São Paulo", 
    progresso: 85, 
    fase: "Acabamentos", 
    dataInicio: "10/03/2023", 
    previsaoEntrega: "15/07/2024" 
  },
  { 
    id: 2, 
    nome: "E.E. Vila Mariana", 
    cidade: "São Paulo", 
    progresso: 62, 
    fase: "Estrutura e Alvenaria", 
    dataInicio: "05/05/2023", 
    previsaoEntrega: "20/09/2024" 
  },
  { 
    id: 3, 
    nome: "E.E. Pinheiros", 
    cidade: "São Paulo", 
    progresso: 45, 
    fase: "Instalações Elétricas", 
    dataInicio: "12/06/2023", 
    previsaoEntrega: "30/10/2024" 
  },
  { 
    id: 4, 
    nome: "E.E. Tatuapé", 
    cidade: "São Paulo", 
    progresso: 70, 
    fase: "Instalações Hidráulicas", 
    dataInicio: "20/04/2023", 
    previsaoEntrega: "25/08/2024" 
  },
  { 
    id: 5, 
    nome: "E.E. Centro", 
    cidade: "Santos", 
    progresso: 30, 
    fase: "Fundação", 
    dataInicio: "15/07/2023", 
    previsaoEntrega: "10/12/2024" 
  },
  { 
    id: 6, 
    nome: "E.E. Vila Nova", 
    cidade: "Campinas", 
    progresso: 20, 
    fase: "Terraplanagem", 
    dataInicio: "02/08/2023", 
    previsaoEntrega: "20/01/2025" 
  },
  { 
    id: 7, 
    nome: "E.E. Jardim Europa", 
    cidade: "Ribeirão Preto", 
    progresso: 50, 
    fase: "Estrutura Metálica", 
    dataInicio: "11/05/2023", 
    previsaoEntrega: "05/11/2024" 
  },
  { 
    id: 8, 
    nome: "E.E. Parque das Flores", 
    cidade: "Sorocaba", 
    progresso: 40, 
    fase: "Alvenaria", 
    dataInicio: "25/06/2023", 
    previsaoEntrega: "15/12/2024" 
  },
];

const progressoTotal = Math.round(escolasDados.reduce((acc, escola) => acc + escola.progresso, 0) / escolasDados.length);

const ProgressoObras = () => {
  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-cpis-green py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <BarChart2 size={42} className="text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Progresso das Obras</h1>
          </div>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Acompanhe em tempo real o andamento da construção das 16 escolas públicas no estado de São Paulo.
          </p>
        </div>
      </section>

      {/* Overall Progress Section */}
      <section className="py-12 bg-cpis-gray/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Progresso Geral</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">Evolução Total</span>
                <span className="font-bold text-cpis-green">{progressoTotal}%</span>
              </div>
              <Progress value={progressoTotal} className="h-4" />
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cpis-gray/20 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">Escolas em construção</p>
                  <p className="text-2xl font-bold text-cpis-green">8 de 16</p>
                </div>
                
                <div className="bg-cpis-gray/20 p-4 rounded">
                  <p className="text-sm text-gray-600 mb-1">Previsão final do projeto</p>
                  <p className="text-2xl font-bold text-cpis-green">Dezembro/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Schools Progress */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Progresso Individual das Escolas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {escolasDados.map((escola) => (
              <Card key={escola.id} className="overflow-hidden">
                <div className="h-3 bg-gradient-to-r from-cpis-green/50 to-cpis-green" style={{ width: `${escola.progresso}%` }}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{escola.nome}</h3>
                  <p className="text-gray-600 mb-4">{escola.cidade}</p>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Progresso</span>
                    <span className="font-bold text-cpis-green">{escola.progresso}%</span>
                  </div>
                  <Progress value={escola.progresso} className="h-2 mb-4" />
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Fase atual:</p>
                      <p className="font-semibold">{escola.fase}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Início:</p>
                      <p className="font-semibold">{escola.dataInicio}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Previsão de entrega:</p>
                      <p className="font-semibold">{escola.previsaoEntrega}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-2">Dados atualizados em 20/04/2025</p>
            <p className="text-sm">As informações são atualizadas mensalmente conforme evolução das obras.</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 bg-cpis-gray/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Cronograma de Desenvolvimento</h2>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cpis-green"></div>
            
            <div className="space-y-12">
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpis-green absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 bg-white p-4 rounded-lg shadow-md">
                  <p className="font-bold text-cpis-green">2023 - 1º Semestre</p>
                  <h3 className="text-lg font-bold mb-2">Início do Projeto</h3>
                  <p className="text-gray-700">Assinatura do contrato e início dos processos de licenciamento e preparação dos terrenos.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpis-green absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="mr-12 ml-auto bg-white p-4 rounded-lg shadow-md text-right">
                  <p className="font-bold text-cpis-green">2023 - 2º Semestre</p>
                  <h3 className="text-lg font-bold mb-2">Início das Construções</h3>
                  <p className="text-gray-700">Começo das obras com foco nas fundações e estruturas principais.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpis-green absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 bg-white p-4 rounded-lg shadow-md">
                  <p className="font-bold text-cpis-green">2024 - 2º Semestre</p>
                  <h3 className="text-lg font-bold mb-2">Primeiras Entregas</h3>
                  <p className="text-gray-700">Previsão de conclusão das primeiras 4 escolas e início das operações.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpis-green absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="mr-12 ml-auto bg-white p-4 rounded-lg shadow-md text-right">
                  <p className="font-bold text-cpis-green">2025 - 1º Semestre</p>
                  <h3 className="text-lg font-bold mb-2">Segunda Fase de Entregas</h3>
                  <p className="text-gray-700">Conclusão de mais 6 escolas e expansão das operações.</p>
                </div>
              </div>
              
              <div className="relative">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cpis-green absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 bg-white p-4 rounded-lg shadow-md">
                  <p className="font-bold text-cpis-green">2025 - 2º Semestre</p>
                  <h3 className="text-lg font-bold mb-2">Conclusão Total</h3>
                  <p className="text-gray-700">Entrega das 16 escolas e início pleno da operação em todas as unidades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressoObras;
