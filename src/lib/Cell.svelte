<script lang="ts">
  import { CellType } from "../Classes";

  export let cellText = "";
  export let cellKind: CellType = CellType.TEXT;
</script>

<td contenteditable="true" bind:textContent={cellText}>
  {#if cellKind === CellType.NUMERIC}
    <div class="Numeral">
      <slot />
    </div>
  {:else if cellKind === CellType.TEXT}
    <div class="Text">
      <slot />
    </div>
  {:else if cellKind === CellType.COMPONENT}
    <div class="Component">
      <slot />
    </div>
  {/if}
</td>

<style>
  td {
    padding: 1vw;
    border-color: grey;
    border-style: solid;
    text-align: center;
  }
</style>
