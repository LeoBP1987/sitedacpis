
import { useState } from "react";
import { Mail, MapPin, Phone, Users, BarChart2, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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

const departamentos = [
  { id: "atendimento", nome: "Atendimento Geral" },
  { id: "obras", nome: "Informações sobre Obras" },
  { id: "imprensa", nome: "Assessoria de Imprensa" },
  { id: "ouvidoria", nome: "Ouvidoria" },
  { id: "comercial", nome: "Comercial" },
  { id: "rh", nome: "Recursos Humanos" },
];

const FaleConosco = () => {
  const [enviandoFormulario, setEnviandoFormulario] = useState(false);
  
  const form = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      departamento: "",
      assunto: "",
      mensagem: "",
    },
  });

  const onSubmit = (data) => {
    setEnviandoFormulario(true);
    
    // Simulando envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada",
        description: "Obrigado por entrar em contato! Responderemos em breve.",
      });
      form.reset();
      setEnviandoFormulario(false);
    }, 1500);
  };

  return (
    <div>
      {/* Header Section */}
      <section className="relative bg-cpis-green py-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1170&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Mail size={42} className="text-white mr-3" />
            <h1 className="text-4xl font-bold text-white">Fale Conosco</h1>
          </div>
          <p className="text-xl text-white text-center max-w-3xl mx-auto">
            Entre em contato conosco para obter informações, enviar sugestões ou registrar reclamações.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-cpis-green">Informações de Contato</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-cpis-green mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Endereço</h3>
                      <p className="text-gray-700">
                        Rua Exemplar, 123<br />
                        Jardim Paulista<br />
                        São Paulo - SP<br />
                        CEP: 01000-000<br />
                        Brasil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-cpis-green mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telefones</h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Central de Atendimento:</span> (11) 1234-5678
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Ouvidoria:</span> (11) 5678-1234
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Comercial:</span> (11) 8765-4321
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-cpis-green mt-1 mr-4" />
                    <div>
                      <h3 className="font-bold text-lg mb-1">E-mails</h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Geral:</span> contato@cpis.com.br
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">Ouvidoria:</span> ouvidoria@cpis.com.br
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Imprensa:</span> imprensa@cpis.com.br
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 text-cpis-green">Horário de Atendimento</h2>
                  <p className="text-gray-700 mb-4">
                    <span className="font-medium">Segunda a Sexta:</span> 08:00 - 18:00
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Sábado:</span> 09:00 - 13:00 (apenas telefônico)
                  </p>
                </div>
                
                {/* Quick Links */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4 text-cpis-green">Acesso Rápido</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4 flex items-center">
                        <Users size={20} className="text-cpis-green mr-3" />
                        <a href="/quem-somos" className="text-gray-700 hover:text-cpis-green">Quem Somos</a>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4 flex items-center">
                        <BarChart2 size={20} className="text-cpis-green mr-3" />
                        <a href="/progresso-obras" className="text-gray-700 hover:text-cpis-green">Progresso das Obras</a>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4 flex items-center">
                        <Download size={20} className="text-cpis-green mr-3" />
                        <a href="/downloads" className="text-gray-700 hover:text-cpis-green">Downloads</a>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4 flex items-center">
                        <Shield size={20} className="text-cpis-green mr-3" />
                        <a href="/politica-privacidade" className="text-gray-700 hover:text-cpis-green">Política de Privacidade</a>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-cpis-green">Envie sua Mensagem</h2>
                <p className="text-gray-700 mb-6">
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível. Os campos marcados com * são obrigatórios.
                </p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="departamento"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Departamento*</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecione o departamento" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {departamentos.map((depto) => (
                                <SelectItem key={depto.id} value={depto.id}>
                                  {depto.nome}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="assunto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Assunto*</FormLabel>
                          <FormControl>
                            <Input placeholder="Digite o assunto" {...field} required />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="mensagem"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensagem*</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Digite sua mensagem" 
                              className="min-h-[150px]" 
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
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={enviandoFormulario}
                    >
                      {enviandoFormulario ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-cpis-gray/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Localização</h2>
          
          <div className="max-w-5xl mx-auto bg-white p-2 rounded-lg shadow-md">
            {/* Placeholder for an actual map - in a real project, you'd use Google Maps or another mapping service */}
            <div className="w-full h-[400px] bg-gray-200 rounded flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-cpis-green" />
                <p className="font-medium text-gray-700">Mapa da localização da CPIS</p>
                <p className="text-sm text-gray-500 mt-2">Rua Exemplar, 123 - São Paulo/SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaleConosco;
