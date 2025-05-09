const possibleMoves = [
  [1, 2],
  [2, 1],
  [-1, 2],
  [-2, 1],
  [1, -2],
  [2, -1],
  [-1, -2],
  [-2, -1],
];

function knightMoves(start, end) {
  const visitedNodes = {};
  const queue = [];
  queue.push({ pervious: null, current: start });

  while (queue.length) {
    const { pervious, current } = queue.shift();
    visitedNodes[current] = pervious;

    if (current[0] === end[0] && current[1] === end[1]) {
      const path = [];
      path.push(current);

      while (path.length) {
        const previousNode = visitedNodes[path[path.length - 1]];

        if (!previousNode) return path.reverse();
        path.push(previousNode);
      }
    }

    for (const knightMove of possibleMoves) {
      const x = current[0] + knightMove[0];
      const y = current[1] + knightMove[1];

      if (x < 0 || x >= 8 || y < 0 || y >= 8) continue;
      if (visitedNodes[`${x},${y}`] !== undefined) continue;

      queue.push({ pervious: current, current: [x, y] });
    }
  }
}

function printKnightMoves(start, end) {
  const path = knightMoves(start, end);
  let string = `The knight made it in ${path.length - 1} moves!
Here's the knight's path:\n`;

  path.forEach((node) => {
    string += `\n[${node}]`;
  });

  console.log(string);
}

printKnightMoves([0, 0], [3, 3]);
printKnightMoves([3, 3], [4, 3]);
