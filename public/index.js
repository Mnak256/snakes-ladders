document.addEventListener('DOMContentLoaded', () => {
    displayBoard()
    const canvasDOM = document.getElementById('snakes-ladders')
    const context = canvasDOM.getContext('2d')
    context.lineWidth = 2
    
    for (let i = 0; i < 10; i++) {
        displayLine(context, Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), 'green')
    }
    for (let i = 0; i < 10; i++) {
        displayLine(context, Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), Math.floor((Math.random() * 10)), 'red')
    }
    // displayLine(context, 0, 0, 5, 1, 'green')
    // displayLine(context, 6, 1, 1, 8, 'green')
    
})

function displayPoint(context, row, col) {
    context.fillRect(26 * (2 * col + 1) + 5, 26 * (2 * row + 1) + 5, 10, 10)
}

function displayLine(context, row1, col1, row2, col2, color) {
    context.beginPath()
    context.strokeStyle = color
    context.moveTo(26 * (2 * col1 + 1) + 5, 26 * (2 * row1 + 1) + 5)
    context.lineTo(26 * (2 * col2 + 1) + 5, 26 * (2 * row2 + 1) + 5)
    context.stroke()
}

function displayBoard() {
    const size = 10
    const board = createBoard(size)
    const tableDOM = document.getElementById('board')
    for (let row = 0; row < size; row++) {
        let rowDOM = tableDOM.insertRow(row)
        for (let col = 0; col < size; col++) {
            rowDOM.insertCell(col).innerText = board[row][col]
        }
    }
}

function createBoard(size) {
    let board = []
    let index = 100
    for (let row = 0; row < size; row++) {
        board[row] = []
		for (let col = 0; col < size; col++) {
			if (row % 2 == 0) {
				board[row][col] = index--;
			} else {
				board[row][col] = index++;
			}
		}
		if (row % 2 == 0) {
			index -= 9;
		} else {
			index -= 11;
		}
    }
    return board
}
