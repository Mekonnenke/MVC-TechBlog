const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'blabla',
    email: 'hallal@dc.ca',
    password: 'digital123'
  },
  {
    username: 'progress@yaho.com',
    email: 'pogress@yahoo.com',
    password: 'word123'
  },
  {
    username: 'Ethen sap',
    email: 'digital2@lgmail.fm',
    password: 'password123'
  },
  {
    username: ' gad gtr',
    email: 'gouble@gmail.com',
    password: 'password012'
  },
  {
    username: 'grdd gddf',
    email: 'cpra@water.com',
    password: 'password012'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'pass012'
  },
  {
    username: 'tre tdr',
    email: 'hoohoo@peer.com',
    password: 'word1234'
  },
  {
    username: 'zsse grgr',
    email: 'addis@cross.com',
    password: 'password123123'
  },
  {
    username: 'eth eth',
    email: 'free@gmail.pro',
    password: 'password123'
  },
  {
    username: 'husten drog',
    email: 'trip@solo.gov',
    password: 'password1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;