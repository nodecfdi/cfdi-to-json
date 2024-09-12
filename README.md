# `@nodecfdi/cfdi-to-json`

[![Source Code][badge-source]][source]
[![Npm Node Version Support][badge-node-version]][node-version]
[![Discord][badge-discord]][discord]
[![Latest Version][badge-release]][release]
[![Software License][badge-license]][license]
[![Build Status][badge-build]][build]
[![Reliability][badge-reliability]][reliability]
[![Maintainability][badge-maintainability]][maintainability]
[![Code Coverage][badge-coverage]][coverage]
[![Violations][badge-violations]][violations]
[![Total Downloads][badge-downloads]][downloads]

> Library to convert CFDI files to JSON.

:us: The documentation of this project is in spanish as this is the natural language for intented audience.

:mexico: La documentación del proyecto está en español porque ese es el lenguaje principal de los usuarios.

## Acerca de `@nodecfdi/cfdi-to-json`

Esta es una herramienta que sigue sus propias convenciones para convertir los archivos de CFDI (XML de SAT)
a formato JSON.

Algunas de las convenciones que se siguen son:

- Los elementos con objetos que contienen los atributos y sus elementos hijos.
- Los elementos que pueden aparecer más de una vez, son manejados como arreglos.
- La librería guarda un registro interno de los elementos que pueden aparecer más de una vez.

Libreria inspirada por la versión para php <https://github.com/phpcfdi/cfdi-to-json>

## Documentación

La documentación está disponible en el sitio web [NodeCfdi](https://nodecfdi.com/librarys/cfdi-to-json/getting-started/)

## Soporte

Puedes obtener soporte abriendo un ticket en Github.

Adicionalmente, esta librería pertenece a la comunidad [OcelotlStudio](https://ocelotlstudio.com), así que puedes usar los mismos canales de comunicación para obtener ayuda de algún miembro de la comunidad.

## Compatibilidad

Esta librería se mantendrá compatible con al menos la versión con
[soporte activo de Node](https://nodejs.org/es/about/releases/) más reciente.

También utilizamos [Versionado Semántico 2.0.0](https://semver.org/lang/es/) por lo que puedes usar esta librería sin temor a romper tu aplicación.

## Contribuciones

Las contribuciones con bienvenidas. Por favor lee [CONTRIBUTING][] para más detalles y recuerda revisar el archivo [CHANGELOG][].

## Copyright and License

The `@nodecfdi/cfdi-to-json` library is copyright © [NodeCfdi](https://github.com/nodecfdi) - [OcelotlStudio](https://ocelotlstudio.com) and licensed for use under the MIT License (MIT). Please see [LICENSE][] for more information.

[contributing]: https://github.com/nodecfdi/.github/blob/main/docs/CONTRIBUTING.md
[changelog]: https://github.com/nodecfdi/cfdi-to-json/blob/main/CHANGELOG.md
[source]: https://github.com/nodecfdi/cfdi-to-json
[node-version]: https://www.npmjs.com/package/@nodecfdi/cfdi-to-json
[discord]: https://discord.gg/AsqX8fkW2k
[release]: https://www.npmjs.com/package/@nodecfdi/cfdi-to-json
[license]: https://github.com/nodecfdi/cfdi-to-json/blob/main/LICENSE.md
[build]: https://github.com/nodecfdi/cfdi-to-json/actions/workflows/build.yml?query=branch:main
[reliability]: https://sonarcloud.io/component_measures?id=nodecfdi_cfdi-to-json&metric=Reliability
[maintainability]: https://sonarcloud.io/component_measures?id=nodecfdi_cfdi-to-json&metric=Maintainability
[coverage]: https://sonarcloud.io/component_measures?id=nodecfdi_cfdi-to-json&metric=Coverage
[violations]: https://sonarcloud.io/project/issues?id=nodecfdi_cfdi-to-json&resolved=false
[downloads]: https://www.npmjs.com/package/@nodecfdi/cfdi-to-json
[badge-source]: https://img.shields.io/badge/source-nodecfdi/cfdi--to--json-blue.svg?logo=github
[badge-node-version]: https://img.shields.io/node/v/@nodecfdi/cfdi-to-json.svg?logo=nodedotjs
[badge-discord]: https://img.shields.io/discord/459860554090283019?logo=discord
[badge-release]: https://img.shields.io/npm/v/@nodecfdi/cfdi-to-json.svg?logo=npm
[badge-license]: https://img.shields.io/github/license/nodecfdi/cfdi-to-json.svg?logo=open-source-initiative
[badge-build]: https://img.shields.io/github/actions/workflow/status/nodecfdi/cfdi-to-json/build.yml?branch=main
[badge-reliability]: https://sonarcloud.io/api/project_badges/measure?project=nodecfdi_cfdi-to-json&metric=reliability_rating
[badge-maintainability]: https://sonarcloud.io/api/project_badges/measure?project=nodecfdi_cfdi-to-json&metric=sqale_rating
[badge-coverage]: https://img.shields.io/sonar/coverage/nodecfdi_cfdi-to-json/main?logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io
[badge-violations]: https://img.shields.io/sonar/violations/nodecfdi_cfdi-to-json/main?format=long&logo=sonarcloud&server=https%3A%2F%2Fsonarcloud.io
[badge-downloads]: https://img.shields.io/npm/dm/@nodecfdi/cfdi-to-json.svg?logo=npm
