<script lang="ts">
  import supabase from "$lib/db";
  import { goto } from "$app/navigation";

  let email:string;
  let password:string;

  async function signIn() {
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password
    });

    if(error) alert(error);

    if(session) goto("/todo");
  }
</script>

<form class="form mt-20" action="">
    <div class="card">
        <div class="mb-4">
          <label for="email">
            Email Address
          </label>
          <input id="email" type="text" placeholder="Email Address" bind:value={email}>
        </div>
    
        <div class="mb-6">
          <label for="password">
            Password
          </label>
          <input id="password" type="password" placeholder="Password" bind:value={password}>
        </div>
    
        <div class="grid gap-4 text-center">
          <button class="btn primary" type="button" on:click={signIn}>
            Sign In
          </button>

          <a href="/user/register">Create an Account</a>
        </div>
    </div>
</form>