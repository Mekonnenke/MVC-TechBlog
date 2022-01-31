const { Post } = require('../models');

const postdata = [
    {
        title: 'Donec dapibus.',
        post_url: 'Non error molestias nam minima consectetur ut enim nihil ab explicabo rerum sed exercitationem dolor et esse incidunt ut rerum voluptate. Aut similique corporis et voluptatem similique.',
        user_id: 8
      },
      {
        title: 'Nulla tellus.',
        post_url: 'Aut saepe excepturi est saepe illo et quia amet sit recusandae quae et nulla neque in voluptas facilis. Qui enim voluptatem quo blanditiis possimus sit quisquam dolorem.',
        user_id: 3
      },
      {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_url: 'Et necessitatibus neque aut sequi tenetur non possimus reprehenderit. Est reiciendis consequatur ea voluptatem corrupti rem obcaecati totam ut dolor error et dolores veniam.',
        user_id: 3
      },
      {
        title:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        post_url: 'Id expedita dolore aut voluptas aspernatur ut unde omnis non architecto ipsa et quam repellat eos maiores voluptatem. Qui dicta repudiandae qui cupiditate suscipit et totam cupiditate in recusandae incidunt.',
        user_id: 7
      },
      {
        title: 'In hac habitasse platea dictumst.',
        post_url: 'Aut impedit maxime et incidunt sapiente aut velit excepturi ea Quis explicabo aut corporis facilis non recusandae dolores.',
        user_id: 6
      },
      {
        title: 'Etiam justo.',
        post_url: 'Non itaque veritatis ab molestiae omnis a voluptatum assumenda et distinctio sint! Ab asperiores quaerat id internos quos est consequatur nihil sit nihil sint At nemo adipisci est amet dolore eos perferendis quam.',
        user_id: 4
      },
      {
        title: 'Nulla ut erat id mauris vulputate elementum.',
        post_url: 'Non reiciendis consequatur et inventore quae cum laboriosam consequatur ex distinctio repellat. Non debitis quia quo molestiae maxime sit ratione repudiandae sit beatae corporis id corporis enim At voluptatem placeat.',
        user_id: 6
      },
    {
    title: 'Donec posuere metus vitae ipsum.',
    post_url: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    user_id: 1
  },
  {,
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'Aut error nisi est temporibus dicta et sequi dolores. Et dolorum modi ut error tempora ut eius atque aut rerum illum ea nesciunt laboriosam aut galisum corrupti ut quasi nobis.',
    user_id: 10
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'Et reiciendis harum a necessitatibus quaerat vel unde officia. Et rerum exercitationem id nesciunt doloremque eum illo laborum quo repudiandae ut Quis quae ad inventore aperiam.',
    user_id: 7
  }
  title: 'Nunc purus.',
  post_url: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.',
  user_id: 4
},
{
  title: 'Pellentesque eget nunc.',
  post_url: 'Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
  user_id: 7
},
{
  title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  post_url: 'Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
  user_id: 4
},
{
  title: 'In hac habitasse platea dictumst.',
  post_url: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
  user_id: 1
},
{
  title: 'Morbi non quam nec dui luctus rutrum.',
  post_url: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
  user_id: 1
},
{
  title: 'Duis ac nibh.',
  post_url: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  user_id: 9
},
{
  title: 'Curabitur at ipsum ac tellus semper interdum.',
  post_url: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
  user_id: 5
},
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;