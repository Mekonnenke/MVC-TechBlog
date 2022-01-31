const {Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Post extends Model {}
    
Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },
    content: {
        type: DataTypes.STRING,
       // allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
})


module.exports = Post;


// CREATE TABLE post (
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     content VARCHAR(30),
//     user_id INT,
//    FOREIGN KEY (department_id) REFERENCES department(id)
//   );

//  INSERT INTO post
// (title, content, user_id)
// VALUES
// ("Shirts", "Shorts blow dddd", "3")

// ALTER TABLE Post
// ALTER Content DROP DEFAULT;

// ALTER TABLE Post
// ALTER Content SET DEFAULT 'textInput';