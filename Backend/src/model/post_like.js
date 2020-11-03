const database = require('../mysql/sequelize');

const { Sequelize, DataTypes, Model } = require('sequelize');

const User = require('./user'); 
const Post = require('./post');

class PostLike extends Model {}

PostLike.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
        key: 'id',
        },
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id',
        },
    }
}, {
    sequelize: database,
    tableName: 'post_like',
    modelName: 'PostLike'
})

console.log(PostLike === database.models.PostLike); 

module.exports = PostLike;