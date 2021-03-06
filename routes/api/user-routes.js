const router = require('express').Router();
const { User,  Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
      
    attributes: { exclude: ['password'] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//get one user
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: {
                     exclude: ['password']
                 },
    where: {
      id: req.params.id
    },

    include: [{
        model: Post,
        attributes: ['id', 'title', 'content', 'created_at']
    },
    {
        model: Comment,
        attributes: ['id', 'comment_text', 'created_at'],
        include: {
            model: Post,
            attributes: ['title']
           }
       }
     ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {username: 'Tom', password: 'word12'}
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(dbUserData =>
    //   {
    //   req.session.save(() =>{
    //      req.session.username = dbUserData.id;
    //      req.session.loggedIn = true;
     res.json(dbUserData))
    // });
    // }
    // )
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    //expects {username: 'Tom', password: 'word12'}
      User.findOne({
        attributes: { exclude: ['password'] },
        where: {
          username: req.body.username
        },
        // include: [
        //   {
        //     model: Post,
        //     attributes: ['id', 'title', 'post_url', 'created_at']
        //   },
        //   {
        //     model: Comment,
        //     attributes: ['id', 'comment_text', 'created_at'],
        //     include: {
        //       model: Post,
        //       attributes: ['title']
        //     }
        //   },
        //   {
        //     model: Post,
        //     attributes: ['title'],
        //     through: Vote,
        //     as: 'voted_posts'
        //   }
        // ]
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user with that username!' });
          return;
        }
    
        res.json({ user: dbUserData });
    
        // Verify user section 
        const validPassword = dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
          }
          
          res.json({ user: dbUserData, message: 'You are now logged in!' });

      });  
    });


router.put('/:id', (req, res) => {
   // expects {username: 'Tom', password: 'word12'}

  User.update(req.body, {  
    individualHooks: true,
    where: {
           id: req.params.id
           }
  })
    .then(dbUserData => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
