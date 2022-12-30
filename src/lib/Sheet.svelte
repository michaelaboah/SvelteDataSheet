<script lang="ts">
  import type { Row } from "../global";

  let columns: string[] = ["Hello", ""];
  let source: Row<{ name: string; age: number }>[] = [
    { name: "Michael", age: 22 },
    { name: "Gabby", age: 41 },
  ];
  // let grid = [
  //   source.length != 0 ? source.length : 4,
  //   columns.length >= 0 ? columns.length : 2,
  // ];

  $: col = `repeat(${columns.length}, 1fr)`;
  $: row = `repeat(${source.length}, 1fr)`;
  $: is_active = Array(source.length)
    .fill(0)
    .map((_) => Array(source.length).fill(false));

  let start: number[] = [];
  let end: number[] = [];
  let hover_end: number[] = [];
  let clicked = false;

  function select(i: number, j: number) {
    if (clicked) {
      end = [i, j];
    } else {
      start = [i, j];
    }

    clicked = !clicked;
    check_active([i, j]);
  }

  function hover(i, j) {
    if (!clicked) return;
    hover_end = [i, j];
    check_active(hover_end);
  }

  function is_in_range([i, j], [i2, j2]) {
    return (i - start[0]) * (i - i2) <= 0 && (j - start[1]) * (j - j2) <= 0;
  }

  function check_active(end) {
    is_active = is_active.map((a, i) =>
      a.map((_, j) => is_in_range([i, j], end))
    );
  }
</script>

{#each columns as col}
  {col}
{/each}
<div
  class="container"
  style="grid-template-rows: {row}; grid-template-columns: {col};"
>
  {#each source as item, i (i)}
    {#each Object.values(item) as thing, j (j)}
      <div
        class:active={is_active[i][j]}
        on:click={() => select(i, j)}
        on:mouseover={() => hover(i, j)}
      >
        {thing}
      </div>
    {/each}
  {/each}
</div>
<strong>Current: </strong>{hover_end}<br />
<strong>Coords:</strong>
{start}
{end[0] ? "-" : ""}
{end}

<style>
  .container {
    display: grid;
    border: 1px solid #999;
    border-radius: 2px;
    width: 200px;
    height: 200px;
    grid-gap: 1px;
    background: #999;
  }

  .container div {
    background: #fff;
  }

  div.active {
    background: orange;
  }
</style>
