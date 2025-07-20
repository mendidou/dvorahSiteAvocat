import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'

export default function Actualites() {
  const { t } = useTranslation('common')

  const articles = [
    {
      title: t('actualites.article1.title'),
      excerpt: t('actualites.article1.excerpt'),
      date: '2024-01-15',
      category: t('actualites.article1.category')
    },
    {
      title: t('actualites.article2.title'),
      excerpt: t('actualites.article2.excerpt'),
      date: '2024-01-10',
      category: t('actualites.article2.category')
    },
    {
      title: t('actualites.article3.title'),
      excerpt: t('actualites.article3.excerpt'),
      date: '2024-01-05',
      category: t('actualites.article3.category')
    }
  ]

  return (
    <section id="actualites" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {t('actualites.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t('actualites.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image à venir</span>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary-600 text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm ml-2">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                <button className="text-primary-600 font-semibold hover:text-primary-700">
                  {t('actualites.readMore')}
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}