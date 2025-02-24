# Ejercicio extra TodoList

Para este ejercicio, vamos a crear una lista de tareas (TodoList), en la que podremos agregar tareas, modificarlas y marcarlas como completadas.

Seguramente ahora estés pensando: "Ofu no vea, que de cosas ¿Por dónde empiezo?"

Tranquilo, vamos a ir punto por punto, desglosando un poquito el ejercicio, para que así te sea más fácil. Empecemos :).

1. Montar un html con el input y el botón para agregar una tarea

Lo primero, dentro del body crea un div y dentro de ese mismo div crea el input y el botón en cuestión.

Una vez que los tengas creados, vamos a aplicarles un poquito de estilo

Aquí tienes unos estilos de prueba:

```css
.claseDeEjemplo {
  width: 300px;
  padding: 8px;
  border-radius: 5px;
  font-size: 1rem;
}

.claseDeEjemplo {
  background-color: #ffc857;
  color: #0a0908;
  border: none;
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
}
```

Tendría que quedarte algo así:

![Ejemplo del input y el botón de agregar tarea](./assets/ejemplo.png)

Bueno, por ahora olvidate de los estilos, ya volveremos a ellos más adelante.

2. Mostrar una lista con una sola tarea

Aquí te dejamos un ejemplo de como se vería por pantalla una sola tarea en la lista de tareas

![Ejemplo de una sola tarea en la lista](./assets/Ejemplo_De_una_sola_tarea.png)

Esto esta muy bien para tantear, pero el ejercicio nos pide una lista de tareas, lo suyo sería plantearlo como una lista.

> NOTA: Puedes plantear el layout como quieras, tanto con flexbox como con grid

3. Definir la interfaz

Ahora usaremos Typescript como es debido, creando una interfaz para las tareas, Te dejamos un ejemplo:

```ts
interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
}
```

También te dejamos el array que usaremos para guardar la información de las tareas:

```ts
let tasks: Task[] = [];
```

4. Añadir una tarea al array

Cuando pulsemos sobre el botón de "Agregar la tarea"

```ts
const addTask = () => {};
```
