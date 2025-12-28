import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get from localStorage or default to English
    return localStorage.getItem('language') || 'en'
  })

  useEffect(() => {
    // Save to localStorage whenever language changes
    localStorage.setItem('language', language)
    // Update HTML lang attribute for accessibility
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt')
  }

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: (key) => translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Translations
const translations = {
  pt: {
    // Hero
    'hero.title': 'Engenheiro Front End',
    'hero.description': 'Engenheiro Front End com 6+ anos de experiência em desenvolvimento de software, especializado em tecnologias frontend modernas e arquiteturas cloud.',
    'hero.nav.about': 'Sobre',
    'hero.nav.skills': 'Habilidades',
    'hero.nav.experience': 'Experiência',
    'hero.nav.projects': 'Projetos',
    'hero.starwars': 'May the Force be with you',
    'hero.devNotice': 'Portfólio em desenvolvimento',
    'hero.easterEggHint': 'tente clicar em mim',
    'hero.resume': 'Ver Currículo',

    // About
    'about.p1.intro': 'Sou um',
    'about.p1.title': 'Engenheiro Front End',
    'about.p1.text': 'com mais de 6 anos de experiência em desenvolvimento de software, especializado em tecnologias frontend modernas e arquiteturas cloud. Com formação em Sistemas de Informação pela Faculdade Impacta Tecnologia (2017-2020), construí uma carreira sólida em desenvolvimento web.',
    'about.p2.text1': 'Atualmente trabalho no',
    'about.p2.company1': 'Itaú Unibanco',
    'about.p2.text2': ', liderando a modernização da plataforma de pós-venda de seguros corporativos. Trabalho com Angular, TypeScript, RxJS, NgRx e arquiteturas de microfrontend integradas com serviços AWS, entregando soluções escaláveis que melhoram a performance e experiência do usuário em todos os canais digitais do banco.',
    'about.p3.text1': 'Minha experiência inclui passagem pela',
    'about.p3.company1': 'Cox Automation',
    'about.p3.text2': '(Canadá) desenvolvendo aplicações React em monorepo, e pelo',
    'about.p3.company2': 'Santander Tecnologia',
    'about.p3.text3': 'programando em COBOL/JCL para sistemas mainframe críticos. Sou reconhecido por colaboração em equipe, mentalidade de aprendizado contínuo e capacidade de traduzir requisitos de negócio em soluções técnicas robustas.',
    'about.p4.text': 'Além de código, sou apaixonado por música e tenho o sonho de ser produtor musical ou tocar guitarra para alguma banda. A música é minha válvula de escape e fonte de inspiração criativa.',
    'about.interests.title': 'Quando não estou programando:',
    'about.interests.item1': 'Explorando novas tecnologias e frameworks',
    'about.interests.item2': 'Tocando guitarra ou qualquer outro instrumento',
    'about.interests.item3': 'Fazendo levantamento de peso olímpico, na academia ou correndo',
    'about.interests.item4': 'Jogando CS2 (6000 horas de jogo) ou assistindo Dark (série favorita)',

    // Skills
    'skills.frontend.title': 'Frontend',
    'skills.mobile.title': 'Mobile',
    'skills.backend.title': 'Backend',
    'skills.state.title': 'State & Data',
    'skills.libs.title': 'Libraries',
    'skills.testing.title': 'Testes',
    'skills.tools.title': 'Ferramentas',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.other.title': 'Outros',

    // Experience
    'exp.nubank.period': 'Jan 2025 — Presente',
    'exp.nubank.role': 'Engenheiro de Software',
    'exp.nubank.company': 'Nubank',
    'exp.nubank.description': 'Desenvolvimento frontend em equipe de IA generativa focada em produtos internos, construindo interfaces modernas com React e TypeScript para ferramentas que aumentam a produtividade dos times.',

    'exp.itau.period': 'Abr 2023 — Out 2024',
    'exp.itau.role': 'Engenheiro de Software Pleno',
    'exp.itau.company': 'Itaú Unibanco',
    'exp.itau.description': 'Liderança na modernização da plataforma de pós-venda de seguros corporativos, melhorando performance e experiência do usuário em todos os canais digitais. Desenvolvimento de aplicações frontend com Angular, TypeScript e RxJS, implementando arquiteturas de microfrontend integradas com AWS. Automação de testes E2E com Cypress e garantia de qualidade com Jest.',

    'exp.cox.period': 'Abr 2020 — Abr 2023',
    'exp.cox.role': 'Engenheiro de Software Pleno',
    'exp.cox.company': 'Cox Automation Inc. (Remoto - Canadá)',
    'exp.cox.description': 'Colaboração com equipes multidisciplinares para entregar features de alta qualidade. Desenvolvimento de aplicações modernas e performáticas usando React (Hooks e Redux). Arquitetura e manutenção de infraestrutura monorepo com Lerna. Integração com CMS e APIs terceiras, participação em code reviews e mentoria de desenvolvedores júnior.',

    'exp.santander.period': 'Jan 2018 — Abr 2020',
    'exp.santander.role': 'Engenheiro de Software Júnior',
    'exp.santander.company': 'Santander Tecnologia',
    'exp.santander.description': 'Manutenção e desenvolvimento de novos recursos para sistemas bancários críticos de débito e crédito. Programação em COBOL e JCL para processamento batch em mainframe, garantindo alta confiabilidade e integridade de dados. Resolução de problemas em produção, minimizando downtime e interrupções de serviço.',

    // Projects
    'proj.toolkit.title': 'Toolkit Dev',
    'proj.toolkit.description': 'Plataforma all-in-one para desenvolvedores com navegador de documentação offline-first (15+ linguagens), 20+ ferramentas úteis (formatters, generators, calculators, references) e code snippets. Arquitetura 100% client-side com cache IndexedDB integrado à DevDocs API.',
    'proj.timetracker.title': 'Time Tracker',
    'proj.timetracker.description': 'Aplicação web para freelancers controlarem horas trabalhadas com timer interativo, entrada manual de registros, estatísticas automáticas (hoje/semana/mês), banco de dados SQLite local e exportação CSV. Interface minimalista dark com edição e histórico completo.',

    // Footer
    'footer.built': 'Built with',
    'footer.and': 'and',

    // Resume
    'resume.back': 'Voltar ao portfólio',
    'resume.download': 'Baixar PDF',
    'resume.title': 'Currículo',

    // Mentoria
    'mentoria.back': 'Voltar ao portfólio',
    'mentoria.title': 'Mentoria em Tecnologia',
    'mentoria.description': '6 meses de acompanhamento para te ajudar a evoluir como dev.',
    'mentoria.vagas': 'vagas restantes',
    'mentoria.inclui.title': 'O que está incluso:',
    'mentoria.inclui.item1': 'Sessões semanais de 1h30 via videoconferência',
    'mentoria.inclui.item2': 'Plano de estudos personalizado',
    'mentoria.inclui.item3': 'Code review e feedback em projetos reais',
    'mentoria.inclui.item4': 'Suporte assíncrono via WhatsApp/Discord',
    'mentoria.inclui.item5': 'Preparação para entrevistas técnicas',
    'mentoria.inclui.item6': 'Acesso a materiais exclusivos e projetos práticos',
    'mentoria.form.title': 'Inscreva-se agora',
    'mentoria.form.nome': 'Nome completo',
    'mentoria.form.nome.placeholder': 'Seu nome completo',
    'mentoria.form.email': 'E-mail',
    'mentoria.form.email.placeholder': 'seu@email.com',
    'mentoria.form.telefone': 'Telefone / WhatsApp',
    'mentoria.form.telefone.placeholder': '(11) 99999-9999',
    'mentoria.form.linkedin': 'LinkedIn (opcional)',
    'mentoria.form.area': 'Área de interesse',
    'mentoria.form.area.placeholder': 'Selecione uma área',
    'mentoria.form.nivel': 'Nível de experiência',
    'mentoria.form.nivel.placeholder': 'Selecione seu nível',
    'mentoria.form.submit': 'Enviar inscrição',
    'mentoria.form.submitting': 'Enviando...',
    'mentoria.area.frontend': 'Frontend',
    'mentoria.area.backend': 'Backend',
    'mentoria.area.fullstack': 'Fullstack',
    'mentoria.area.mobile': 'Mobile',
    'mentoria.area.devops': 'DevOps',
    'mentoria.area.naosei': 'Ainda não sei',
    'mentoria.nivel.iniciante': 'Iniciante (estou começando)',
    'mentoria.nivel.junior': 'Júnior (0-2 anos)',
    'mentoria.nivel.pleno': 'Pleno (2-5 anos)',
    'mentoria.nivel.transicao': 'Em transição de carreira',
    'mentoria.success.title': 'Inscrição enviada!',
    'mentoria.success.message': 'Obrigado pelo interesse! Entrarei em contato em breve para agendar uma conversa inicial.',
    'mentoria.error': 'Ocorreu um erro ao enviar sua inscrição. Por favor, tente novamente.',
    'mentoria.error.email': 'Digite um e-mail válido',
    'mentoria.error.telefone': 'Digite um telefone válido com DDD',
  },
  en: {
    // Hero
    'hero.title': 'Front End Engineer',
    'hero.description': 'Front End Engineer with 6+ years of experience in software development, specializing in modern frontend technologies and cloud architectures.',
    'hero.nav.about': 'About',
    'hero.nav.skills': 'Skills',
    'hero.nav.experience': 'Experience',
    'hero.nav.projects': 'Projects',
    'hero.starwars': 'May the Force be with you',
    'hero.devNotice': 'Portfolio under development',
    'hero.easterEggHint': 'try clicking me',
    'hero.resume': 'View Resume',

    // About
    'about.p1.intro': 'I am a',
    'about.p1.title': 'Front End Engineer',
    'about.p1.text': 'with 6+ years of experience in software development, specializing in modern frontend technologies and cloud architectures. With a degree in Information Systems from Faculdade Impacta Tecnologia (2017-2020), I have built a solid career in web development.',
    'about.p2.text1': 'Currently working at',
    'about.p2.company1': 'Itaú Unibanco',
    'about.p2.text2': ', leading the modernization of the corporate insurance after-sales platform. Working with Angular, TypeScript, RxJS, NgRx and microfrontend architectures integrated with AWS services, delivering scalable solutions that improve performance and user experience across all bank digital channels.',
    'about.p3.text1': 'My experience includes time at',
    'about.p3.company1': 'Cox Automation',
    'about.p3.text2': '(Canada) developing React applications in monorepo, and at',
    'about.p3.company2': 'Santander Tecnologia',
    'about.p3.text3': 'programming in COBOL/JCL for critical mainframe systems. I am recognized for team collaboration, continuous learning mindset, and ability to translate business requirements into robust technical solutions.',
    'about.p4.text': 'Beyond code, I\'m passionate about music and dream of being a music producer or playing guitar in a band. Music is my escape valve and source of creative inspiration.',
    'about.interests.title': 'When I\'m not coding:',
    'about.interests.item1': 'Exploring new technologies and frameworks',
    'about.interests.item2': 'Playing guitar or any other instrument',
    'about.interests.item3': 'Doing Olympic weightlifting, at the gym or running',
    'about.interests.item4': 'Playing CS2 (6000 hours of gameplay) or watching Dark (favorite series)',

    // Skills
    'skills.frontend.title': 'Frontend',
    'skills.mobile.title': 'Mobile',
    'skills.backend.title': 'Backend',
    'skills.state.title': 'State & Data',
    'skills.libs.title': 'Libraries',
    'skills.testing.title': 'Testing',
    'skills.tools.title': 'Tools',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.other.title': 'Other',

    // Experience
    'exp.nubank.period': 'Jan 2025 — Present',
    'exp.nubank.role': 'Software Engineer',
    'exp.nubank.company': 'Nubank',
    'exp.nubank.description': 'Frontend development in a generative AI team focused on internal products, building modern interfaces with React and TypeScript for tools that boost team productivity.',

    'exp.itau.period': 'Apr 2023 — Oct 2024',
    'exp.itau.role': 'Mid-Level Software Engineer',
    'exp.itau.company': 'Itaú Unibanco',
    'exp.itau.description': 'Leading the modernization of corporate insurance after-sales platform, improving performance and user experience across all digital channels. Frontend application development with Angular, TypeScript and RxJS, implementing microfrontend architectures integrated with AWS. E2E test automation with Cypress and quality assurance with Jest.',

    'exp.cox.period': 'Apr 2020 — Apr 2023',
    'exp.cox.role': 'Mid-Level Software Engineer',
    'exp.cox.company': 'Cox Automation Inc. (Remote - Canada)',
    'exp.cox.description': 'Collaboration with cross-functional teams to deliver high-quality features. Development of modern, performant applications using React (Hooks and Redux). Architecture and maintenance of monorepo infrastructure with Lerna. Integration with CMS and third-party APIs, participation in code reviews and mentoring junior developers.',

    'exp.santander.period': 'Jan 2018 — Apr 2020',
    'exp.santander.role': 'Junior Software Engineer',
    'exp.santander.company': 'Santander Tecnologia',
    'exp.santander.description': 'Maintenance and development of new features for critical banking transaction systems handling debits and credits. Programming in COBOL and JCL for mainframe batch processing, ensuring high reliability and data integrity. Production issue resolution, minimizing downtime and service disruptions.',

    // Projects
    'proj.toolkit.title': 'Toolkit Dev',
    'proj.toolkit.description': 'All-in-one platform for developers with offline-first documentation browser (15+ languages), 20+ useful tools (formatters, generators, calculators, references) and code snippets. 100% client-side architecture with IndexedDB cache integrated with DevDocs API.',
    'proj.timetracker.title': 'Time Tracker',
    'proj.timetracker.description': 'Web application for freelancers to track working hours with interactive timer, manual entry, automatic statistics (today/week/month), local SQLite database and CSV export. Minimalist dark interface with full edit and history features.',

    // Footer
    'footer.built': 'Built with',
    'footer.and': 'and',

    // Resume
    'resume.back': 'Back to portfolio',
    'resume.download': 'Download PDF',
    'resume.title': 'Resume',

    // Mentoria
    'mentoria.back': 'Back to portfolio',
    'mentoria.title': 'Tech Mentorship',
    'mentoria.description': '6 months of guidance to help you grow as a dev.',
    'mentoria.vagas': 'spots remaining',
    'mentoria.inclui.title': "What's included:",
    'mentoria.inclui.item1': 'Weekly 1.5-hour sessions via video call',
    'mentoria.inclui.item2': 'Personalized study plan',
    'mentoria.inclui.item3': 'Code review and feedback on real projects',
    'mentoria.inclui.item4': 'Async support via WhatsApp/Discord',
    'mentoria.inclui.item5': 'Technical interview preparation',
    'mentoria.inclui.item6': 'Access to exclusive materials and hands-on projects',
    'mentoria.form.title': 'Sign up now',
    'mentoria.form.nome': 'Full name',
    'mentoria.form.nome.placeholder': 'Your full name',
    'mentoria.form.email': 'Email',
    'mentoria.form.email.placeholder': 'you@email.com',
    'mentoria.form.telefone': 'Phone / WhatsApp',
    'mentoria.form.telefone.placeholder': '+1 (555) 123-4567',
    'mentoria.form.linkedin': 'LinkedIn (optional)',
    'mentoria.form.area': 'Area of interest',
    'mentoria.form.area.placeholder': 'Select an area',
    'mentoria.form.nivel': 'Experience level',
    'mentoria.form.nivel.placeholder': 'Select your level',
    'mentoria.form.submit': 'Submit application',
    'mentoria.form.submitting': 'Submitting...',
    'mentoria.area.frontend': 'Frontend',
    'mentoria.area.backend': 'Backend',
    'mentoria.area.fullstack': 'Fullstack',
    'mentoria.area.mobile': 'Mobile',
    'mentoria.area.devops': 'DevOps',
    'mentoria.area.naosei': "I don't know yet",
    'mentoria.nivel.iniciante': 'Beginner (just starting)',
    'mentoria.nivel.junior': 'Junior (0-2 years)',
    'mentoria.nivel.pleno': 'Mid-level (2-5 years)',
    'mentoria.nivel.transicao': 'Career transition',
    'mentoria.success.title': 'Application submitted!',
    'mentoria.success.message': "Thanks for your interest! I'll reach out soon to schedule an initial conversation.",
    'mentoria.error': 'An error occurred while submitting your application. Please try again.',
    'mentoria.error.email': 'Enter a valid email',
    'mentoria.error.telefone': 'Enter a valid phone number',
  }
}
