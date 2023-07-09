var combinationSum2 = function (candidates, target) {
    const results = [];
    candidates.sort((a, b) => a - b);
    backtrack([], 0, target);
    return results;

    function backtrack(path, start, remaining) {
        if (remaining === 0) {
            results.push([...path]);
            return;
        }
        if (remaining < 0) {
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]);
            backtrack(path, i + 1, remaining - candidates[i]);
            path.pop();
        }
    }
};
                                                                                                                                                                                                
