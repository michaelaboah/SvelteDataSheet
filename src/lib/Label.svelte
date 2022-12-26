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
    border-style: dashed;
    text-align: center;
    size: 0.5 in, 1.75 in;
    height: 100%;
    width: 100%;
    max-width: 1.75 in;
    max-height: 0.5 in;
  }
</style>
