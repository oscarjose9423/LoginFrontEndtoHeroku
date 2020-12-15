<template>
    <!-- members -->
    <div>
                <div class="card text-white bg-dark">
                    <div class="d-flex justify-content-center p-2">
                        <img :src= "member.imagen" alt="Fotografía" class="img-thumbnail">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title col-sm-12 d-flex justify-content-center">{{ member.nombre}}</h5>
                        <p class="card-text col-sm-12  d-flex justify-content-center">
                            {{ member.descripcion }} <br>
                            Rol: {{ member.rol }} <br>
                            Codigo: {{ member.codigo }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Ultima Actualización: 05/12/2020</small>
                    </div>
                </div>
    </div>

    
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
