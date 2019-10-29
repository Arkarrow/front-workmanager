module.exports = {
  db: {
    user: 'root',
    password: '',
    database: 'wm',
    host: 'localhost',
    // socketPath: '/var/run/mysqld/mysqld.sock'
  },
  auth: {
    google: {
      google_client_id: '********************',
      google_client_secret: '********************'
    },
    facebook: {
      facebook_client_id: '********************',
      facebook_client_secret: '********************'
    },
    linkedin: {
      linkedin_client_id: '********************',
      linkedin_client_secret: '********************'
    },
    twitter: {
      Twitter_client_id: '********************',
      Twitter_client_secret: '********************'
    },
  },
  env: 'dev',
  port: '41205',
  jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XAWLmP3O2X5OkpfgE1coNSqn7hoyXmxpYm0W93IFQiI',

  password: {
    pepper: "c9750d4c65283e76a2231447d0bad51f"
  },


}
