<script>
	import Profile from './Profile.svelte';
	import { auth, googleProvider } from './../firebase.js';
    import { useNavigate, useLocation } from "svelte-navigator";
  
    let user;

    const unsubscribe = auth.onAuthStateChanged(u => user = u);

    function login() {
        auth.signInWithPopup(googleProvider);
    }
    
</script>
<section>
{#if user}
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Profile</h4>
                    </div>
                    <div class="card-body">
                        <Profile {...$user}/>
                    </div>
                </div>
            </div>
        </div>

    </div>
{:else}
    <button on:click={login}>Sign in with Google</button>
{/if}
 </section>