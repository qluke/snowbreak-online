import { blocks } from "../store/blocks";
import { getIdByName } from "@/components/controls/options.js";

/**
- `m`：输入数组`arr`的行数，也就是二维网格的高度。
- `n`：输入数组`arr`的列数，也就是二维网格的宽度。
- `a`：一个新的二维数组，它是输入数组`arr`的一个副本。这个数组在`dfs`函数中被修改，用于记录当前的放置状态。
- `l`：一个新的一维数组，它是输入数组`num`的一个副本。这个数组在`dfs`函数中被修改，用于记录每种方块剩余的数量。
- `res`：一个空数组，用于存储找到的所有有效的解决方案。
- `highIndex`：一个整数，表示最先放置的方块的序号。它是通过调用`getIdByName`函数并传入参数`high`得到的。
- `lowIndex`：一个整数，表示最后放置的方块的序号。它是通过调用`getIdByName`函数并传入参数`low`得到的。
 */
let m, n, a, l, res, nums, highIndex, lowIndex;

/**
 * Solves a problem based on the given parameters.
 *
 * @param {Array<Array<number>>} arr - The input array.(board)
 * @param {Array<number>} num - The input numbers.(tetrisNumber)
 * @param {string} high - The high value.
 * @param {string} low - The low value.
 * @returns {Array} - The result array.
 */
export function solve(arr, num, high, low) {
  nums = num;
  res = [];
  m = arr.length;
  n = arr[0].length;
  highIndex = getIdByName(high);
  lowIndex = getIdByName(low);

  a = new Array(m);
  for (let i = 0; i < m; ++i) {
    a[i] = arr[i].map((x) => x);
  }

  l = num.map((x) => x);

  dfs(0);

  res.sort((a, b) => {
    if (a.mostUsedBlock !== b.mostUsedBlock) {
      return b.mostUsedBlock - a.mostUsedBlock;
    }
    return b.mostRemainingBlock - a.mostRemainingBlock; 
  });
  return res;
}

/**
 * canPlaceBlock函数检查是否可以在给定的位置放置一个特定类型和方向的方块。它首先计算出方块的偏移量，
 * 然后检查放置方块后是否会超出网格的边界或者与已经放置的方块重叠。如果会，就返回false；否则，返回true。
 */
function canPlaceBlock(x, y, b, d) {
  const pat = blocks[b][d];
  let offset = 0;
  while (!pat[0][offset]) ++offset;
  y -= offset;
  if (y < 0) return false;
  for (let i = 0; i < pat.length; ++i) {
    for (let j = 0; j < pat[0].length; ++j) {
      if (pat[i][j] && (x + i >= m || y + j >= n || a[x + i][y + j] !== -1))
        return false;
    }
  }
  return true;
}

/**
 * placeBlock函数在给定的位置放置一个特定类型和方向的方块。它首先计算出方块的偏移量，然后在适当的位置更新网格。
 */
function placeBlock(x, y, b, d, v) {
  const pat = blocks[b][d];
  let offset = 0;
  while (!pat[0][offset]) ++offset;
  y -= offset;
  for (let i = 0; i < pat.length; ++i) {
    for (let j = 0; j < pat[0].length; ++j) {
      if (pat[i][j]) a[x + i][y + j] = v;
    }
  }
}

/**
 * dfs函数是一个递归函数，它尝试在网格的每个位置放置每种类型的方块。如果找到一个有效的解决方案（即所有的位置都被合理地填满了），
 * 它就将这个解决方案添加到结果数组中。如果结果数组的长度达到了10000，它就停止搜索并返回true。
 */
function dfs(p) {
  if (p === m * n) {
    const x = new Array(m);
    for (let i = 0; i < m; ++i) {
      x[i] = a[i].map((x) => x);
    }

    // 计算方块使用最多、方块剩余最多
    x.mostUsedBlock = nums[highIndex] - l[highIndex];
    x.mostRemainingBlock = l[lowIndex];
    res.push(x);
    if (res.length >= 10000) {
      return true;
    }
    return false;
  }
  const x = Math.floor(p / n),
    y = p % n;
  if (a[x][y] !== -1) {
    if (dfs(p + 1)) return true;
    return false;
  }

  let b = highIndex;
  do {
    if (!l[b]) {
      b = (b + 1) % blocks.length;
      continue;
    }
    for (let d = 0; d < blocks[b].length; ++d) {
      if (!canPlaceBlock(x, y, b, d)) continue;
      placeBlock(x, y, b, d, b + 1);
      --l[b];
      if (dfs(p + 1)) return true;
      ++l[b];
      placeBlock(x, y, b, d, -1);
    }
    b = (b + 1) % blocks.length;
  } while (b !== highIndex);

  // for (let b = 0; b < blocks.length; ++b) {
  //   if (!l[b]) continue;
  //   for (let d = 0; d < blocks[b].length; ++d) {
  //     if (!canPlaceBlock(x, y, b, d)) continue;
  //     placeBlock(x, y, b, d, b + 1);
  //     --l[b];
  //     if (dfs(p + 1)) return true;
  //     ++l[b];
  //     placeBlock(x, y, b, d, -1);
  //   }
  // }

  return false;
}
