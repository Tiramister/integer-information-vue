import { Factor, factorizeNaive as factorize } from "./factorize";

function countDivisors(n: bigint): bigint {
  return factorize(n).reduce(
    (prod: bigint, factor: Factor): bigint => prod * (factor.exp + 1n),
    1n
  );
}

export default countDivisors;