import env from '#start/env'
import app from '@adonisjs/core/services/app'
import { defineConfig, stores } from '@adonisjs/session'

const sessionConfig = defineConfig({
  enabled: true,
  cookieName: 'reaporting-heb-session',

  /**
   * Quand activé, le cookie de session sera supprimé dès que l'utilisateur ferme son navigateur.
   * C'est ce qu'on appelle une session de type "session-only" (durée de vie limitée à la session).
   */
  clearWithBrowser: true, // Si true, la session expire à la fermeture du navigateur

  /**
   * Define how long to keep the session data alive without
   * any activity.
   */
  age: '1h',

  /**
   * Configuration du cookie de session.
   */
  cookie: {
    path: '/', // Le cookie est valable pour tout le site
    httpOnly: true, // Empêche l'accès au cookie via JavaScript
    secure: app.inProduction, // Utilise "secure" en production pour HTTPS
    sameSite: 'lax', // Prévention CSRF, accepte les requêtes de sites tiers pour certaines situations
  },

  /**
   * The store to use. Make sure to validate the environment
   * variable in order to infer the store name without any
   * errors.
   */
  store: env.get('SESSION_DRIVER'),

  /**
   * List of configured stores. Refer documentation to see
   * list of available stores and their config.
   */
  stores: {
    cookie: stores.cookie(),
  }
})

export default sessionConfig
