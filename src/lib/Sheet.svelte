<script lang="ts">
  import Cell from "./Cell.svelte";
  export let columns = [];
  export let source = [];
</script>

<table>
  <tr>
    {#each columns as col (col)}
      <th>{col}</th>
    {/each}
  </tr>

  {#each source as item (item.channel)}
    <tr>
      {#each Object.values(item) as thing, index (index)}
        <!-- {index} -->
        <Cell cellText={thing} />
      {/each}
    </tr>
  {/each}
</table>

<style>
  th {
    background-color: gray;
  }
</style>
