var a = $('section.prueba').children();
var b;
var c;
var x = 0;
var todos = false;
var y = 'algo';
var contadorCorrecta = 0;
var contadorIncorrecta = 0;
var elegir;
var preg = [
	//Naruraleza
	{categorias: 'Naturaleza', preguntas: [
<<<<<<< HEAD
		{textoEnunciado: '¿Sabías qué animal tiene más patas? ', imagenIncorrecta: 'milpies.jpg', imagenCorrecta: 'plenipes.jpg', correcta: 'Illacme Plenipes', incorrecta: 'Mil Pies', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Fue una extraordinaria sorpresa que superara por tan poco a un milpiés puertorriqueño llamado Siphonophora millepeda, Aunque se crea que el milpiés es el animal con más patas no es así, ya que esta especie solo llega a las 742 patas. <span> Mientras otra especie, el Illacme plenipes, puede tener hasta 750 patas. </span>', correctaExplicacion: '<span>¡Muy bien!</span> Fue una extraordinaria sorpresa que superara por tan poco a un milpiés puertorriqueño llamado Siphonophora millepeda el Illacme plenipes, puede tener hasta 750 patas.<span> Mientras que el milpiés solo llega a tener 742 patas.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué animal nada más rápido?', imagenIncorrecta: 'pezvela.jpg', imagenCorrecta: 'tiburonmako.jpg', correcta: 'Tiburón Marrajo', incorrecta: 'Pez Vela', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Es una especie muy veloz, consiguiendo alcanzar de manera puntual los 110 km por hora. Tiene un largo de alrededor de 3 m, un peso de 100 kg y está considerado uno de los animales más elegantes dentro del océano. <span> Mientras que el tiburón marrajo llega a alcanzar los 124 km/h. </span>', correctaExplicacion: '<span>¡Muy bien!</span> El tiburón. La velocidad media de esta especie oscila entre los 8 y los 12km/h. Sin embargo, no todos los tiburones nadan a la misma velocidad, sino que depende de la especie a la que pertenezca. La especie más rápida de tiburones es el Mako, también conocido como marrajo común o de aleta corta, capaz de alcanzar los 124 km/h. <span> Mientras que el pez vela llega a alcanzar de manera puntual los 110 km por hora.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué animal puede vivir más años?', imagenIncorrecta: 'almeja.jpg', imagenCorrecta: 'turri.jpg', correcta: 'Medusa Turritopsis Nutricula', incorrecta: 'Almeja oceánica', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Un molusco marino nativo del Atlántico Norte de 8 cm de largo, es el animal más longevo de la historia, con una edad estimada de 507 años. Sus descubridores le llamaron Ming, inspirados por la famosa dinastía china reinante cuando la criatura nació.<span> Mientras que Medusa Turritopsis Nutricula es el único organismo capaz de rejuvenecerse a sí mismo para revertir su ciclo de vida. </span>', correctaExplicacion: '<span>¡Muy bien!</span> También se conoce como la Medusa Inmortal, ya que, al parecer, es el único organismo capaz de rejuvenecerse a sí mismo. En caso de peligro o condiciones adversas, se las arregla para revertir su ciclo de vida, es decir, vuelve a un estado juvenil en un proceso que puede continuar indefinidamente.<span> Mientras que la Almeja oceánica muere a una edad estimada de 507 años.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué planta es la más venenosa del mundo?', imagenIncorrecta: 'maculata.jpg', imagenCorrecta: 'aldefa.jpg', correcta: 'Aldefa (Nerium oleander)', incorrecta: 'Cicuta (cicuta matulata)', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Es considerada la planta más venenosa del continente Americano. Quienes sobreviven el envenenamiento de la cicuta experimentan condiciones a largo plazo como amnesia. Síntomas: convulsiones violentas y dolorosas, náuseas, vómitos, calambres y temblores musculares.', correctaExplicacion: '<span>¡Muy bien!</span> Consdierada la planta más venenosa del mundo. Es tan potente, que incluso la miel creada a partir de su néctar puede matar a una persona. Síntomas: diarrea, vómitos, dolor de estómago intenso, somnolencia, mareos, latidos irregulares del corazón, y a menudo, la muerte.<span> Mientras que la planta cicuta (cicuta matulata) solo es considerada la planta más venenosa del continente Americano.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué desierto es más grande? ', imagenIncorrecta: 'sahara.jpg', imagenCorrecta: 'antartico.jpg', correcta: 'Desierto ANTÁRTICO', incorrecta: 'Desierto del SÁHARA', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Ocupando toda la franja norte del continente africano se extiende el Sáhara, el desierto cálido más grande del mundo. Marruecos, el Sáhara Occidental, Mauritania, Argelia, Túnez, Mali, Níger, Libia, Chad y Egipto son los países a los que el “desierto de desiertos” domina en mayor o menor medida. El paisaje saharaui es muy diverso, hay zonas con grandes dunas que pueden superar los 180 metros, tiene una spuerficie de 9.065.253 km².<span> Mientras que el Desierto Antártico tiene una superficie de 13.726.937 km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> Es difícil concebir que el desierto más grande del mundo sea la Antártida. Sin embargo, el “continente helado” se trata del territorio más frío, seco y ventoso de todos los que configuran La Tierra. En la Antártida apenas llueve, la pluviosidad en la altiplanicie interior ronda los 50 mm al año, mientras que en la costa caen unos 200 mm de agua, con una superficie de 13.726.937 km².<span> Mientras que el desierto de Sáhara tiene un superficie de 9.065.253 km².</span>', estado: false},
		{textoEnunciado: '¿Sabías que árbol es más antiguo?', imagenIncorrecta: 'abarkooh.jpg', imagenCorrecta: 'matusalen.jpg', correcta: 'Matusalén', incorrecta: 'Sarv-e-Abarkooh', incorrectaExplicacion: '<span>¡Uy lo siento!</span> En la tierra de Abarkooh, Irán, existe un ciprés muy antiguo: tiene 4000 años de edad, aunque haya quien le pone 4,500 años. Tiene una importancia fuerte para la gente de Irán, y le visitan personas de todo el mundo.  Es posiblemente el árbol más antiguo del medio oriente.<span> Mientras que el árbol Matusalén tiene 4.765 años de edad.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El árbol vivo más antiguo sobre la tierra se llama Matusalén. Es nombrado por la figura bíblica Matusalén, que según fuentes sagrados vivió hasta las 969 años.  Está situado en las montañas del White Mountains, California, cerca de Nevada. Es un pino. Un cálculo de su edad basado sobre un estudio de los anillos en su tronco afirma que tiene 4.765 años de edad. <span> Mientras que el arbol Sarv-e-Abarkooh tiene 4000 años de edad.</span>', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
	]},
	//Deportes
	{categorias: 'Deportes', preguntas: [
		{textoEnunciado: '¿Sabías qué país ha ganado más medallas olímpicas de invierno en la historia?', imagenIncorrecta: 'banderaestadosunidos.jpg', imagenCorrecta: 'banderanoruega.png', correcta: 'Noruega', incorrecta: 'Estados Unidos', incorrectaExplicacion: '<span>¡Muy mal!</span> Contando las medallas otorgadas en los pasados JJ.OO de Londres, el país norteamericano lidera este ránking de los juegos de verano con 2.298 medallas en total (930 de oro, 730 de plata y 638 de bronce), seguido por Rusia (URSS) con un total de 1010 (395-319-296) y Reino Unido con 715 (236-255-253). Por su parte, España es 28ª en número de medallas con 130 en total (37-59-34). <span> Sin embargo, en lo que respecta a los JJ.OO de invierno la tendencia cambia, ya que el país con más medallas es Noruega con 303 (107-106-90), seguido por los EE.UU gracias a sus 253 preseas (87-95-71).</span>', correctaExplicacion: '<span>¡Muy bien!</span> Ha participado en 25 ediciones de los Juegos Olímpicos de Verano, su primera presencia tuvo lugar en París 1900. El país ha obtenido un total de 152 medallas en las ediciones de verano: 56 de oro, 49 de plata y 47 de bronce. <span> En los Juegos Olímpicos de Invierno ha participado en todas las ediciones (22 en total). El país ha conseguido un total de 329 medallas en las ediciones de invierno: 118 de oro, 111 de plata y 100 de bronce.</span>', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '¿Sabías que campo mide más de largo segun el reglamento?', imagenIncorrecta: 'futbol.jpg', imagenCorrecta: 'Futbolamericano.jpg', correcta: 'Fútbol americano', incorrecta: 'Fútbol', incorrectaExplicacion: '<span>¡Uy lo siento!</span> La medida maxima permitida de un campo de fútbol de largo es 120m. <span>En cambio la de fútbol american es de 122m</span>', correctaExplicacion: '<span>¡Muy bien!</span>  La medida de un campo de fútbol americano de largo maximo es de 122m. <span>En cambio en fútbol el largo máximo permitido es 120m.</span>', estado: false},
		{textoEnunciado: '¿Sabías que tecnicismo se utiliza en golf para decir "Se obtiene al acabar un hoyo en un golpe más de su par"?', imagenIncorrecta: 'Eagle.jpg', imagenCorrecta: 'Bogey.jpg', correcta: 'Bogey', incorrecta: 'Eagle', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Resultado que se obtiene al jugar un hoyo en dos golpes menos de su par. Por ejemplo cuando un par 5 lo jugamos en 3 golpes. <span>En cambio bogey es el resultado que se obtiene al jugar un hoyo en un golpe más de su par. Por ejemplo un hoyo par 3 lo jugamos en 4 golpes</span>', correctaExplicacion: '<span>¡Muy bien!</span> Resultado que se obtiene al jugar un hoyo en un golpe más de su par. Por ejemplo un hoyo par 3 lo jugamos en 4 golpes. <span>Eagle se utiliza cuando el resultado que se obtiene al jugar un hoyo en dos golpes menos de su par. Por ejemplo cuando un par 5 lo jugamos en 3 golpes.</span>', estado: false},
=======
		{textoEnunciado: '¿Sabías qué animal tiene más patas? ', imagenIncorrecta: 'milpies.jpg', imagenCorrecta: 'plenipes.jpg', correcta: 'Illacme Plenipes', incorrecta: 'Mil Pies', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Fue una extraordinaria sorpresa que superara por tan poco a un milpiés puertorriqueño llamado Siphonophora millepeda, Aunque se crea que el milpíes es el animal con más patas no es así, ya que esta especie solo llega a las 742 patas. <span> Mientras otra especie, el Illacme plenipes, puede tener hasta 750 patas. </span>', correctaExplicacion: '<span>¡Muy bien!</span> Fue una extraordinaria sorpresa que superara por tan poco a un milpiés puertorriqueño llamado Siphonophora millepeda el Illacme plenipes, puede tener hasta 750 patas.<span> Mientras que el milpies solo llega a tener 742 patas.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué animal nada más rápido?', imagenIncorrecta: 'pezvela.jpg', imagenCorrecta: 'tiburonmako.jpg', correcta: 'Tiburón Marrajo', incorrecta: 'Pez Vela', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Es una especie muy veloz,consiguiendo alcanzar de manera puntual los 110 km por hora. Tiene un largo de alrededor de 3 m, un peso de 100 kg y está considerado uno de los animales más elegantes dentro del océano. <span> Mientras que el tiburón marrajo llega a alcanzar los 124 km/h. </span>', correctaExplicacion: '<span>¡Muy bien!</span> El tiburón. La velocidad media de esta especie oscila entre los 8 y los 12km/h. Sin embargo, no todos los tiburones nadan a la misma velocidad, sino que depende de la especie a la que pertenezca. La especie más rápida de tiburones es el Mako, también conocido como marrajo común o de aleta corta, capaz de alcanzar los 124 km/h. <span> Mientras que el pez vela llega a alcanzar de manera puntual los 110 km por hora.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué animal puede vivir mas años?', imagenIncorrecta: 'almeja.jpg', imagenCorrecta: 'turri.jpg', correcta: 'Medusa Turritopsis Nutricula', incorrecta: 'Almeja oceánica', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Un molusco marino nativo del Atlántico Norte de 8 cm de largo, es el animal más longevo de la historia, con una edad estimada de 507 años. Sus descubridores le llamaron Ming, inspirados por la famosa dinastía china reinante cuando la criatura nació.<span> Mientras que Medusa Turritopsis Nutricula es el único organismo capaz de rejuvenecerse a sí mismo para revertir su ciclo de vida. </span>', correctaExplicacion: '<span>¡Muy bien!</span> También se conoce como la Medusa Inmortal, ya que, al parecer, es el único organismo capaz de rejuvenecerse a sí mismo. En caso de peligro o condiciones adversas, se las arregla para revertir su ciclo de vida, es decir, vuelve a un estado juvenil en un proceso que puede continuar indefinidamente.<span> Mientras que el la Almeja oceánica muere a una edad estimada de 507 años.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué planta es la más venenosa del mundo?', imagenIncorrecta: 'maculata.jpg', imagenCorrecta: 'aldefa.jpg', correcta: 'Aldefa (Nerium oleander)', incorrecta: 'Cicuta (cicuta matulata)', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Es considerada la planta más venenosa del continente Americano. Quienes sobreviven el envenenamiento de la cicuta experimentan condiciones a largo plazo como amnesia. Síntomas: convulsiones violentas y dolorosas, náuseas, vómitos, calambres y temblores musculares.', correctaExplicacion: '<span>¡Muy bien!</span> Consdierada la planta más venenosa del mundo. Es tan potente, que incluso la miel creada a partir de su nectar puede matar a una persona. Síntomas: diarrea, vómitos, dolor de estómago intenso, somnolencia, mareos, latidos irregulares del corazón, y a menudo, la muerte.<span> Mientras que la planta cicuta (cicuta matulata) solo es considerada la planta más venenosa del continente Americano.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué desierto es más grande? ', imagenIncorrecta: 'sahara.jpg', imagenCorrecta: 'antartico.jpg', correcta: 'Desierto ANTÁRTICO', incorrecta: 'Desierto del SÁHARA', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Ocupando toda la franja norte del continente africano se extiende el Sáhara, el desierto cálido más grande del mundo. Marruecos, el Sáhara Occidental, Mauritania, Argelia, Túnez, Mali, Niger, Libia, Chad y Egipto son los países a los que el “desierto de desiertos” domina en mayor o menor medida. El paisaje saharaui es muy diverso, hay zonas con grandes dunas que pueden superar los 180 metros, tiene una spuerficie de 9.065.253 km².<span> Mientras que el Desierto Antártico tiene una superficie de 13.726.937 km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> Es difícil concebir que el desierto más grande del mundo sea la Antártida. Sin embargo, el “continente helado” se trata del territorio más frío, seco y ventoso de todos los que configuran La Tierra. En la Antártida apenas llueve, la pluviosidad en la altiplanicie interior ronda los 50 mm. al año, mientras que en la costa caen unos 200 mm de agua, con una superficie de 13.726.937 km².<span> Mientras que el desierto de Sáhara tiene un superficie de 9.065.253 km².</span>', estado: false},
		{textoEnunciado: '¿Sabías qué arbol es más antiguo?', imagenIncorrecta: 'abarkooh.jpg', imagenCorrecta: 'matusalen.jpg', correcta: 'Matusalén', incorrecta: 'Sarv-e-Abarkooh', incorrectaExplicacion: '<span>¡Uy lo siento!</span>En la tierra de Abarkooh, Iran, existe un ciprés muy antiguo: tiene 4000 años de edad, aunque haya quien le pone 4,500 años. Tiene una importancia fuerte para la gente de Iran, y le visitan personas de todo el mundo.  Es posiblemente el árbol más antiguo del medio oriente.<span> Mientras que el arbol Matusalén tiene 4.765 años de edad.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El árbol vivo más antiguo sobre la tierra se llama Matusalén. Es nombrado por la figura bíblica Matusalén, que según fuentes sagrados vivió hasta las 969 años.  Esta situado en las montañas del White Mountains, California, cerca de Nevada. Es un pino. Un cálculo de su edad basado sobre un estudio de los anillos en su tronco afirma que tiene 4.765 años de edad. <span> Mientras que el arbol Sarv-e-Abarkooh tiene 4000 años de edad.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué parque nacional tiene mas superficie?', imagenIncorrecta: 'per.jpg', imagenCorrecta: 'ast.jpg', correcta: 'Parque Nacional de Picos de Europa', incorrecta: 'Parque Nacional de Ordesa y Monte Perdido', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El Parque Nacional de Ordesa y Monte Perdido tiene más títulos que un catedrático: Patrimonio de la Humanidad, Reserva de la Biosfera, Zona de especial protección para las aves, Diploma Europeo. Sus 15.608 hectáreas de impresionantes paisajes los merecen justamente.<span> Mientras que el Parque Nacional de Picos de Europa tiene 64.000 mil hectáreas de superficie.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Asturias, León y Cantabria comparten desde 1918 el que fuera primer parque nacional de España. Casi 90 años después de su bautismo como zona protegida, este hábitat de osos pardos y urogallos sigue siendo uno de los puntos más visitados de la cordillera cantábrica, y el segundo parque nacional en visitas solo por debajo del Parque Nacional del Teide.<span> Mientras que el tiene Parque Nacional de Ordesa y Monte Perdido tiene 15.608 hectáreas de superficie. </span>', estado: false},
		{textoEnunciado: '¿Sabías qué montaña es más peligrosa?', imagenIncorrecta: 'k2.jpg', imagenCorrecta: 'annapurna.jpg', correcta: 'Annapurna', incorrecta: 'K2', incorrectaExplicacion: '<span>¡Uy lo siento!</span> La segunda montaña más alta del planeta es reconocida por los escaladores como la más difícil del mundo en cuanto a técnica. Incluso en las rutas más fáciles, los ascensos requieren cruzar glaciares complicados, subir por paredes rocosas empinadas, e improvisar un camino a través de pilares de hielo, llamados seracs, que son propensos a colapsar sin aviso previo.<span> Mientras que el Annapurna es las más peligrosa estadisticamente hablando con 53 muertos hasta ahora.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Desde el primer ascenso en 1950, Annapurna ha sido escalada por más de 130 personas, pero 53 han muerto intentándolo. Esta tasa de mortalidad convierte a Annapurna, la décima montaña más alta del planeta, en la más peligrosa estadísticamente.<span> Mientras que el K2 es la más difícil del mundo en cuanto a técnica.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué río es más largo?', imagenIncorrecta: 'nilo.jpg', imagenCorrecta: 'amazonas.jpg', correcta: 'Río Amazonas', incorrecta: 'Rio Nilo', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Ha sido considerado históricamente como el río más largo del mundo, sin embargo recientes estudios dan esta categoría al río Amazonas. Se localiza al noreste de África. De su principal fuente, el lago Victoria en África central, el río Nilo fluye hasta el mar Mediterráneo a través de Uganda, Sudán y Egipto.<span> Mientras que el rio Amazonas tiene 7,020 km de longitud.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Es un gran río sudamericano, y es el río más largo del planeta y transporta él solo una quinta parte del agua fluvial del planeta. Recorre el bosque tropical húmedo más grande del planeta, distinguido con el nombre genérico de Amazonía o selva amazónica una de las maravillas naturales del mundo.<span> Mientras que el río Nilo tiene 6,671 km de longitud.</span>', estado: false},
		{textoEnunciado: '¿Sabías en qué lugar ha llóvido mas en un año?', imagenIncorrecta: 'maws.jpg', imagenCorrecta: 'lloro.jpg', correcta: 'Lloró, Chocó, Colombia', incorrecta: 'Mawsynram y Cherrapunji, India', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Debido a las lluvias del monzón, entre Junio y Agosto, esta zona al Noreste de la India recoge grandes cantidades de lluvia, con registros en Mawsynram de 11877 mm.<span> Mientras que en Lloró, Chocó, Colombia ostenta el record mundial con 13299 mm de lluvia al año.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Según fuentes del año 2000, ostenta el record mundial con 13299 mm de lluvia al año.<span> Mientras que en Mawsynram tiene registros de 11877 mm de lluvía al año. </span>', estado: false},
	]},
	//Deportes
	{categorias: 'Deportes', preguntas: [
		{textoEnunciado: '¿Sabías qué país ha ganado más medallas olímpicas de invierno en la historia?', imagenIncorrecta: 'banderaestadosunidos.jpg', imagenCorrecta: 'banderanoruega.png', correcta: 'Noruega', incorrecta: 'Esatdos Unidos', incorrectaExplicacion: '<span>¡Muy mal!</span> Contando las medallas otorgadas en los pasados JJ.OO de Londres, el país norteamericano lidera este ránking de los juegos de verano con 2.298 medallas en total (930 de oro, 730 de plata y 638 de bronce), seguido por Rusia (URSS) con un total de 1010 (395-319-296) y Reino Unido con 715 (236-255-253). Por su parte, España es 28ª en número de medallas con 130 en total (37-59-34). <span>Sin embargo, en lo que respecta a los JJ.OO de invierno la tendencia cambia, ya que el país con más medallas es Noruega con 303 (107-106-90), seguido por los EE.UU gracias a sus 253 preseas (87-95-71).</span>', correctaExplicacion: '<span>¡Muy bien!</span> Ha participado en 25 ediciones de los Juegos Olímpicos de Verano, su primera presencia tuvo lugar en París 1900. El país ha obtenido un total de 152 medallas en las ediciones de verano: 56 de oro, 49 de plata y 47 de bronce. <span>En los Juegos Olímpicos de Invierno ha participado en todas las ediciones (22 en total). El país ha conseguido un total de 329 medallas en las ediciones de invierno: 118 de oro, 111 de plata y 100 de bronce.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué delantero de futbol fue mas goleador?', imagenIncorrecta: 'romario.jpg', imagenCorrecta: 'pele.jpg', correcta: 'Romario da Souza Faria', incorrecta: 'Edson Arantes Do Nascimento, Pelé', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Marcó 757 goles de 1956 a 1979. El gran Pelé siempre será recordado como una de las leyendas del fútbol mundial. Se caracterizaba por tener una gran habilidad técnica y por tener un potente disparo a puerta con las dos piernas.<span> Mientras que Romario marcó 768 goles en 22 años de trayectoria profesional.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Marcó 768 goles en 22 años de trayectoria profesional. Jugó en el Vasco de Gama, PSV Eindhoven, Barça, Valencia y Flamengo. Cuenta con un palmarés envidiable. Ganó dos ligas brasileñas, tres campeonatos holandeses, una liga española y una Supercopa. Además, fue campeón del mundo en 1994 con la canarinha.<span> Mientras qué pelé marcó 757 goles de 1956 a 1979. </span>', estado: false},
		{textoEnunciado: '¿Sabías qué jugador de baloncesto tiene el record de rebotes en un partido?', imagenIncorrecta: 'bill.jpg', imagenCorrecta: 'lakers.jpg', correcta: 'Wilt Chamberlain', incorrecta: 'Bill Russell', incorrectaExplicacion: '<span>¡Uy lo siento!</span> William Fenton «Bill» Russell (Monroe, Luisiana, 12 de febrero de 1934) es un exbaloncestista estadounidense que jugó como pívot durante trece años en el equipo de los Boston Celtics de la NBA. Fue el máximo estandarte de la dinastía de los Celtics, llego a conquistar el record de 55 rebotes en un partido, ganaron once campeonatos en trece años y en ese lapso disputaron diez finales consecutivas.<span> Mientras que Wilt Chamberlain obtuvo 55 rebotes en el mismo partido.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Conocido como Wilt the Stilt o The Big Dipper, es considerado por la mayoría de los especialistas como el jugador de baloncesto más dominante de todos los tiempos. Obtuvo un maximo de 51 rebotes en un partido y fue nombrado jugador más valioso de la NBA en cuatro ocasiones, figuró en la lista de los 50 mejores jugadores de la historia de la NBA.<span> Mientras qué Bill Russell obtuvo 51 rebotes en el mismo partido. </span>', estado: false},
		{textoEnunciado: '¿Sabías qué jugador tiene más campeonatos del mundo de snooker?', imagenIncorrecta: 'stephen.jpg', imagenCorrecta: 'joe.jpg', correcta: 'Joe Davis', incorrecta: 'Stephen Hendry', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Campeón del mundo por primera vez en 1990 con 21 años, el más joven de todos los tiempos, fué capaz de conseguir 7 campeonatos del mundo de snooker, el juego de billar más popular en el Reino Unido. <span> Mientras que Joe Davis ha sido 15 veces campeón del mundo de snooker .</span>', correctaExplicacion: '<span>¡Muy bien!</span> Fue un jugador profesional de billar y snooker. Entre 1926 y 1934 disputó ocho finales del Campeonato del Mundo de Billar, de las cuales resultó victorioso en cuatro, y además, desde 1927 hasta 1946, ganó 15 ediciones del Campeonato del Mundo de Snooker, competición que él mismo impulsó.<span> Mientras qué Stephen Hendry ha sido 7 veces campeón del mundo de snooker. </span>', estado: false},
		{textoEnunciado: '¿Sabías quién tiene mas medallas de plata?', imagenIncorrecta: 'lewis.jpg', imagenCorrecta: 'bolt.jpg', correcta: 'Carl Lewis', incorrecta: 'Usain Bolt', incorrectaExplicacion: '<span>¡Uy lo siento!</span> es un atleta jamaicano especialista en pruebas de velocidad. Ostenta once títulos mundiales y 9 meddalas de oro olimpicas. Posee además los récords mundiales de los 100 y 200 m lisos, y la carrera de relevos 4×100 con el equipo jamaicano. Es uno de los siete atletas que en la historia han ganado títulos en las categorías juvenil, júnior y absoluta. Se le conoce como Lightning Bolt. <span> Mientras que Carl Lewis obtuvo 9 medallas de oro y 1 de plata.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Frederick Carlton Carl Lewis y apodado El Hijo del Viento es un exatleta estadounidense especialista en pruebas de velocidad y salto de longitud que ganó 10 medallas olímpicas (9 oros) durante su carrera (1984-1996), y 8 medallas de oro, 1 de plata y 2 de bronce en los Campeonatos del Mundo de Atletismo (1983-1993).<span> Mientras qué Usain Bolt tiene 9 medallas de oro y 0 de plata y bronce.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué equipo de besibol poseé más World Series?', imagenIncorrecta: 'cardinals.jpg', imagenCorrecta: 'yankees.jpg', correcta: 'New York Yankees', incorrecta: 'St. Louis Cardinals', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Saint Louis Cardinals es el nombre de un equipo de béisbol que forma parte de las ligas profesionales de los Estados Unidos que tiene 11 World Series. Con sede en San Luis (Misuri), forma parte de la división central de la Liga Nacional, donde compite con los equipos: Chicago Cubs, Pittsburgh Pirates, Milwaukee Brewers y Cincinnati Reds. <span> Mientras que los New York Yankees tienen 27 World Series.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Los New York Yankees (Yankees de New York en castellano) es un equipo de béisbol profesional de las Grandes Ligas de Estados Unidos que tienen 27 World Series, con sede en Nueva York (Estados Unidos). Pertenecen a la División Este de la Liga Americana.<span> Mientras qué St. Louis Cardinals tienen 11 World Series.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué deporte es el más popular en Irlanda?', imagenIncorrecta: 'hurling.jpg', imagenCorrecta: 'gaelico.jpg', correcta: 'Fútbol Gaélico', incorrecta: 'Hurling', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Otro deporte muy popular es el hurling originario de Irlanda. Es muy parecido al hockey sobre hierba, aunque la pelota se suele jugar por el aire en vez de por el suelo. <span> Mientras que fútbol gaélico es el deporte más popular.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Si contamos los registros de asistencia, el fútbol gaélico es el deporte más popular de Irlanda. Se parece mucho al fútbol que todos conocemos, aunque eso sí, la diferencia es que llevan el balón con la mano.<span> Mientras qué el hurling es el segundo más popular.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
		{textoEnunciado: '¿Sabías qué', imagenIncorrecta: '', imagenCorrecta: '', correcta: '', incorrecta: '', incorrectaExplicacion: '', correctaExplicacion: '', estado: false},
>>>>>>> ede0e9be9ee6e230fe0e2a53b0519313aafcecf0
		{textoEnunciado: '¿Sabías quien es el segundo con más títulos del campeonato del mundo de fórmula 1?', imagenIncorrecta: 'Sebastianvettel.jpg', imagenCorrecta: 'JuanManuelFangio.jpg', correcta: 'Juan Manuel Fangio', incorrecta: 'Sebastian Vettel', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Comenzando la temporada 2017, lleva acumuladas 43 victorias, 88 podios y 46 pole position. Es el cuarto piloto con más grandes premios ganados en la historia. Iguala a Alain Prost (4) en número de títulos mundiales, superado por Juan Manuel Fangio (5) y Michael Schumacher (7).', correctaExplicacion: '<span>¡Muy bien!</span> En 1947, con la colaboración del gobierno argentino, comenzó a participar en los Grandes Premios del continente europeo. Desde 1947 a 1958, compitió en Grandes Premios de manera oficial para las marcas Mercedes-Benz, Maserati, Alfa Romeo y Ferrari obteniendo cinco títulos mundiales y dos subcampeonatos.', estado: false},
	]},
		//Geografía
	{categorias: 'Geografía', preguntas: [
		{textoEnunciado: '¿Sabías cual de estas 2 playas tiene mayor longitud?', imagenCorrecta: 'playadelaconcha.jpg', imagenIncorrecta: 'playadelabarceloneta.jpg', incorrecta: 'Playa de la Barceloneta', correcta: 'Playa de La Concha', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Es una de las más largas con una longitud de 1100 metros. Junto con la de San Splaya cercana) es una de las más antiguas y de mayor tradición de la ciudad y también una de las preferidas por los usuarios extranjeros.<span> Mientras que la playa de La Concha tiene una longitad de 1350m.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Ubicada al oeste de la desembocadura del río Urumea, separada del mismo por el monte Urgull y alojada en la bahía de la Concha, tiene una longitud media de 1.350 m, una anchura media de 40 m y una superficie media de 54.000 m². <span>Mientras que la playa de la Barceloneta tiene una longitud de 1100m.', estado: false},
		{textoEnunciado: '¿Sabías qué oceano es más profundo?', imagenCorrecta: 'Oceanopacifico.jpg', imagenIncorrecta: 'Oceanoatlantico.jpg', correcta: 'Ocenao Pacífico', incorrecta: 'Oceano Atlántico', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El océano Atlántico es el océano que separa América, al oeste de Europa y África, al este. Tiene una profundidad maxima de 8 605 m (fosa de Puerto Rico). Se extiende desde el océano Ártico, en el norte, hasta el océano Antártico, en el sur. Es el segundo océano más extenso de la Tierra tras el océano Pacífico. <span> Mientras que el oceano Pacífico tiene una profundidad máxima de 10.924m </span>', correctaExplicacion: '<span>¡Muy bien!</span> El océano Pacífico es el mayor océano de la Tierra. Tiene una profundidad máxima de 10.924m (Abismo Challenger en la Fosa de las Marianas). Ocupa la tercera parte de su superficie y se extiende aproximadamente 15 000 km desde el mar de Bering limitando con el Ártico por el norte, hasta los márgenes congelados del mar de Ross y limitando por el sur con la Antártida. <span>Mientras que el oceano Atlantico tiene una profundidad de Máxima: 8 605 m (fosa de Puerto Rico).</span>', estado: false},
		{textoEnunciado: '¿Sabías qué país tiene más superficie?', imagenCorrecta: 'reinounido.jpg', imagenIncorrecta: 'rumania.jpg', correcta: 'Reino Unido', incorrecta: 'Rumania', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Rumania es un país ubicado en la intersección de Europa Central y del Sureste, en la frontera con el mar Negro. Rumania limita con Hungría y Serbia al oeste, Ucrania y Moldavia al noreste y al este, y Bulgaria al sur. Con una superficie de 238 391 km2. <span>Mientras que el Reino unido tiene 243 610km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> El Reino Unido, denominado oficialmente Reino Unido de Gran Bretaña e Irlanda del Norte (United Kingdom of Great Britain and Northern Ireland),con una superficie de 243 610km² es un país soberano e insular, miembro de la Unión Europea,nota 1 ubicado al noroeste de la Europa Continental. <span>Mientras que Rumania tiene 238 391 km2.', estado: false},
		{textoEnunciado: '¿Sabías qué ciudad tiene mas población metropolitana?', imagenCorrecta: 'seul.jpg', imagenIncorrecta: 'bombay.jpg', correcta: 'Seúl', incorrecta: 'Bombay', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Bombay, también conocida bajo la forma local Mumbai y actualmente el nombre oficial en inglés desde 1995, es la capital del estado federal de Maharashtra en la India. Es la ciudad portuaria más importante del subcontinente con cerca del 40 % del tráfico exterior del país. Tiene una población metropolitana de 20.654.359 habitantes.<span> Mientras que Seúl tiene una población metropolitana de 25.620.000 habitantes.', correctaExplicacion: '<span>¡Muy Bien!</span> Seúl, es la capital de Corea del Sur desde la creación de esta república en 1948, la capital histórica de Corea desde hace más de 600 años y la ciudad más poblada de la península de Corea. Tiene una población metropolitana de 25.620.000 habitantes. Situada al noroeste del país, a unos 50 kilómetros de la zona desmilitarizada que separa las dos Coreas, forma una unidad administrativa propia dentro del Estado. Está atravesada por el río Han.<span> Mientras que la ciudad de Bombay tiene 20.654.359 habitantes.</span><span>', estado: false},
		{textoEnunciado: '¿Sabías qué lago es más grande?', imagenCorrecta: 'lagohuron.jpg', imagenIncorrecta: 'lagomichigan.jpg', correcta: 'Lago Hurón', incorrecta: 'Lago Míchigan', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El lago Míchigan es el único de los Grandes Lagos que se encuentra completamente dentro del territorio de los Estados Unidos; los otros están compartidos con Canadá. Con 57.750 km², una superficie similar a la de Croacia, es el mayor lago perteneciente a un único país y el quinto a escala mundial. <span> Mientras que el lago Hurón tiene una superficie de de 59.596 km².</span>', correctaExplicacion: '<span>¡Muy bien!</span> El lago Hurón es el segundo lago en tamaño de los cinco conocidos como Grandes Lagos, y se halla en la zona central de Norteamérica, entre Estados Unidos y Canadá y tiene una superficie de 59.596 km².<span> Mientras que el Lago Míchigan tiene una superficie de 57.750 km².</span>', estado: false},
		{textoEnunciado: '¿Sabías qué volcan es más alto?', imagenCorrecta: 'montepissis.jpg', imagenIncorrecta: 'cerrobonetechico.jpg', correcta: 'Monte Pissis', incorrecta: 'Cerro Bonete Chico', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El Cerro Bonete Chico (a veces llamado cerro Bonete) es un volcán apagado en el noroeste de la Provincia de La Rioja, cerca del límite con la Provincia de Catamarca, en la República Argentina. Forma parte del hemiciclo de los volcanes más altos del mundo compuesto por Veladero, Baboso, Reclus, Gemelos, Pissis, Peñas Azules y Bonete Grande, midiendo  6759m.<span> Mientras que el volcan de Monte Pissis tiene una altitud de 6795m.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El monte Pissis es un estratovolcán inactivo, situado sobre un ramal de la Cordillera de los Andes dentro de la región del altiplano puneño de la Argentina, ubicado entre las Provincias de La Rioja y Catamarca. Este volcán es la tercera cumbre de mayor altura de los hemisferios Sur y Occidental, con una altitud de 6795m. <span> Mientras que el volcan Cerro Bonete Chico tiene una altitud de 6759m.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué país tiene mayor area de bosque?', imagenCorrecta: 'bosquecanada.jpg', imagenIncorrecta: 'bosqueestadosunidos.jpg', correcta: 'Canadá', incorrecta: 'Estados Unidos', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Estados Unidos, oficialmente Estados Unidos de América es un país soberano constituido en república federal constitucional compuesta por 50 estados y un distrito federal. La mayor parte del país se ubica en el centro de América del Norte y tiene un area de bosque de 310.095 miles de hectareas. <span> Mientras que Canadá tiene un area de bosque de 347.069 miles de hectareas.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Canadá es un país soberano de América del Norte, cuya forma de gobierno es la monarquía parlamentaria federal. Su territorio está organizado en diez provincias y tres territorios. Su capital es la ciudad de Ottawa y la ciudad más poblada es Toronto. Con un area de bosque de 347.069 miles de hectareas. <span> Mientras que Estados Unidos tiene un area de bosque de 310.095 miles de hectareas.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué rio es más largo?', imagenCorrecta: 'amazonas.jpg', imagenIncorrecta: 'nilo.jpg', correcta: 'Rio Amazonas', incorrecta: 'Rio Nilo', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El Nilo es el mayor río de África y fue considerado durante siglos el río más largo del mundo, sin embargo, mediciones de los años 2007 y 2008 han redefinido el nacimiento del río Amazonas. La fuente más lejana del lago Victoria es el río Kagera, localizado al oeste de Tanzania. Si se considera este como fuente del Nilo, su nacimiento sería el curso de agua más largo de los que desembocan en el Mediterráneo, siendo el Nilo-Kagera el segundo río más largo del mundo, con una longitud de 6853km. <span> Mientras que el rio Amazonas tiene una longitud de 7062km.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El río Amazonas es un río de América del Sur, que atraviesa Perú (nacimiento), Colombia y Brasil (desembocadura). Es el río más caudaloso del mundo y contiene más agua que el Nilo, el Yangtsé y el Misisipi juntos, y supone cerca de una quinta parte del agua dulce en estado líquido del planeta con una longitud de 7062km. <span> Mientras que el Nilo tiene una longitud de 6853km.</span>', estado: false},
		{textoEnunciado: '¿Sabías cual es la capital de Zambia?', imagenCorrecta: 'lusaka.jpg', imagenIncorrecta: 'harare.jpg', correcta: 'Lusaka', incorrecta: 'Harare', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Harare (denominada Salisbury hasta 1982) es la ciudad más poblada y capital de Zimbabue. Tiene una población estimada de 1.600.000 habitantes, con unas 2.800.000 personas en su área metropolitana (2006). Es el centro administrativo, comercial, y de comunicaciones de Zimbabue. Es centro de comercio para el tabaco, maíz, algodón y cítricos. <span> Mientras que Lusaka es la capital de Zambia.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Lusaka es la capital de Zambia, de la provincia de Lusaka y del distrito homónimo, además de la ciudad más poblada del país. Está localizada en la zona centro-sur de Zambia, sobre una meseta a 1279 metros de altitud. Fue fundada como ciudad colonial en 1905 sobre un poblado preexistente. <span> Mientras que Harare es la capital de Zimbabue.</span>', estado: false},
		{textoEnunciado: '¿Sabías que polo es más frio?', imagenCorrecta: 'polosur.jpg', imagenIncorrecta: 'polonorte.jpg', correcta: 'Polo Sur', incorrecta: 'Polo Norte', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El polo norte, también conocido como polo norte geográfico es uno de los dos lugares de la superficie de un planeta coincidente con el eje de rotación; es opuesto al polo sur. Todos los cuerpos celestes poseen un polo norte y otro sur cuyo eje de rotación no suele ser perpendicular al eje de traslación. Con una temperatura mínima registrada de -70 grados centígrados. <span> Mientras que en el Polo Sur la temperatura mínima registrada es de -89,6 grados centígrados.</span>', correctaExplicacion: '<span>¡Muy bien!</span> El término polo sur se refiere normalmente al polo sur geográfico, el punto más austral de la superficie terrestre, el opuesto al polo norte. Otros «polo sur» incluyen el polo sur ceremonial, el polo sur magnético y geomagnético, y el polo sur de inaccesibilidad. Con una temperatura mínima registrada de -89,6 grados centígrados. <span> Mientras que en el Polo Norte la temperatura mínima registrada de -70 grados centígrados.</span>', estado: false},
	]},
	//Historia
	{categorias: 'Historia', preguntas: [
		{textoEnunciado: '¿Sabías qué cabo fue descubierto antes?', imagenCorrecta: 'cabosanlucas.jpg', imagenIncorrecta: 'cabodehornos.jpg', correcta: 'Cabo San Lucas', incorrecta: 'Cabo de Hornos', incorrectaExplicacion: '<span>¡Uy lo siento!</span> En 1525, el marino español Francisco de Hoces, que formaba parte de la expedición de García Jofre de Loaísa, se encontró con un temporal cuando trataba de cruzar el estrecho de Magallanes, lo que le obligó a viajar hasta los 55º de latitud sur, convirtiéndose en el primero en descubrir el paso al sur del cabo de Hornos, en el extremo meridional del continente, anticipándose en más de medio siglo al pirata inglés Francis Drake. <span> Mientras que el cabo de San Lucas fue descubierto en 1534. </span>', correctaExplicacion: '<span>¡Muy bien!</span> Actualmente se considera que el primer europeo que desembarcó en la península de Baja California fue el piloto y navegante español Fortún Jiménez, quien (al mando del navío Concepción) avistó y visitó en el año 1534 la península, que pensó que era una isla. <span> Mientras que el cabo de Hornos fue descubierto en 1525.</span>', estado: false},
		{textoEnunciado: '¿Sabías quién descubrió America?', imagenCorrecta: 'coloncristobal.jpg', imagenIncorrecta: 'americovespucio.jpg', correcta: 'Cristobal Colón', incorrecta: 'Américo Vespucio', incorrectaExplicacion: '<span>¡Uy lo siento!</span> América debería llamarse Columba, porque su descubridor fue Cristóbal Colón. Sin embargo, Américo Vespucio acabó por imponerse sobre Colón. Podría resumirse en que Américo escribía mejor que Colón, de 1499 a 1502 realizó varios viajes a América. <span> Mientras que Cristobal Colón viajo a América en 1492. </span>', correctaExplicacion: '<span>¡Muy bien!</span> Fue una expedición marítima capitaneada por Cristóbal Colón, al servicio de los Reyes Católicos, Isabel y Fernando de Castilla y Aragón, que partió el 3 de agosto del 1492 del Puerto de Palos de la Frontera. Participaron tres embarcaciones: la carabela Pinta, la carabela Niña y la carabela Santa María <span> Mientras que el Américo Vespucio viajo a America en 1499.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué emperador romano conquistó Hispania?', imagenCorrecta: 'cesaraugusto.png', imagenIncorrecta: 'tiberio.jpg', correcta: 'César Augusto', incorrecta: 'Tiberio Julio César', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Fue emperador del Imperio romano desde el 18 de septiembre del año 14 d.c hasta su muerte, el 16 de marzo del año 37 d.c. Fue el segundo emperador de Roma y perteneció a la dinastía Julio-Claudia. Era hijo de Tiberio Claudio Nerón y Livia Drusila. <span> Mientras que César Augusto termino la conquista en el año 19a.c.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Se conoce como conquista de Hispania al periodo histórico comprendido entre el desembarco romano en Ampurias (218 a. C.) y la conclusión de la conquista romana de la península ibérica con el fin de las guerras cántabras por César Augusto (19 a. C.), así como a los hechos históricos que conforman dicho periodo. <span> Mientras que Tiberio Julio César fue emperador en el año 14 d.c.</span>', estado: false},
		{textoEnunciado: '¿Sabías qué faraón comenzó la construccion de las piramides?', imagenCorrecta: 'dyeser.jpg', imagenIncorrecta: 'sejemjet.jpg', correcta: 'Faraón Dyeser', incorrecta: 'Faraón Sejemjet', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Gobernó en 2645 - 2638 a. C. Como su predecesor, Dyeser, Sejemjet inició la construcción de una pirámide escalonada en Saqqara, pero sólo las gradas más bajas estaban terminadas en el momento de su muerte. Algunos egiptólogos creen que la pirámide de Sejemjet habría sido más grande que la de Dyeser si se hubiera terminado. <span> Mientras que el Faraón Dyeser gobernó de ca. 2665 a 2645 a. C. y comenzó la construccion de las piramides.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Gobernó de ca. 2665 a 2645 a. C. Este periodo se inicia bajo la Dinastía III, la capital se estableció en Memfis, y es esta dinastía, bajo el mandato del Faraón Dyeser, donde los egipcios comienzan a erigir esas maravillosas y colosales construcciones llamadas Pirámides. <span> Mientras que Faraón Sejemjet gobernó en 2645 - 2638 a. C. y solo continuó su construcción de las piramides.</span>', estado: false},
		{textoEnunciado: '¿Sabías quien inventó los auriculares?', imagenCorrecta: 'nathanielbaldwin.jpg', imagenIncorrecta: 'grahambell.jpg', correcta: 'Nathaniel Baldwin', incorrecta: 'Alexander Graham Bell', incorrectaExplicacion: '<span>¡Uy lo siento!</span> En 1876 Alexander Graham Bell inventó el teléfono y por primera vez incluyó un micrófono funcional que usaba un electroimán, este era conocido como transmisor líquido donde el diafragma se adjuntaba a una varilla conductora en una solución de ácido. <span> Mientras que Nathaniel Baldwin fué quien invento los auriculares.</span>', correctaExplicacion: '<span>¡Muy bien!</span> La invención de los audífonos se remonta a 1910 en Utah en Estados Unidos a finales del año 1930, fue Nathaniel Baldwin quien los creó y dejó al mundo un gadget hoy indispensable. <span> Mientras que Graham Bell fué quien inventó el telefono.', estado: false},
		{textoEnunciado: '¿Sabías quien gobernaba Rusia durante la segunda guerra mundial?', imagenCorrecta: 'stalin.jpg', imagenIncorrecta: 'malenkov.jpg', correcta: 'Iósif Stalin', incorrecta: 'Gueorgui Malenkov', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Fué el siguiente gobernante despues de la muerte de Stalin que hasta febrero de 1955, Malenkov a través del cargo de Presidente del Consejo de Ministros, estuvo encerrado en una lucha por el poder contra Jrushchov despues de la segunda guerra mundial. <span> Mientras que Iósif Stalin gobernó durante la segunda guerra mundial.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Durante del Segunda Guerra Mundial (1939-1945) Rusia era la principal de las 15 repúblicas que integraban la Unión de Repúblicas Socialistas Soviéticas, llamada comúnmente Unión Soviética. Y su jefe de gobierno era el dictador Iósif Vissariónovich Dzhugashvili, más conocido como José Stalin.<span> Mientras que Gueorgui Malenkov lucho por el gobierno después de la segunda guerra mundial.</span>', estado: false},
		{textoEnunciado: '¿Sabías quien recibió el primer premio nobel de la paz?', imagenCorrecta: 'passy.jpg', imagenIncorrecta: 'ducommun.jpg', correcta: 'Frédéric Passy', incorrecta: 'Élie Ducommun', incorrectaExplicacion: '<span>¡Uy lo siento!</span> En 1891, es designado para dirigir la Oficina Internacional por la Paz, que tenía su sede en Berna. Obtuvo el premio Nobel de la Paz en 1902, junto a Charles Albert Gobat. <span> Mientras que Frédéric Passy lo recibió en 1901 siendo el primero en recibirlo junto a Jean Henri Dunant.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Recibió el primer premio nobel de la paz en 1901 por ser uno de los principales fundadores de la Unión Interparlamentaria y también el primordial organizador del primer Congreso Universal por la Paz.<span> Mientras que Élie Ducommun lo recibió en 1902 y fue secretario honorario, Oficina Internacional por la Paz. </span>', estado: false},
		{textoEnunciado: '¿Sabías en que ciudad se fundó la ONU?', imagenCorrecta: 'sanfrancisco.jpg', imagenIncorrecta: 'newyork.jpg', correcta: 'San Francisco', incorrecta: 'Nueva York', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Desde su sede en Nueva York, los Estados miembros de las Naciones Unidas y otros organismos vinculados deliberan y deciden acerca de temas significativos y administrativos en reuniones periódicas celebradas durante el año. <span> Mientras que en San Francisco fue fundada el 24 de octubre de 1945.</span>', correctaExplicacion: '<span>¡Muy bien!</span> La ONU fue fundada el 24 de octubre de 1945 en la ciudad estadounidense de San Francisco, por 51 países, al finalizar la Segunda Guerra Mundial, con la firma de la Carta de las Naciones Unidas.<span> Mientras que en Nueva York la ONU tiene su SEDE. </span>', estado: false},
		{textoEnunciado: '¿Sabías qué nombre recibe el hijo de Osiris e Isis en la mitología egipcia?', imagenCorrecta: 'horus.jpg', imagenIncorrecta: 'tot.jpg', correcta: 'Horus', incorrecta: 'Thot', incorrectaExplicacion: '<span>¡Uy lo siento!</span> Thot está considerado dios de la sabiduría y tenía autoridad sobre todos los dioses. También fue el inventor de la escritura, patrón de los escribas, de las artes y las ciencias. Como dios de la escritura, era el inventor de todas las palabras, del lenguaje articulado. <span> Mientras que Horus fue el hijo de Osiris e Isis.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Hijo de Osiris e Isis, Horus era un poderoso y muy antiguo dios celeste de Eipto, tan antiguo que ya se reconocía  en la época predinástica. Con su forma de halcón, despertó gran devoción entre sus fieles y levantaron templos en su honor. <span> Mientras que Thot está considerado dios de la sabiduría y tenía autoridad sobre todos los dioses.</span>', estado: false},
		{textoEnunciado: '¿Sabías quien fue el primer zar de Rusía?', imagenCorrecta: 'ivanterrible.jpg', imagenIncorrecta: 'simeon.jpg', correcta: 'Iván IV', incorrecta: 'Simeón Bekbulátovich', incorrectaExplicacion: '<span>¡Uy lo siento!</span> El año 1574, durante el período de la Opríchnina, Iván el Terrible deja Moscú después de ejecutar a numerosos Boyardos y se retira en su palacio de Aleksándrov. Durante este tiempo nombró a Simeón Bekbulátovich como Soberano de Todas las Rusias <span> Mientras que el primer zar fue Iván IV mas conocido como Iván el Terrible.</span>', correctaExplicacion: '<span>¡Muy bien!</span> Iván IV Vasílievich, llamado Iván el Terrible (Kolómenskoye, Rusia, 25 de agosto de 1530 - Moscú, 18 de marzo de 1584), fue un zar de Rusia (1547-1584), el primero en llevar el título de zar (desde 1547) y es considerado como uno de los creadores del Estado ruso. <span> Mientras que Simeón Bekbulátovich fue nombrado soberano por Iván IV despues de su retiro.</span>', estado: false},
	]},
	//Todo
	{categorias: 'Todo'},
	//Curiosidades
	{categoria: 'Curiosidades'}
];

$(document).ready(function() {
	a.addClass('animated bounceInLeft');
	a.fadeTo('fast', 0.1);
	a.mouseenter(categoria);
	setTimeout(function(){ a.removeClass('animated bounceInLeft'); }, 1000);
});

function categoria (){
	a.fadeTo('fast', 0.1);
	$(this).fadeTo('fast', 1);
	$(this).one('click', function(event){
		event.stopImmediatePropagation();
		b = $(this).index();
		if (a.addClass()[b].className === 'col-md-2 col-sm-4 col-xs-4 tamaño div-img'){
			$(this).addClass('animated flip');
			a.addClass('animated bounceOutLeft');
			$('#creador').addClass('animated bounceOutLeft hidden');
			b = preg[b];
			if (b.categorias == "Todo"){
				setTimeout(function(){
					$('.flip').removeClass('flip');
				}, 1500);
				setTimeout(function(){
					todos = true;
					a.addClass('hidden');
					$('section.prueba').addClass('quitarscroll');
					preguntas();
				}, 1500)
			}else{
				setTimeout(function(){
					$('.flip').removeClass('flip');
				}, 1500);
				setTimeout(function(){
					a.addClass('hidden');
					$('section.prueba').addClass('quitarscroll');
					preguntas();
				}, 3000);
			}
		}else{
			alert('Acierta todas las preguntas de la categoría todos para desbloquear esta categoría')
			llamarCategoria();
		}
	});
}

function preguntas(){
	if(!(c == undefined)){
		if (y == 'img/' + b.categorias + '/' + b.preguntas[c].imagenCorrecta){
			contadorCorrecta++
		}else{
			contadorIncorrecta++
		}
	}
	if (todos == true){
		b = preg[Math.floor(Math.random()*4 + 0)];
	}
	if (x < 10) {
		x++
		c = Math.floor(Math.random()*10 + 0);
		while (b.preguntas[c].estado == true){
			c = Math.floor(Math.random()*10 + 0);
		}
		b.preguntas[c].estado = true;
		elegir = '<div id="correcta" class="juntos"><img class="marco2" src=img/' + b.categorias + '/' + b.preguntas[c].imagenCorrecta + '><p class="letra">&mdash;' + b.preguntas[c].correcta + '&mdash;</p></div>'
		var random = Math.floor(Math.random()*2 + 0);
		if (random == 1) {
			izquierda();
		}else{
			derecha();
		}
	}else{
		if (todos === true){
			x = contadorIncorrecta + contadorCorrecta;
			if (x == 20) {
				todos = false;
				puntuacion();
			}else{
			c = undefined;
				x = 0;
				preguntas();
			}
		}else{
			puntuacion();
		}
	}
}

function llamarCategoria(){
	x = 0;
	contadorCorrecta = 0;
	contadorIncorrecta = 0;
	a.removeClass('animated bounceOutLeft hidden');
	$('#creador').removeClass('animated bounceOutLeft hidden');
	a.addClass('animated bounceInLeft');
	$('#creador').addClass('animated bounceInLeft');
	$('section.prueba').removeClass('quitarscroll')
	if (isNaN(b)) {
		for (var i = 0; i < 6; i++) {
			if (i === 4) {
				continue;
			}
			preg[i];
			for (var h = 0; h < 10; h++) {
				b.preguntas[h].estado = false;
			}
		}
	}
	b = '';
	c = undefined;
	setTimeout(function(){
		a.removeClass('animated bounceInLeft');
	}, 500);
}

function puntuacion(){
<<<<<<< HEAD
	$('section.prueba').append('<div class="conjunto animated bounceInRight"><div id="correcta" class="juntos"><div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p><p>&mdash; Correctas &mdash;</p>' + contadorCorrecta + '</div></div><div id="incorrecta" class="juntos"><div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p><p>&mdash; Incorrectas &mdash;</p>' + contadorIncorrecta + '</div></div></div>');
=======
	$('section.prueba').append('<div class="conjunto animated bounceInRight"><div id="correcta" class="juntos"><div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p><p>&mdash; Correctas &mdash;</p>' + '<p class="resul">' + contadorCorrecta + '</p>' + '</div></div><div id="incorrecta" class="juntos"><div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p><p>&mdash; Incorrectas &mdash;</p>' + '<p class="resul">' + contadorIncorrecta + '</p>' + '</div></div></div>');
>>>>>>> ede0e9be9ee6e230fe0e2a53b0519313aafcecf0
	$('body').one('click', function(event){
		event.stopImmediatePropagation();
		if (contadorCorrecta == 20){
			alert('Felicidades has desbloqueado la categoria curiosidades')
			a.removeClass('disbale');
		}
		$('div.conjunto').removeClass('animated bounceInRight');
		setTimeout(function(){
			$('div.conjunto').addClass('animated bounceOutLeft')
		}, 1500);
		setTimeout(function(){
			$('div.conjunto').remove();
			llamarCategoria();
		}, 2000);
	});
}

function izquierda(){
	$('section.prueba').append('<h1 class="categoria">&mdash;' + b.categorias + '&mdash;</h1><p class="pregunta animated bounceInRight">' + b.preguntas[c].textoEnunciado + '</p><div class="conjunto animated bounceInRight">' + elegir + '<div id="incorrecta" class="juntos"><img class="marco2" src=img/' + b.categorias + '/' + b.preguntas[c].imagenIncorrecta + '><p class="letra">&mdash;' + b.preguntas[c].incorrecta + '&mdash;</p></div></div>');
	$('img.marco2').one('click', function(event){
		event.stopImmediatePropagation();
		y = $(this).attr('src');
		setTimeout(function(){
			$('p.pregunta').removeClass('animated bounceInRight');
			$('div.conjunto').removeClass('animated bounceInRight');
		}, 500);
		if ($(this).attr('src') == 'img/' + b.categorias + '/' + b.preguntas[c].imagenCorrecta){
			$('#incorrecta').children().addClass('hidden');
			$('#incorrecta').append('<div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].correctaExplicacion + '</div>')
			setTimeout(function(){
				$('#incorrecta').removeClass('animated bounceInRight')
			}, 500);
			setTimeout(function(){
				$('p.pregunta').addClass('animated bounceOutLeft');
				$('div.conjunto').addClass('animated bounceOutLeft');
				$('#incorrecta').addClass('animated bounceOutLeft');
			}, 500);
			setTimeout(function(){
				$('h1').remove();
				$('p.pregunta').remove();
				$('div.conjunto').remove();
				preguntas();
			}, 500);
		}else{
			$('#correcta').children().addClass('hidden');
			$('#correcta').append('<div class="texto animated bounceInLeft"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].incorrectaExplicacion + '</div>');
			setTimeout(function(){
				$('#correcta').removeClass('animated bounceInLeft');
			}, 500);
			setTimeout(function(){
				$('p.pregunta').addClass('animated bounceOutLeft');
				$('div.conjunto').addClass('animated bounceOutLeft');
				$('#incorrecta').addClass('animated bounceOutLeft');
			}, 500);
			setTimeout(function(){
				$('h1').remove();
				$('p.pregunta').remove();
				$('div.conjunto').remove();
				preguntas();
			}, 500);
		}
	});
}

function derecha(){
	$('section.prueba').append('<h1 class="categoria">&mdash;' + b.categorias + '&mdash;</h1><p class="pregunta animated bounceInRight">' + b.preguntas[c].textoEnunciado + '</p><div class="conjunto animated bounceInRight"><div id="incorrecta" class="juntos"><img class="marco2" src=img/' + b.categorias + '/' + b.preguntas[c].imagenIncorrecta + '><p class="letra">&mdash;' + b.preguntas[c].incorrecta + '&mdash;</p></div>' + elegir + '</div>');
	$('img.marco2').one('click', function(event){
		event.stopImmediatePropagation();
		y = $(this).attr('src');
		setTimeout(function(){
			$('p.pregunta').removeClass('animated bounceInRight');
			$('div.conjunto').removeClass('animated bounceInRight');
		}, 500);
		if ($(this).attr('src') == 'img/'  + b.categorias + '/' + b.preguntas[c].imagenCorrecta) {
			$('#incorrecta').children().addClass('hidden');
			$('#incorrecta').append('<div class="texto animated bounceInLeft"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].correctaExplicacion + '</div>');
			setTimeout(function(){
				$('#incorrecta').removeClass('animated bounceInLeft');
			}, 500);
			setTimeout(function(){
				$('p.pregunta').addClass('animated bounceOutLeft');
				$('div.conjunto').addClass('animated bounceOutLeft');
				$('#incorrecta').addClass('animated bounceOutLeft');
			}, 500);
			setTimeout(function(){
				$('h1').remove();
				$('p.pregunta').remove();
				$('div.conjunto').remove();
				preguntas();
			}, 500);
		}else{
			$('#correcta').children().addClass('hidden');
			$('#correcta').append('<div class="texto animated bounceInRight"><p class="cabeceraa2 grow">¿Sabías que...</p>' + b.preguntas[c].incorrectaExplicacion + '</div>');
			setTimeout(function(){
				$('#correcta').removeClass('animated bounceInRight');
			}, 500);
			setTimeout(function(){
				$('p.pregunta').addClass('animated bounceOutLeft');
				$('div.conjunto').addClass('animated bounceOutLeft');
				$('#incorrecta').addClass('animated bounceOutLeft');
			}, 500);
			setTimeout(function(){
				$('h1').remove();
				$('p.pregunta').remove();
				$('div.conjunto').remove();
				preguntas();
			}, 500);
		}
	});
}

// MUSICA BOTON stop
function audioplay() {
	var audio = document.getElementById("audio1");
	var button = document.getElementById("play");
	if (audio.paused) {
		audio.play();
		button.textContent = "||";
	} else {
		audio.pause();
		button.textContent = ">";
	}
}
