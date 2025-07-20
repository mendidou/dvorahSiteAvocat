import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { refreshColors } from '../lib/useColors'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation('common')
  const router = useRouter()

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.cabinet'), href: '/cabinet' },
    { name: t('nav.expertise'), href: '/expertise' },
    { name: t('nav.actualites'), href: '/actualites' },
    { name: t('nav.contact'), href: '/contact' },
  ]

  const languages = [
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' },
    { code: 'es', name: 'ES' },
  ]

  const changeLanguage = (locale) => {
    router.push(router.asPath, router.asPath, { locale })
  }

  const handleRefreshColors = async () => {
    await refreshColors()
    console.log('Colors refreshed!')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Dvorah Avocat
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-hover transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 text-sm ${
                    router.locale === lang.code
                      ? 'text-primary font-semibold'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>

            {/* Bouton de rafraîchissement des couleurs (visible seulement en dev) */}
            {process.env.NODE_ENV === 'development' && (
              <button
                onClick={handleRefreshColors}
                className="hidden md:block p-2 text-gray-500 hover:text-primary rounded-md"
                title="Rafraîchir les couleurs"
              >
                🎨
              </button>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  )
}