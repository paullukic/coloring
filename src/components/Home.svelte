<script>
	import { mandala1, mandala2, mandala3, mandala4, mandala5, mandala6, mandala7, mandala8 } from './../mandalas.js';
  </script>
  
<section>
  <div class="mandalas">
    <div class="mandala1">{@html mandala1}</div>
    <div class="mandala2">{@html mandala2}</div>
    <div class="mandala3">{@html mandala3}</div>
    <div class="mandala4">{@html mandala4}</div>
    <div class="mandala5">{@html mandala5}</div>
  </div>
</section>

<style>
  section{
    position: relative; 
    display: flex; 
  }
</style>