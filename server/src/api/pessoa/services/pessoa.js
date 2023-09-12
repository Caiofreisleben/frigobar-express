'use strict';

/**
 * pessoa service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pessoa.pessoa');
