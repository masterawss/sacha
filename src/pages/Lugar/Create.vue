<template lang="pug">
    q-layout
        q-page-container
            q-toolbar.text-primary.bg-white
                q-btn(flat round dense icon="arrow_back" @click="$router.go(-1)")
                q-toolbar-title 
                    .text-acento Registrar lugar
            q-page.q-ma-sm
                strong Imágenes
                q-scroll-area(horizontal style="width: 100%")
                    .row.no-wrap
                        div.q-mr-sm( v-for="imagen in path_imagenes")
                            q-img.round-borders( style="width: 100px"  ref="imagenes_lugar" :src="imagen"  :ratio="10/12")
                        q-btn(outline icon="add" @click="$refs.add_image_input.click()")
                            input(style="display:none" v-on:change="addImage" ref="add_image_input" type="file" accept="image/*")
                    //- | Imagenes {{path_imagenes}}
                br
                strong Información
                q-input(label="Nombre del lugar" v-model="form.nombre" dense)
                q-input(label="Dirección" v-model="form.direccion" dense)
                q-input(label="Descripción del lugar" v-model="form.descripcion" dense)
                .q-mt-md
                    strong Categorías
                    .row
                        .col-6(v-for="categoria,i in categorias" :key="i")
                            q-checkbox( v-model="categorias_seleccionadas" :val="categoria.valor" :label="categoria.valor" :color="categoria.color")
                strong Ubicación
                GmapMap(
                :center="center"
                :zoom="12"
                map-type-id="terrain"
                :options="{scaleControl: false, streetViewControl: false, zoomControl: false,}"
                style="width: 100%; height: 300px")
                    GmapMarker(
                    :position="form.position"
                    @drag="updateCoordinates"
                    :draggable="true")
                .text-grey
                    small Longitud: {{ form.position.lng }}, Latitud: {{ form.position.lat }}
                q-btn.q-my-md.full-width(unelevated label="Guardar" color="primary" @click="guardar" :loading="loading")
</template>

<script>
import {QInput, QCheckbox, QScrollArea } from 'quasar'

import firebase from 'firebase'
import {db} from '../../boot/db'
import uid from 'uid'
export default {
    components: {QInput, QCheckbox, QScrollArea },
    created (){
         if (navigator.geolocation) {
            console.log('GEOLOCALIZACION');
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }else{
            console.log('NO TIENE GEO');
        }

        firebase.auth().onAuthStateChanged(user=> {
            if (user) {
                db.collection('usuarios').doc(user.uid).get().then(r => {
                    this.form.guias.push(r.data())
                    // console.log('USUARIO:', r);
                    
                    this.form.id_creador = r.id
                })
            }
        })
    },
    data: () => ({
        loading: false,
        form: {
            nombre: '',
            descripcion: '',
            direccion: '',
            categorias: {},
            position: {
                lat: -6.0610914,
                lng: -77.1731626
            },
            imagenes: [],
            guias: [],
            id_creador: null
        },
        categorias_seleccionadas: [],
        path_imagenes: [],
        files_imagenes: [],
        categorias: [
            { valor: 'aventura',    color: 'red' },
            { valor: 'acuático',    color: 'cyan' },
            { valor: 'selva',       color: 'green' },
            { valor: 'altura',      color: 'indigo' },
            { valor: 'desértico',   color: 'orange' },
            { valor: 'pacífico',    color: 'teal' },
        ],
        center: {
            lat: -6.0610914,
            lng: -77.1731626
        },
    }),
    computed: {
        imagenes (){
            
            let path_imagenes = []
            this.files_imagenes.forEach(file => {
                var reader = new FileReader();
                reader.onload =  (e) => {
                    path_imagenes.push(e.target.result)
                }
                reader.readAsDataURL(file);
            });
            console.log('PATHS:', path_imagenes);
            
            return path_imagenes
        }
    },
    methods: {
        showPosition(position) {
            this.center.lat = position.coords.latitude
            this.center.lng = position.coords.longitude
            this.form.position.lat = position.coords.latitude
            this.form.position.lng = position.coords.longitude
        },
        updateCoordinates(location) {
            this.form.position = {
                lat: location.latLng.lat(),
                lng: location.latLng.lng(),
            };
        },
        addImage(){
            var input = this.$refs.add_image_input
            if (input.files && input.files[0]) {
                this.files_imagenes.push(input.files[0])
    
                var reader = new FileReader();
                reader.onload =  (e) => this.path_imagenes.push(e.target.result)
                reader.readAsDataURL(input.files[0]);
            }
        },
        guardar(){
            this.loading = true
            let categorias = this.form.categorias
            
            this.categorias_seleccionadas.forEach(categoria => {
                categorias[categoria] = true
            });
            
            this.form.categorias = categorias
            console.log(this.form.categorias);
            

            Promise.all( this.files_imagenes.map(file => this.putStorageItem(file)) )
            .then(r => {
                console.log('TODAS LAS IMAGENES SUBIDAS');
                db.collection('lugares').add(this.form)
            }).then(r => {
                this.loading = false
                this.$q.notify({message: 'Guardado con éxito'})
                this.$router.go(-1)
            }).catch(e => {
                this.loading = false
                console.log('ERROR', e);  
            })
            console.log('TODOS LOS ARCHIVOS', this.form.imagenes);
        },
        putStorageItem(file){
            var nombre_lugar = this.form.nombre.replace(' ', '_')
            var storageRef = firebase.storage().ref()
            
            let lugarImagesRef = storageRef.child('lugares/'+nombre_lugar+'/'+uid(10) )
            this.form.imagenes.push(lugarImagesRef.fullPath)

            return lugarImagesRef.put(file).then(snap => {
                // this.$q.notify({message: 'Se subió la imagen'})
            })
        }
    }
}
</script>

<style>

</style>
