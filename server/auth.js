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
    module.exports = ({ db, express, bcrypt, jwt, config, mailjet, MongoClient}) => {
      const passwordPepper = config.password.pepper
      const routes = express.Router()
      const url_bdd = "mongodb://localhost:27017"

      function makeSessionID() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }

      routes.post('/login', (req, res) => {


        if (!req.body.email || !req.body.password) return res.status(400).json({ type: 'error', message: 'Les champs ne sont pas correctement rempli' })



        MongoClient.connect(url_bdd, {
          useUnifiedTopology: true,
          useNewUrlParser: true

        }, function (error, client) {

          if (error) return funcCallback(error);


          const email = req.body.email
          const db = client.db("WM")
          const collection = db.collection('users')

          collection.find({email: email }).toArray((err, item) => {

            if (err)  console.log(err);

            if (!item.length == 0
              && item != "undefined"
              && item != null
              && item.length != null
              && item.length > 0) {

                const items = item[0];
                const passwordString = req.body.password + passwordPepper;

                bcrypt.compare(passwordString, items.user.password, function(err, result) {

                  if (err) {
                    console.log(error);
                  } else {

                    var tokenSession = Math.random().toString(36).substring(7);
                    var tokenJWT = jwt.sign(
                      { email: items.email, token: tokenSession },
                      config.jwtToken,
                      { expiresIn: "1d" }
                    );
                    if (result) {

                      if (!items.account.status >= 1 <= 10)
                      {
                        db.collection("sessions").insertOne(
                          {
                            id: items._id,
                            SessionID: tokenSession,
                            token: tokenJWT,
                            created_at: new Date().toLocaleString(),
                            expire: 0
                          },
                          (err, result) => {
                            if (err) {
                              res.json({
                                type: "error",
                                message:
                                "Une erreur est survenue lors du processus d'authenfication .."
                              });
                            } else if (result.insertedCount == 1) {

                              res.json({
                                type: "success",
                                message: "Bon retour ! ",
                                user: {
                                  email: items.email,
                                  token: tokenSession
                                },
                                account_type: "/dashboard",
                                token: result.ops[0].token
                              });
                                client.close();
                              } else {
                                client.close();
                                res.json({
                                  type: "error",
                                  message:
                                  "Une erreur est survenue lors du processus d'authenfication .. [code:KB0-2]"
                                });
                              }
                            })
                          } else {

                            client.close();
                            res.json({
                              type: "error",
                              message: "identifiant ou mot de passe incorrect ccc"
                            });
                          }

                        } else res.json({
                          type: "erreur",
                          message:
                          "Compte désactivé: Si vous n'etes pas à l'origine de cette désactivation, contactez le service client"
                        });




                      }
                    });
                  } else {
                    console.log(item);
                    client.close();
                    res.json({
                      type: "error",
                      message: "identifiant ou mot de passe incorrect"
                    });
                  }
                })
              })
            })


            routes.post('/register', (req, res) => {

              const nom = req.body.nom
              const prenom = req.body.prenom
              const email = req.body.email
              const password = req.body.password
              const password_repeat = req.body.password_repeat

              if (!nom || !prenom || !email || !password || !password_repeat) return res.status(400).json({ type: 'error', message: "Les champs ne sont pas correctement rempli" })

              if (password === password_repeat) {

                MongoClient.connect(url_bdd, {
                  useUnifiedTopology: true,
                  useNewUrlParser: true

                }, function (error, client) {

                  if (error) return funcCallback(error);

                  console.log("Connected");

                  const db = client.db("WM")
                  const collection = db.collection('users')

                  const saltRounds = 10;
                  const PasswordFullText = password + passwordPepper;
                  bcrypt.hash(PasswordFullText, saltRounds, function (err, hash) {
                    var encryptedPass = hash

                    collection.insertOne({
                      email: email,
                      f_name: prenom,
                      l_name: nom,
                      phone: null,
                      user: {
                        password: encryptedPass,
                        created_at: null,
                        type: 1,
                      },
                      account: {
                        status: 1,
                        ValidMail: 1,
                        ValidPhone: 1,
                        Key: null,
                      }
                    }, (err, result) => {
                      if (err){
                        console.log(err)
                        client.close();
                        res
                        .status(400)
                        .json({
                          type: "error",

                          message:
                          "Une erreur est survenue lors de votre inscription"
                        });
                      }
                      else{
                        if (result.insertedCount == 1){
                          var tokenJWT = jwt.sign({ email: email }, config.jwtToken, { expiresIn: '1d' })
                          var redirect_after = ['']
                          res.json({
                            type: "success",
                            message: "Bon retour ! " + prenom,
                            user: {email: email},
                            account_type: "/dashboard",
                            token: tokenJWT
                          });
                          client.close();
                        }else{
                          res.status(400).json({ type: 'error', message: "Une erreur est survenue lors de votre inscription" })
                        }
                      }
                    })
                  })
                })
              } else return res.status(400).json({ type: 'error', message: 'Les deux mdp ne correspondent pas' })
            })


            routes.get("/register/valid-mail", (req, res) => {
              const token = req.headers['x-access-token']
              if (!token) return res.status(400).json({ type: 'error', message: 'x-access-token header not found.' })
            })


            routes.get('/me', (req, res) => {
              const token = req.headers['x-access-token']
              if (!token) return res.status(400).json({ type: 'error', message: 'x-access-token header not found.' })
              jwt.verify(token, config.jwtToken, (error, result) => {
                if (error) return res.status(403).json({ type: 'error', message: 'Provided token is invalid.', error })
                return res.json({
                  type: 'success',
                  message: 'Provided token is valid.',
                  result
                })
              })
            })





            return routes
          }
