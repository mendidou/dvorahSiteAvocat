import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

export default function Cabinet() {
  const { t } = useTranslation('common')

  const teamMembers = [
    {
      name: t('cabinet.dvorah.name'),
      title: t('cabinet.dvorah.title'),
      description: t('cabinet.dvorah.description'),
      image: '/images/dvorah-portrait.jpg'
    }
  ]

  return (
    <section id="cabinet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t('cabinet.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('cabinet.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:text-left lg:flex-row lg:items-start"
            >
              <div className="w-64 h-64 bg-gray-200 rounded-lg mb-6 lg:mb-0 lg:mr-8 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Photo à venir</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-4">
                  {member.title}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}