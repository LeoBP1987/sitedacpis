
import { useState } from "react";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";

const PoliticaPrivacidade = () => {
  const [formType, setFormType] = useState("incidente");
  
  const form = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      tipoSolicitacao: formType,
      mensagem: "",
    },
  });

  const onSubmit = (data) => {
    toast({
      title: "Solicitação enviada",
      description: "Recebemos sua solicitação e entraremos em contato em breve.",
    });
    form.reset();
  };

  const handleFormTypeChange = (value) => {
    setFormType(value);
    form.setValue("tipoSolicitacao", value);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-cpis-green py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Shield size={42} className="text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Política de Privacidade</h1>
          </div>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Saiba como tratamos seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-cpis-green">Nossa Política de Privacidade</h2>
              
              <p className="mb-4">
                A CPIS está comprometida com a proteção dos dados pessoais de todos os usuários que interagem com nosso site e serviços. Esta política descreve como coletamos, usamos, compartilhamos e protegemos suas informações pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">1. Dados que coletamos</h3>
              <p className="mb-4">
                Podemos coletar os seguintes tipos de dados pessoais:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Dados de identificação:</strong> nome, e-mail, telefone, CPF (quando necessário).</li>
                <li><strong>Dados de contato:</strong> endereço, cidade, estado e outras informações de contato.</li>
                <li><strong>Dados de navegação:</strong> endereço IP, cookies, informações sobre o dispositivo e navegador.</li>
                <li><strong>Dados de interação:</strong> informações sobre como você utiliza nosso site e serviços.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">2. Como utilizamos seus dados</h3>
              <p className="mb-4">
                Os dados pessoais coletados podem ser utilizados para:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Processar solicitações e responder a dúvidas e contatos.</li>
                <li>Fornecer informações sobre o andamento das obras e projetos.</li>
                <li>Cumprir obrigações legais relacionadas à transparência de projetos públicos.</li>
                <li>Melhorar nossos serviços e a experiência de navegação no site.</li>
                <li>Enviar comunicados importantes sobre o projeto (quando autorizado).</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">3. Base legal para processamento</h3>
              <p className="mb-4">
                Processamos seus dados pessoais com base nas seguintes justificativas legais:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Consentimento:</strong> quando você fornece seus dados voluntariamente nos formulários.</li>
                <li><strong>Execução de contrato:</strong> quando necessário para cumprir obrigações contratuais.</li>
                <li><strong>Interesse legítimo:</strong> para melhorar nossos serviços e proteger nossos direitos.</li>
                <li><strong>Obrigação legal:</strong> quando exigido por lei, especialmente relacionado a contratos públicos.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">4. Compartilhamento de dados</h3>
              <p className="mb-4">
                Seus dados podem ser compartilhados com:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Órgãos governamentais, quando exigido por lei.</li>
                <li>Prestadores de serviços contratados que precisam acessar os dados para executar funções específicas.</li>
                <li>Parceiros do projeto, sempre com proteções contratuais adequadas.</li>
              </ul>
              <p className="mb-4">
                Não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">5. Segurança de dados</h3>
              <p className="mb-4">
                Implementamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição. Essas medidas incluem:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Criptografia de dados sensíveis.</li>
                <li>Controles de acesso rigorosos para funcionários e sistemas.</li>
                <li>Monitoramento contínuo de atividades suspeitas.</li>
                <li>Treinamento regular da equipe sobre segurança de dados.</li>
              </ul>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">6. Seus direitos como titular de dados</h3>
              <p className="mb-4">
                Em conformidade com a LGPD, você possui os seguintes direitos:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Acesso:</strong> saber quais dados pessoais temos sobre você.</li>
                <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
                <li><strong>Anonimização:</strong> solicitar a anonimização de dados desnecessários ou excessivos.</li>
                <li><strong>Eliminação:</strong> solicitar a exclusão de dados tratados com seu consentimento.</li>
                <li><strong>Portabilidade:</strong> solicitar a transferência de seus dados para outro fornecedor de serviço.</li>
                <li><strong>Revogação de consentimento:</strong> retirar seu consentimento a qualquer momento.</li>
              </ul>
              <p className="mb-4">
                Para exercer esses direitos, utilize o formulário de solicitação abaixo ou entre em contato com nosso Encarregado de Proteção de Dados.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">7. Cookies e tecnologias semelhantes</h3>
              <p className="mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar sua experiência de navegação, analisar o uso do site e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">8. Alterações nesta política</h3>
              <p className="mb-4">
                Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou requisitos legais. Recomendamos que você revise esta política regularmente. As alterações significativas serão notificadas através do site.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4 text-cpis-green">9. Contato</h3>
              <p className="mb-4">
                Se você tiver dúvidas ou preocupações sobre esta política de privacidade ou sobre o processamento de seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados:
              </p>
              <p className="mb-4">
                <strong>E-mail:</strong> dpo@cpis.com.br<br />
                <strong>Telefone:</strong> (11) 1234-5678
              </p>

              <p className="mt-8 text-sm text-gray-600">
                Última atualização: 15 de abril de 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LGPD Request Form Section */}
      <section className="py-12 bg-cpis-gray/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Solicitações LGPD</h2>
            <p className="text-center mb-8">
              Use o formulário abaixo para reportar incidentes de segurança ou solicitar acesso, correção, exclusão ou portabilidade dos seus dados pessoais.
            </p>

            <Card>
              <CardHeader>
                <CardTitle>Formulário de Solicitação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex gap-4 mb-6">
                    <Button 
                      variant={formType === "incidente" ? "default" : "outline"} 
                      onClick={() => handleFormTypeChange("incidente")}
                      className="flex-1"
                    >
                      Relatar Incidente
                    </Button>
                    <Button 
                      variant={formType === "solicitacao" ? "default" : "outline"} 
                      onClick={() => handleFormTypeChange("solicitacao")}
                      className="flex-1"
                    >
                      Solicitar Ação sobre Dados
                    </Button>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="nome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome completo*</FormLabel>
                            <FormControl>
                              <Input placeholder="Digite seu nome completo" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-mail*</FormLabel>
                            <FormControl>
                              <Input placeholder="Digite seu e-mail" type="email" {...field} required />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="telefone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite seu telefone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {formType === "solicitacao" && (
                      <FormField
                        control={form.control}
                        name="tipoSolicitacao"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de solicitação*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o tipo de solicitação" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="acesso">Acesso aos dados</SelectItem>
                                <SelectItem value="correcao">Correção de dados</SelectItem>
                                <SelectItem value="exclusao">Exclusão de dados</SelectItem>
                                <SelectItem value="anonimizacao">Anonimização</SelectItem>
                                <SelectItem value="portabilidade">Portabilidade</SelectItem>
                                <SelectItem value="revogacao">Revogação de consentimento</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                    
                    <FormField
                      control={form.control}
                      name="mensagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{formType === "incidente" ? "Descrição do incidente*" : "Detalhes da solicitação*"}</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder={formType === "incidente" 
                                ? "Descreva o incidente de segurança com o máximo de detalhes possíveis" 
                                : "Forneça detalhes sobre sua solicitação"
                              } 
                              className="min-h-[120px]" 
                              {...field} 
                              required 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="text-sm text-gray-600">
                      <p>* Campos obrigatórios</p>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Enviar Solicitação
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                Seu pedido será analisado por nossa equipe responsável e você receberá uma resposta em até 15 dias úteis, conforme previsto na LGPD.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PoliticaPrivacidade;
