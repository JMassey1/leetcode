// 36. Valid Sudoku
function isValidSudoku(board: string[][]): boolean {
    const rows = {};
    const columns = {};
    const grids = {};

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (board[r][c] === '.') {
                continue;
            }
            // Get current 3x3 grid in form r_c
            const currGrid = `${Math.floor(r / 3)}_${Math.floor(c / 3)}`

            // Ensure set exists for current row, column, grid
            if (!rows[r]) {
                rows[r] = new Set();
            }
            if (!columns[c]) {
                columns[c] = new Set();
            }
            if (!grids[currGrid]) {
                grids[currGrid] = new Set();
            }

            // If repeated number, stop checking
            if (rows[r].has(board[r][c]) || columns[c].has(board[r][c]) || grids[currGrid].has(board[r][c])) {
                return false;
            }

            // Add number to respective row, column, and grid
            rows[r].add(board[r][c]);
            columns[c].add(board[r][c]);
            grids[currGrid].add(board[r][c]); 

        }
    }
    return true;
};