
import { useState } from 'react';
import { Download, FileText, File, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const arquivos = [
  {
    id: 1,
    nome: "Edital Completo do Projeto",
    categoria: "Edital",
    tipo: "PDF",
    tamanho: "2.3 MB",
    data: "10/01/2023",
    icone: FileCode,
    url: "#"
  },
  {
    id: 2,
    nome: "Plantas Básicas - Modelo Padrão",
    categoria: "Plantas",
    tipo: "PDF",
    tamanho: "5.7 MB",
    data: "15/02/2023",
    icone: FileCode,
    url: "#"
  },
  {
    id: 3,
    nome: "Cronograma de Obras 2023-2025",
    categoria: "Cronogramas",
    tipo: "XLSX",
    tamanho: "1.2 MB",
    data: "05/03/2023",
    icone: FileText,
    url: "#"
  },
  {
    id: 4,
    nome: "Apresentação do Projeto",
    categoria: "Apresentações",
    tipo: "PPTX",
    tamanho: "8.5 MB",
    data: "20/03/2023",
    icone: FileText,
    url: "#"
  },
  {
    id: 5,
    nome: "Especificações Técnicas",
    categoria: "Especificações",
    tipo: "PDF",
    tamanho: "3.8 MB",
    data: "12/04/2023",
    icone: FileCode,
    url: "#"
  },
  {
    id: 6,
    nome: "Relatório de Impacto Ambiental",
    categoria: "Relatórios",
    tipo: "PDF",
    tamanho: "6.2 MB",
    data: "07/05/2023",
    icone: FileCode,
    url: "#"
  },
  {
    id: 7,
    nome: "Modelos 3D - Pacote Completo",
    categoria: "Modelos",
    tipo: "ZIP",
    tamanho: "128 MB",
    data: "25/06/2023",
    icone: File,
    url: "#"
  },
  {
    id: 8,
    nome: "Materiais de Divulgação",
    categoria: "Marketing",
    tipo: "ZIP",
    tamanho: "45 MB",
    data: "10/07/2023",
    icone: File,
    url: "#"
  },
  {
    id: 9,
    nome: "Manual de Identidade Visual",
    categoria: "Manuais",
    tipo: "PDF",
    tamanho: "12.5 MB",
    data: "18/08/2023",
    icone: FileCode,
    url: "#"
  },
  {
    id: 10,
    nome: "Contratos e Aditivos",
    categoria: "Contratos",
    tipo: "PDF",
    tamanho: "1.8 MB",
    data: "05/09/2023",
    icone: FileCode,
    url: "#"
  },
  {
    id: 11,
    nome: "Relatório Trimestral Q1-2024",
    categoria: "Relatórios",
    tipo: "PDF",
    tamanho: "4.2 MB",
    data: "15/01/2024",
    icone: FileCode,
    url: "#"
  },
  {
    id: 12,
    nome: "Fotos das Obras - Janeiro 2024",
    categoria: "Mídia",
    tipo: "ZIP",
    tamanho: "87.3 MB",
    data: "31/01/2024",
    icone: File,
    url: "#"
  },
];

const categorias = [...new Set(arquivos.map(arquivo => arquivo.categoria))];

const Downloads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const filteredFiles = arquivos.filter(arquivo => {
    const matchesSearch = arquivo.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || arquivo.categoria === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-cpis-green py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Download size={42} className="text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Downloads</h1>
          </div>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Acesse e baixe documentos importantes relacionados ao projeto das escolas públicas.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-cpis-gray/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <Input
                  placeholder="Pesquisar documentos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="w-full md:w-64">
                <Select
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Todas as categorias" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todas as categorias</SelectItem>
                    {categorias.map((categoria) => (
                      <SelectItem key={categoria} value={categoria}>
                        {categoria}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Files Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Documentos Disponíveis</h2>
            
            {filteredFiles.length > 0 ? (
              <div className="space-y-4">
                {filteredFiles.map((arquivo) => (
                  <Card key={arquivo.id} className="hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <div className="mr-4">
                          <arquivo.icone size={36} className="text-cpis-green" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold">{arquivo.nome}</h3>
                          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600 mt-1">
                            <span>Categoria: {arquivo.categoria}</span>
                            <span>Formato: {arquivo.tipo}</span>
                            <span>Tamanho: {arquivo.tamanho}</span>
                            <span>Data: {arquivo.data}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                          <Download size={16} />
                          <span>Baixar</span>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <File size={48} className="mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">Nenhum documento encontrado</h3>
                <p className="text-gray-600">
                  Tente ajustar seus filtros ou termos de pesquisa para encontrar o que procura.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-10 bg-cpis-gray/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Informações sobre Downloads</h2>
            <p className="text-gray-700 mb-6">
              Todos os documentos disponíveis nesta seção são de acesso público conforme os requisitos de transparência previstos no edital.
              Para documentos adicionais ou solicitações específicas, entre em contato através da seção Fale Conosco.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-left">
              <p className="text-yellow-800 text-sm">
                <strong>Nota:</strong> Os arquivos são disponibilizados conforme sua relevância no cronograma do projeto. Novos documentos são adicionados regularmente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
