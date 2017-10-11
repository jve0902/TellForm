'use strict';

module.exports = {
	baseUrl: process.env.BASE_URL || process.env.HEROKU_APP_NAME + '.herokuapp.com' || 'tellform.com',
	db: {
		uri: process.env.MONGODB_URI || process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_PORT_27017_TCP_ADDR || '127.0.0.1') + '/mean',
	},
	port: process.env.PORT || 5000,
	socketUrl: process.env.SOCKET_URL || 'ws.tellform.com',
	socketPort: process.env.SOCKET_PORT || 20523,
	log: {
        // Can specify one of 'combined', 'common', 'dev', 'short', 'tiny'
        format: 'combined',
        // Stream defaults to process.stdout
        // Uncomment to enable logging to a log on the file system
        fileLogger: {
            directoryPath: process.cwd(),
            fileName: 'app.log',
            maxsize: 10485760,
            maxFiles: 2,
            json: false
        }
    },
    sessionCookie: {
		secure: false,
		maxAge:  24 * 60 * 60 * 1000, // 24 hours
		domain: process.env.BASE_URL || '.tellform.com'
	},
	assets: {
		bower_js: 'public/dist/vendor.min.js',
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js',
		form_js: 'public/dist/form-application.min.js'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'testing@'+process.env.SPARKPOST_SANDBOX_DOMAIN || 'no-reply@tellform.com',
		options: process.env.MAILER_SMTP_HOST ? { //Uses custom SMTP if MAILER_SMTP_HOST is set
			host: process.env.MAILER_SMTP_HOST || '',
			port: process.env.MAILER_SMTP_PORT || 465,
			secure: process.env.MAILER_SMTP_SECURE || true,
			auth: {
				user: process.env.MAILER_EMAIL_ID || '',
				pass: process.env.MAILER_PASSWORD || ''
			}
		} : {
			service: process.env.MAILER_SERVICE_PROVIDER || '',
			auth: {
				user: process.env.MAILER_EMAIL_ID || '',
				pass: process.env.MAILER_PASSWORD || ''
			}
		}
	}
};
