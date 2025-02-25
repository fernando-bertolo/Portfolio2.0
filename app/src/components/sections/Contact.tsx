import { Mail, Phone, MapPin, Loader2, MailIcon } from 'lucide-react';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Button } from '../ui/button';
import { Toaster } from '../ui/toaster';

export const Contact = () => {
  const { toast } = useToast();
  const [isloading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    })
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3333/email', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      const data = await response.json()

      if (!response.ok) {
        toast({
          title: 'Erro!',
          description: data.message,
          variant: 'destructive',
        });
        return;
      }
      toast({
        title: 'Sucesso!!',
        description: 'E-mail enviado!',
        variant: 'default',
      })

      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });

    } catch (error) {
      console.log(error);
      toast({
        title: 'Erro!',
        description: 'Ocorreu um erro ao enviar o e-mail!!',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 mb-6">
              Entre em contato comigo para discutir projetos ou tirar duvidas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-gray-600 mr-3" size={20} />
                <span className="text-gray-600">bertolo.dev@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-gray-600 mr-3" size={20} />
                <span className="text-gray-600">(19) 99904-4410</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-gray-600 mr-3" size={20} />
                <span className="text-gray-600">Limeira, SP</span>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <Input
                type="text"
                id="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                Telefone
              </label>
              <Input
                type="telefone"
                id="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <Textarea
                id="mensagem"
                rows={4}
                value={formData.mensagem}
                onChange={handleChange}
              ></Textarea>
            </div>
            <Button
              type="submit"
              disabled={isloading}
            >
              {isloading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <MailIcon />
              )}
              Enviar
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  );
};