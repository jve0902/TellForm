'use strict';

module.exports = {
	baseUrl: process.env.BASE_URL || 'tellform.com',
	db: {
		uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
	},
	port: process.env.PORT || 5000,
	socketUrl: process.env.SOCKET_URL || 'ws.tellform.com',
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'combined',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			stream: 'access.log'
		}
	},
	sessionCookie: {
		domain: process.env.BASE_URL || 'tellform.com'
	},
	assets: {
		bower_js: 'public/dist/vendor.min.js',
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js',
		form_js: 'public/dist/form-application.min.js'
	},
	facebook: {
		clientID: process.env.FACEBOOK_ID || 'APP_ID',
		clientSecret: process.env.FACEBOOK_SECRET || 'APP_SECRET',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'CONSUMER_KEY',
		clientSecret: process.env.TWITTER_SECRET || 'CONSUMER_SECRET',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || 'APP_ID',
		clientSecret: process.env.GOOGLE_SECRET || 'APP_SECRET',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || 'APP_ID',
		clientSecret: process.env.LINKEDIN_SECRET || 'APP_SECRET',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || 'APP_ID',
		clientSecret: process.env.GITHUB_SECRET || 'APP_SECRET',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'no-reply@tellform.com',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || '',
			/*ssl: false,
			host: 'smtp.sparkpostmail.com',
			port: 587,
			secure: false,*/
			auth: {
				user: process.env.SPARKPOST_SMTP_USERNAME || process.env.MAILER_EMAIL_ID || '',
				pass: process.env.SPARKPOST_SMTP_PASSWORD || process.env.MAILER_PASSWORD || ''
			}
		}
	}
};
