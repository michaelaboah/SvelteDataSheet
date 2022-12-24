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
