<template>
    <div class="container">

    <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>

            <input 
            v-model ="login.email" 
            type="email" 
            class="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>

            <input 
            v-model="login.password" 
            type="password" 
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password">

        </div>

                
            <!-- <pre>
                {{ login }}
            </pre> -->

       <!-- @click asocia el evento al metodo elaborado en el scrip de este componente 
           .prevent se agrega para evitar por defecto que refresque la pagina que es lo que hace el
        typo submit -->
         <button 
        @click.prevent ="loginUser"
        type="submit" 
        class="btn btn-primary">
        Submit</button>
    </form>

    </div>
</template>



<script>

//importar el sweet alert
import swal from 'sweetalert';
export default {
    name: 'TheLogin',
    data(){
        return{
            login:{
                email: '',
                password: ''
            }
        }
    },
    methods:{
        async loginUser(){
            try{
                let response = await this.$http.post('api/usuario/login', this.login);
                // console.log(response)

                // no sobre consultar que el estado sea un 200
                let token = response.data.tokenReturn;
                let user = response.data.user

                // se emplea el metodo setitem del local storage para guardar
                // la información que viene del backend
                localStorage.setItem('jwt', token);
                localStorage.setItem('user', JSON.stringify(user));
                if (token){

                // avise de sesion completada
                    swal("Sesión completada", "Sesion completada", "success");
                    this.$router.push('/home');
                }
            }
            catch(e){
                // aviso de sesion falla
                swal("Oops!", "Algo salio mal", "error")
                // console.log(err.response)
                
                
            }
        }
    }
}
</script>