<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Login from "./components/Login.svelte";
  import Home from "./components/Home.svelte";
  import PrivateRoute from "./components/PrivateRoute.svelte";
  
  import { user } from "./stores";

  function handleLogout() {
    $user = null;
  }
</script>

<Router>
  <header>
    <nav class="navbar navbar-light border-0">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">Home</Link>
        <Link class="navbar-item" to="/profile">{$user ? "Profile" : "Login"}</Link>
      </div>
    </nav>
  </header>

  <main>
    <Route path="login">
      <Login />
    </Route>

    <Route path="/">
      <Home />
    </Route>
    <PrivateRoute path="profile" let:location>
      <h3>Welcome {$user.username}</h3>
      <button on:click={handleLogout}>Logout</button>
    </PrivateRoute>
  </main>
</Router>
