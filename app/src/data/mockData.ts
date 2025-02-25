import { Project, Experience, Certificate, BlogPost, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio 1.0",
    description: "Primeiro contato com React criando um portfolio",
    imageUrl: "src/assets/ImagePc.jpg",
    technologies: ["React", "Node.js", "Styled Components"],
    link: "https://bertolo.netlify.app/",
    github: "https://github.com/fernando-bertolo/Portfolio"
  },
  {
    id: 2,
    title: "Gerenciador de estoque automotivo",
    description: "Projeto realizado como Trabalho de conclusão de curso",
    imageUrl: "src/assets/ImageTcc.png",
    technologies: ["React", "Express JS", "MySql", "Docker"],
    link: "https://github.com/fernando-bertolo/Projeto-TCC",
    github: "https://github.com/fernando-bertolo/Projeto-TCC"
  },
  {
    id: 3,
    title: "Previsão do tempo",
    description: "Projeto realizado com intuito de aprimorar habilidades de javascript e entender como funciona o deploy de uma aplicação",
    imageUrl: "src/assets/ImagePrevisionWeather.png",
    technologies: ["HTML", "CSS", "JavaScript", "Deploy"],
    link: "https://prevision-weather.netlify.app/",
    github: "https://github.com/fernando-bertolo/Clima-tempo-JS"
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Light System Software",
    city: "Limeira, São Paulo, Brasil",
    position: "Desenvolvedor FullStack Jr",
    period: "Out 2024 - o momento",
    description: `
      <ul>
        <li>
          Responsável pela criação de APIs utilizando NestJS e TypeScript, com aplicação de conceitos avançados de Clean Architecture e princípios SOLID, 
          garantindo um código limpo, escalável e de alta qualidade.      
        </li>
        <br>
        <li>
          Atuando na implementação de novas funcionalidades e manutenção de um sistema focado no gerenciamento de estoque e emissão de notas fiscais, 
          contribuindo para a eficiência e organização de processos empresariais com as seguintes tecnologias: PHP, Docker, MySQL, JavaScript        
        </li>
      </ul>

      <br>
      <div class="flex flex-wrap gap-3">        
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">HTML</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">CSS</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">JavaScript</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Jquery</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Bootstrap</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">TypeScript</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">PHP</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">SQL Server</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">MySQL</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">CodeIgniter</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Docker</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Nest Js</span>
      </div>  
    `
  },
  {
    id: 2,
    company: "Solutions BI",
    city: "Limeira, São Paulo, Brasil",
    position: "",
    period: "",
    description: ""
  },
  {
    id: 3,
    company: "BluePex CyberSecurity",
    city: "Limeira, São Paulo, Brasil",
    position: "Analista de redes",
    period: "Aug 2022 - Mar 2024",
    description: `
      <p>Durante minha atuação na Bluepex Cybersecurity, fui responsável por garantir o funcionamento eficiente e seguro dos sistemas de clientes. Minhas principais atividades incluíram:</p>
      <br>
      <ul>
        <li>Configuração e manutenção de servidores DHCP, DNS e Active Directory.</li>
        <li>Implementação de regras de firewall e redirecionamento de portas (NAT).</li>
        <li>Configuração de proxies e VPNs, com expertise em OpenVPN e IPsec.</li>
        <li>Integração de gerenciamento de rotas utilizando BGP/FRR para VPNs OpenVPN.</li>
        <li>Desenvolvimento de estratégias de LoadBalance e FailOver, assegurando redundância e continuidade dos serviços.</li>
        <li>Segmentação de redes por meio de VLANs, aprimorando a segurança e a eficiência das infraestruturas.</li>
        <li>Uso avançado de ambientes Linux para administração e suporte técnico.</li>
      </ul>
      <br>
      <p>Além das responsabilidades técnicas, também ministrei treinamentos para clientes, disseminando boas práticas e conhecimentos que facilitaram a gestão e a utilização de sistemas.</p>
    `
  }
];



export const solutionsbiExperience: Experience[] = [

  {
    id: 1,
    company: "Solutions BI",
    city: "Limeira, São Paulo, Brasil",
    position: "Assistant Developer",
    period: "Jul 2024 - Out 2024",
    description: `
      <p>Atuei no Desenvolvimento Web FullStack.</p>
      <br>
      <p>Experiências em projetos: </p>
      <br>
      <ul>
        <li>Sistema de gestão de pedidos e delivery em Laravel</li>
        <li>Projetos de consultas veiculares em PHP</li>
        <li>Manutenção em sites institucionais com Wordpress</li>
      </ul>
      <br>

      <div class="flex flex-wrap gap-3">        
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">HTML</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">CSS</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">JavaScript</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Jquery</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Bootstrap</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">TypeScript</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">PHP</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">SQL Server</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">MySQL</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Laravel</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Docker</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">WordPress</span>
      </div>      
    `
  },
  {
    id: 2,
    company: "Solutions BI",
    city: "Limeira, São Paulo, Brasil",
    position: "Estagiário em desenvolvimento de Sistemas e Análise de Dados",
    period: "Mar 2024 - Jul 2024",
    description: `
      <p>Responsável pelo Desenvolvimento Web Fullstack e criação de relatórios no Power BI.</p>
      <br>

      <div class="flex flex-wrap gap-3">        
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">HTML</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">CSS</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">JavaScript</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Bootstrap</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">PHP</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">SQL Server</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">MySQL</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 cursor-pointer">Power BI</span>
      </div> 
    `
  }
];


export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Java: Orientação a objetos",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/formalCertificate/7ec933ff-4f86-425a-a416-155b4d918c49"
  },
  {
    id: 2,
    name: "Java: Polimorfismo",
    issuer: "Alura",
    date: "2025",
    link: "https://cursos.alura.com.br/formalCertificate/b57a299f-d680-4f8a-99ac-256b01ee91be"
  },
  {
    id: 3,
    name: "NLW Journey - React Native",
    issuer: "Rocketseat",
    date: "2024",
    link: "https://app.rocketseat.com.br/certificates/2c352668-1a00-4520-9eb9-83b1f9e46820"
  },
  {
    id: 4,
    name: "Git e GitHub",
    issuer: "Alura",
    date: "2023",
    link: "https://cursos.alura.com.br/certificate/1ed3787c-e0d0-4663-a145-febf432091df"
  },
  {
    id: 5,
    name: "JavaScript: Arrays",
    issuer: "Alura",
    date: "2023",
    link: "https://cursos.alura.com.br/certificate/09b4d5d9-95b7-46af-ae44-0524f17dc537"
  },
  {
    id: 6,
    name: "JavaScript: Tipos, Variaveis",
    issuer: "Alura",
    date: "2023",
    link: "https://cursos.alura.com.br/certificate/ac8c4777-74b0-4c72-9373-381b67ce7d08?lang=pt_BR"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    content: "A deep dive into React Hooks and their practical applications...",
    author: "John Doe",
    date: "2024-03-15",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: "Essential TypeScript patterns and practices for modern web development...",
    author: "John Doe",
    date: "2024-03-10",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com/fernando-bertolo",
    icon: "Github"
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/fernandobertolojr/",
    icon: "Linkedin"
  },
  {
    id: 3,
    platform: "YouTube",
    url: "https://www.youtube.com/@bertolodev",
    icon: "Youtube"
  },
  {
    id: 4,
    platform: "Instagram",
    url: "https://www.instagram.com/bertolo.dev/",
    icon: "Instagram"
  },
];