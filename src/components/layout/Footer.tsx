
import { Link } from "react-router-dom";
import { Users, BarChart2, Download, Shield, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cpis-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-bauhaus text-3xl mb-4 text-white">CPIS</div>
            <p className="text-gray-200 max-w-xs">
              Construindo o futuro da educação através de infraestrutura de qualidade para escolas públicas do estado de São Paulo.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/quem-somos" className="text-gray-200 hover:text-white flex items-center gap-2">
                  <Users size={16} />
                  <span>Quem Somos</span>
                </Link>
              </li>
              <li>
                <Link to="/progresso-obras" className="text-gray-200 hover:text-white flex items-center gap-2">
                  <BarChart2 size={16} />
                  <span>Progresso das Obras</span>
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-gray-200 hover:text-white flex items-center gap-2">
                  <Download size={16} />
                  <span>Downloads</span>
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-gray-200 hover:text-white flex items-center gap-2">
                  <Shield size={16} />
                  <span>Política de Privacidade</span>
                </Link>
              </li>
              <li>
                <Link to="/fale-conosco" className="text-gray-200 hover:text-white flex items-center gap-2">
                  <Mail size={16} />
                  <span>Fale Conosco</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Endereço</h3>
            <p className="text-gray-200">
              Rua Exemplar, 123<br />
              São Paulo - SP<br />
              CEP: 01000-000<br />
              Brasil
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="text-gray-200">
              Telefone: (11) 1234-5678<br />
              Email: contato@cpis.com.br
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-sm text-gray-200">
          <p>© {currentYear} CPIS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
