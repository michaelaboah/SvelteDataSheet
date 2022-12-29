<script lang="ts">
  import Sheet from "./lib/Sheet.svelte";
  import Test from "./lib/Test.svelte";
  import type { Row } from "./global";
  import { input_test } from "./template/array";
  const columns = [
    "First Column",
    "Second Column",
    "Third Column",
    "Fourth Column",
  ];
  const source = input_test;
  console.log(typeof Sheet);
  let thing = { component: Test } as Row;
</script>

<Sheet {columns} {source} />

<!-- Hello -->
<style>
  div {
    /* size: A4 portrait; */
    /* position: absolute; */
    /* left: 0;
    top: 0%;
    max-width: 8.5 in;
    max-height: 11 in;
    background-color: white;
    width: 100%;
    height: 100%; */
    /* margin: auto; */
  }
</style>
