/*
subdomain :
0    - my /pour tout les utilisateurs s'inscrivant sur la plateforme/
1    - dashboard /pour les pro et employés/
2    - pay /Pour les paiements
3    -
4
6
7
8
9
10
11
12
14
15
service client :

sc-manager (pour le service client)
wm-myadmin
*/
module.exports = ({ db, express, bcrypt, jwt, config, mailjet }) => {
  const passwordPepper = config.password.pepper
  const routes = express.Router()

  db.config.queryFormat = function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this));
  }


  routes.get('/search/:data', (res, req) => {
    if (!req.body.data) return res.status(400).json({ type: 'error', message: "Aucunes offres ne correspond a vos cryteres de recherche " })
    db.query('SELECT * FROM `offres` WHERE name OR %:id%', { id: id }, (error, results) => {
      if (error) return res.status(500).json({ type: 'error', message: "Une erreur est survenu: [ERROR:CODE]" })
      if (results.lenght == 0) return res.status(400).json({ type: 'error', message: 'Ce profil est introuvable' })
    })
  })

  routes.get('/profil/:id', (req,res) => {
    if (!req.body.id) return res.status(400).json({ type: 'error', message: "Ce profil est introuvable" })
    db.query('SELECT * FROM `profils` WHERE `id_public`= :id', { id: id }, (error, results) => {
      if (error) return res.status(500).json({ type: 'error', message: "Une erreur est survenu: P-ONE" })
      if (results.lenght == 0) return res.status(400).json({ type: 'error', message: 'Ce profil est introuvable' })
      const fetch = results[0]
      if (fetch.member_only){
        const token = req.headers['x-access-token']
        if (!token) return res.status(400).json({ type: 'error', message: 'Veuillez vous connecter ou vous inscrire pour voire ce profil' })
        jwt.verify(token, config.jwtToken, (error, result) => {
          if (error) return res.status(403).json({ type: 'error', message: 'Provided token is invalid.', error })
          return res.json({
            type: 'success',
            message: 'Provided login token is valid.',
            data: results
          })
        })
      } else return res.json({type: 'success', message: null, data: results})
    })
  })








  return routes
}
