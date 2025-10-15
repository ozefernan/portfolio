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
    'skills.testing.title': 'Testes',
    'skills.tools.title': 'Ferramentas',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.architecture.title': 'Arquitetura',
    'skills.other.title': 'Outros',

    // Experience
    'exp.itau.period': 'Abr 2023 — Presente',
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
    'proj.cox.title': 'Infraestrutura Monorepo - Cox Automation',
    'proj.cox.description': 'Arquitetura e manutenção de infraestrutura monorepo modular usando Lerna, streamlining desenvolvimento e compartilhamento de código entre múltiplos projetos. Desenvolvimento de aplicações React performáticas com Hooks e Redux, integradas com CMS e APIs terceiras.',

    // Footer
    'footer.built': 'Built with',
    'footer.and': 'and',
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
    'skills.testing.title': 'Testing',
    'skills.tools.title': 'Tools',
    'skills.cloud.title': 'Cloud & DevOps',
    'skills.architecture.title': 'Architecture',
    'skills.other.title': 'Other',

    // Experience
    'exp.itau.period': 'Apr 2023 — Present',
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
    'proj.cox.title': 'Monorepo Infrastructure - Cox Automation',
    'proj.cox.description': 'Architecture and maintenance of modular monorepo infrastructure using Lerna, streamlining development and code sharing across multiple projects. Development of performant React applications with Hooks and Redux, integrated with CMS and third-party APIs.',

    // Footer
    'footer.built': 'Built with',
    'footer.and': 'and',
  }
}
