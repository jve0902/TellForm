'use strict';

module.exports = {
	baseUrl: 'http://localhost:3000',
	db: {
		uri: 'mongodb://localhost/mean-test',
		options: {
			user: '',
			pass: ''
		}
	},
	port: 3001,
	log: {
		// Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
		format: 'dev',
		// Stream defaults to process.stdout
		// Uncomment to enable logging to a log on the file system
		options: {
			//stream: 'access.log'
		}
	},
	app: {
		title: 'TellForm Test'
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
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || '',
			auth: {
				user: process.env.MAILER_EMAIL_ID || '',
				pass: process.env.MAILER_PASSWORD || ''
			}
		}
	},
	oscarhost: {
		baseUrl: process.env.OSCARHOST_BASEURL || 'OSCARHOST_BASEURL',
		settings: {
			updateType: process.env.OSCARHOST_UPDATETYPE || 'OSCARHOST_UPDATETYPE',
		},
		auth:{
			user: process.env.OSCARHOST_USER || 'process.env.OSCARHOST_USER',
			pass: process.env.OSCARHOST_PASS || 'process.env.OSCARHOST_PASS',
		}
	}
};
