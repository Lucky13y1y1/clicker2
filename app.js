'use strict'

require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const Sequelize = require('sequelize');
const TelegramBot = require('node-telegram-bot-api');
const winston = require('./utils/logger');
const debug = require('./utils/debug')('app:server');
