import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

const FORMSPREE_ENDPOINT = 'mojqloyn'

function Mentoria() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    area: '',
    nivel: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle, submitting, success, error

  // Máscara de telefone: (11) 99999-9999
  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return `(${numbers}`
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  // Validação de email
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // Validação de telefone (mínimo 10 dígitos)
  const isValidPhone = (phone) => {
    const numbers = phone.replace(/\D/g, '')
    return numbers.length >= 10 && numbers.length <= 11
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'telefone') {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Limpar erro ao digitar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!isValidEmail(formData.email)) {
      newErrors.email = t('mentoria.error.email')
    }

    if (!isValidPhone(formData.telefone)) {
      newErrors.telefone = t('mentoria.error.telefone')
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('submitting')

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ nome: '', email: '', telefone: '', linkedin: '', area: '', nivel: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const areasInteresse = [
    { value: 'frontend', label: t('mentoria.area.frontend') },
    { value: 'backend', label: t('mentoria.area.backend') },
    { value: 'fullstack', label: t('mentoria.area.fullstack') },
    { value: 'mobile', label: t('mentoria.area.mobile') },
    { value: 'devops', label: t('mentoria.area.devops') },
    { value: 'naosei', label: t('mentoria.area.naosei') }
  ]

  const niveis = [
    { value: 'iniciante', label: t('mentoria.nivel.iniciante') },
    { value: 'junior', label: t('mentoria.nivel.junior') },
    { value: 'pleno', label: t('mentoria.nivel.pleno') },
    { value: 'transicao', label: t('mentoria.nivel.transicao') }
  ]

  return (
    <>
      <LanguageToggle />

      <div className="min-h-screen bg-slate-950 relative">
        {/* Background gradient */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-slate-950"></div>
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500/5 blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/5 blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center text-slate-400 hover:text-blue-400 transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('mentoria.back')}
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
              {t('mentoria.title')}
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {t('mentoria.description')}
            </p>
          </motion.div>

          {/* O que inclui */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8 mb-10"
          >
            <h2 className="text-xl font-semibold text-slate-100 mb-4">
              {t('mentoria.inclui.title')}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-slate-300">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t(`mentoria.inclui.item${i}`)}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 sm:p-8"
          >
            <h2 className="text-xl font-semibold text-slate-100 mb-6">
              {t('mentoria.form.title')}
            </h2>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-100 mb-2">{t('mentoria.success.title')}</h3>
                <p className="text-slate-400">{t('mentoria.success.message')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('mentoria.form.nome')} *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder={t('mentoria.form.nome.placeholder')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('mentoria.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    placeholder={t('mentoria.form.email.placeholder')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('mentoria.form.telefone')} *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                    maxLength={15}
                    className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 transition-colors ${
                      errors.telefone
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-blue-500 focus:ring-blue-500'
                    }`}
                    placeholder={t('mentoria.form.telefone.placeholder')}
                  />
                  {errors.telefone && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.telefone}</p>
                  )}
                </div>

                {/* LinkedIn */}
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('mentoria.form.linkedin')}
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="https://linkedin.com/in/seu-perfil"
                  />
                </div>

                {/* Area de interesse */}
                <div>
                  <label htmlFor="area" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('mentoria.form.area')} *
                  </label>
                  <select
                    id="area"
                    name="area"
                    required
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="">{t('mentoria.form.area.placeholder')}</option>
                    {areasInteresse.map(area => (
                      <option key={area.value} value={area.value}>{area.label}</option>
                    ))}
                  </select>
                </div>

                {/* Nivel */}
                <div>
                  <label htmlFor="nivel" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('mentoria.form.nivel')} *
                  </label>
                  <select
                    id="nivel"
                    name="nivel"
                    required
                    value={formData.nivel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="">{t('mentoria.form.nivel.placeholder')}</option>
                    {niveis.map(nivel => (
                      <option key={nivel.value} value={nivel.value}>{nivel.label}</option>
                    ))}
                  </select>
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400">
                    {t('mentoria.error')}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('mentoria.form.submitting')}
                    </>
                  ) : (
                    t('mentoria.form.submit')
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Mentoria
