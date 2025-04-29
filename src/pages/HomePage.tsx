
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BarChart2, Download, Shield, Mail } from "lucide-react";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gradient-to-r from-cpis-green/90 to-cpis-green flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?q=80&w=1748&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Construindo o futuro da educação paulista</h1>
            <p className="text-xl mb-8">Responsáveis por construir e operar 16 escolas públicas no estado de São Paulo pelos próximos 25 anos.</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-cpis-green hover:bg-cpis-gray">
                <Link to="/quem-somos">Conheça nossa empresa</Link>
              </Button>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/progresso-obras">Ver progresso das obras</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cpis-green">Nosso compromisso com a educação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-cpis-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cpis-green" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Infraestrutura Moderna</h3>
                <p className="text-center text-gray-600">Escolas projetadas para oferecer ambientes de aprendizagem modernos e seguros.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-cpis-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cpis-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Gestão Eficiente</h3>
                <p className="text-center text-gray-600">Operação comprometida com a excelência em serviços e manutenção por 25 anos.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="bg-cpis-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cpis-green" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">Foco na Comunidade</h3>
                <p className="text-center text-gray-600">Compromisso social com o desenvolvimento das comunidades onde atuamos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-cpis-gray/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Acesso Rápido</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link to="/quem-somos" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <Users size={32} className="text-cpis-green mb-3" />
              <h3 className="text-lg font-semibold mb-1">Quem Somos</h3>
              <p className="text-sm text-gray-600">Conheça nossa história</p>
            </Link>
            
            <Link to="/progresso-obras" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <BarChart2 size={32} className="text-cpis-green mb-3" />
              <h3 className="text-lg font-semibold mb-1">Progresso das Obras</h3>
              <p className="text-sm text-gray-600">Acompanhe nossa evolução</p>
            </Link>
            
            <Link to="/downloads" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <Download size={32} className="text-cpis-green mb-3" />
              <h3 className="text-lg font-semibold mb-1">Downloads</h3>
              <p className="text-sm text-gray-600">Acesse documentos importantes</p>
            </Link>
            
            <Link to="/politica-privacidade" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <Shield size={32} className="text-cpis-green mb-3" />
              <h3 className="text-lg font-semibold mb-1">Política de Privacidade</h3>
              <p className="text-sm text-gray-600">LGPD e seus direitos</p>
            </Link>
            
            <Link to="/fale-conosco" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <Mail size={32} className="text-cpis-green mb-3" />
              <h3 className="text-lg font-semibold mb-1">Fale Conosco</h3>
              <p className="text-sm text-gray-600">Entre em contato</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 bg-cpis-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Construindo um futuro melhor para a educação paulista</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Faça parte desta jornada acompanhando o progresso das nossas obras e entre em contato para saber mais.</p>
          <Button asChild className="bg-white text-cpis-green hover:bg-cpis-gray">
            <Link to="/fale-conosco">Entre em contato</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
