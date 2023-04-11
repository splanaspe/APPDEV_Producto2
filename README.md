# ProyectoAngular

 TEST
# Comandos básicos 

### 1. Instalar angular en pc :  
npm i -g @angular/cli 

###  2. Crear proyecto : 
ng new nombreProyecto

### 3. Para arrancar el proyecto : 
ng serve 

tenemos que estar dentro de la carpeta del proyecto

### 4. Generar componento: 
ng generate component  components/Saludo 
ng g  c  components/Saludo 

Observación: generará este componente en la carpeta components. Nombre del componente Saludo (siempre debe tener primera letra capital)


### 5. Entender: 

#### app.module.ts es el componente "raíz" de Angular 
y de él emanan todos los otros. Cuando creamos otro componente, en él se añade en "Declarations" el nuevo componente para poder usarlo.

#### SaludoComponent está dentro de AppComponent
nombre y usuario son variables definidas en AppComponent
Dentro de app.component.html, renderizamos SaludoComponent
y a este le pasamos por "nombre" la variable definida en app.component.ts
<app-saludo [nombre]="nombre"> </app-saludo> //Aquí pasamos el valor del Input "nombre" , pero mostrará lo que la variable "nombre" definida en el componente superior contenga
<app-saludo nombre="salvador"> </app-saludo> //Aqui pasamos el valor del Input "nombre" que mostrara el componente

## FIREBASE y Angular (TEORIA & PRACTICA)
Tutorial 1: https://www.youtube.com/watch?v=t_YSrxj0wGY 
Tutorial 2: https://www.youtube.com/watch?v=46oqfkXrL80

Guia oficial de Github :  https://github.com/angular/angularfire/blob/master/docs/install-and-setup.md


### 6. Instalar FIREBASE en Angular :  "ng add @angular/fire" 

### 7. Después de instalar, nos logueamos con "firebase login" y nos redirigirá a un enlace del buscador para iniciar con la cuenta de GMAIL

### 8. comprobamos con el comando "firebase projects:list" y confirmamos que está la BD de appdev

### 9. Iniciamos "firebase init" 
#### Indicamos que es la opción "firestore" y "Use an existing project"... clicamos enter dos veces para que cree el archivo de configuración de firebase y listo

