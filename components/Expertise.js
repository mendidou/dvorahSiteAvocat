import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

export default function Expertise() {
  const { t } = useTranslation('common')

  const expertiseAreas = [
    {
      title: t('expertise.criminal.title'),
      description: t('expertise.criminal.description'),
      icon: '⚖️'
    },
    {
      title: t('expertise.economic.title'),
      description: t('expertise.economic.description'),
      icon: '💼'
    },
    {
      title: t('expertise.international.title'),
      description: t('expertise.international.description'),
      icon: '🌍'
    },
    {
      title: t('expertise.cyber.title'),
      description: t('expertise.cyber.description'),
      icon: '🔒'
    },
    {
      title: t('expertise.press.title'),
      description: t('expertise.press.description'),
      icon: '📰'
    },
    {
      title: t('expertise.prison.title'),
      description: t('expertise.prison.description'),
      icon: '🏛️'
    }
  ]

  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t('expertise.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('expertise.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}