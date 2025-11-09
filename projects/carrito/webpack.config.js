const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'carrito',

  exposes: {
    './Module': './projects/carrito/src/app/carrito/carrito.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings:["@core-lib", "@models"] // así estamos forzando a que todos los micros tengan una misma instancia de estas librerías
});
