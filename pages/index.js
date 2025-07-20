import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Dvorah Avocat - Cabinet d'avocats spécialisé</title>
        <meta name="description" content="Cabinet d'avocats spécialisé en droit pénal, droit économique et droit international" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-blue-700">
              Dvorah Avocat
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600">Accueil</a>
              <a href="#cabinet" className="text-gray-700 hover:text-blue-600">Cabinet</a>
              <a href="#expertise" className="text-gray-700 hover:text-blue-600">Expertise</a>
              <a href="#actualites" className="text-gray-700 hover:text-blue-600">Actualités</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Excellence juridique et défense de vos droits
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Cabinet d'avocats spécialisé en droit pénal, droit économique et droit international
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
                Découvrir nos expertises
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue dans différents domaines du droit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Droit pénal</h3>
              <p className="text-gray-600">Défense pénale et accompagnement juridique dans toutes les procédures pénales</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Droit économique</h3>
              <p className="text-gray-600">Conseil et défense en matière de droit des affaires et droit économique</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Droit international</h3>
              <p className="text-gray-600">Expertise en droit international et procédures transfrontalières</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cybercriminalité</h3>
              <p className="text-gray-600">Spécialisation dans la défense en matière de cybercriminalité</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Droit de la presse</h3>
              <p className="text-gray-600">Protection de la réputation et droit de la presse</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Droit pénitentiaire</h3>
              <p className="text-gray-600">Accompagnement en droit pénitentiaire et conditions de détention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Section */}
      <section id="cabinet" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Le Cabinet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe d'avocats expérimentés à votre service
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
              <span className="text-gray-500 text-sm">Photo à venir</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Maître Dvorah</h3>
              <p className="text-blue-600 font-semibold mb-4">Avocate au Barreau de Paris</p>
              <p className="text-gray-600 leading-relaxed">
                Avocate expérimentée spécialisée en droit pénal et droit des affaires, Maître Dvorah met son expertise au service de ses clients depuis plus de 10 ans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nous sommes à votre disposition pour répondre à vos questions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📍</span>
                  <span className="text-gray-600">123 Rue de la Paix, 75001 Paris</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">📞</span>
                  <span className="text-gray-600">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">✉️</span>
                  <span className="text-gray-600">contact@dvorah-avocat.fr</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">⏰</span>
                  <span className="text-gray-600">Lun-Ven : 9h00-18h00</span>
                </div>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dvorah Avocat</h3>
              <p className="text-gray-400 mb-4">
                Cabinet d'avocats spécialisé offrant une expertise juridique de qualité dans différents domaines du droit.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#accueil" className="text-gray-400 hover:text-white">Accueil</a></li>
                <li><a href="#cabinet" className="text-gray-400 hover:text-white">Cabinet</a></li>
                <li><a href="#expertise" className="text-gray-400 hover:text-white">Expertise</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+33 1 23 45 67 89</li>
                <li>contact@dvorah-avocat.fr</li>
                <li>123 Rue de la Paix, 75001 Paris</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dvorah Avocat. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}