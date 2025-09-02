---
title: "¿Cómo implementar seguridad en los contenedores?"
description: "Descubre los pasos clave para implementar una seguridad efectiva en los contenedores y proteger tus aplicaciones"
date: "2019-12-18"
articleImage: "blog/implementar-seguridad-contenedores.jpg"
url: "/blog/implementar-seguridad-contenedores"
---

En esta oportunidad vamos a enfocarnos en la importancia de la seguridad en los contenedores y cómo implementarla. Para una correcta protección, se deben tener en cuenta todos los aspectos de los mismos, desde el proceso de los contenedores y las aplicaciones que contienen hasta los entornos de implementación y la infraestructura en la que se basan. Asimismo, debe estar integrada a las herramientas de seguridad de la empresa y cumplir o mejorar las políticas de seguridad existentes.

A continuación vamos a desarrollar algunos pasos importantes a tener en cuenta para una buena implementación de seguridad en contenedores:

### Recopilar imágenes

Como sabemos los contenedores se crean a partir de capas de archivos. El primer paso es la imagen de base, que es la más importante por razones de seguridad ya que es el punto de partida para crear las imágenes derivadas. Es por eso que hay que tener especial control en la búsqueda de los recursos -incluso al usar imágenes confiables- debido a que cuando se agregan aplicaciones y se hacen cambios de configuración siempre se introducen variables nuevas.

### Administrar el acceso

Una vez que haya obtenido las imágenes, el próximo paso es administrar el acceso y la promoción de todas las imágenes de contenedores que utiliza su equipo, lo que implica proteger las imágenes que descarga y las que crea. Para esta acción es recomendable usar un registro privado que le permitirá controlar el acceso a través de asignaciones basadas en funciones y administrar el contenido mediante la asignación de metadatos al contenedor. También le permite automatizar y asignar políticas para las imágenes de contenedores que ha almacenado, de esta manera minimiza los errores humanos que podrían generar vulnerabilidades.

### Integrar las pruebas de seguridad y automatizar la implementación

La última etapa del proceso es la implementación, una vez que haya completado sus diseños es necesario administrarlos según los estándares del sector. La clave es entender cómo automatizar las políticas para identificar los diseños que tengan problemas de seguridad, especialmente a medida que se detectan nuevas vulnerabilidades de seguridad. Siempre es preferible rediseñar los contenedores en lugar de colocarles parches. Por eso, al integrar las pruebas de seguridad, deben considerarse las políticas que generan rediseños automáticos.

### Defender su infraestructura

Otra capa de la seguridad de contenedores es el aislamiento provisto por el sistema operativo (SO) host que debe proporcionar el mayor aislamiento del contenedor. El sistema operativo host está habilitado con un tiempo de ejecución del contenedor, que idealmente es administrado por un sistema de coordinación. Para que su plataforma de contenedores tenga capacidad de adaptación, debe utilizar espacios de nombres de red para aislar las aplicaciones y los entornos, y adjuntar almacenamiento por medio de montajes seguros.

En Expertice podemos asesorarlo con diferentes soluciones que lo ayudarán a lograr el éxito en la seguridad de sus contenedores. Conozca Red Hat® OpenShift Container Platform integrado con Red Hat Enterprise Linux®, una solución que automatiza el ciclo de vida de las aplicaciones del contenedor, integra la seguridad en el proceso y está diseñada teniendo en cuenta a los equipos de DevOps.
