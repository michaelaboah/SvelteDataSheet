<script lang="ts">
  import { input_test } from "../template/array";

  interface Person {
    name: string;
    age: number;
  }

  const people: Person[] = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 40 },
  ];

  function fillArrayToLength<T>(array: T[], length: number): T[] {
    const diff = length - array.length;
    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        array.push({} as T);
      }
    }
    return array;
  }

  let computed = fillArrayToLength(input_test, 80);
  console.table(computed);
</script>

<section>
  {#each input_test.slice(0, 20) as item, i}
    <div>{i + 1}{")"}. {item.input_device}</div>
  {/each}

  {#each input_test.slice(20, 40) as item, i}
    <div>{i + 1}{")"}. {item.input_device}</div>
  {/each}

  {#each input_test.slice(40, 60) as item, i}
    <div>{i + 1}{")"}. {item.input_device}</div>
  {/each}
  {#each input_test.slice(60, 80) as item, i}
    <div>{i + 1}{")"}. {item}</div>
  {/each}
</section>

<style>
  section {
    columns: 4;
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  div {
    height: 36 pt;
    max-height: 0.5 in;
    width: 126 in;
    max-width: 1.75 in;
    background-color: grey;
    border-style: dashed;
    border-color: green;
    border-width: 2px;
  }
</style>
